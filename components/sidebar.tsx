"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { 
  Ambulance, 
  Bone,
  Hospital, 
  Users, 
  Settings,
  BarChart,
  Map,
  Phone
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Dashboard", icon: BarChart, path: "/" },
  { name: "Map View", icon: Map, path: "/map" },
  { 
    name: "Emergency Management",
    items: [
      { name: "Active Emergencies", icon: Phone, path: "/emergencies" },
      { name: "Ambulances", icon: Ambulance, path: "/ambulances" },
      { name: "Hospitals", icon: Hospital, path: "/hospitals" },
      { name: "Drones", icon: Bone, path: "/drones" },
    ]
  },
  { 
    name: "Administration",
    items: [
      { name: "Emergency Requests", icon: Users, path: "/requests" },
      { name: "Settings", icon: Settings, path: "/settings" },
    ]
  }
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleGroupClick = (groupName: string) => {
    setActiveGroup(activeGroup === groupName ? null : groupName);
  };

  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-10 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background/60 backdrop-blur px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center gap-2">
          <Ambulance className="h-8 w-8 text-red-500" />
          <span className="font-semibold text-lg">ERS Control</span>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            {navigation.map((group, idx) => (
              <li key={group.name}>
                {group.items ? (
                  <>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-xs font-semibold leading-6 text-muted-foreground mb-2"
                      onClick={() => handleGroupClick(group.name)}
                    >
                      {group.name}
                    </Button>
                    <ul role="list" className={cn(
                      "-mx-2 space-y-1 overflow-hidden transition-all duration-200",
                      activeGroup === group.name ? "max-h-96" : "max-h-0"
                    )}>
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start gap-x-3",
                              "hover:bg-accent hover:text-accent-foreground",
                              pathname === item.path && "bg-accent text-accent-foreground"
                            )}
                            onClick={() => handleNavigation(item.path)}
                          >
                            <item.icon className="h-5 w-5" aria-hidden="true" />
                            {item.name}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-x-3 mb-1",
                      "hover:bg-accent hover:text-accent-foreground",
                      pathname === group.path && "bg-accent text-accent-foreground"
                    )}
                    onClick={() => handleNavigation(group.path)}
                  >
                    <group.icon className="h-5 w-5" aria-hidden="true" />
                    {group.name}
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}