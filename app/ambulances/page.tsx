"use client";

import { Card } from "@/components/ui/card";
import { Ambulance, Battery, MapPin } from "lucide-react";

export default function AmbulancesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Ambulances</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { id: 1, code: "AMB-001", status: "Available", location: "Central Station", battery: "100%" },
          { id: 2, code: "AMB-002", status: "On Call", location: "Downtown", battery: "85%" },
          { id: 3, code: "AMB-003", status: "Maintenance", location: "Service Center", battery: "60%" },
        ].map((ambulance) => (
          <Card key={ambulance.id} className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                  <Ambulance className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">{ambulance.code}</h3>
                  <p className="text-sm text-muted-foreground">{ambulance.status}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {ambulance.location}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Battery className="h-4 w-4 mr-2" />
                {ambulance.battery}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}