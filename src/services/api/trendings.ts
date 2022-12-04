import {api} from 'src/core/services/api.service';

const entity = '/trending/';

export const getAllTrending = async () => {
  const response = await api.get(`${entity}all/week?api_key=${process.env.API_KEY}&language=en-US`);
  return response.data;
};
