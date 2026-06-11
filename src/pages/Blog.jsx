import './Blog.css';

import { useEffect } from "react";

import copyLink from '/images/p/blog/copy-link.svg';

// POSTS
const posts = [
    {
        id: "blog2",
        title: "My First Blog",
        date: "April 21, 2026",
        description:
            `This is my first blog post! I never thougt I would be achieving this milestone and I am so glad about it. At first, I thought it was hard and impossible and I almost gave up. But then I realized that I just had to take it one step at a time and not worry about the end result. All I needed was to believe in myself and keep pushing forward.`
    }
];

function renderDescription(text, links) {
    return text.split("\n").map((line, i) => (
        <span key={i}>
            {line.split(" ").map((word, j) => {
                // Hashtag for hashtag links, lnk- for specific word in the description
                let tag = "";
                if (word.startsWith("#")) {
                    tag = word.replace("#", "").replace(/[.,!?]/g, "");
                }
                if (word.startsWith("lnk-")) {
                    tag = word.replace("lnk-", "").replace(/[.,!?]/g, "");
                }
                if (links && links[tag]) {
                    return (
                        <a 
                            key={j}
                            href={links[tag]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="externalLinks"
                        >
                            {word}{" "}
                        </a>
                    );
                }
                return <span key={j}>{word} </span>;
            })}
            <br />
        </span>
    ))
}
// For highlighting post
const activeId = window.location.hash.replace("#", "");

export default function Blogs() {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const el = document.querySelector(hash);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);    // small delay ensures DOM is ready
        }
    }, []);

    return (
        <>
            <title>frankrevdev | blogs</title>
            {posts.map(post => (
                <div id={post.id} className={`blog-post ${activeId === post.id ? "active" : ""}`} key={post.id}>
                <div className="gradientLineBreak3"></div>
                <div className="gradientLineBreak4"></div>
                    <div className="postContainer">
                        <div className="blogTitle">{post.title}</div>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    `${window.location.origin}/blogs/#${post.id}`
                                );
                            }}
                        >
                            <img src={copyLink} alt="" />
                        </button>
                        <div className="blogDate"><p>{post.date}</p></div>
                        <div className="blogDescription">
                            <p>{renderDescription(post.description, post.links)}</p>
                        </div>
                        <div className="blogImage">
                            {post.image && <img src={post.image} alt="" />}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}