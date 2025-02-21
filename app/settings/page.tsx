"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Bell, 
  Globe, 
  Lock,
  MessageSquare,
  Shield,
  Smartphone
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="grid gap-6">
        <Card className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
              <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">Manage alert preferences</p>
            </div>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Configure Notifications
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-medium">System</h3>
              <p className="text-sm text-muted-foreground">General system settings</p>
            </div>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              System Preferences
            </Button>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
              <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium">Security</h3>
              <p className="text-sm text-muted-foreground">Security settings and passwords</p>
            </div>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Security Settings
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}