import styled from 'styled-components';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import CATEGORY from '../../types/CategoryType';
import useFetchLikeList from '../../hooks/useFetchLikeList';
import { apiService } from '../../service/ApiService';
import { ALL_PEOPLE_TAG } from '../../constant/tagId';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Pose from '../select/Pose';

interface CategoryPoseListProps {
  category: CATEGORY;
  selectedTagId: string;
}

const Container = styled.div<{isPopular: boolean}>`
  margin-top: ${(props) => (props.isPopular ? '5.7rem' : '10rem')};
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-auto-rows: auto;
  column-gap: 10px;
  row-gap: 16px;
`;

export default function CategoryPoseList({ category, selectedTagId }: CategoryPoseListProps) {
  const likePoseIdArr = useFetchLikeList();
  const location = useLocation();

  const {
    data,
    fetchNextPage,
  } = useInfiniteQuery(
    ['poses', category, selectedTagId],
    async ({ pageParam = 0 }) => {
      const response = selectedTagId === ALL_PEOPLE_TAG
        ? (await apiService.fetchPose([], pageParam))
        : (await apiService.fetchPose([selectedTagId], pageParam));
      return response;
    },
    {
      getNextPageParam: (lastPage) => (
        lastPage.pagination.hasNext
          ? lastPage.pagination.page + 1
          : undefined),
    },
  );
  const { bottomRef } = useIntersectionObserver(fetchNextPage);

  const poses = data?.pages.map((x) => x.data).flat();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTagId]);

  return (
    <>
      <Container isPopular={location.pathname === '/category/popular'}>
        <GridContainer>
          {poses && (
            poses.map((pose) => (
              <Pose key={pose.poseId} pose={pose} likePoseIdArr={likePoseIdArr} />
            ))
          )}
        </GridContainer>
      </Container>
      <div ref={bottomRef} />
    </>
  );
}
