import axios from 'axios';
import { PoseType } from '../types/PoseType';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

/**
 * 포즈 관련 API
 */
export default class PoseService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchAllPoses() : Promise<PoseType[]> {
    const { data } = await this.instance.get('/poses?page=0&size=300');
    return data.data;
  }

  async fetchPoses(tagIds: string[]) {
    const queryString = tagIds.join('&tagIds=');
    const { data } = await this.instance.get('/poses', {
      params: { tagIds: queryString, page: 0, size: 100 },
    });
    return data.data;
  }

  async fetchPopularPoses() {
    const { data } = await this.instance.get('/poses?preparedPoseQuery=POPULAR&page=0&size=100');
    return data.data;
  }
}

export const poseService = new PoseService();
