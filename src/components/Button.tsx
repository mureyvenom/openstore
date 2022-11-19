import { ReactNode } from 'react';

type Props = {
  fill?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, fill, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`h-[50px] border-2 px-10 border-black mb-4 duration-300 transition-all hover:shadow-md font-bold ${className} ${
        fill ? 'text-white bg-black' : 'text-black bg-white'
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
