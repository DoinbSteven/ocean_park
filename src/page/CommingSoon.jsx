import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function ComingSoon() {
  return (
    <Page>
      <MobileTop>
        <SeeMore src={ImageCommon.seeMore}></SeeMore>
        <MobileTopLogo src={ImageCommon.mobileLogo}></MobileTopLogo>
        <Bnb>BNB</Bnb>
        <Wallet src={ImageCommon.mWallet}></Wallet>
      </MobileTop>
      <Top>
        <LeftMenu>
          <TopLogo src={ImageCommon.logo}></TopLogo>
          <NavMenu>
            <MenuWords>Home</MenuWords>
            <MenuWords>Ocean Box</MenuWords>
            <MenuWords>Inventory</MenuWords>
            <MenuWords>Market Place</MenuWords>
            <MenuWords>Techcenter</MenuWords>
            <MenuWords>Shellmine</MenuWords>
            <MenuWords>Adventure</MenuWords>
            <MenuWords>Treasury</MenuWords>
            <MenuWords>Invite</MenuWords>
          </NavMenu>
        </LeftMenu>
        <Right>
          <Group>
            <PriceWords>
              ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT
            </PriceWords>
            <TopBtns>
              <TopBtn>Document</TopBtn>
              <TopBtn>Buy ALGA</TopBtn>
              <TopBtn>Buy CORAL</TopBtn>
              <TopBtn>Sellect Wallet</TopBtn>
            </TopBtns>
          </Group>
          <Purchase>
            <PurchaseShare>
              <CoinIcon src={ImageCommon.alga}></CoinIcon>
              <CoinWay>ALGA:34</CoinWay>
              <CoinNum>34</CoinNum>
            </PurchaseShare>
            <PurchaseShare>
              <CoinIcon src={ImageCommon.shanhu}></CoinIcon>
              <CoinWay>CORAL:23</CoinWay>
              <CoinNum>23</CoinNum>
            </PurchaseShare>
          </Purchase>
          <Line></Line>
          <CenterTitle src={ImageCommon.ComingSoon}></CenterTitle>
          <ChooseBtn>
            <ChooseBtnWords>Treasury</ChooseBtnWords>
          </ChooseBtn>
          <SoonTitle src={ImageCommon.SoonTitle}></SoonTitle>
        </Right>
      </Top>
      <Footer>
        <FooterLogo src={ImageCommon.logo}></FooterLogo>
        <FooterRight>
          <LinkIcons>
            <LinkIcon src={ImageCommon.github}></LinkIcon>
            <LinkIconU src={ImageCommon.twitter}></LinkIconU>
            <LinkIcon src={ImageCommon.telegram}></LinkIcon>
          </LinkIcons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </FooterRight>
      </Footer>
      <Bottom>
        <BottomContent>
          <Home>
            <HomeIcon src={ImageCommon.Home}></HomeIcon>
            <HomeWords>Home</HomeWords>
          </Home>
          <Game>
            <GameIcon src={ImageCommon.GameBright}></GameIcon>
            <GameWords>Game</GameWords>
          </Game>
          <Market>
            <MarketIcon src={ImageCommon.Market}></MarketIcon>
            <MarketWords>Market</MarketWords>
          </Market>
        </BottomContent>
      </Bottom>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1260)};
  background: rgba(26, 32, 46, 1);
  background-image: url(${ImageCommon.adventure});
  background-size: 100% ${autoWidthVW(1080)};
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1316)};
    background-image: none;
  }
`
const Top = styled.div`
  height: ${autoWidthVW(1080)};
  display: flex;

  @media (max-width: 768px) {
    height: ${autoWidthVW(800)};
    background-image: url(${ImageCommon.ComingBg});
    background-size: ${autoWidthVW(375)}, ${autoWidthVW(800)};
    background-repeat: no-repeat;
  }
`
const LeftMenu = styled.div`
  width: ${autoWidthVW(340)};
  background: rgba(26, 32, 46, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const TopLogo = styled.img`
  margin-top: ${autoWidthVW(73)};
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
const Right = styled.div`
  width: ${autoWidthVW(1580)};
  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
  }
