import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  
    h1 {
      font-size: 2.4rem;
      text-overflow: ellipsis;
      letter-spacing: -0.48px;
      font-weight: bold;
      @media screen and (max-width: 340px) {
        font-size: 1.8rem;
      }
    }
`;

function PoseContainerTitle({ title }: {
  title: string;
}) {
  return (
    <Header>
      <h1>{title}</h1>
    </Header>
  );
}

export default PoseContainerTitle;
