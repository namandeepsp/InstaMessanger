import React from "react";
import SubHeading from "./SubHeading";
import Paragraph from "./Paragraph";
import Logo from "./Logo";

const AppIntro = () => {
  return (
    <div className="flex flex-col gap-4">
      <SubHeading className="flex items-center justify-center gap-4 w-fit text-xl">
        <Logo />
        <span>-</span>
        <span className="text-lg">Simple, Secure Messaging!</span>
      </SubHeading>
      <Paragraph className="text-[16px]">
        Chat instantly with friends using lightning-fast text messages, powered
        by end-to-end encryption. Share thoughts, stickers, and files—no calls,
        just pure conversation. Stay connected, the easy way! 💬
      </Paragraph>
    </div>
  );
};

export default AppIntro;
