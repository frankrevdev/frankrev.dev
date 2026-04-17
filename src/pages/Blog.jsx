import './Blog.css';

import { useEffect } from "react";

import copyLink from '/images/p/blog/copy-link.svg';

// POSTS
const posts = [
    {
        id: "blog2",
        title: "I don't know yet",
        date: "April 16, 2026",
        description:
            `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
    },
    {
        id: "blog1",
        title: "My First Blog",
        date: "March 3, 2026",
        description: 
            `Today feels heavier and bloodier than ever. Hopelessness, Mental fractures, Heartbreak, and Chaos. Some opportunities arrive quietly, mine came with noise inside my head. Prefer to stare at my computer screen see if I can find my life through it. Happy blood day to me. 

            #IranvsIsraelandUSA #bloodmoon #birthday`,
        links: {
            IranvsIsraelandUSA: "https://en.wikipedia.org/wiki/Timeline_of_the_2026_Iran_war#3_March",
            bloodmoon: "https://www.timeanddate.com/eclipse/lunar/2026-march-3"
        },
        image: "/images/p/blog/1-blood-day.jpg"
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

    document.title = "frankrevdev | blogs";
    return (
        <>
            {posts.map(post => (
                <div id={post.id} className={`blog-post ${activeId === post.id ? "active" : ""}`} key={post.id}>
                    <div className="titleBar"></div>
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