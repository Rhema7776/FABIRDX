import PostAuthor from './PostAuthor';
import TimeAgo from "./TimeAgo";
import ReactionButtons from './ReactionButtons';


const PostsExcerpt = ({ post }) => {
    // const shorten = this.props.details ? this.props.details.substring(0, 100) : '';
  return (
    <article>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p className="postCredit">
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
        </p>
        <ReactionButtons post={post}/>
    </article>
  )
}

export default PostsExcerpt
