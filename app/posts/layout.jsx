import { BiHome } from "react-icons/bi";
import Footer from "../components/Footer";
import { TextLink } from "../components/Link";
import TopBar from "../components/Topbar";

const HomeLink = () => (
  <div className="fixed top-3 right-3 z-10">
    <TextLink href="/">
      <BiHome />
    </TextLink>
  </div>
);

const PostsLayout = ({ children }) => (
  <>
    <HomeLink />
    <TopBar />
    <div className="mt-28 max-w-2xl">{children}</div>
    <Footer />
  </>
);

export default PostsLayout;
