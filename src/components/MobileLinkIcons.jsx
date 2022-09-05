import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function MobileLinkIcons() {
  return (
    <Container>
      <LinkIcon src={ImageCommon.github}></LinkIcon>
      <LinkIconU src={ImageCommon.twitter}></LinkIconU>
      <LinkIcon src={ImageCommon.telegram}></LinkIcon>
    </Container>
  )
}
const Container = styled.div`
  margin-left: ${autoWidthVW(110)};
  margin-right: ${autoWidthVW(112)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const LinkIcon = styled.img`
  width: ${autoWidthVW(33)};
`
const LinkIconU = styled.img`
  width: ${autoWidthVW(29)};
  height: ${autoWidthVW(23)};
`
export default MobileLinkIcons
