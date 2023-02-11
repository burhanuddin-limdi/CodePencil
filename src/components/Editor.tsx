import React from "react";
import { basicSetup, EditorView } from "codemirror";
import { EditorState } from "@codemirror/state";
import { ViewPlugin } from "@codemirror/view";
import { useLayoutEffect } from "react";
import { solarizedDark } from "cm6-theme-solarized-dark";

interface Props {
  language: Function;
  displayName: string;
  value: string;
  onChange: Function;
}
export const Editor: React.FC<Props> = (props: Props) => {
  let { language, displayName, value, onChange } = props;
  // if (!value.length) {
  //   value = `\n \n \n \n \n \n \n \n \n \n \n \n \n \n`;
  // }
  useLayoutEffect(() => {
    const codeDiv: any = document.querySelector(`#${displayName}`);
    const view = new EditorView({
      state: EditorState.create({
        doc: value,
        extensions: [
          ViewPlugin.fromClass(
            class {
              constructor(view: any) {}

              update(update: any) {
                if (update.docChanged) {
                  const code = update.state.doc.text.join("\n");
                  onChange(code);
                }
              }
            }
          ),
          basicSetup,
          language(),
          solarizedDark,
          EditorView.lineWrapping,
        ],
      }),
      parent: codeDiv,
    });
    // view.theme()

    // view.dispatch();
    document.querySelector(`#${displayName}>.cm-editor:nth-child(2)`)?.remove();
  });
  return (
    <div className="h-full bg-[#002b36] overflow-y-auto w-full border-b border-[#2aa198]">
      <div className="w-full h-fit bg-[#073642] text-[#eee8d5] font-medium sticky top-0 z-10">
        <p className="py-1 px-3 border border-[#002b36] h-full w-fit bg-[#002b36] fredoka">
          {displayName}
        </p>
      </div>
      <div id={displayName} className="w-full flex-grow h-full"></div>
    </div>
  );
};
