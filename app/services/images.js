export async function getImages(_page) {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${_page}&limit=5`
  );
  return response.json();
}

export async function getImage(id) {
  const response = await fetch(`https://picsum.photos/id/${id}/info`);
  return response.json();
}
