import axios from 'axios';
import { PoseInfo } from '../types/PoseType';
import { MAX_IMG_COUNT } from '../constant/pose';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

/**
 * 인증이 필요한 포즈 관련 API
 */
export default class AuthPoseService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async deletePose(poseId: string) {
    const token = localStorage.getItem('accessToken')?.replace(/^"|"$/g, '');
    await this.instance.delete(`/poses/${poseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async fetchMyPoses() : Promise<PoseInfo[]> {
    try {
      const token = localStorage.getItem('accessToken')?.replace(/^"|"$/g, '');
      if (!token) return [];

      const { data } = await this.instance.get(`/members/me/poses?page=0&size=${MAX_IMG_COUNT}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data.data;
    } catch (error) {
      return [];
    }
  }
}

export const authPoseService = new AuthPoseService();
