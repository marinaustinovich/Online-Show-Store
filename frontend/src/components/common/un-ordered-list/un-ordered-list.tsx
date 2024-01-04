import { classname } from "utils";
import React, { ReactNode } from "react";

type Props = {
  list: ReactNode[] | null;
  className?: string;
};

const cn = classname("nav");

export const UnOrderedList = ({ list, className }: Props) => {
  if (!list) {
    return null; 
  }

  return (
    <ul className={cn("", ["justify-content-center", className])}>
      {list.map((item, index) => (
        <li key={index} className={cn("item")}>
          {item}
        </li>
      ))}
    </ul>
  );
};
