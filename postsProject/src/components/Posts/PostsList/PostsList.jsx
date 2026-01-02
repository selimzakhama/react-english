import { useLoaderData } from 'react-router-dom';
import Post from '../PostElement/Post'
import classes from './PostsList.module.css'
function PostsList() {

    const posts = useLoaderData().posts;
    return (
        <>
            <ul className={classes.posts}>
                {
                    posts.length > 0 &&
                    posts.map((post) => (
                        <Post author={post['author']} key={post['id']} id={post.id} body={post['body']} />
                    ))

                }
            </ul>

            {
                posts.length === 0 &&
                (
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2>There are no posts yet.</h2>
                        <p>Start adding some!</p>
                    </div>
                )
            }


        </>
    )
}

export default PostsList
