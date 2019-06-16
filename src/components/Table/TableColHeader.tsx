import React from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface TableColHeaderProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLTableHeaderCellElement> {
  alignContent?: "left" | "center" | "right";
}

function TableColHeader({
  className,
  children,
  alignContent,
  ...rest
}: TableColHeaderProps) {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <El.Th className={classes} {...rest}>
      {children}
    </El.Th>
  );
}

export default TableColHeader;
