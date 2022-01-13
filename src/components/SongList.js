import React from "react";
import Song from "./Song";
import './SongList.css';

const SongList = ({songs}) => {

    const songNodes = songs.map((song, index) => {
            return <Song key={index} song={song} ranking={index + 1}/>
        }
    )
    return (
        <ul>
            {songNodes}
        </ul>
    );

}

export default SongList;