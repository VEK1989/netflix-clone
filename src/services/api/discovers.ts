import {api} from 'src/core/services/api.service';

const entity = {
  tv: '/discover/tv',
  movie: '/discover/movie',
};

export const getNetflixOriginals = async () => {
  const response = await api.get(`${entity.tv}?api_key=${process.env.API_KEY}&with_networks=213`);
  return response.data;
};

export const getActionMovies = async () => {
  const response = await api.get(`${entity.movie}?api_key=${process.env.API_KEY}&with_genres=28`);
  return response.data;
};

export const getComedyMovies = async () => {
  const response = await api.get(`${entity.movie}?api_key=${process.env.API_KEY}&with_genres=35`);
  return response.data;
};

export const getHorrorMovies = async () => {
  const response = await api.get(`${entity.movie}?api_key=${process.env.API_KEY}&with_genres=27`);
  return response.data;
};

export const getRomanceMovies = async () => {
  const response = await api.get(`${entity.movie}?api_key=${process.env.API_KEY}&with_genres=10749`);
  return response.data;
};

export const getDocumentaries = async () => {
  const response = await api.get(`${entity.movie}?api_key=${process.env.API_KEY}&with_genres=99`);
  return response.data;
};
