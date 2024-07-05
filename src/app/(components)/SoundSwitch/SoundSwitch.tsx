import { useSound } from "@/hooks/useSound";
import styles from "./SoundSwitch.module.css";
import { themeSound } from "sound/index";
import { SoundOnIc, SoundOffIc } from "svg/index";

function SoundSwitch() {
  const { sound, setSound } = useSound();

  const soundObj = new Audio(themeSound);

  const switchSound = () => {
    soundObj.play();
    setSound(!sound);
  };

  return (
    <button onClick={switchSound} className={styles.sound_switch}>
      {sound ? <SoundOnIc /> : <SoundOffIc />}
    </button>
  );
}

export default SoundSwitch;
