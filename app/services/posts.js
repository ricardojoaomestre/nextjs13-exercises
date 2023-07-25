import { API } from "../constants";
import { getImages } from "./images";

function getPagination(link) {
  return link.split(",").reduce((prev, curr) => {
    const key = curr.match(new RegExp(/rel=\"(.*)"/))[1];
    const value = curr.match(new RegExp(/\<(.*)\>/))[1].split(API)[1];
    return { ...prev, [key]: value };
  }, {});
}

export async function getPosts({ _page }) {
  const response = await fetch(`${API}/posts?_limit=5&_page=${_page}`);
  const data = await response.json();
  const headers = response.headers;
  const pagination = getPagination(headers.get("link"));
  const images = await getImages(_page);

  return {
    data: data.map((post, idx) => ({ ...post, cover: images[idx] })),
    pagination,
  };
}
