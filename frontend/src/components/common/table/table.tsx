import React, { ReactNode } from "react";
import { classname } from "utils";

type TableColumn = {
  header: string;
  accessor: string;
  render?: (row: any) => JSX.Element;
};

type Props<T> = {
  className?: string;
  data: T | T[];
  columns?: TableColumn[];
  includeHead?: boolean;
  footer?: ReactNode;
};

type TableComponent = <T extends Record<string, string | number>>(
  props: Props<T>
) => React.ReactElement;

const cn = classname("table");

export const Table: TableComponent = ({
  data,
  className,
  columns,
  footer,
  includeHead = false,
}) => {
  const renderCell = (item: any, column: TableColumn) => {
    if (column.render) {
      return column.render(item);
    }
    return item[column.accessor];
  };

  const dataArray = Array.isArray(data) ? data : [data];

  return (
    <table className={cn("", [cn("bordered"), className])}>
      {includeHead && columns && (
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {dataArray.map((item, rowIndex) =>
          columns ? (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{renderCell(item, column)}</td>
              ))}
            </tr>
          ) : (
            Object.entries(item).map(([key, value], index) => (
              <tr key={index}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))
          )
        )}
        {footer}
      </tbody>
    </table>
  );
};
