import {createContext, useContext} from "react";

type Type = {
  alert: (message?: string) => Promise<boolean>
}

const DialogContext = createContext<Type>({
  alert: () => new Promise((_, reject) => reject()),
});

function useDialog() {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
}

export {useDialog, DialogContext};