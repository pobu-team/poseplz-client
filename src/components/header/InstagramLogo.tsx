import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InstaLogo from '../svg/InstaLogo';
import links from '../../constant/links';

const Container = styled.div`
  display: flex;
`;

export default function InstagramLogo() {
  const instaLogo = InstaLogo();
  return (
    <Container>
      <Link to={links.instagram}>
        {instaLogo}
      </Link>
    </Container>
  );
}
