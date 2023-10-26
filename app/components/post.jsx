import { Link } from "@remix-run/react"
import { formatDate } from "~/utils/helpers"

export default function Post({post}) {
    const { content, title, image, url, publishedAt } = post

  return (
    <article className="post">
        <img className="image" alt={`blog ${title}`} src={image.data.attributes.formats.small.url}/>
        <div className="content">
            <h3>{title}</h3>
            <p className="date">{formatDate(publishedAt)}</p>
            <p className="blogcontent">{content}</p>
            <Link className="link" to={`/post/${url}`}>Read more</Link>
        </div>
    </article>
  )
}
