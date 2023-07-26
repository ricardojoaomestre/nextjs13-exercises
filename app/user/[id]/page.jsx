import Badge from "@/app/components/Badge";
import { TextLink } from "@/app/components/Link";
import PostCard from "@/app/components/PostCard";
import UserAvatar from "@/app/components/UserAvatar";
import { API } from "@/app/constants";
import { getUserPosts } from "@/app/services/posts";

async function getUser(id) {
  const response = await fetch(`${API}/users/${id}`);
  return response.json();
}

const UserPage = async ({ params }) => {
  const user = await getUser(params.id);
  const { posts } = await getUserPosts(params.id);

  return (
    <div className="h-screen flex flex-col justify-start items-center">
      <div className="px-12 py-12">
        <div className="flex flex-col items-center text-center gap-5 mb-8">
          <UserAvatar name={user.name} width={128} />
          <div>
            <h2 className="text-3xl font-extrabold">{user.name}</h2>
            <TextLink href={`mailto:${user.email}`}>{user.email}</TextLink>
          </div>
          <Badge>{posts.length} Posts</Badge>
        </div>
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} linkUrl={`/posts/${post.id}`} />
          ))}
        </div>
        {/* <button className="bg-green-300 py-3 px-8 rounded-md mt-4 hover:cursor-pointer hover:shadow text-sm text-green-800">
          See more
        </button> */}
      </div>
    </div>
  );
};

export default UserPage;
