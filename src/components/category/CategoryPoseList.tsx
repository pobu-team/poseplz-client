import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import useFetchCategoryPoses from '../../hooks/useFetchCategoryPoses';
import CATEGORY from '../../types/CategoryType';
import PoseList from '../common/PoseList';
import { fetchLikesSelector } from '../../recoil/likeState';

interface CategoryPoseListProps {
  category: CATEGORY;
  selectedTagId: string;
}

export default function CategoryPoseList({ category, selectedTagId }: CategoryPoseListProps) {
  const poses = useFetchCategoryPoses(category, selectedTagId);
  const storedAccessToken = useReadLocalStorage('accessToken') as string;
  const initialLikes = useRecoilValue(fetchLikesSelector(storedAccessToken));
  const [likePoseIdArr, setLikePoseIdArr] = useState(initialLikes);
  return (
    <PoseList
      poses={poses}
      likePoseIdArr={likePoseIdArr}
      setLikePoseIdArr={setLikePoseIdArr}
    />
  );
}
