interface IHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: IHeadingProps) => {
  return (
    <h1 className={`text-primary font-extrabold text-4xl m-0 ${className}`}>
      {children}
    </h1>
  );
};

export default Heading;
