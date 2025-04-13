interface IParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ children, className }: IParagraphProps) => {
  return (
    <p
      className={`text-text text-lg bg-transparent font-poppins-medium m-0 ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
