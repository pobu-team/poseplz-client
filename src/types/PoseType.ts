import { Tag } from './Tag';

export interface File {
  fileId: string;
  name: string;
  contentType: string;
  url: string;
  size: number;
  width: number;
  height: number;
}
export interface PoseInfo {
  poseId: string;
  thumbnailImageUrl: string;
  imageUrl: string;
  file: File;
  tags: Tag[];
  peopleCount: number;
  archived: boolean;
}

export interface Pagination {
  hasNext: boolean;
  totalCount: number;
  page: number;
  size: number;
}
export interface ResponseFetchPoses {
  data: PoseInfo[];
  pagination: Pagination;
}
export interface MyPoseType {
  poseId: string;
  thumbnailImageUrl: string;
  file: File;
  peopleCount: number;
  archived: boolean;
}
