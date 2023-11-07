import axios from 'axios';
import { PoseType } from '../types/PoseType';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

/**
 * 인증이 필요한 포즈 관련 API
 */
export default class AuthPoseervice {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')?.replace(/^"|"$/g, '')}`,
    },
  });

  async deletePose(poseId: string) {
    await this.instance.delete(`/poses/${poseId}`);
  }

  async fetchMyPoses() : Promise<PoseType[]> {
    try {
      const { data } = await this.instance.get('/members/me/poses');
      return data.data;
    } catch (error) {
      return [];
    }
  }
}

export const authPoseService = new AuthPoseervice();
