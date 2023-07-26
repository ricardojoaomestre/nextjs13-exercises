import { getPosts } from "@/app/services/posts";

export default async function handler(req, res) {
  const data = await getPosts({
    _page: req.query._page,
    query: [`user_id=${req.query.user_id}`],
  });
  return res.json(data);
}
