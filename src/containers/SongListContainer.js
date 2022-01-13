import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';
import Select from '../components/Select';

const SongListContainer = () => {

    const [songs, setSongs] = useState([]);
    const [url, setURL] = useState('https://itunes.apple.com/gb/rss/topsongs/limit=20/json');
    const [options, setOptions] = useState([
        {
            name: "All", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        },
        {
            name: "Rock", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
        },
        {
            name: "Dance", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"
        },
        {
            name: "Country", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
        }        
    ]);

    // useEffect(() => {
    //         getSongs(url);
    //     }, []
    // );

    useEffect(() => {
        getSongs(url);
    }, [url]);

    const getSongs = url => {
        fetch(url)
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
        .catch(prom => console.log(prom));
    }

    const changeOption = submittedOption => {
        setURL(submittedOption);
    }

    return(
        <div className="main-container">
            <h1>UK Top 20 Songs of the Year</h1>
            <h3>Pick the genre for the list:</h3>
            <Select onOptionSelect={(option) => changeOption(option)} options={options}/>
            <SongList songs={songs}/>
        </div>
    );
}


export default SongListContainer;