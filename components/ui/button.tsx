import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "on-dark";

type CommonProps = {
  variant?: Variant;
  block?: boolean;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

function classesFor(variant: Variant, block?: boolean, extra?: string) {
  return [
    "btn",
    variant === "primary" && "btn--primary",
    variant === "secondary" && "btn--secondary",
    variant === "on-dark" && "btn--on-dark",
    block && "btn--block",
    extra,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({ variant = "primary", block, className, ...props }: ButtonProps) {
  const classes = classesFor(variant, block, className);

  if ("href" in props && props.href) {
    const { href, children, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { ...rest } = props as ButtonAsButton;
  const { children, ...buttonRest } = rest;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
