import Link from "next/link";

const Title = ({ children, ...otherProps }) => (
  <h2 className="text-3xl font-semibold mb-2" {...otherProps}>
    {children}
  </h2>
);

const TitleWithLink = ({ href, children, ...otherProps }) => (
  <Link href={href} className="hover:text-lime-300">
    <Title {...otherProps}>{children}</Title>
  </Link>
);

export default function PostTitle({
  href = undefined,
  children,
  className,
  ...otherProps
}) {
  return Boolean(href) ? (
    <TitleWithLink href={href} {...otherProps}>
      {children}
    </TitleWithLink>
  ) : (
    <Title {...otherProps}>{children}</Title>
  );
}
