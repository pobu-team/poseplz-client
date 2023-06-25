import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  div {
    display: flex;
    justify-content: center;
    width: 110px;
    height: 100px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.containerBackground};
    
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: none;
      border: none;
      font-size: 14px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.text};
    
      img {
        display: flex;
        margin-bottom: 10px;
      }
    }
  }
`;

export default function Category() {
  return (
    <CategoryContainer>
      <div>
        <button type="button">
          <img src="/images/pose_person.svg" alt="인원별포즈" />
          인원별포즈
        </button>
      </div>
      <div>
        <button type="button">
          <img src="/images/pose_theme.svg" alt="테마별포즈" />
          테마별포즈
        </button>
      </div>
      <div>
        <button type="button">
          <img src="/images/pose_popular.svg" alt="인기포즈" />
          인기포즈
        </button>
      </div>
    </CategoryContainer>
  );
}
