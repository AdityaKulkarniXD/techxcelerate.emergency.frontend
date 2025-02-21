"use client";

import { MapContainer } from "@/components/map-container";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { Card } from "@/components/ui/card";
import { 
  Activity,
  AlertTriangle,
  Ambulance,
  Clock,
  Users 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <main className="flex-1 p-6 lg:pl-80">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="p-4 flex items-center space-x-4 bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-900/20">
              <div className="p-3 bg-red-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-red-600 dark:text-red-400">Active Emergencies</p>
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-300">12</h3>
              </div>
            </Card>
            <Card className="p-4 flex items-center space-x-4 bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-900/20">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Ambulance className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Available Ambulances</p>
                <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300">8</h3>
              </div>
            </Card>
            <Card className="p-4 flex items-center space-x-4 bg-green-50 dark:bg-green-900/10 border-green-100 dark:border-green-900/20">
              <div className="p-3 bg-green-500/10 rounded-lg">
                <Activity className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-green-600 dark:text-green-400">Response Rate</p>
                <h3 className="text-2xl font-bold text-green-700 dark:text-green-300">96%</h3>
              </div>
            </Card>
            <Card className="p-4 flex items-center space-x-4 bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-900/20">
              <div className="p-3 bg-purple-500/10 rounded-lg">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">Avg. Response Time</p>
                <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300">8.2m</h3>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Map Area */}
            <div className="lg:col-span-3">
              <MapContainer />
            </div>

            {/* Active Emergencies List */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Active Emergencies</h2>
              <div className="space-y-3">
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
          </div>
        </main>
      </div>
    </div>
  );
}