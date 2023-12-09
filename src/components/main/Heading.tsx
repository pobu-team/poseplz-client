import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  animate, easeInOut, motion, useMotionValue, useTransform,
} from 'framer-motion';
import { useEffect } from 'react';
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

const Number = styled(motion.div)`
  text-decoration: underline;
  display: inline;
`;

export default function Heading() {
  const poseCount = useRecoilValue(CountSelector);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, poseCount, { duration: 3 });
    return controls.stop;
  }, []);

  return (
    <HeadingContainer>
      <h1>
        포부에는 당신을 위한
        <br />
        {' '}
        포즈가
        {' '}
        <Number style={{ textDecoration: 'underline' }}>
          {rounded}
        </Number>
        장이 있어요!
      </h1>
    </HeadingContainer>
  );
}
