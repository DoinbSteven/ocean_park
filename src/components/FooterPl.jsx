import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function FooterPl() {
  return (
    <Container>
      <FootLogo src={ImageCommon.logo}></FootLogo>
      <FootCenter>
        <CenterIcon src={ImageCommon.discord_icon}></CenterIcon>
        <CenterIcon src={ImageCommon.telegram_icon}></CenterIcon>
        <CenterIcon src={ImageCommon.twitter_icon}></CenterIcon>
        <CenterIcon src={ImageCommon.github_icon}></CenterIcon>
      </FootCenter>
      <FooterRight>
        <RightIcons>
          <LinkIcon src={ImageCommon.github}></LinkIcon>
          <LinkIconU src={ImageCommon.twitter}></LinkIconU>
          <LinkIcon src={ImageCommon.telegram}></LinkIcon>
        </RightIcons>
        <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
      </FooterRight>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  background: #1a202e;
  box-shadow: 0px ${autoWidthVW(-4)} ${autoWidthVW(10)} 0px #080a0f;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const FootLogo = styled.img`
  margin-left: ${autoWidthVW(370)};
  margin-top: ${autoWidthVW(69)};
  margin-bottom: ${autoWidthVW(47)};
  width: ${autoWidthVW(143)};
`
const FootCenter = styled.div`
  margin-left: ${autoWidthVW(280)};
  margin-top: ${autoWidthVW(85)};
  display: flex;
`
const CenterIcon = styled.img`
  margin-right: ${autoWidthVW(11)};
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(46)};
`
const FooterRight = styled.div`
  margin-left: ${autoWidthVW(281)};
  margin-top: ${autoWidthVW(47)};
  margin-right: ${autoWidthVW(281)};
`
const RightIcons = styled.div`
  margin-left: ${autoWidthVW(138)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const LinkIcon = styled.img`
  width: ${autoWidthVW(40)};
`
const LinkIconU = styled.img`
  width: ${autoWidthVW(35)};
  height: ${autoWidthVW(28)};
`
const CopyRight = styled.div`
  margin-top: ${autoWidthVW(30)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};
`
export default FooterPl
