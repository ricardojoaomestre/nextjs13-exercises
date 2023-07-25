import { TextLink } from "./Link";

const NavLink = ({ href, children }) => {
  if (Boolean(href)) return <TextLink href={href}>{children}</TextLink>;

  return (
    <p className="text-gray-400" alia-aria-disabled="true">
      {children}
    </p>
  );
};

const Pagination = ({ first, prev, next, last }) => {
  return (
    <nav className="flex gap-3">
      <NavLink href={first}>&lt;&lt; First</NavLink>
      <NavLink href={prev}>&lt;Previous</NavLink>
      <NavLink href={next}>Next &gt;</NavLink>
      <NavLink href={last}>Last &gt;&gt;</NavLink>
    </nav>
  );
};

export default Pagination;
