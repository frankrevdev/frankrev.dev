import './Works.css';

import game_icon from "../assets/Images/p/works/icons/game-icon.png"
import music_icon from "../assets/Images/p/works/icons/music-icon.png"

function ItchIframe({width="552", height="167", src}) {
    return (
        <div className="itch-embed-wrapper">
            <iframe
                src={src}
                loading="lazy"
                frameBorder="0"
                scrolling="no"
            >
            </iframe>
        </div>
    );
}

export default function Works() {
    return (
        <>
            <title>frankrevdev | works</title>

            <div className="gamesAssetsContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title games-title-full">Games and Assets</span>
                        <span className="content-title games-title-mid">Games/Assets</span>
                    </div>
                </div>
                <div className="game_assets_content">
                    <div className="itch-embed-wrapper">
                        <iframe width="70%" height="167" frameBorder="0" scrolling="no" src="https://itch.io/embed/4364496">
                            <a href="https://frankrevdev.itch.io/puzzledepizzle-v01">PuzzleDePizzle v0.1 by Franco Padua</a>
                        </iframe>
                    </div>
                    <div className="itch-embed-wrapper">
                        <iframe width="70%" height="167" frameBorder="0" src="https://itch.io/embed/3754499">
                            <a href="https://frankrevdev.itch.io/actionemotional-bgm-1">[FREE] Action/Emotional 8/16/24/32 Bar Loop BGM #1 by Franco Padua</a>
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="musicContentContainer">
                <div className="titleBar"></div>
                <div className="titleContainer">
                    <div className="titleContent">
                        <span className="content-title music-title-full">Music Content</span>
                        <span className="content-title music-title-mid">Music</span>
                    </div>
                </div>
                <div className="musicContent">
                    <iframe src="https://open.spotify.com/embed/artist/3hD6jHhI80jHqBKcDHPqN4"
                        width="500" height="380" frameBorder="0"
                        allowtransparency="true" allow="encrypted-media">
                    </iframe>

                    <iframe src="https://open.spotify.com/embed/artist/74MbgZuZe4oshpldo6aRRL"
                        width="500" height="380" frameBorder="0"
                        allowtransparency="true" allow="encrypted-media">
                    </iframe>
                </div>
            </div>
        </>
    );
}