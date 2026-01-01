"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { ref, onValue, push, onDisconnect, set, serverTimestamp } from "firebase/database";

export default function LiveUsers() {
  const [userCount, setUserCount] = useState<number>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    try {
      // Create a reference to the presence system
      const connectedRef = ref(db, ".info/connected");
      const connectionsRef = ref(db, "connections");

      // Handle connection state changes
      const unsubscribe = onValue(connectedRef, (snap) => {
        if (snap.val() === true) {
          // We're connected (or reconnected)! 
          // Add this device to my connections list
          // this value could contain info about the device or a timestamp too
          const con = push(connectionsRef);
          
          // When I disconnect, remove this device
          onDisconnect(con).remove();
          
          // Add this device to the connections list
          set(con, {
            timestamp: serverTimestamp(),
            userAgent: window.navigator.userAgent 
          });
        }
      });

      // Listen for the count of connections
      const countUnsubscribe = onValue(connectionsRef, (snap) => {
        if (snap.exists()) {
          setUserCount(Object.keys(snap.val()).length);
        } else {
          setUserCount(1); // At least me!
        }
      });

      return () => {
        unsubscribe();
        countUnsubscribe();
      };
    } catch (error) {
      console.error("Firebase error:", error);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-strong rounded-full text-xs font-medium text-white/70 hover:text-white transition-colors">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span>{userCount} Live User{userCount !== 1 ? 's' : ''}</span>
    </div>
  );
}
