import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function MobilePurchase() {
  return (
    <Container>
      <Share>
        <IconImg src={ImageCommon.alga}></IconImg>
        <Words>34</Words>
      </Share>
      <Share>
        <IconImg src={ImageCommon.shanhu}></IconImg>
        <Words>23</Words>
      </Share>
    </Container>
  )
}
const Container = styled.div`
  margin-left: ${autoWidthVW(48)};
  margin-right: ${autoWidthVW(111)};
  margin-top: ${autoWidthVW(20)};
  display: flex;
  justify-content: space-between;
`
const IconImg = styled.img`
  width: ${autoWidthVW(50)};
`
const Words = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const Share = styled.div`
  dispaly: flex;
  align-items: center;
`
export default MobilePurchase
