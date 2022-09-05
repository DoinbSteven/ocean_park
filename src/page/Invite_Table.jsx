import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function Invite_Table() {
  const MenuList = [
    'Home',
    'Ocean Box',
    'Inventory',
    'Market Place',
    'Techcenter',
    'Shellmine',
    'Adventure',
    'Treasury',
    'Invite',
  ]
  const [menuIndex, setMenuIndex] = useState(7)
  const BtnList = ['Document', 'Buy ALGA', 'Buy CORAL', 'Sellect Wallet']
  const [btnIndex, setBtnIndex] = useState(3)
  const [flag, setFlag] = useState(false)
  return (
    <Page>
      <FixedView sure={flag}>
        <BindBox>
          <CloseBtn
            src={ImageCommon.close_white}
            onClick={() => {
              setFlag(true)
            }}></CloseBtn>
          <BindId>BIND ID</BindId>
          <Daline></Daline>
          <ParentID>Parent ID</ParentID>
          <InputSquare>
            <InputWords>Please type ID</InputWords>
          </InputSquare>
          <BindBtn src={ImageCommon.BindBtn}></BindBtn>
        </BindBox>
      </FixedView>
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
            {MenuList.map((item, index) => {
              return (
                <MenuWords
                  selected={menuIndex === index}
                  onClick={() => {
                    setMenuIndex(index)
                  }}>
                  {item}
                </MenuWords>
              )
            })}
          </NavMenu>
        </LeftMenu>
        <Right>
          <Group>
            <PriceWords>
              ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT
            </PriceWords>
            <TopBtns>
              {BtnList.map((item, index) => {
                return (
                  <TopBtn
                    choosed={btnIndex === index}
                    onClick={() => {
                      setBtnIndex(index)
                    }}>
                    {item}
                  </TopBtn>
                )
              })}
            </TopBtns>
          </Group>
          <CenterNav>
            <InviteNav>Invite</InviteNav>
            <Purchase>
              <PurchaseShare>
                <CoinIcon src={ImageCommon.alga}></CoinIcon>
                <CoinWay>ALGA:34</CoinWay>
              </PurchaseShare>
              <PurchaseShare>
                <CoinIcon src={ImageCommon.shanhu}></CoinIcon>
                <CoinWay>CORAL:23</CoinWay>
              </PurchaseShare>
            </Purchase>
          </CenterNav>
          <Line></Line>
          <Center>
            <CenterLeft>
              <Banner src={ImageCommon.Invite_Banner}></Banner>
            </CenterLeft>
            <CenterRight>
              <LinkWords>Invitation Link</LinkWords>
              <LinkDisplay>
                <LinkState>
                  Https://play.milita.games?ref=0ajkshdsfbascsndj234aser3454fghd
                </LinkState>
              </LinkDisplay>
              <CopyBtn>
                <CopyBtnWords>Copy</CopyBtnWords>
              </CopyBtn>
            </CenterRight>
          </Center>
        </Right>
        <RewardTitle>Invitation Reward</RewardTitle>
        <InviteTable>
          <RowShare>
            <RoWords>Direct Invitation</RoWords>
            <RowNum>23</RowNum>
          </RowShare>
          <DevideLine></DevideLine>
          <RowShare>
            <RoWords>Invite Boxes</RoWords>
            <RowNum>23</RowNum>
          </RowShare>
          <DevideLine></DevideLine>
          <RowShare>
            <RoWords>Token reward available</RoWords>
            <RowNum>23</RowNum>
          </RowShare>
        </InviteTable>
        <WithDrawBtn src={ImageCommon.WithDraw}></WithDrawBtn>
        <NavIcons>
          <NavIcon src={ImageCommon.github}></NavIcon>
          <NavIconU src={ImageCommon.twitter}></NavIconU>
          <NavIcon src={ImageCommon.telegram}></NavIcon>
        </NavIcons>
        <MobileCopyright>@2022 Ocean Park.All Rights Reserved.</MobileCopyright>
      </Top>
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
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1379)};
  background: #1a202e;
  position: relative;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1275)};
  }
