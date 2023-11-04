import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

export default class AuthApiService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')?.replace(/^"|"$/g, '')}`,
    },
  });

  async deletePose(poseId: string) {
    await this.instance.delete(`/poses/${poseId}`);
  }
}

export const authApiService = new AuthApiService();
