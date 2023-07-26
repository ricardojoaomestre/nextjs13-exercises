import { API } from "../constants";
import { getImageById, getImagesByIds } from "./images";

function getPaginationFromHeaderLink(response) {
  const link = response.headers.get("link");
  return link.split(",").reduce((prev, curr) => {
    const key = curr.match(new RegExp(/rel=\"(.*)"/))[1];
    const value = curr.match(new RegExp(/\<(.*)\>/))[1].split(API)[1];
    return { ...prev, [key]: value };
  }, {});
}

export async function getPosts(page = 1) {
  const queryParams = {
    limit: 5,
    _page: page,
  };

  const requestUrl = `${API}/posts?${Object.keys(queryParams)
    .map((key) => `${key}=${queryParams[key]}`)
    .join("&")}`;

  const postsResponse = await fetch(requestUrl);
  const posts = await postsResponse.json();
  const pagination = getPaginationFromHeaderLink(postsResponse);
  const covers = await getImagesByIds(posts.map(({ id }) => id));

  return {
    posts: posts.map((post) => ({
      ...post,
      cover: covers.find(({ id }) => post.id === parseInt(id)),
    })),
    pagination,
  };
}

export async function getPost(id) {
  const postResponse = await fetch(
    `${API}/posts/${id}?_embed=comments&_expand=user`
  );
  const post = await postResponse.json();
  const cover = await getImageById(post.id);

  return {
    ...post,
    cover,
  };
}

export function getUserPosts(userId) {
  return getPosts({ query: [`user_id=${userId}`] });
}