`
const FixedView = styled.div`
  position: absolute;
  top: 0;
  left: ${autoWidthVW(340)};
  right: 0;
  bottom: 0;
  background-color: rgba(19, 25, 34, 0.9);
  z-index: 999;
  // opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.sure &&
    css`
      display: none;
    `}

  @media (max-width:768px) {
    left: 0;
    align-items: flex-start;
  }
`
const Top = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1200)};
  background-image: url(${ImageCommon.boxBgc});
  background-size: 100% 100%;
  display: flex;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(995)};
    background-image: url(${ImageCommon.Invite_bgc});
    background-size: ${autoWidthVW(375)} ${autoWidthVW(500)};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  ${(props) =>
    props.selected &&
    css`
      width: ${autoWidthVW(260)};
      height: ${autoWidthVW(50)};
      background-image: url(${ImageCommon.checkBox});
      background-size: 100% 100%;
      color: #1a202e;
      text-align: center;
      padding-top: ${autoWidthVW(10)};
      box-sizing: border-box;
    `}
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
  ${(props) =>
    props.choosed &&
    css`
      width: ${autoWidthVW(200)};
      height: ${autoWidthVW(50)};
      background-image: url(${ImageCommon.wallet});
      background-size: 100% 100%;
      text-align: left;
      padding-top: ${autoWidthVW(19)};
      padding-left: ${autoWidthVW(20)};
      box-sizing: border-box;
      color: #1a202e;
      line-height: ${autoWidthVW(15)};
    `}
`
const CenterNav = styled.div`
  margin-top: ${autoWidthVW(71)};
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(253)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const InviteNav = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(38)};
`
const Purchase = styled.div`
  width: ${autoWidthVW(320)};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-left: ${autoWidthVW(55)};
  margin-top: ${autoWidthVW(30)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`
const Center = styled.div`
  margin-top: ${autoWidthVW(110)};
  margin-left: ${autoWidthVW(56)};
  margin-right: ${autoWidthVW(227)};
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterLeft = styled.div`
  width: ${autoWidthVW(700)};
`
const Banner = styled.img`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(655)};
`
const CenterRight = styled.div`
  width: ${autoWidthVW(700)};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: ${autoWidthVW(-73)};
`
const LinkWords = styled.div`
  margin-top: ${autoWidthVW(107)};
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(72)};
  letter-spacing: ${autoWidthVW(1)};
`
const LinkDisplay = styled.div`
  margin-top: ${autoWidthVW(80)};
  width: ${autoWidthVW(670)};
  height: ${autoWidthVW(160)};
  background: rgba(29, 38, 51, 0.8);
  border-radius: ${autoWidthVW(80)};
  font-size: ${autoWidthVW(16)};
  font-family: Gotham-Book, Gotham;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(160)};
  text-align: center;
`
const LinkState = styled.div`
  margin-left: ${autoWidthVW(158)};
  margin-top: ${autoWidthVW(47)};
  width: ${autoWidthVW(354)};
  height: ${autoWidthVW(65)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(24)};
