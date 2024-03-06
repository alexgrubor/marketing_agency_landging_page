import Link from "next/link";

interface LinkProps {
  href: string;
  className?: string;
  text: string;
}

const LetsChatButton = ({ href, className, text }: LinkProps) => {
  return (
    <Link
      href={href}
      className={` bg-myPurple-600 p-2 border border-bg transition-all duration-300 hover:bg-bg hover:text-myPurple-600 hover:border-myPurple-600 ${className}`}
    >
      {text}
    </Link>
  );
};
export default LetsChatButton;
