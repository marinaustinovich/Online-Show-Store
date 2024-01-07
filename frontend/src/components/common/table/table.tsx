import React from "react";

import { classname } from "utils";

type Props<T> = {
  className?: string;
  data: T;
};

type TableComponent = <T extends Record<string, string>>(
    props: Props<T>
  ) => React.ReactElement;

const cn = classname("table");

export const Table: TableComponent = (props) => {
  const { data = [], className } = props;

  return (
    <table className={cn("", [cn("bordered"), className])}>
       <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
