import React, { Ref, ReactHTMLElement } from "react";
import cn from "classnames";
import { Popper } from "react-popper";

import { PopperChildrenProps } from "react-popper";
import DropdownContext from "./DropdownContext";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface DropdownMenuProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  position?: any;
  /**
   * Display an arrow pointing towards the trigger
   */
  arrow?: boolean;
  /**
   * The position of the arrow pointing towards the trigger
   */
  arrowPosition?: "left" | "right";
  rootRef?: (el: HTMLElement) => void;
  /**
   * Show the DropdownMenu
   * @deprecated use context
   */
  show?: boolean;
}

/**
 * The wrapper element for a Dropdowns Items
 */
function DropdownMenu({
  className,
  children,
  position = "bottom",
  arrow,
  arrowPosition = "left",
  style: _style,
  ...rest
}: DropdownMenuProps) {
  const [isOpen] = React.useContext(DropdownContext);
  const classes = cn(
    {
      "dropdown-menu": true,
      [`dropdown-menu-${arrowPosition}`]: arrowPosition,
      [`dropdown-menu-arrow`]: arrow,
      show: isOpen,
    },
    className
  );
  return (
    <Popper placement={position} eventsEnabled={true} positionFixed={false}>
      {({ ref, style, placement }: PopperChildrenProps) => {
        return (
          isOpen && (
            <El.Div
              className={classes}
              data-placement={placement}
              style={{ ..._style, ...style }}
              ref={ref as Ref<HTMLDivElement>}
              {...rest}
            >
              {children}
            </El.Div>
          )
        );
      }}
    </Popper>
  );
}

export default DropdownMenu;
