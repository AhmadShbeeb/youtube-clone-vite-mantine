import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

const RAPID_API_KEY_1 = import.meta.env.VITE_RAPID_API_KEY_1
const RAPID_API_KEY_2 = import.meta.env.VITE_RAPID_API_KEY_2

export const fetchData = async (url, signal) => {
  const RAPID_API_HOST = 'youtube-v31.p.rapidapi.com'
  const options = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY_1,
      'X-RapidAPI-Host': RAPID_API_HOST,
    },
    signal,
  }
  const { data } = await axios.get(`https://${RAPID_API_HOST}/${url}`, options)

  const uniqueVideos = [
    ...new Map(data?.items?.map(v => [v?.id?.videoId, v])).values(),
  ]
  return uniqueVideos
}

export const fetchAutocomplete = async (url, signal) => {
  // const RAPID_API_HOST = 'youtube138.p.rapidapi.com'
  // const options = {
  //   headers: {
  //     'X-RapidAPI-Key': RAPID_API_KEY_2,
  //     'X-RapidAPI-Host': RAPID_API_HOST,
  //   },
  //   signal,
  // }
  // const { data } = await axios.get(`https://${RAPID_API_HOST}/${url}`, options)

  // A YT undocumented API for auto suggest search queries
  // const BASE_URL = 'https://clients1.google.com/complete'
  const AUTO_URL = 'https://suggestqueries.google.com/complete'
  const options = {
    params: {
      ds: 'yt',
      client: 'youtube',
    },
    signal,
    adapter: jsonpAdapter,
  }
  const { data } = await axios.get(`${AUTO_URL}/${url}`, options)

  return data?.[1]?.map(item => item[0])
}

export const fetchDislikes = async (url, signal) => {
  const DISLIKES_URL = 'returnyoutubedislikeapi.com'
  const options = {
    signal,
  }
  const { data } = await axios.get(`https://${DISLIKES_URL}/${url}`, options)
  console.log(data)
  return data
}
