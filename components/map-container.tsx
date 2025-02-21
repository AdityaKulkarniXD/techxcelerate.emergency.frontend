"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Layers } from "lucide-react";

export function MapContainer() {
  return (
    <Card className="w-full h-[calc(100vh-13rem)] relative overflow-hidden">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button variant="secondary" size="sm" className="shadow-lg">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <Button variant="secondary" size="sm" className="shadow-lg">
          <Layers className="h-4 w-4 mr-2" />
          Layers
        </Button>
      </div>
      <div className="relative w-full h-full rounded-lg overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-muted-foreground">Google Maps will be integrated here</p>
        </div>
      </div>
    </Card>
  );
}