import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import MobileTopRd from '../components/MobileTopRd'
import LeftMenu from '../components/LeftMenu'
import TopGroup from '../components/TopGroup'
import FooterPl from '../components/FooterPl'
function Treasury() {
  return (
    <Page>
      <MobileTopRd></MobileTopRd>
      <Top>
        <LeftMenu></LeftMenu>
        <MainContent>
          <TopGroup></TopGroup>
          <TreasuryNav src={ImageCommon.Treasury}></TreasuryNav>
          <PurchaseTop>
            <TopShare>
              <TopCoinIcon src={ImageCommon.shanhu1}></TopCoinIcon>
              <TopCoinNum>34</TopCoinNum>
            </TopShare>
            <TopShare>
              <TopCoinIcon src={ImageCommon.shanhu}></TopCoinIcon>
              <TopCoinNum>23</TopCoinNum>
            </TopShare>
          </PurchaseTop>
          <DevideLine></DevideLine>
          <Coins>
            <CoinShare>
              <CoinIcon src={ImageCommon.BlueKey}></CoinIcon>
              <CoinNum>2</CoinNum>
            </CoinShare>
            <CoinShare>
              <CoinIcon src={ImageCommon.GreenKey}></CoinIcon>
              <CoinNum>5</CoinNum>
            </CoinShare>
            <CoinShare>
              <CoinIcon src={ImageCommon.GoldKey}></CoinIcon>
              <CoinNum>3</CoinNum>
            </CoinShare>
          </Coins>
          <ChooseBtn>
            <ChooseBtnWords>Treasure</ChooseBtnWords>
          </ChooseBtn>
          <Chests>
            <BlueChest>
              <ChestWords>Blue Chest</ChestWords>
              <ChestImg src={ImageCommon.Blue}></ChestImg>
              <PurchaseBtn>
                <CoinIcon src={ImageCommon.BlueKey}></CoinIcon>
                <PurchaseNum>X1</PurchaseNum>
              </PurchaseBtn>
            </BlueChest>
            <GreenChest>
              <ChestWords>Green Chest</ChestWords>
              <ChestImg src={ImageCommon.Green}></ChestImg>
              <PurchaseBtn>
                <CoinIcon src={ImageCommon.GreenKey}></CoinIcon>
                <PurchaseNum>X1</PurchaseNum>
              </PurchaseBtn>
            </GreenChest>
            <GoldChest>
              <ChestWords>Gold Chest</ChestWords>
              <ChestImg src={ImageCommon.Gold}></ChestImg>
              <PurchaseBtn>
                <CoinIcon src={ImageCommon.GoldKey}></CoinIcon>
                <PurchaseNum>X1</PurchaseNum>
              </PurchaseBtn>
            </GoldChest>
          </Chests>
        </MainContent>
      </Top>
      <FooterPl></FooterPl>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1380)};
  background: #1a202e;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1700)};
  }
`
const Top = styled.div`
  height: ${autoWidthVW(1200)};
  background-image: url(${ImageCommon.adventure});
  background-size: 100% 100%;
  display: flex;

  @media (max-width: 768px) {
    height: ${autoWidthVW(1540)};
    background-image: none;
  }
`

const TopLogo = styled.img`
  margin-top: ${autoWidthVW(73)};
  margin-left: ${autoWidthVW(70)};
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(89)};
`
const NavMenu = styled.div`
  margin-top: ${autoWidthVW(104)};
  height: ${autoWidthVW(664)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const MenuWords = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
`
const MainContent = styled.div`
  width: ${autoWidthVW(1580)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    background-image: url(${ImageCommon.TreasuryM});
    background-size: ${autoWidthVW(375)} ${autoWidthVW(812)};
    background-repeat: no-repeat;
  }
`

const TreasuryNav = styled.img`
  margin-top: ${autoWidthVW(71)};
  margin-left: ${autoWidthVW(55)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(85)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Coins = styled.div`
  margin-left: ${autoWidthVW(1032)};
  margin-top: ${autoWidthVW(11)};
  margin-right: ${autoWidthVW(252)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(155)};
    margin-top: ${autoWidthVW(19)};
    margin-right: ${autoWidthVW(31)};
  }
`
const CoinShare = styled.div`
  display: flex;
  align-items: center;
`
const CoinIcon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(31)};
    height: ${autoWidthVW(31)};
  }
`
const CoinNum = styled.div`
  margin-left: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const Chests = styled.div`
  margin-top: ${autoWidthVW(55)};
  margin-left: ${autoWidthVW(55)};
  margin-right: ${autoWidthVW(125)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(50)};
    margin-left: ${autoWidthVW(38)};
    margin-right: ${autoWidthVW(37)};
    flex-direction: column;
    height: ${autoWidthVW(1150)};
  }
`
const BlueChest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GreenChest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GoldChest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ChestWords = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};
`
const ChestImg = styled.img`
  margin-top: ${autoWidthVW(28)};
  width: ${autoWidthVW(440)};
  height: ${autoWidthVW(380)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(0)};
    width: ${autoWidthVW(300)};
    height: ${autoWidthVW(260)};
  }
`
const PurchaseBtn = styled.div`
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  background: linear-gradient(270deg, #9cd0ed 0%, #9bd0ed 53%, #b9e0f3 100%);
  border-radius: ${autoWidthVW(25)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(236, 249, 255, 1),
      rgba(105, 179, 218, 1)
    )
    1 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PurchaseNum = styled.div`
  font-size: ${autoWidthVW(40)};
  font-family: Regular;
  font-weight: 400;
  color: #28374c;
  line-height: ${autoWidthVW(60)};
`

const PurchaseTop = styled.div`
  margin-left: ${autoWidthVW(30)};
  margin-top: ${autoWidthVW(34)};
  width: ${autoWidthVW(176)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const TopShare = styled.div`
  display: flex;
  align-items: center;
`
const TopCoinIcon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const TopCoinNum = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const DevideLine = styled.div`
  margin-left: ${autoWidthVW(15)};
  margin-top: ${autoWidthVW(13)};
  width: ${autoWidthVW(345)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #ffffff;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }
`
const ChooseBtn = styled.div`
  margin-top: ${autoWidthVW(39)};
  margin-left: ${autoWidthVW(48)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.chooseBooton});
  background-size: 100% 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }
`
const ChooseBtnWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  margin-top: ${autoWidthVW(13)};
  font-size: ${autoWidthVW(18)};
  font-family: Gotham-Medium, Gotham;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
export default Treasury
