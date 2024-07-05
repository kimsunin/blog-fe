import { useContext, createContext } from "react";

interface SoundContextType {
  sound: boolean | undefined;
  setSound: (sound: boolean) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}

export { useSound, SoundContext };
