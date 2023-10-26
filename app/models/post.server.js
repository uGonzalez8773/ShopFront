export async function getPosts() {
    const response = await fetch(
      `${process.env.API_URL}/posts?populate=image`,
      { Authorization: `bearer ${process.env.API_TOKEN}`}
    );
    return await response.json();
  }

  export async function getPost(url) {
    const response = await fetch(
      `${process.env.API_URL}/posts?filters[url]=${url}&populate=image`
    )
    return response.json()
  }