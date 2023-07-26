import Link from "next/link";

export const TextLink = ({ href, children, ...otherProps }) =>
  href ? (
    <Link className="hover:text-green-300" href={href} {...otherProps}>
      {children}
    </Link>
  ) : (
    <p className="hover:text-green-300 cursor-pointer" {...otherProps}>
      {children}
    </p>
  );
