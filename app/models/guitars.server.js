export async function getGuitars() {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=image`,
    { Authorization: `bearer ${process.env.API_TOKEN}`}
  );
  return await response.json();
}

export async function getGuitar(url) {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=image`
  )
  return response.json()
}