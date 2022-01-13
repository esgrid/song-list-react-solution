import React from "react";

const Song = ({song, ranking}) => {
    return (
        <li>
            <div className="song-written-info">
                {ranking}: <em>{song['im:name'].label}</em> by {song['im:artist'].label}
            </div>
            <div className="preview-image">

            </div>
        </li>
    );
}

export default Song;