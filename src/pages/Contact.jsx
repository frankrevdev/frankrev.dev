import './Contact.css';

// Links
const links = [
    {
        key: "insta",
        name: "Instagram",
        url: "https://www.instagram.com/frankrev.dev",
        icon: new URL("../assets/Images/socials-links/insta.svg", import.meta.url).href
    },
    {
        key: "threads",
        name: "Threads",
        url: "https://www.threads.com/@frankrev.dev",
        icon: new URL("../assets/Images/socials-links/threads.svg", import.meta.url).href
    },
    {
        key: "itch",
        name: "Itch.io",
        url: "https://frankrevdev.itch.io",
        icon: new URL("../assets/Images/socials-links/itch.svg", import.meta.url).href
    },
    {
        key: "yt",
        name: "YouTube",
        url: "https://www.youtube.com/@frankrevdev",
        icon: new URL("../assets/Images/socials-links/yt.svg", import.meta.url).href
    }
];

function LinkCard({ name, src, url }) {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="linkCard"
        >
            <img src={src} alt={name} />
            <span>{name}</span>
        </a>
    );
}

export default function Contact() {
    return (
        <>
            <title>frankrevdev | contact</title>

            <div className="socialLinksContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title links-title-full">Other Links</span>
                    </div>
                </div>
                <div className="linksContent">
                    {links.map((mlink) => (
                        <LinkCard
                            key={mlink.key}
                            name={mlink.name}
                            src={mlink.icon}
                            url={mlink.url}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}