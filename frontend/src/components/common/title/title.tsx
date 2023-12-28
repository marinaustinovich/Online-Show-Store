import { classname } from "utils";
import { ReactNode } from "react";


type Props = {
  children?: ReactNode;
  className?: string;
  text?: string;
};
const cn = classname("text-center");

export const Title = ({ children, className, text }: Props) => (
  <h2 className={cn('', [className])}>{children} {text}</h2>
);
