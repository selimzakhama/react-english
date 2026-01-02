import { Link } from 'react-router-dom';
import classes from './Post.module.css';

function Post({ author, body, id}) {
    return (
        <li className={classes.post} key={author}>
            <Link to={id}>
                <p>{author}</p>
                <p>{body}</p>
            </Link>
        </li>
    )
}

export default Post
