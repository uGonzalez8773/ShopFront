export async function getGuitars() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=image`,
    { Authorization: `bearer ${process.env.API_TOKEN}`}
  );
  return await response.json();
}
