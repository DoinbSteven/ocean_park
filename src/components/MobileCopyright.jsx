import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
function MobileCopyright() {
  return <Container>@2022 Ocean Park.All Rights Reserved.</Container>
}
const Container = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(65)};
  margin-right: ${autoWidthVW(64)};
  font-size: ${autoWidthVW(12)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(14)};

  @media (min-width: 768px) {
    display: none;
  }
`
export default MobileCopyright
