import fm from 'front-matter';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });

        const loadPosts = async () => {
            const loadedPosts = await Promise.all(
                Object.entries(modules).map(async ([path, resolver]) => {
                    const content = await resolver();
                    const { attributes } = fm(content);
                    const slug = path.split('/').pop().replace('.md', '');
                    return { slug, ...attributes };
                })
            );
            setPosts(loadedPosts);
        };

        loadPosts();
    }, []);

    return (
        <div className="home">
            <h1>Latest Posts</h1>
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.slug} className="post-item">
                        <Link to={`/post/${post.slug}`}>
                            <h2>{post.title}</h2>
                            <p className="post-date">{post.date}</p>
                            <p className="post-desc">{post.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
