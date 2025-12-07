import fm from 'front-matter';
import 'highlight.js/styles/github-dark.css'; // Import highlight.js style
import 'katex/dist/katex.min.css'; // Import KaTeX style
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const transformWikiLinks = (markdown) => {
    return markdown.replace(/\[\[([^\]]+)\]\]/g, (_, fileName) => {
        return `[${fileName}](${fileName})`;
    });
};

const transformUrl = (url, key, node) => {
    // Only transform hrefs
    if (key === 'href') {
        // External links and anchors return as-is
        if (url.startsWith('http') || url.startsWith('//') || url.startsWith('#')) {
            return url;
        }

        // Internal links logic
        let slug = url;

        // Strip markdown extension
        if (slug.endsWith('.md')) {
            slug = slug.slice(0, -3);
        }

        // Handle relative paths
        if (slug.startsWith('../')) {
            slug = slug.substring(3);
        } else if (slug.startsWith('./')) {
            slug = slug.substring(2);
        }

        // If it's absolute, respect it but prepend hash for HashRouter
        if (slug.startsWith('/')) {
            return `#${slug}`;
        }

        // Default to post route
        return `#/post/${slug}`;
    }
    return url;
};

function Post() {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const loadPost = async () => {
            try {
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
                    urlTransform={transformUrl}
                >
                    {transformWikiLinks(content)}
                </ReactMarkdown>
            </div>
        </article>
    );
}

export default Post;
