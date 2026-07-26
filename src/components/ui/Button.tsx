type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

const Button = ({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) => {
  const base =
    "rounded-lg px-6 py-3 font-semibold transition duration-300";

  const styles =
    variant === "primary"
      ? "bg-violet-600 text-white hover:bg-violet-700"
      : "border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
};

export default Button;