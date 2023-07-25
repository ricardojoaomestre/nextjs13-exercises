import Link from "next/link";

export const TextLink = ({ href, children, ...otherProps }) => (
  <Link className="hover:text-green-300" href={href} {...otherProps}>
    {children}
  </Link>
);
