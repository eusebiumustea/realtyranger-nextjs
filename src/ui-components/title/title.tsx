import { PropsWithChildren } from "react";
interface TitleProps {
  className?: string;
  color?: string;
}
export function Title({
  children,
  className,
  color = "#3E3E3E",
}: PropsWithChildren<TitleProps>) {
  return (
    <h1
      className={
        `uppercase font-inter text-[24px] sm:text-[39px] font-light text-[${color}] ` +
        className
      }
    >
      {children}
    </h1>
  );
}
