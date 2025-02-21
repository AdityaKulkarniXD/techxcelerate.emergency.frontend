"use client";

import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock } from "lucide-react";

export default function EmergenciesPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Active Emergencies</h1>
      <div className="grid gap-4">
        {[
          { id: 1, type: "Cardiac Arrest", location: "Downtown", severity: "Critical", time: "2m ago" },
          { id: 2, type: "Traffic Accident", location: "Highway 101", severity: "High", time: "5m ago" },
          { id: 3, type: "Fall Injury", location: "Central Park", severity: "Medium", time: "8m ago" },
        ].map((emergency) => (
          <Card key={emergency.id} className="p-4 hover:bg-accent/50 cursor-pointer transition-colors">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium">{emergency.type}</h3>
                <p className="text-sm text-muted-foreground">{emergency.location}</p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                emergency.severity === "Critical" ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300" :
                emergency.severity === "High" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300" :
                "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
              }`}>
                {emergency.severity}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {emergency.time}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}