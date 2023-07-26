import { TextLink } from "@/app/components/Link";
import NavBackLink from "@/app/components/NavBackLink";
import PostTitle from "@/app/components/PostTitle";
import UserAvatar from "@/app/components/UserAvatar";
import { getPost } from "@/app/services/posts";
import Image from "next/image";

const AuthorLink = ({ user, queryParams = "" }) => (
  <TextLink href={`/user/${user.id}`}>
    <div className="inline-flex gap-2 items-center mt-2 mb-8">
      <UserAvatar name={user.name} />
      <span>{user.name}</span>
    </div>
  </TextLink>
);

const PostDetails = async ({ params: { id } }) => {
  const details = await getPost(id);

  return (
    <>
      <section className="mb-6">
        <article>
          <Image
            src={details.cover.download_url}
            alt={details.cover.author}
            height={200}
            width={300}
            className="min-w-full h-96 object-cover mb-3 rounded-md"
          />

          <NavBackLink />

          <PostTitle>{details.title}</PostTitle>
          <AuthorLink user={details.user} />
          <p className="mb-8">{details.body}</p>
        </article>
      </section>

      <section className="flex flex-col gap-6 bg-gray-50 px-6 py-8 rounded-lg">
        {details.comments?.map((comment) => (
          <article key={comment.id} className="flex flex-col gap-3 py-2">
            <h3 className="text-lg font-semibold">{comment.name}</h3>
            <p className="text-sm">{comment.body}</p>
            <p className="text-xs text-right italic">by: {comment.email}</p>
          </article>
        ))}
      </section>
      <NavBackLink />
    </>
  );
};

export default PostDetails;
