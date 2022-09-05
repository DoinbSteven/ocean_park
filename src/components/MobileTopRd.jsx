import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function MobileTopRd() {
  return (
    <Container>
      <TopLogo src={ImageCommon.mLogo2}></TopLogo>
      <Bnb>BNB</Bnb>
      <Wallet src={ImageCommon.mWallet}></Wallet>
    </Container>
  )
}
const Container = styled.div`
  width: 100%;
  background: #28374c;
  box-shadow: 0px ${autoWidthVW(4)} ${autoWidthVW(4)} 0px #131922;
  padding-left: ${autoWidthVW(15)};
  padding-top: ${autoWidthVW(10)};
  padding-right: ${autoWidthVW(15)};
  padding-bottom: ${autoWidthVW(10)};
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const TopLogo = styled.img`
  width: ${autoWidthVW(117)};
`
const Bnb = styled.div`
  margin-left: ${autoWidthVW(92)};
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
  margin-left: ${autoWidthVW(12)};
  width: ${autoWidthVW(60)};
`
export default MobileTopRd
