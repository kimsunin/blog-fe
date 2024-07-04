import useStickyState from "@/hooks/useStickyState";
import styles from "./SoundSwitch.module.css";
import { SoundOnIc, SoundOffIc } from "svg/index";
import { useContext } from "react";
import { SoundContext } from "../SoundProvider/SoundProvider";

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};

function SoundSwitch() {
  const { sound, setSound } = useSound();

  const switchSound = () => {
    setSound(!sound);
  };

  return (
    <button onClick={switchSound} className={styles.sound_switch}>
      {sound ? <SoundOnIc /> : <SoundOffIc />}
    </button>
  );
}

export default SoundSwitch;
