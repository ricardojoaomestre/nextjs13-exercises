import Image from "next/image";
import PostTitle from "./PostTitle";

const PostCard = ({ post, linkUrl }) => (
  <article className="mb-8">
    <Image
      src={post.cover.download_url}
      alt={post.cover.author}
      height={200}
      width={300}
      className="min-w-full h-52 object-cover mb-3 rounded-md"
    />
    <PostTitle href={linkUrl} id={post.id}>
      {post.title}
    </PostTitle>
    <p className="">{post.body}</p>
  </article>
);

export default PostCard;
