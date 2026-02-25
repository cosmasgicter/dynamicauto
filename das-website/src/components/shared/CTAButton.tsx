import Link from "next/link";

export interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<string, string> = {
  primary:
    "bg-das-accent text-white hover:bg-das-accent-dark",
  secondary:
    "border-2 border-das-accent bg-transparent text-das-accent hover:bg-das-accent hover:text-white",
};

export default function CTAButton({
  text,
  href,
  onClick,
  variant,
  size = "md",
}: CTAButtonProps) {
  const baseClasses =
    "inline-block rounded-lg font-semibold transition-colors duration-200 text-center";
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");

    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {text}
    </button>
  );
}
