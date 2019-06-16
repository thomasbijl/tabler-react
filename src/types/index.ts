export * from "./events";
export * from "./TablerComponent";

export interface ReactHTMLElementWithoutRef<T extends HTMLElement>
  extends Omit<React.HTMLProps<React.ReactHTMLElement<T>>, "ref"> {}

export interface HTMLPropsWithoutRef<T extends HTMLElement>
  extends Omit<React.HTMLProps<T>, "ref"> {}

export interface ReactHTMLElementProps<T extends HTMLElement>
  extends React.HTMLProps<React.ReactHTMLElement<T>> {}

export interface HTMLElementProps<T extends HTMLElement>
  extends React.HTMLProps<T> {}
