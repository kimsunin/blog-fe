"use client";
import {useTheme} from "next-themes";
import {MDEditorProps} from "@uiw/react-md-editor";
import dynamic from "next/dynamic";


const MDEditor = dynamic<MDEditorProps>(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export type EditorProps = MDEditorProps

function MdEditor({...rest}: EditorProps) {
  const {theme} = useTheme();

  return (
    <div data-color-mode={theme}>
      <MDEditor {...rest}/>
    </div>);
}

export default MdEditor;