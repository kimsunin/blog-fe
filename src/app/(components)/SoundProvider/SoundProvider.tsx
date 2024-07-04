"use client";
import useStickyState from "@/hooks/useStickyState";
import { useEffect, useState, useContext, ReactNode } from "react";
import { createContext } from "react";

// Define a type for the context value
interface SoundContextType {
  sound: boolean | undefined;
  setSound: (sound: boolean) => void;
}

export const SoundContext = createContext<SoundContextType | undefined>(
  undefined
);

interface SoundProviderProps {
  children: ReactNode;
  initialSound?: boolean;
}

function SoundProvider({ children, initialSound = true }: SoundProviderProps) {
  const [sound, setSound] = useStickyState(initialSound, "sound");
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
