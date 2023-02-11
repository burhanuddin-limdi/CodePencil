import React from "react";

interface Props {
  showOutput: Function;
  hideOutput: Function;
  outputVisible: boolean;
}

export const Navbar: React.FC<Props> = (props: Props) => {
  const { showOutput, hideOutput, outputVisible } = props;

  return (
    <nav className="flex justify-between bg-[#073642] py-3 px-5 text-[#eee8d5] border-b-[2px] border-[#2aa198] fredoka font-medium">
      <div className="flex place-items-center space-x-3">
        <img src="/logo.png" alt="" className="aspect-square w-[30px]" />
        <p className="text-lg">CODEPENCIL</p>
      </div>
      <div className="flex place-items-center h-full space-x-3">
        <a href="https://github.com/burhanuddin-limdi" target="_blank">
          <img src="/github.png" alt="" className="aspect-square w-[20px]" />
        </a>
        <a
          href="https://www.linkedin.com/in/burhanuddin-limdi-4731221b7/"
          target="_blank"
        >
          <img src="/linkedin.png" alt="" className="aspect-square w-[20px]" />
        </a>
        <div className="md:hidden grid place-content-center">
          <button>
            {!outputVisible && (
              <img
                onClick={() => {
                  showOutput();
                }}
                src="/open icon.png"
                alt=""
                className="w-[20px] aspect-square relative top-0.5"
              />
            )}
            {outputVisible && (
              <img
                onClick={() => {
                  hideOutput();
                }}
                src="/close icon.png"
                alt=""
                className="w-[20px] aspect-square relative top-0.5"
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
