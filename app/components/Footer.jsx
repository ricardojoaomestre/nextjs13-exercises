import { TextLink } from "./Link";

const Footer = () => (
  <div className="flex items-center justify-center w-full bg-black text-white py-6 mt-4">
    <p className="text-xs">
      Blog made by{" "}
      <TextLink href="https://www.google.com/search?q=someone" target="_blank">
        Someone
      </TextLink>
    </p>
  </div>
);

export default Footer;
