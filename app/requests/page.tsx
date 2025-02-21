"use client";

import { Card } from "@/components/ui/card";
import { Clock, MapPin, Phone, User } from "lucide-react";

export default function RequestsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Emergency Requests</h1>
      <div className="grid gap-4">
        {[
          { 
            id: 1, 
            requester: "John Doe",
            contact: "+1 (555) 0123",
            location: "123 Main St",
            type: "Medical Emergency",
            time: "2 minutes ago"
          },
          { 
            id: 2, 
            requester: "Jane Smith",
            contact: "+1 (555) 0124",
            location: "456 Oak Ave",
            type: "Traffic Accident",
            time: "5 minutes ago"
          },
          { 
            id: 3, 
            requester: "Mike Johnson",
            contact: "+1 (555) 0125",
            location: "789 Pine Rd",
            type: "Fall Injury",
            time: "8 minutes ago"
          },
        ].map((request) => (
          <Card key={request.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-medium">{request.type}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <User className="h-4 w-4 mr-1" />
                  {request.requester}
                </div>
              </div>
              <div className="text-sm text-muted-foreground flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {request.time}
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                {request.contact}
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {request.location}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}