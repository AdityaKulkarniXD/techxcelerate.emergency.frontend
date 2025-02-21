"use client";

import { MapContainer } from "@/components/map-container";

export default function MapPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Map View</h1>
      <MapContainer />
    </div>
  );
}