import { autoWidthVW } from '../common/Common'
import styled, { css } from 'styled-components'
import ImageCommon from '../images/ImageCommon'
function MobileTop() {
  return (
    <Container>
      <SeeMore src={ImageCommon.seeMore}></SeeMore>
      <TopLogo src={ImageCommon.mobileLogo}></TopLogo>
      <Bnb>BNB</Bnb>
      <Wallet src={ImageCommon.mWallet}></Wallet>
    </Container>
  )
}
const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    padding: ${autoWidthVW(15)};
    background: #28374c;
    box-shadow: 0px ${autoWidthVW(4)} ${autoWidthVW(4)} 0px #131922;
    display: flex;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const SeeMore = styled.img`
  width: ${autoWidthVW(50)};
`
const TopLogo = styled.img`
  margin-left: ${autoWidthVW(4)};
  width: ${autoWidthVW(90)};
`
const Bnb = styled.div`
  margin-left: ${autoWidthVW(79)};
  width: ${autoWidthVW(64)};
  height: ${autoWidthVW(23)};
  background: #ffab00;
  border-radius: ${autoWidthVW(12)};
  text-align: center;
  line-height: ${autoWidthVW(23)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const Wallet = styled.img`
  margin-left: ${autoWidthVW(8)};
  width: ${autoWidthVW(50)};
`
export default MobileTop
