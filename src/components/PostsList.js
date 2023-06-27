import { useSelector } from "react-redux";
import { selectAllPosts } from "./posts/postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 80)}</p>
        </article>
    ))
  return (
    <section>
        <h2>POSTS</h2>
        {renderPosts}
    </section>
  )
}

export default PostsList