interface ISubHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SubHeading = ({ children, className }: ISubHeadingProps) => {
  return (
    <h3 className={`text-secondary text-xl font-bold m-0 ${className}`}>
      {children}
    </h3>
  );
};

export default SubHeading;
