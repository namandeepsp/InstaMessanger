interface INormalButtonProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  handleClick: (e?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const NormalButton = ({
  children,
  className = "",
  handleClick,
}: INormalButtonProps) => {
  return (
    <span
      className={`text-primary font-bold text-lg cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </span>
  );
};

export default NormalButton;
