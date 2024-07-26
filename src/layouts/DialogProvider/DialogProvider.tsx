"use client"
import {ReactNode, useState} from "react";
import {DialogContext} from "@/hooks/useDialog";
import CustomAlert from "@/components/CustomAlert/CustomAlert";
import Overlay from "@/layouts/Overlay/Overlay";
import CustomConfirm from "@/components/CustomConfirm/CustomConfirm";

type AlertState = {
  message: string;
  onClickOk: () => void;
}

type ConfirmState = {
  message: string;
  onClickOk: () => void;
  onClickCancel: () => void;
};

type PropsType = {
  children: ReactNode;
}

function DialogProvider({children}: PropsType) {
  const [state, setState] = useState<ConfirmState | AlertState>();


  const alert = (message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        message: message ?? '',
        onClickOk: () => {
          setState(undefined);
          resolve(true);
        },
      });
    });
  };

  const confirm = (message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        message: message ?? '',
        onClickOk: () => {
          setState(undefined);
          resolve(true);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(false);
        },
      });
    });
  };

  const isConfirmState = (state: ConfirmState | AlertState): state is ConfirmState => {
    return (state as ConfirmState).onClickCancel !== undefined;
  };

  return <DialogContext.Provider value={{alert, confirm}}>
    {children}
    {state && (
      <Overlay>
        {isConfirmState(state) ? (
          <CustomConfirm
            message={state.message}
            onClickOk={state.onClickOk}
            onClickCancel={state.onClickCancel}
          />
        ) : (
          <CustomAlert message={state.message} onClickOk={state.onClickOk}/>
        )}
      </Overlay>
    )}
  </DialogContext.Provider>;
}

export default DialogProvider;