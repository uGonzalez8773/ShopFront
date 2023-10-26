import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server.js";
import PostList from "~/components/postList";
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
      <PostList posts={posts}/>
  );
}

export default Blog;
