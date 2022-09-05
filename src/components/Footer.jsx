import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function Footer() {
  return (
    <Container>
      <FooterLogo src={ImageCommon.logo}></FooterLogo>
      <IconAndCopyright>
        <LinkIcons>
          <LinkIcon src={ImageCommon.github}></LinkIcon>
          <LinkIconU src={ImageCommon.twitter}></LinkIconU>
          <LinkIcon src={ImageCommon.telegram}></LinkIcon>
        </LinkIcons>
        <Copyright>@2022 Ocean Park.All Rights Reserved.</Copyright>
      </IconAndCopyright>
    </Container>
  )
}
const Container = styled.div`
  width: ${autoWidthVW(1920)};
  background: #1a202e;
  box-shadow: 0px -4px 10px 0px #080a0f;
  padding-right: ${autoWidthVW(281)};
  display: flex;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`
const FooterLogo = styled.img`
  margin-left: ${autoWidthVW(370)};
  margin-top: ${autoWidthVW(68)};
  margin-bottom: ${autoWidthVW(47)};
  width: ${autoWidthVW(143)};
`
const IconAndCopyright = styled.div`
  margin-left: ${autoWidthVW(798)};
  margin-top: ${autoWidthVW(47)};
  display: flex;
  flex-direction: column;
`
const LinkIcons = styled.div`
  margin-left: ${autoWidthVW(138)};
  display: flex;
  justify-content: space-between;
`
const LinkIcon = styled.img`
  width: ${autoWidthVW(40)};
  margin-right: ${autoWidthVW(37)};
`
const LinkIconU = styled.img`
  width: ${autoWidthVW(36)};
  margin-right: ${autoWidthVW(37)};
`
const Copyright = styled.div`
  margin-top: ${autoWidthVW(30)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};
`
export default Footer
