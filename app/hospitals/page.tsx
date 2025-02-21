"use client";

import { Card } from "@/components/ui/card";
import { Hospital, Bed, Users } from "lucide-react";

export default function HospitalsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Hospitals</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { id: 1, name: "Central Hospital", beds: "12/50", staff: "24", emergency: "Available" },
          { id: 2, name: "St. Mary's Medical", beds: "45/60", staff: "32", emergency: "Full" },
          { id: 3, name: "City General", beds: "28/40", staff: "18", emergency: "Available" },
        ].map((hospital) => (
          <Card key={hospital.id} className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <Hospital className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-medium">{hospital.name}</h3>
                  <p className="text-sm text-muted-foreground">Emergency: {hospital.emergency}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Bed className="h-4 w-4 mr-2" />
                Available Beds: {hospital.beds}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="h-4 w-4 mr-2" />
                Staff on Duty: {hospital.staff}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}