import { classname } from "utils";
import { ReactNode } from "react";

const cn = classname("row");

type Props = {
  children: ReactNode;
  className?: string;
};

export const Row = ({ children, className }: Props) => (
  <div className={cn('', [className])}>{children}</div>
);

export default Row;
