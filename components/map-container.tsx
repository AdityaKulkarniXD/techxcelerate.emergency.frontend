// filepath: /e:/projects/emergency/components/map-container.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Layers } from "lucide-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 28.7041, // Example: Latitude for Delhi
  lng: 77.1025, // Example: Longitude for Delhi
};

export function MapContainer() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error("Google Maps API Key is missing");
    return <p style={{ color: "red" }}>Error: API Key not found. Please set the NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable.</p>;
  }

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
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </Card>
  );
}