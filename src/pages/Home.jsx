import './Home.css';
import { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        document.title = "frankrevdev";
    }, []);

    return (
        <>
            <div className="first-section">
                <div className="background">
                    {[...Array(12)].map((_, i) => {
                        const left = Math.random() * 100;
                        const scale = 0.4 + Math.random() * 1.2;
                        const duration = 8 + Math.random() * 12;
                        const delay = Math.random() * 5;
                        const rotation = Math.random() * 360;
                        const blur = scale > 1 ? 4 : scale > 0.8 ? 2 : 0;
                        const shouldRotate = Math.random() > 0.5;
                        const spinDuration = 6 + Math.random() * 14;

                        return (
                            <div
                                key={i}
                                className="logo-wrapper"
                                style={{
                                    left: `${left}%`,
                                    animationDuration: `${duration}s`,
                                    animationDelay: `${delay}s`
                                }}
                            >
                                <img
                                    src="/images/logo.svg"
                                    className={`logo-svg ${shouldRotate ? 'rotate' : ''}`}
                                    style={{
                                        '--scale': scale,
                                        '--rotate': `${rotation}deg`,
                                        '--blur': `${blur}px`,
                                        '--spin-duration': `${spinDuration}s`
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className="intro">
                    <h1>Hello there visitor,<br/>Welcome!<br/><div className="smiley">ツ</div></h1>
                </div>
            </div>

            <div className="second-section"></div>
        </>
    );
}