"use client"
import {ReactNode, useState} from "react";
import {DialogContext} from "@/hooks/useDialog";
import CustomAlert from "@/components/CustomAlert/CustomAlert";
import Overlay from "@/layouts/Overlay/Overlay";

type AlertState = {
  message: string;
  onClickOk: () => void;
}

type PropsType = {
  children: ReactNode;
}

function DialogProvider({children}: PropsType) {
  const [alertState, setAlertState] = useState<AlertState>()

  const alert = (message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setAlertState({
        message: message ?? '',
        onClickOk: () => {
          setAlertState(undefined);
          resolve(true);
        },
      });
    });
  };

  return <DialogContext.Provider value={{alert}}>
    {children}
    {alertState && <Overlay><CustomAlert message={alertState.message} onClickOk={alertState.onClickOk}/></Overlay>}
  </DialogContext.Provider>;
}

export default DialogProvider;