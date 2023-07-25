import { API } from "../constants";
import PostTitle from "../components/PostTitle";
import Pagination from "../components/Pagination";
import Image from "next/image";
import { getPosts } from "../services/posts";

export default async function Posts({ searchParams }) {
  const { data: posts, pagination } = await getPosts(searchParams);

  return (
    <>
      <section className="pt-8 mx-8">
        {posts.map((post, idx) => (
          <article key={post.id} className="mb-8">
            <Image
              src={post.cover.download_url}
              alt={post.cover.author}
              height={200}
              width={300}
              className="min-w-full h-52 object-cover mb-3 rounded-md"
            />
            <PostTitle
              href={`/posts/${post.id}?_ref_page=${
                searchParams._page || 1
              }&_cover_id=${post.cover.id}`}
              id={post.id}
            >
              {post.title}
            </PostTitle>
            <p className="">{post.body}</p>
          </article>
        ))}
      </section>
      <div className="pt-8 mx-8 flex flex-row items-center justify-center">
        <Pagination {...pagination} />
      </div>
    </>
  );
}