`
const Group = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(252)};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const PriceWords = styled.div`
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(20)};
`
const TopBtns = styled.div`
  margin-left: ${autoWidthVW(283)};
  width: ${autoWidthVW(770)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopBtn = styled.div`
  width: ${autoWidthVW(160)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
  text-align: center;
`
const Purchase = styled.div`
  margin-left: ${autoWidthVW(1005)};
  margin-top: ${autoWidthVW(71)};
  margin-right: ${autoWidthVW(255)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(48)};
    margin-top: ${autoWidthVW(20)};
    margin-right: ${autoWidthVW(111)};
  }
`
const PurchaseShare = styled.div`
  display: flex;
  align-items: center;
`
const CoinIcon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const CoinWay = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Line = styled.div`
  margin-left: ${autoWidthVW(53)};
  margin-top: ${autoWidthVW(30)};
  margin-right: ${autoWidthVW(254)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterTitle = styled.img`
  margin-top: ${autoWidthVW(308)};
  margin-left: ${autoWidthVW(245)};
  width: ${autoWidthVW(881)};
  height: ${autoWidthVW(119)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Footer = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(180)};
  background: #1a202e;
  box-shadow: 0px ${autoWidthVW(-4)} ${autoWidthVW(10)} 0px #080a0f;
  display: flex;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(156)};
    box-shadow: none;
    flex-direcion: column;
  }
`
const FooterLogo = styled.img`
  margin-left: ${autoWidthVW(370)};
  margin-top: ${autoWidthVW(69)};
  width: ${autoWidthVW(143)};
  height: ${autoWidthVW(64)};

  @media (max-width: 768px) {
    display: none;
  }
`

const FooterRight = styled.div`
  margin-left: ${autoWidthVW(768)};
  margin-top: ${autoWidthVW(47)};
  width: ${autoWidthVW(328)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(65)};
    margin-top: ${autoWidthVW(46)};
    width: ${autoWidthVW(246)};
  }
`
const LinkIcons = styled.div`
  margin-left: ${autoWidthVW(138)};
  width: ${autoWidthVW(190)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(45)};
    width: ${autoWidthVW(153)};
  }
`
const LinkIcon = styled.img`
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(33)};
    height: ${autoWidthVW(32)};
  }
`
const LinkIconU = styled.img`
  width: ${autoWidthVW(35)};
  height: ${autoWidthVW(28)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(29)};
    height: ${autoWidthVW(23)};
  }
`
const CopyRight = styled.div`
  margin-top: ${autoWidthVW(30)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(12)};
    margin-top: ${autoWidthVW(20)};
    line-height: ${autoWidthVW(14)};
  }
`
const MobileTop = styled.div`
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(80)};
  background: #28374c;
  box-shadow: 0px ${autoWidthVW(4)} ${autoWidthVW(4)} 0px #131922;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const SeeMore = styled.img`
  margin-left: ${autoWidthVW(15)};
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const MobileTopLogo = styled.img`
  margin-left: ${autoWidthVW(4)};
  width: ${autoWidthVW(90)};
  height: ${autoWidthVW(50)};
`
const Bnb = styled.div`
  margin-left: ${autoWidthVW(79)};
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
const Wallet = styled.img`
  margin-left: ${autoWidthVW(8)};
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(51)};
`
const CoinNum = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const ChooseBtn = styled.div`
  margin-top: ${autoWidthVW(25)};
  margin-left: ${autoWidthVW(48)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.chooseBooton});
  background-size: 100% 100%;

  @media (min-width: 768px) {
    display: none;
  }
`
const ChooseBtnWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  margin-top: ${autoWidthVW(16)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(50)};
`
const SoonTitle = styled.img`
  margin-top: ${autoWidthVW(86)};
  margin-left: ${autoWidthVW(37)};
  width: ${autoWidthVW(300)};
  height: ${autoWidthVW(135)};
`
const Bottom = styled.div`
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(120)};
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
  margin-right: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`
const Home = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HomeIcon = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const HomeWords = styled.div`
  margin-top: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
const Game = styled.div`
  margin-top: ${autoWidthVW(20)};
  display: flex;
  flex-direction: column;
`
const GameIcon = styled.img`
  width: ${autoWidthVW(55)};
  height: ${autoWidthVW(40)};
`
const GameWords = styled.div`
  margin-left: ${autoWidthVW(4)};
  margin-top: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const Market = styled.div`
  margin-top: ${autoWidthVW(23)};
  display: flex;
  flex-direction: column;
`
const MarketIcon = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const MarketWords = styled.div`
  margin-top: ${autoWidthVW(7)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #5b6278;
  line-height: ${autoWidthVW(17)};
`
export default ComingSoon
