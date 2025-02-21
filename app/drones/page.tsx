"use client";

import { Card } from "@/components/ui/card";
import { Bone, Battery, MapPin } from "lucide-react";

export default function DronesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Medical Drones</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[
          { id: 1, code: "DRN-001", status: "Standby", location: "North Hub", battery: "95%" },
          { id: 2, code: "DRN-002", status: "In Flight", location: "Downtown", battery: "78%" },
          { id: 3, code: "DRN-003", status: "Charging", location: "South Hub", battery: "45%" },
        ].map((drone) => (
          <Card key={drone.id} className="p-4">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                  <Bone className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-medium">{drone.code}</h3>
                  <p className="text-sm text-muted-foreground">{drone.status}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {drone.location}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Battery className="h-4 w-4 mr-2" />
                {drone.battery}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}