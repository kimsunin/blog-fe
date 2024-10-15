"use client";
import { ReactNode, useState } from "react";
import { DialogContext } from "@/hooks/useDialog";
import CustomAlert from "@/components/CustomAlert/CustomAlert";
import Overlay from "@/layouts/Overlay/Overlay";
import CustomConfirm from "@/components/CustomConfirm/CustomConfirm";
import CustomPrompt from "@/components/CustomPrompt/CustomPrompt";

type AlertState = {
  type: "alert";
  message: string;
  onClickOk: () => void;
};

type ConfirmState = {
  type: "confirm";
  message: string;
  onClickOk: () => void;
  onClickCancel: () => void;
};

type PromptState = {
  type: "prompt";
  message: string;
  onClickOk: (input: string) => void;
  onClickCancel: () => void;
};

type PropsType = {
  children: ReactNode;
};

function DialogProvider({ children }: PropsType) {
  const [state, setState] = useState<ConfirmState | AlertState | PromptState>();

  const alert = (message?: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setState({
        type: "alert",
        message: message ?? "",
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
        type: "confirm",
        message: message ?? "",
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

  const prompt = (message?: string): Promise<string | null> => {
    return new Promise((resolve) => {
      setState({
        type: "prompt",
        message: message ?? "",
        onClickOk: (input: string) => {
          setState(undefined);
          resolve(input);
        },
        onClickCancel: () => {
          setState(undefined);
          resolve(null);
        },
      });
    });
  };

  return (
    <DialogContext.Provider value={{ alert, confirm, prompt }}>
      {children}
      {state && (
        <Overlay>
          {state.type == "confirm" && (
            <CustomConfirm
              message={state.message}
              onClickOk={state.onClickOk}
              onClickCancel={state.onClickCancel}
            />
          )}
          {state.type == "alert" && (
            <CustomAlert message={state.message} onClickOk={state.onClickOk} />
          )}
          {state.type == "prompt" && (
            <CustomPrompt
              message={state.message}
              onClickOk={state.onClickOk}
              onClickCancel={state.onClickCancel}
            />
          )}
        </Overlay>
      )}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
