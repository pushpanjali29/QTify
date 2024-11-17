import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import FilterSection from "./Components/FilterSection/FilterSection";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [albumSongs, setalbumSongs] = useState([]);
  const [nAlbumSongs, setNAlbumSongs] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [value, setValue] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const generateAlbumSongs = async () => {
    try {
      const res = await fetchTopAlbums();
      setalbumSongs(res);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const generateNAlbumSongs = async () => {
    try {
      const res = await fetchNewAlbums();
      setNAlbumSongs(res);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  const generateSongs = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
      setFilteredData(res);
    } catch (e) {
      return null;
    }
  };

  const generateNewSongs = (index) => {
    let key = "";
    if (index === 0) {
      generateSongs();
      return;
    } else if (index === 1) {
      key = "rock";
    } else if (index === 2) {
      key = "pop";
    } else if (index === 3) {
      key = "jazz";
    } else if (index === 4) {
      key = "blues";
    }

    let newSongsArray = songsData.filter((song) => {
      return song.genre.key === key;
    });

    setFilteredData(newSongsArray);
  };

  const handleChangeIndex = async (value) => {
    setValue(value);
    generateNewSongs(value);
  };

  useEffect(() => {
    generateAlbumSongs();
    generateNAlbumSongs();
    generateSongs();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={albumSongs} />
        <Section type="album" title="New Albums" data={nAlbumSongs} />
        <FilterSection
          type="song"
          title="Songs"
          value={value}
          filteredData={filteredData}
          handleChangeIndex={handleChangeIndex}
        />
      </div>
    </div>
  );
}

export default App;