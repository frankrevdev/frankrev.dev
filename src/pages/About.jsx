import './About.css';

import { useEffect, useState } from 'react';

import skill_icon from "../assets/Images/p/about/icons/skill-icon.png"

// Get the frames for hero animation
const frameCount = 85;
const framePaths = Array.from({ length: frameCount }, (_, i) => 
    new URL(`../assets/Images/Frames/set1/f${i}.jpg`, import.meta.url).href
);

// Skills
const skillModules = import.meta.glob('../assets/Images/p/about/icons/skills/*.{png,jpg,svg}', {
    eager: true,
    import: 'default'
});
const skillOrder = [
    "cpp",
    "raylib",
    "html",
    "css",
    "js",
    "vim",
    "vs"
];
const skills = Object.entries(skillModules).map(([Path2D, src]) => {
    const key = Path2D.split('/').pop().split('.')[0];
    const skillNames = {
        cpp: "C++",
        css: "CSS",
        html: "HTML",
        js: "JavaScript",
        raylib: "Raylib",
        vim: "Vim",
        vs: "Visual Studio"
    };

    return {
        key,
        name: skillNames[key] || key.toUpperCase(),
        src
    };
}).sort((a, b) => {
    const safeA = skillOrder.indexOf(a.key);
    const safeB = skillOrder.indexOf(b.key);
    return (safeA === -1 ? Infinity : safeA) -
            (safeB === -1 ? Infinity : safeB);
});

function SkillCard({ name, src }) {
    return (
        <div className="skillCard">
            <img src={src} alt={name} />
            <span>{name}</span>
        </div>
    );
}

export default function About({ darkMode }) {

    // ANIMATED HERO BY FRAMES
    const [frames, setFrames] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [frameIndex, setFrameIndex] = useState(0);

    // Preloaded frames
    useEffect(() => {
        let loadedCount = 0;
        const imgs = [];

        framePaths.forEach((src, i) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === framePaths.length) {
                    setFrames(imgs);
                    setLoaded(true);
                }
            };
            imgs[i] = img;
        });
    }, []);

    // Play animation only when loaded
    useEffect(() => {
        if (!loaded) return;

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

    }, [darkMode, loaded]);

    // Prevent rendering before ready
    if (!loaded) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <>
            { /* Set page title */ }
            <title>frankrevdev | about</title>

            { /* Main content */ }
            { /* My introduction container */ }
            <div className="meContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title me-title-full">Me, Myself and I</span>
                        <span className="content-title me-title-mid">Myself</span>
                        <span className="content-title me-title-small">Me</span>
                        <span className="content-title me-title-tiny">I</span>
                    </div>
                </div>
                <div className="meContent">
                    <div className="contentText">
                        <p>Hello! My name is <span className="highlight">Vince Franco Padua</span>, I'm a passionate developer that likes technology. 
                            I have a wide range of interests, but my main focus is on software development, game development and music production.</p>
                        <p>In my free time, I enjoy playing video games, listening to music and spending myself on the internet exploring new technologies.</p>
                        <p>Feel free to reach out to me if you want to collaborate on a project or just want to chat about technology, gaming or music!</p>
                    </div>
                    <img src={framePaths[frameIndex]} className="me" alt="Frank"/>
                </div>
            </div>

            { /* My skills container */ }
            <div className="skillsContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title skill-title-full">Technical Skills</span>
                        <span className="content-title skill-title-mid">Skills</span>
                    </div>
                </div>
                <div className="skillsContent">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.key} {...skill} />
                    ))}
                </div>
            </div>
        </>
    );
}