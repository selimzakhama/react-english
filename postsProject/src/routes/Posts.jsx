/* eslint-disable react-refresh/only-export-components */
import PostsList from '../components/Posts/PostsList/PostsList';
import { Outlet } from 'react-router-dom';
function Posts() {
    return (
        <>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </>
    )
}

export default Posts;

export async function loader() {
    const response = await fetch('http://localhost:8080/posts');
    if (!response.ok) {
        throw new Error('Impossible de charger les posts');
    }
    const resData = await response.json();
    return resData;
}
