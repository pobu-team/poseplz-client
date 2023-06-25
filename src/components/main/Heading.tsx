import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import CountSelector from '../../recoil/countState';

const HeadingContainer = styled.div`
  width: 100%;
  height: 77px;
  margin-bottom: 24px;
  
  h1 {
    font-size: 28px;
    font-weight: bold;
    line-height: 38px;
    color: ${(props) => props.theme.colors.text};
  
    @media screen and (max-width: 340px){
      font-size: 22px;
    }
  }
`;

export default function Heading() {
  const count = useRecoilValue(CountSelector);

  return (
    <HeadingContainer>
      <h1>
        포부에는 당신을 위한
        <br />
        {' '}
        포즈가
        {' '}
        <span style={{ textDecoration: 'underline' }}>
          {count}
          장
        </span>
        이 있어요!
      </h1>
    </HeadingContainer>
  );
}
