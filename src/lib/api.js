import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=cx443cn2l6IE7UmdyFlG534oSifee8jVQs0OLMz3&date=${date}`);
}