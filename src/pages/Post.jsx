import fm from 'front-matter';
import 'highlight.js/styles/github-dark.css'; // Import highlight.js style
import 'katex/dist/katex.min.css'; // Import KaTeX style
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

function Post() {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const loadPost = async () => {
            try {
                // Dynamic import needs to match the glob pattern exactly or be known at build time.
                // Since we know the structure, we can iterate to find the matching one or just import all and find.
                // A better way for dynamic slugs is to import all and select.
                const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default' });
                const path = `../posts/${slug}.md`;

                if (modules[path]) {
                    const rawContent = await modules[path]();
                    const { body, attributes } = fm(rawContent);
                    setContent(body);
                    setMeta(attributes);
                } else {
                    setContent('# 404 Not Found');
                }
            } catch (err) {
                console.error(err);
                setContent('# Error loading post');
            }
        };

        loadPost();
    }, [slug]);

    return (
        <article className="post">
            <header className="post-header">
                <h1>{meta.title}</h1>
                {meta.date && <p className="post-date">{meta.date}</p>}
            </header>
            <div className="markdown-body">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeHighlight, rehypeKatex]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </article>
    );
}

export default Post;
