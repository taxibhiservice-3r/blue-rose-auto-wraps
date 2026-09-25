import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  as?: "button";
  href?: never;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  as: "link";
  href: string;
  children: ReactNode;
}

interface AnchorProps extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  as: "a";
  href: string;
  children: ReactNode;
}

type Props = ButtonProps | LinkProps | AnchorProps;

const VARIANT_CLASSES = {
  primary: "gradient-brand text-white hover:opacity-90",
  secondary: "bg-[#1A1B1E] text-[#F5F5F5] border border-[#2C2D31] hover:border-[#E91E8C] hover:text-[#E91E8C]",
  outline: "border-2 border-[#E91E8C] text-[#E91E8C] hover:bg-[#E91E8C] hover:text-white",
  ghost: "text-[#A0A0A8] hover:text-[#F5F5F5] hover:bg-white/5",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: Props) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E91E8C]`;
  const classes = `${base} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if (props.as === "link") {
    const { as: _as, href, ...rest } = props as LinkProps;
    return <Link href={href} className={classes} {...(rest as object)}>{children}</Link>;
  }

  if (props.as === "a") {
    const { as: _as, href, ...rest } = props as AnchorProps;
    return <a href={href} className={classes} {...rest}>{children}</a>;
  }

  const { as: _as, ...rest } = props as ButtonProps;
  return <button className={classes} {...rest}>{children}</button>;
}
