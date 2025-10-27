"use client";

import { useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";

export default function AvatarPopover() {
  const router = useRouter();
  const [user, setUser] = useState(() => {
    if (typeof window !== "undefined") {
      const u = localStorage.getItem("user");
      return u ? JSON.parse(u) : null;
    }
    return null;
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login"); // redireciona para login
  };

  if (!user) return null;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="focus:outline-none">
          <Avatar>
            <AvatarImage src="/avatar.png" alt={user.name} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-40 p-2">
        <div className="flex flex-col gap-2">
          <span className="font-medium text-zinc-800">{user.name}</span>
          <span className="text-sm text-zinc-500">{user.email}</span>
          <Button size="sm" variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