`
const CopyBtn = styled.div`
  margin-top: ${autoWidthVW(50)};
  width: ${autoWidthVW(135)};
  height: ${autoWidthVW(50)};
  background: linear-gradient(270deg, #fe5368 0%, #e53653 53%, #d94356 100%);
  box-shadow: 0px ${autoWidthVW(2)} ${autoWidthVW(20)} 0px
      rgba(255, 158, 169, 0.51),
    inset 0px ${autoWidthVW(10)} ${autoWidthVW(18)} 0px #ff627b;
  border-radius: ${autoWidthVW(25)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(255, 166, 188, 1),
      rgba(79, 1, 5, 1)
    )
    1 1;
`
const CopyBtnWords = styled.div`
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
  text-align: center;
`
const Footer = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(179)};
  background: #1a202e;
  box-shadow: 0px ${autoWidthVW(-4)} ${autoWidthVW(10)} 0px #080a0f;
  display: flex;

  @media (max-width: 768px) {
    display: none;
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
const RewardTitle = styled.div`
  margin-top: ${autoWidthVW(346)};
  font-size: ${autoWidthVW(32)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(49)};

  @media (min-width: 768px) {
    display: none;
  }
`
const InviteTable = styled.div`
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(315)};
  height: ${autoWidthVW(240)};
  background: #1d2633;
  border-radius: ${autoWidthVW(30)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const RowShare = styled.div`
  width: ${autoWidthVW(255)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const RoWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const RowNum = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(29)};
`
const DevideLine = styled.div`
  width: ${autoWidthVW(279)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #5b6278;
  box-sizing: border-box;
`
const WithDrawBtn = styled.img`
  margin-top: ${autoWidthVW(10)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};

  @media (min-width: 768px) {
    display: none;
  }
`
const NavIcons = styled.div`
  margin-top: ${autoWidthVW(140)};
  width: ${autoWidthVW(153)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const NavIcon = styled.img`
  width: ${autoWidthVW(33)};
  height: ${autoWidthVW(32)};
`
const NavIconU = styled.img`
  width: ${autoWidthVW(29)};
  height: ${autoWidthVW(23)};
`
const MobileCopyright = styled.div`
  margin-top: ${autoWidthVW(20)};
  font-size: ${autoWidthVW(12)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(14)};

  @media (min-width: 768px) {
    display: none;
  }
`
const Bottom = styled.div`
  margin-top: ${autoWidthVW(30)};
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

  @media (min-width: 768px) {
    display: none;
  }
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
const BindBox = styled.div`
  width: ${autoWidthVW(710)};
  height: ${autoWidthVW(750)};
  background: #111821;
  border-radius: ${autoWidthVW(30)};
  border: ${autoWidthVW(10)} solid rgba(72, 80, 92, 1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: ${autoWidthVW(315)};
    height: ${autoWidthVW(350)};
    background: #1d2633;
    border: ${autoWidthVW(1)} solid #8fd7ff;
    margin-top: ${autoWidthVW(166)};
  }
`
const CloseBtn = styled.img`
  width: ${autoWidthVW(30)};
  margin-top: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(80)};
  margin-left: ${autoWidthVW(600)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(40)};
    height: ${autoWidthVW(40)};
    margin-top: ${autoWidthVW(27)};
    margin-right: ${autoWidthVW(37)};
    margin-left: ${autoWidthVW(238)};
  }
`
const BindId = styled.div`
  margin-left: ${autoWidthVW(167)};
  margin-top: ${autoWidthVW(102)};
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(24)};
    margin-left: ${autoWidthVW(104)};
    font-family: Regular;
    font-weight: 400;
    line-height: ${autoWidthVW(49)};
  }
`
const Daline = styled.div`
  margin-left: ${autoWidthVW(167)};
  margin-top: ${autoWidthVW(28)};
  margin-right: ${autoWidthVW(263)};
  border: ${autoWidthVW(1)} solid #777e90;

  @media (max-width: 768px) {
    display: none;
  }
`
const ParentID = styled.div`
  margin-top: ${autoWidthVW(23)};
  margin-left: ${autoWidthVW(167)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(6)};
    margin-left: ${autoWidthVW(124)};
    font-size: ${autoWidthVW(14)};
    line-height: ${autoWidthVW(17)};
  }
`
const InputSquare = styled.div`
  margin-left: ${autoWidthVW(167)};
  margin-right: ${autoWidthVW(173)};
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(370)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(2)} solid #8fd7ff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(38)};
    margin-right: ${autoWidthVW(37)};
    margin-top: ${autoWidthVW(24)};
    width: ${autoWidthVW(240)};
    border: none;
    background: #131922;
  }
`
const InputWords = styled.div`
  margin-top: ${autoWidthVW(19)};
  margin-right: ${autoWidthVW(124)};
  margin-bottom: ${autoWidthVW(15)};
  margin-left: ${autoWidthVW(125)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(10)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(13)};
    margin-right: ${autoWidthVW(25)};
    margin-bottom: ${autoWidthVW(17)};
    margin-left: ${autoWidthVW(60)};
    line-height: ${autoWidthVW(50)};
  }
`
const BindBtn = styled.img`
  width: ${autoWidthVW(214)};
  margin-top: ${autoWidthVW(40)};
  margin-right: ${autoWidthVW(251)};
  margin-bottom: ${autoWidthVW(213)};
  margin-left: ${autoWidthVW(245)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(19)};
    margin-right: ${autoWidthVW(51)};
    margin-bottom: ${autoWidthVW(10)};
    margin-left: ${autoWidthVW(50)};
  }
`
export default Invite_Table
