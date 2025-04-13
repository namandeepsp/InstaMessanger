import AppLogo from "../icons/AppLogo";
import Paragraph from "./Paragraph";

const Logo = () => {
  return (
    <Paragraph className="flex items-center justify-center gap-1 w-fit text-xl">
      <AppLogo className="w-[40px] h-[40px]" />
      <span>InstaMessenger</span>
    </Paragraph>
  );
};

export default Logo;
