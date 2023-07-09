import styled from 'styled-components';

const Container = styled.div`
  width: auto;
  height: 36px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: flex;
  
  button {
    font-size: 14px;
    font-weight: 600;
    padding: 6px 12px;
    border: none;
    border-radius: 10px;
    background: none;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.bannerBackground};
  }
`;

// 추후에 각 태그에 onClick기능을 넣기 위해 button으로 둠

export default function TagButton({ tagName }: {
  tagName: string
}) {
  return (
    <Container>
      <button type="button">
        #
        {tagName}
      </button>
    </Container>
  );
}
