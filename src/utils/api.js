import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'
const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      // 'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Key': '34fa849515mshf7c853918a90267p18ad43jsn92c23e2b8356',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
}

export const fetchDataFromApi = async (url) => {
  console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}