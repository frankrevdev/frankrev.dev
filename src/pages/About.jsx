import './About.css';

import { useEffect, useState } from 'react';

import skill_icon from "../assets/Images/p/about/icons/skill-icon.png"

// Get the frames for hero animation
const frameCount = 85;
const framePaths = Array.from({ length: frameCount }, (_, i) => 
    new URL(`../assets/Images/Frames/set1/f${i}.jpg`, import.meta.url).href
);

// Skills
const software = [
    {
        key: "cpp",
        name: "C++",
        src: new URL("../assets/Images/p/about/icons/skills/software/cpp.svg", import.meta.url).href
    },
    {
        key: "raylib",
        name: "Raylib",
        src: new URL("../assets/Images/p/about/icons/skills/software/raylib.png", import.meta.url).href
    },
    {
        key: "html",
        name: "HTML",
        src: new URL("../assets/Images/p/about/icons/skills/software/html.svg", import.meta.url).href
    },
    {
        key: "css",
        name: "CSS",
        src: new URL("../assets/Images/p/about/icons/skills/software/css.svg", import.meta.url).href
    },
    {
        key: "js",
        name: "JavaScript",
        src: new URL("../assets/Images/p/about/icons/skills/software/js.svg", import.meta.url).href
    },
    {
        key: "git",
        name: "Git",
        src: new URL("../assets/Images/p/about/icons/skills/software/git.svg", import.meta.url).href
    },
    {
        key: "vim",
        name: "Vim-motions",
        src: new URL("../assets/Images/p/about/icons/skills/software/vim.svg", import.meta.url).href
    },
    {
        key: "vs",
        name: "Visual Studio",
        src: new URL("../assets/Images/p/about/icons/skills/software/vs.svg", import.meta.url).href
    },
    {
        key: "fl",
        name: "FL Studio",
        src: new URL("../assets/Images/p/about/icons/skills/software/fl.svg", import.meta.url).href
    },
    {
        key: "reap",
        name: "Reaper",
        src: new URL("../assets/Images/p/about/icons/skills/software/reap.svg", import.meta.url).href
    },
    {
        key: "ink",
        name: "Inkscape",
        src: new URL("../assets/Images/p/about/icons/skills/software/ink.svg", import.meta.url).href
    },
    {
        key: "word",
        name: "Word",
        src: new URL("../assets/Images/p/about/icons/skills/software/word.svg", import.meta.url).href
    },
    {
        key: "excel",
        name: "Excel",
        src: new URL("../assets/Images/p/about/icons/skills/software/excel.svg", import.meta.url).href
    }
];
const hardware = [
    {
        key: "setup",
        name: "Computer System Installation and Setup",
        src: new URL("../assets/Images/p/about/icons/skills/hardware/setup.svg", import.meta.url).href
    },
    {
        key: "config",
        name: "Computer Network Configuration",
        src: new URL("../assets/Images/p/about/icons/skills/hardware/configuration.svg", import.meta.url).href
    },
    {
        key: "proto",
        name: "Basic Electronic Prototyping",
        src: new URL("../assets/Images/p/about/icons/skills/hardware/prototype.svg", import.meta.url).href
    },
    {
        key: "perp",
        name: "Peripheral Diagnostic and Repair",
        src: new URL("../assets/Images/p/about/icons/skills/hardware/peripherals.svg", import.meta.url).href
    },
    {
        key: "cctv",
        name: "CCTV Installation and Maintenance",
        src: new URL("../assets/Images/p/about/icons/skills/hardware/cctv.svg", import.meta.url).href
    }
];

function SkillCard({ name, src }) {
    return (
        <div className="skillCard">
            <img src={src} alt={name} />
            <span>{name}</span>
        </div>
    );
}
function HardwareSkill({ name, src }) {
    return (
        <div className="hardwareSkill">
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
                            I have a wide range of interests, but my main focus is on computer systems, software development, and digital creativity.</p>
                        <p>In my free time, I enjoy listening to music and spending myself on the internet exploring new technologies.</p>
                        <p>Feel free to reach out to me if you want to collaborate on a project and be part of your team or just chat. :)</p>
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
                    <div className="subTitle">Software Tools</div>
                    <div className="toolSkills">
                        {/*<SkillCard {...software[0]} />*/}
                        {software.map((skill) => (
                            <SkillCard key={skill.key} name={skill.name} src={skill.src} />
                        ))}
                    </div>
                    <div className="subTitle">Hardware Competencies</div>
                    <div className="hardwareComp">
                        {hardware.map((hkill) => (
                            <HardwareSkill key={hkill.key} name={hkill.name} src={hkill.src} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}