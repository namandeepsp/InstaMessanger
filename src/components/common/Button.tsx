interface IButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  handleClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children,
  className,
  type = "button",
  handleClick,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`border-2 border-primary rounded-lg px-3 py-1 text-primary font-medium cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
