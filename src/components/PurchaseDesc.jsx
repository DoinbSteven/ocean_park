import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function PurchaseDesc() {
  return (
    <Container>
      <FlexCenter>
        <PurchaseIcon src={ImageCommon.alga}></PurchaseIcon>
        <PurchaseWords>ALGA:34</PurchaseWords>
      </FlexCenter>
      <FlexCenterSpace>
        <PurchaseIcon src={ImageCommon.shanhu}></PurchaseIcon>
        <PurchaseWords>CORAL:23</PurchaseWords>
      </FlexCenterSpace>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
`
const PurchaseIcon = styled.img`
  width: ${autoWidthVW(50)};
`
const PurchaseWords = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`
const FlexCenterSpace = styled(FlexCenter)`
  margin-left: ${autoWidthVW(30)};
`
export default PurchaseDesc
