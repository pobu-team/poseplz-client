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
}

export const poseService = new PoseService();
