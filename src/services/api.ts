import axios from "axios";

export const api = axios.create();

export const advicesPath = "https://api.adviceslip.com/";
export const chucknorrisPath = "https://api.chucknorris.io";

export const JokeApi = axios.create({
  baseURL: "https://api.chucknorris.io",
});

// export const AdviceApi = axios.create({
//   baseURL: "https://api.adviceslip.com/",
// });

export const PhilosophyApi = axios.create({
  baseURL: "https://api.kanye.rest",
});
