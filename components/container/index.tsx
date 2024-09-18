import React, { ReactNode } from "react";

interface childrenProps {
  children: ReactNode;
}

const Container = ({ children }: childrenProps) => {
  return <div>{children}</div>;
};

export default Container;
