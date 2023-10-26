import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server.js";
import Post from "~/components/post";
import styles from "~/styles/blog.css"

export function meta(){
  return [{
    title: 'GuitarLA - Our Blog',
    description: 'GuitarLA, Blog of music and guitar store'
  }]
}

export function links(){
  return [{
    rel: 'stylesheet',
    href: styles
  }]
}

export async function loader() {
  const posts = await getPosts();
  return posts?.data;
}

function Blog() {
  const posts = useLoaderData();

  return (
    <main className="conteiner">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post post={post?.attributes} key={post?.id} />
        ))}
      </div>
    </main>
  );
}

export default Blog;
