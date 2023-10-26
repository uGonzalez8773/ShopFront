import { useLoaderData } from "@remix-run/react";
import { getPost } from "../../models/post.server";
import { formatDate } from "~/utils/helpers"

export function meta({data}){

    if(!data){
      return{
        title: 'GuitarLA - No record available!',
        description: 'No post like that'
      }
    }
    return [{
      title: `GuitarLA - ${data?.data[0]?.attributes?.title}`,
      description: `Guitars, description of the post ${data?.data[0]?.attributes?.title}`
    }]
  }

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No record available",
    });
  }
  return post;
}

export default function Post() {
  const post = useLoaderData();
  const { title, content, image, publishedAt } = post?.data[0]?.attributes;
  return (
    <article className="post mt-3">
      <img
        className="image"
        alt={`blog ${title}`}
        src={image?.data?.attributes?.url}
      />
      <div className="content">
        <h3>{title}</h3>
        <p className="date">{formatDate(publishedAt)}</p>
        <p className="text">{content}</p>
      </div>
    </article>
  );
}
