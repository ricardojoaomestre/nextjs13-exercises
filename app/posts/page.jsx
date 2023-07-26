import { API } from "../constants";
import PostTitle from "../components/PostTitle";
import Pagination from "../components/Pagination";
import Image from "next/image";
import { getPosts } from "../services/posts";
import PostCard from "../components/PostCard";

function buildPostUrl(post, page = 1) {
  return `/posts/${post.id}`;
}

export default async function Posts({ searchParams: { _page } }) {
  const { posts, pagination } = await getPosts(_page);

  return (
    <div className="mt-28">
      <section className="pt-8 mx-8">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            linkUrl={buildPostUrl(post, _page)}
          />
        ))}
      </section>
      <div className="pt-8 mx-8 flex flex-row items-center justify-center">
        <Pagination {...pagination} />
      </div>
    </div>
  );
}
