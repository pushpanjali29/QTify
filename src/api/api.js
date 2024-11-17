import axios from "axios";
export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
    console.log(`Top Albums` + res.data);
    return res.data;
  } catch (e) {
    return null;
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
    console.log(`New Albums` + res.data);
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/songs`);
    console.log(`Songs` + res.data);
    return res.data;
  } catch (error) {
    return null;
  }
};