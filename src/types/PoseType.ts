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
export interface PoseType {
  poseId: string;
  thumbnailImageUrl: string;
  imageUrl: string;
  filt: File;
  tags: Tag[];
  peopleCount: number;
  archived: boolean;
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
