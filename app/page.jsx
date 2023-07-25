import { BiText, BiCamera } from "react-icons/bi";
import Link from "next/link";

const ProjectLink = ({ href, children }) => (
  <Link
    href={href}
    className="flex flex-col items-center justify-center px-6 py-6 border rounded-xl gap-6 hover:drop-shadow-lg "
  >
    {children}
  </Link>
);

const PostsProjectLink = () => (
  <ProjectLink href="/posts">
    <BiText className="text-6xl" />
    <span className="font-mono">Typicode.com (blog)</span>
  </ProjectLink>
);

const PhotosProjectLink = () => (
  <ProjectLink href="/photos">
    <BiCamera className="text-6xl" />
    <span className="font-mono">Typicode.com (photos)</span>
  </ProjectLink>
);

const Page = () => {
  return (
    <div className="grid grid-cols-2 w-full gap-3 max-w-2xl h-screen items-center">
      <PostsProjectLink />
      <PhotosProjectLink />
    </div>
  );
};

export default Page;
