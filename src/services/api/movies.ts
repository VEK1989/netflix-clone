import {api} from 'src/core/services/api.service';

const entity = '/movie/';

export const getTopRated = async () => {
  const response = await api.get(`${entity}top_rated/week?api_key=${process.env.API_KEY}&language=en-US`);
  return response.data;
};
