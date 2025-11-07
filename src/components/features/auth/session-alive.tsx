'use client'
import { getSession } from "next-auth/react";
import { useEffect } from "react";

export function SessionKeepAlive({ interval = 5 * 60 * 1000 }) {
  useEffect(() => {
    const timer = setInterval(() => {
      getSession(); 
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return null;
}