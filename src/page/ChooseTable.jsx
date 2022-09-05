import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function ChooseTable() {
  return (
    <Page>
      <Top>
        <MobileLogo src={ImageCommon.mLogo2}></MobileLogo>
        <Bnb>BNB</Bnb>
        <MobileWallet src={ImageCommon.mWallet}></MobileWallet>
      </Top>
      <Purchase>
        <FlexCenter>
          <Img50 src={ImageCommon.alga}></Img50>
          <PurchaseWords>34</PurchaseWords>
        </FlexCenter>
        <FlexCenter>
          <Img50 src={ImageCommon.shanhu}></Img50>
          <PurchaseWords>23</PurchaseWords>
        </FlexCenter>
      </Purchase>
      <CheckTable>
        <FlexRow>
          <SelectedWords>Airdrop Ocean Box</SelectedWords>
          <SelectArrow src={ImageCommon.mDown}></SelectArrow>
        </FlexRow>
        <SelectLine></SelectLine>
        <NormalWords>Ocean Box</NormalWords>
        <Line></Line>
        <NormalWords>Airdrop Ocean Box</NormalWords>
      </CheckTable>
      <Banner src={ImageCommon.banner3}></Banner>
      <Redemption>Redemption Code</Redemption>
      <InputBox>
        <InputWords>Please Enter Redemption Code </InputWords>
      </InputBox>
      <ConvertBtn src={ImageCommon.convert}></ConvertBtn>
      <Bottom>
        <BottomContent>
          <ColBetween>
            <FlexBetween>
              <HomeIcon src={ImageCommon.Home}></HomeIcon>
              <GameIcon src={ImageCommon.GameBright}></GameIcon>
              <MarketIcon src={ImageCommon.Market}></MarketIcon>
            </FlexBetween>
            <FlexSpace>
              <Words>Home</Words>
              <BrightWords>Game</BrightWords>
              <Words>Market</Words>
            </FlexSpace>
          </ColBetween>
        </BottomContent>
      </Bottom>
    </Page>
  )
}
const Page = styled.div`
  width: 100%;
  background-color: #131922;

  @media (min-width: 768px) {
    display: none;
  }
`
const Top = styled.div`
  padding-top: ${autoWidthVW(18)};
  padding-right: ${autoWidthVW(15)};
  padding-bottom: ${autoWidthVW(10)};
  padding-left: ${autoWidthVW(15)};
  display: flex;
  align-items: center;
  background: #28374c;
  box-shadow: 0px ${autoWidthVW(4)} ${autoWidthVW(4)} 0px #131922;
`

const MobileLogo = styled.img`
  width: ${autoWidthVW(117)};
  // height: ${autoWidthVW(50)};
`
const Bnb = styled.div`
  margin-left: ${autoWidthVW(92)};
  width: ${autoWidthVW(64)};
  height: ${autoWidthVW(23)};
  background: #ffab00;
  border-radius: ${autoWidthVW(12)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(23)};
  text-align: center;
`
const MobileWallet = styled.img`
  margin-left: ${autoWidthVW(12)};
  width: ${autoWidthVW(50)};
  // height: ${autoWidthVW(51)};
`
const Purchase = styled.div`
  margin-left: ${autoWidthVW(48)};
  margin-top: ${autoWidthVW(20)};
  margin-right: ${autoWidthVW(111)};
  display: flex;
  justify-content: space-between;
`
const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`
const Img50 = styled.img`
  width: ${autoWidthVW(50)};
`
const PurchaseWords = styled.div`
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const CheckTable = styled.div`
  position: relative;
  z-index: 2;
  margin-left: ${autoWidthVW(48)};
  margin-top: ${autoWidthVW(24)};
  margin-right: ${autoWidthVW(47)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(150)};
  background: #1d2633;
  border-radius: ${autoWidthVW(30)};
  border: ${autoWidthVW(2)} solid #8FD7F;
  display: flex;
  flex-direction: column;
  // padding-left: ${autoWidthVW(24)};
  box-sizing: border-box;
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;
`
const SelectedWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  margin-top: ${autoWidthVW(16)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const SelectArrow = styled.img`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(36)};
  width: ${autoWidthVW(18)};
`
const SelectLine = styled.div`
  width: 100%;
  margin-top: ${autoWidthVW(15)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  box-sizing: border-box;
`

const NormalWords = styled.div`
  margin-left: ${autoWidthVW(23)};
  margin-top: ${autoWidthVW(11)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const Line = styled.div`
width:100%
height: ${autoWidthVW(1)};
border:${autoWidthVW(1)} solid #5B6278;
box-sizing:border-box;
margin-top:${autoWidthVW(14)};
`
const Banner = styled.img`
  width: 100%;
  position: relative;
  top: ${autoWidthVW(-58)};
  z-index: 1;
`
const Redemption = styled.div`
  margin-left: ${autoWidthVW(103)};
  margin-top: ${autoWidthVW(-35)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const InputBox = styled.div`
  margin-left: ${autoWidthVW(30)};
  margin-right: ${autoWidthVW(30)};
  margin-top: ${autoWidthVW(30)};
  width: ${autoWidthVW(315)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
`
const InputWords = styled.div`
  margin-left: ${autoWidthVW(16)};
  margin-top: ${autoWidthVW(15)};
  margin-right: ${autoWidthVW(16)};
  margin-bottom: ${autoWidthVW(15)};
  width: ${autoWidthVW(283)};
  text-align: center;
  font-size: ${autoWidthVW(12)};
  font-family: Medium;
  font-weight: 500;
  color: #5b6278;
  line-height: ${autoWidthVW(20)};
`
const ConvertBtn = styled.img`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(81)};
  width: ${autoWidthVW(214)};
`
const Bottom = styled.div`
  margin-top: ${autoWidthVW(60)};
  background: #1d2633;
  box-shadow: 0px ${autoWidthVW(-3)} ${autoWidthVW(10)} 0px rgba(0, 0, 0, 0.5);
  border-radius: ${autoWidthVW(30)} ${autoWidthVW(30)} 0px 0px;
  border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(63, 74, 91, 1),
      rgba(151, 151, 151, 0)
    )
    1 1;
`
const BottomContent = styled.div`
  margin-left: ${autoWidthVW(44)};
  margin-top: ${autoWidthVW(20)};
  margin-right: ${autoWidthVW(41)};
  margin-bottom: ${autoWidthVW(36)};
`
const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
`
const FlexSpace = styled(FlexBetween)`
  margin-top: ${autoWidthVW(10)};
`
const ColBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HomeIcon = styled.img`
  width: ${autoWidthVW(43)};
`
const GameIcon = styled.img`
  width: ${autoWidthVW(55)};
`
const MarketIcon = styled.img`
  margin-top: ${autoWidthVW(3)};
  width: ${autoWidthVW(43)}l;
`
const Words = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
const BrightWords = styled(Words)`
  color: #8fd7ff;
`
export default ChooseTable
