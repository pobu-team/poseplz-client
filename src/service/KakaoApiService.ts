import axios from 'axios';

const API_BASE_URL = 'https://kauth.kakao.com/oauth';

class KakaoApiService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async postKakaoToken(loginCode: string) {
    const { data } = await this.instance.post(
      `/token?grant_type=authorization_code&client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&code=${loginCode}`,
      {},
      { headers: { 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8' } },
    );
    return data;
  }
}

const kakaoApiService = new KakaoApiService();
export default kakaoApiService;
