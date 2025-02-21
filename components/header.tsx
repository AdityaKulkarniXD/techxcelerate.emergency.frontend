"use client";

import { Bell, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="h-16 border-b flex items-center px-6 sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-20">
      <Button variant="outline" size="icon" className="mr-4 lg:hidden">
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex-1 flex items-center">
        <h1 className="text-xl font-semibold mr-8">Emergency Response System</h1>
        <div className="hidden md:flex items-center max-w-sm flex-1 relative">
          <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
          <Input 
            placeholder="Search emergencies, ambulances..." 
            className="pl-9"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white">
            3
          </span>
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}