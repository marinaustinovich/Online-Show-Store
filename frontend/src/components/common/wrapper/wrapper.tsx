import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Wrapper = ({ children }: Props) => (
  <div className="row">
    <div className="col">{children}</div>
  </div>
);

export default Wrapper;
