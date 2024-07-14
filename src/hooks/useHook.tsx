import { InputType, SelectType } from "@/types/EventType";

function useHook() {
  type PropsType = {
    changeItem: any;
    setChangeItem: any;
    e: InputType | SelectType;
  };
  function change({ changeItem, setChangeItem, e }: PropsType) {
    setChangeItem({ ...changeItem, [e.target.name]: e.target.value });
  }
  return change;
}

export { useHook };
