export interface LikedPose {
  poseId: string,
  thumbnailImageUrl: string,
  poseCount: number,
  archived: boolean
}

export type LikeButtonType = 'DEFAULT' | 'DETAIL';
