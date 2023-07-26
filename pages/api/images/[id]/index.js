import { getImage } from "@/app/services/images";

export default async function handler(req, res) {
  const data = getImage(req.query.id);
  return res.json(data);
}
