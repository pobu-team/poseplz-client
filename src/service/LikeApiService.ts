import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

class LikeApiService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async addLike(poseId: string, token: string) {
    const { data } = await this.instance.post(
      `/archived-poses/${poseId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );
    return data;
  }

  async fetchLikes(token: string) {
    const { data } = await this.instance.get('/archived-poses', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  async deleteLike(poseId: string, token: string) {
    const { data } = await this.instance.delete(`/archived-poses/${poseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  async deleteAllLikes(token: string) {
    const { data } = await this.instance.delete('/archived-poses', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
}

const likeApiService = new LikeApiService();
export default likeApiService;
