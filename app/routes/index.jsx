import { getGuitars } from "~/models/guitars.server";
import { getPosts } from "~/models/post.server";
import { getCourse } from "~/models/course.server";
import { useLoaderData } from "@remix-run/react";
import GuitarList from "~/components/guitarList";
import PostList from "~/components/postList";
import Course from "../components/course";
import guitarStyles from "~/styles/guitars.css";
import PostsStyles from "~/styles/blog.css";
import CourseStyles from "~/styles/course.css";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: guitarStyles,
    },
    {
      rel: "stylesheet",
      href: PostsStyles,
    },
    {
      rel: "stylesheet",
      href: CourseStyles,
    },
  ];
}

export async function loader() {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  };
}

function Index() {
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className="conteiner">
        <GuitarList guitars={guitars} />
      </main>
      <Course course={course.attributes}/>
      <section className="conteiner">
        <PostList posts={posts} />
      </section>
    </>
  );
}

export default Index;
