/**
 * Hack function to return a different id when value is 97. API doesn't have this value
 * @param {string} id photo id
 * @returns real photo id parsed as int
 */
function hackImageId(id) {
  return id === 97 ? 0 : parseInt(id);
}

export async function getImageById(id) {
  const response = await fetch(
    `https://picsum.photos/id/${hackImageId(id)}/info`
  );
  return response.json();
}

export async function getImagesByIds(ids = []) {
  const promises = ids.map(async (id) => await getImageById(id));
  return Promise.all(promises);
}
