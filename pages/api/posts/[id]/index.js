import { getPost } from "@/app/services/posts";

export default async function handler(req, res) {
  const data = await getPost(req.query.id);
  return res.json(data);
}
