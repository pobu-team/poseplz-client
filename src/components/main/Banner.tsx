import styled from 'styled-components';
import addGaEvent from '../../utils/addGaEvent';

const BannerContainer = styled.a`
  color: black;
  text-decoration: none;
  padding: 16px 20px 12px 24px;
  border-radius: 16px;
  height: 100px;
  display: flex;
  line-height: 38px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  background-color: ${(props) => props.theme.colors.bannerBackground};

  @media screen and (max-width: 340px){
      padding: 12px 16px 8px 20px;
  }

  div {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
    color: ${(props) => props.theme.colors.text};
    
    @media screen and (max-width: 340px){
      font-size: 12px;
    }

    strong {
      font-weight: bold;
      display: contents;
      font-size: 16px;

      @media screen and (max-width: 340px){
        font-size: 13px;
      }
    }

    img {
      width: 80px;
      height: 80px;
      
      @media screen and (max-width: 340px){
        width: 60px;
        height: 60px;
      }
    }
  }
`;

export default function Banner() {
  return (
    <BannerContainer
      href="https://www.instagram.com/poseplz.official"
      onClick={() => { addGaEvent('Instagram Banner'); }}
    >
      <div>
        <strong>
          귀염뽀짝 포부즈를 소개합니다
        </strong>
        <br />
        포부 공식 인스타그램 바로가기
      </div>
      <div>
        <img src="/images/bn_img01.png" alt="그림" />
      </div>
    </BannerContainer>
  );
}
