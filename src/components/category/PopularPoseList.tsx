import { useInfiniteQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { apiService } from '../../service/ApiService';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Pose from '../select/Pose';
import useFetchLikeList from '../../hooks/useFetchLikeList';

const Container = styled.div<{isPopular: boolean}>`
  margin-top: ${(props) => (props.isPopular ? '5.7rem' : '10rem')};
  margin-bottom: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  grid-auto-rows: auto;
  column-gap: 10px;
  row-gap: 16px;
`;

function PopularPoseList() {
  const likePoseIdArr = useFetchLikeList();
  const {
    data,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['poses', 'popular'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await apiService.fetchPopularPose({ page: pageParam });
      return response;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (
      lastPage.pagination.hasNext
        ? lastPage.pagination.page + 1
        : undefined),
  });
  const { bottomRef } = useIntersectionObserver(fetchNextPage);
  const poses = data?.pages.map((x) => x.data).flat();
  return (
    <>
      <Container isPopular>
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

export default PopularPoseList;
