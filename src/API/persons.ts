import { get } from '../helpers/requestService';
import IPerson from '../interfaces/IPerson';

const API_KEY = process.env.REACT_APP_API_KEY;

export async function getPersonById(personId: number) {
  const response = await get<IPerson>(`/person/${personId}?api_key=${API_KEY}`);

  return response;
}
