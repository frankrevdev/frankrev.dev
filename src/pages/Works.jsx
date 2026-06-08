import './Works.css';

const works = [
    // Games and Assets
    {

    },
    // Music Content
    {
        type: "music",
        artist: "morTone",
        title: "new path",
        date: "June 28, 2025",
        embedSrc: "https://open.spotify.com/embed/track/28z8uR9bStN54Ugk5cXDKH?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Family",
        date: "June 28, 2022",
        embedSrc: "https://open.spotify.com/embed/track/3QNXmZHuVjZ7AP7a3SttDE?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Childhood",
        date: "June 28, 2022",
        embedSrc: "https://open.spotify.com/embed/track/01ANWHaKaUbBHax6s9vXle?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Ace",
        date: "November 21, 2021",
        embedSrc: "https://open.spotify.com/embed/track/56hj4SDyL7eF4kdtWT4eeH?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Surface",
        date: "February 14, 2021",
        embedSrc: "https://open.spotify.com/embed/track/0NniAhs4tM8VRlA7DtQNV8?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Dicen",
        date: "February 14, 2021",
        embedSrc: "https://open.spotify.com/embed/track/44Fnw2i7shG8F0LltBsBVG?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "New Paradise",
        date: "February 14, 2021",
        embedSrc: "https://open.spotify.com/embed/track/0rKsqCopZ6lGjd1brC9NMl?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Noon Forests",
        date: "May 10, 2020",
        embedSrc: "https://open.spotify.com/embed/track/417XTxCz3U6jShTZSlFKDr?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Falling",
        date: "May 10, 2020",
        embedSrc: "https://open.spotify.com/embed/track/3k0DFBppAhHE1ATuScFREh?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Modern Travel",
        date: "May 10, 2020",
        embedSrc: "https://open.spotify.com/embed/track/4qNnq9u1h4Az3nwUWqzxL4?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Opaque",
        date: "May 10, 2020",
        embedSrc: "https://open.spotify.com/embed/track/6dC1A9dofvnvaE31Tg8w6p?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Tropicality",
        date: "April 8, 2020",
        embedSrc: "https://open.spotify.com/embed/track/58JeQtA6tNbKA5Lz7mbQwA?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Metro",
        date: "February 27, 2020",
        embedSrc: "https://open.spotify.com/embed/track/4jnUu1M3XW09b9XFv4C7Bc?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Glowing Dynasty",
        date: "February 27, 2020",
        embedSrc: "https://open.spotify.com/embed/track/5aDxPesKDpClFZtRCK9QH1?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Blooming",
        date: "February 27, 2020",
        embedSrc: "https://open.spotify.com/embed/track/23iz6yzdsV1kL9CnAGpkfn?utm_source=generator&theme=0"
    },
    {
        type: "music",
        artist: "Morning Tune",
        title: "Decade",
        date: "January 21, 2020",
        embedSrc: "https://open.spotify.com/embed/track/4N8bhbuGDRTezFzbf9Jlsb?utm_source=generator&theme=0"
    },
];

const sorted = (type) => works.filter(w => w.type === type || (type === "itch" && (w.type === "game" || w.type === "asset"))).sort((a, b) => new Date(b.date) - new Date(a.date));


function SpotifyIframe({ src }) {
    return (
        <iframe
            data-testid="embed-iframe"
            style={{ borderRadius: "12px" }}
            src={src}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    )
}

export default function Works() {
    const itchWorks = sorted("itch");
    const musicWorks = sorted("music");
    const artists = [...new Set(musicWorks.map(w => w.artist))];

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
                {/*I'll fix this later*/}
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
                    {artists.map((artist) => (
                        <div className="artist" key={artist}>
                            <div className="name">{artist}</div>
                            <div className="playlistIframe">
                                {musicWorks.filter(w => w.artist === artist).map((track, i) => (
                                    <SpotifyIframe key={i} src={track.embedSrc} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}