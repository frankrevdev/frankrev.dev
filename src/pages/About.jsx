import './About.css';

import { use, useEffect, useState } from 'react';

import frank from "../assets/Images/myself.jpg";

// Import frames
const frames = Array.from({ length: 85 }, (_, i) => 
    new URL(`../assets/Images/Frames/set1/f${i}.jpg`, import.meta.url).href
);

export default function About({ darkMode }) {

    const [frameIndex, setFrameIndex] = useState(0);
    useEffect(() => {
        let i = darkMode ? 0 : frames.length - 1;

        const interval = setInterval(() => {
            if (darkMode) {
                i++;
                if (i >= frames.length - 1) {
                    i = frames.length - 1;
                    clearInterval(interval);
                }
            } else {
                i--;
                if (i <= 0) {
                    i = 0;
                    clearInterval(interval);
                }
            }
            setFrameIndex(i);
        }, 30);

        return () => clearInterval(interval);

    }, [darkMode]);

    return (
        <>
            <title>frankrevdev | about</title>
            <div className="meContainer">
                <div className="titleBar"></div>
                <div className="aboutTitle">
                    <div className="aboutTitleText">
                        <span className="content-title text-full">Me, Myself and I</span>
                        <span className="content-title text-mid">Myself</span>
                        <span className="content-title text-small">Me</span>
                        <span className="content-title text-tiny">I</span>
                    </div>
                </div>
                <div className="meContent">
                    <div className="contentText">
                        <p>Hello! My name is <span className="highlight">Vince Franco Padua</span>, I'm a passionate developer that likes technology. 
                            I have a wide range of interests, but my main focus is on software development, game development and music production.</p>
                        <p>In my free time, I enjoy playing video games, listening to music and spending myself on the internet exploring new technologies.</p>
                        <p>Feel free to reach out to me if you want to collaborate on a project or just want to chat about technology, gaming or music!</p>
                    </div>
                    <img src={frames[frameIndex]} className="me" alt="Vince Franco Padua"/>
                </div>
            </div>
        </>
    );
}