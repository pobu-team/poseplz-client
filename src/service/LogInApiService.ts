import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://server.poseplz.com/api/v1';

class LogInApiService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async postAuth(loginCode: string) {
    const { data } = await this.instance.post('/auth/login', {
      providerType: 'KAKAO',
      providerUserId: loginCode,
    });
    return data;
  }
}

const logInApiService = new LogInApiService();
export default logInApiService;
