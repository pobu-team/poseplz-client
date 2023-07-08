import styled from 'styled-components';
import { useReadLocalStorage } from 'usehooks-ts';

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 50px;

  img {
    display: flex;
    width: 107px;
    height: 124px;
    margin-bottom: 20px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.disabledText};
    font-size: 20px;
  }
`;

export default function EmptyPose({ text }: {
  text: string
}) {
  const isDarkMode = useReadLocalStorage('darkMode');

  return (
    <EmptyContainer>
      <img
        src={
          isDarkMode ? '/images/no-image-dark.png' : '/images/no-image.png'
        }
        alt="noImage"
      />
      <p>
        {text}
        {' '}
        포즈가 없어요
      </p>
    </EmptyContainer>
  );
}
