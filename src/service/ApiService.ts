import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://server.poseplz.com/api/v1';

export default class ApiService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchTags() {
    const { data } = await this.instance.get('/tags');
    return data;
  }

  async fetchPose(tagId: string[]) {
    const { data } = await this.instance.get(`/poses?tagIds=${tagId}`);
    return data;
  }

  async fetchAllPose() {
    const { data } = await this.instance.get('/poses?page=0&size=100');
    return data;
  }

  async fetchPoseWithId(poseId: string) {
    const { data } = await this.instance.get(`/poses/${poseId}`);
    return data;
  }
  // async recommendPose(tagIds: string[]) {
  //   const { data } = await this.instance.post(`/poses/recommend`, {
  //     tagIds
  //   });
  //   return data;
  // }
}

export const apiService = new ApiService();
