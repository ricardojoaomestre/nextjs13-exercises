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
  id,
  ...otherProps
}) {
  return Boolean(href) ? (
    <>
      {/* this div is the anchor link for the navigation. the negative top value will 
    compensate for the fixed header. Without this, page would like to the post that would
  be hidden behind the topbar */}
      <div id={id} className="invisible -top-96 block relative" />
      <TitleWithLink href={href} {...otherProps}>
        {children}
      </TitleWithLink>
    </>
  ) : (
    <Title {...otherProps}>{children}</Title>
  );
}
