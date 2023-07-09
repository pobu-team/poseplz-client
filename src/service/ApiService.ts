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

  async fetchPeopleTags() {
    const { data } = await this.instance.get('/tags?tagType=NUMBER_OF_PEOPLE');
    return data;
  }

  async fetchAtmosphereTags() {
    const { data } = await this.instance.get('/tags?tagType=ATMOSPHERE_OF_POSE');
    return data;
  }

  async fetchPose(tagIds: string[]) {
    const queryString = tagIds.join('&tagIds=');
    const { data } = await this.instance.get(`/poses?tagIds=${queryString}&page=0&size=100`);
    return data;
  }

  async fetchPopularPose() {
    const { data } = await this.instance.get('/poses?preparedPoseQuery=POPULAR&page=0&size=100');
    return data;
  }

  async fetchAllPose() {
    const { data } = await this.instance.get('/poses?page=0&size=100');
    return data;
  }

  async fetchPoseWithId(poseId?: string) {
    const { data } = await this.instance.get(`/poses/${poseId}`);
    return data;
  }

  async fetchTagGroups(peopleCount?: number) {
    if (!peopleCount) {
      const { data } = await this.instance.get('/tag-groups');
      return data;
    }
    const { data } = await this.instance.get('/tag-groups', {
      params: { peopleCount },
    });
    return data;
  }

  async fetchTagGroup(tagGroupId: string) {
    const { data } = await this.instance.get(`/tag-groups/${tagGroupId}`);
    return data;
  }

  async addSelectedPoseInfo({ tagGroupIds, peopleCount }: {
    tagGroupIds: string;
    peopleCount: number;
  }) {
    const { data } = await this.instance.post('/poses/recommend', {
      tagGroupIds, peopleCount,
    });
    return data;
  }

  async recommendPose({ tagGroupIds, peopleCount }: {
    tagGroupIds: string[];
    peopleCount: number;
  }) {
    const { data } = await this.instance.post('/poses/recommend', {
      tagGroupIds, peopleCount,
    });
    return data;
  }

  async fetchCount() {
    const { data } = await this.instance.get('/poses/count');
    return data;
  }
}

export const apiService = new ApiService();
