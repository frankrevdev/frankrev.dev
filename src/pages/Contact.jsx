import './Contact.css';

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// LINKS
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

    // MESSAGE FORM
    const form = useRef();
    const [status, setStatus] = useState("");
    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");
        emailjs.sendForm(
            "service_h4mnfze",
            "template_5rrm07t",
            form.current,
            "uQCFgeqJipqNBAK6K"
        ).then(
            () => {
                setStatus("Sent!");
                form.current.reset();
            },
            () => {
                setStatus("Error!");
            }
        );
    };

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

            <div className="messageMeContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title message-title-full">Message Me</span>
                    </div>
                </div>

                <div className="writeMessageContent">
                    <form ref={form} onSubmit={sendEmail} className="contactForm">
                        <div className="formTopContent">
                            <div className="leftInput">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="emailInput"
                                    required
                                />
                                <input 
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="subjectInput"
                                    required
                                />
                            </div>
                            <div className="rightInput">
                                <textarea 
                                    name="message"
                                    placeholder="Your Message..."
                                    required
                                />
                            </div>

                            <input 
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString()}
                            />
                        </div>

                        <div className="formBottomContent">
                            <button type="submit" disabled={status === "Sending..."} className="submitButton">
                                {status === "Sending..." ? "Sending..." : "Send Message"}
                            </button>
                            {status && <p className="statusResult">{status}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}