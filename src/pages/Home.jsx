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
            loadedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            setPosts(loadedPosts);
        };

        loadPosts();
    }, []);

    return (
        <div className="home">
            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.slug} className="post-item">
                        <Link to={`/post/${post.slug}`}>
                            <span className="post-title">{post.title}</span>
                            <span className="post-date">{post.date}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
