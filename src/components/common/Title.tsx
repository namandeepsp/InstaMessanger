interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: ITitleProps) => {
  return (
    <h2 className={`text-primary text-3xl font-bold m-0 p-0 ${className}`}>
      {children}
    </h2>
  );
};

export default Title;
