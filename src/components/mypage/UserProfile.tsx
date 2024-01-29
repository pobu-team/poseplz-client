import styled from 'styled-components';
import { useNavigate } from 'react-router';
import useFetchMyInfo from '../../hooks/useFetchMemberInfo';

const ProfileContainer = styled.div`
  padding: 1.6rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageNameBox = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    margin-right: 1.2rem;
  }

  p {
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: 600;
  }
`;

const LogoutButton = styled.button`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textNormal};
  border: none;
  border-radius: 99px;
  width: 7.3rem;
  height: 3.6rem;
  cursor: pointer;
`;

function UserProfile() {
  const { data: myInfoResponse } = useFetchMyInfo();
  const navigate = useNavigate();
  return (
    <ProfileContainer>
      <ImageNameBox>
        <img src={myInfoResponse?.data.profileImageUrl} alt="profile pic" />
        <p>{myInfoResponse?.data.name}</p>
      </ImageNameBox>
      <LogoutButton
        type="button"
        onClick={() => {
          localStorage.removeItem('accessToken');
          navigate('/');
        }}
      >
        로그아웃

      </LogoutButton>
    </ProfileContainer>
  );
}

export default UserProfile;
