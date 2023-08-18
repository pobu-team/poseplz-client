import axios from 'axios';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

class LogInApiService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async postAuth(token: string) {
    const { data } = await this.instance.post('/auth/login', {
      providerType: 'KAKAO',
      providerUserCredential: token,
    });
    return data;
  }

  async getMemberInfo(token: string) {
    const { data } = await this.instance.get('/members/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }
}

const logInApiService = new LogInApiService();
export default logInApiService;
