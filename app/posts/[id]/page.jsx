import { TextLink } from "@/app/components/Link";
import PostTitle from "@/app/components/PostTitle";
import { API } from "@/app/constants";
import { getImage } from "@/app/services/images";
import Image from "next/image";
import { BiUserCircle } from "react-icons/bi";

async function getPostDetails(id) {
  const response = await fetch(
    `${API}/posts/${id}?_embed=comments&_expand=user`
  );
  return response.json();
}

const NavBackLink = ({ id, page }) => (
  <nav className="my-6">
    <TextLink href={`/posts?_page=${page}#${id}`}>&lt; Back to posts</TextLink>
  </nav>
);

const UserAvatar = ({ name }) => {
  const imgUrl = `https://ui-avatars.com/api/?name=${name.replace(
    " ",
    "+"
  )}&rounded=true`;
  return <Image src={imgUrl} width={24} height={24} alt={name} />;
};

const AuthorLink = ({ user }) => (
  <TextLink href={`/user/${user.id}`}>
    <div className="inline-flex gap-2 items-center mt-2 mb-8">
      <UserAvatar name={user.name} />
      <span>{user.name}</span>
    </div>
  </TextLink>
);

const PostDetails = async ({
  params: { id },
  searchParams: { _ref_page, _cover_id },
}) => {
  const details = await getPostDetails(id);
  const cover = await getImage(_cover_id);
  return (
    <>
      <section className="mb-6">
        <article>
          <Image
            src={cover.download_url}
            alt={cover.author}
            height={200}
            width={300}
            className="min-w-full h-96 object-cover mb-3 rounded-md"
          />
          <NavBackLink id={id} page={_ref_page} />
          <PostTitle>{details.title}</PostTitle>
          <AuthorLink user={details.user} />
          <p className="mb-8">{details.body}</p>
        </article>
      </section>

      <section className="flex flex-col gap-6 bg-gray-50 px-6 py-8 rounded-lg">
        {details.comments.map((comment) => (
          <article key={comment.id} className="flex flex-col gap-3 py-2">
            <h3 className="text-lg font-semibold">{comment.name}</h3>
            <p className="text-sm">{comment.body}</p>
            <p className="text-xs text-right italic">by: {comment.email}</p>
          </article>
        ))}
      </section>
      <NavBackLink page={_ref_page} />
    </>
  );
};

export default PostDetails;
