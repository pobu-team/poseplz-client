import { Tag } from './Tag';

export interface PoseType {
  poseId: string;
  thumbnailImageUrl: string;
  poseCount: number;
}

export interface PoseInfo {
  poseId: string;
  thumbnailImageUrl: string;
  imageUrl: string;
  tags: Tag[];
}
