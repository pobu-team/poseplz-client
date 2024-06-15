import axios from 'axios';
import { PhotoBoothRequest, PhotoBoothResponse } from '../types/PhotoBooth';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api/v1` || 'https://server.poseplz.com/api/v1';

class PhotoBoothService {
  private readonly instance = axios.create({
    baseURL: API_BASE_URL,
  });

  async fetchPhotoBooths({ params }: { params: PhotoBoothRequest }) {
    const { data } = await this.instance.get<PhotoBoothResponse>('/photo-booths', { params });
    return data;
  }

  async fetchBrands() {
    const { data } = await this.instance.get('/brands');
    return data;
  }
}

const photoBoothService = new PhotoBoothService();
export default photoBoothService;
