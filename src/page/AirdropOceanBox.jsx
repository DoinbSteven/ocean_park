import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import '../common/custom.css'
import { useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
function AirdropOceanBOX() {
  const MenuList = [
    'Home',
    'Ocean Box',
    'Inventory',
    'Market Place',
    'Techcenter',
    'Shellmine',
    'Adventure',
    'Treasury',
    'invite',
  ]
  const BtnList = ['Document', 'Buy ALGA', 'Buy CORAL', 'Sellect Wallet']
  const [tabIndex, setTabIndex] = useState(1)
  const [btnIndex, setBtnIndex] = useState(3)
  const [navIndex, setNavIndex] = useState(1)
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Time>
        <DateShare>
          <DateNum>{zeroPad(days)}</DateNum>
          <DateWords>D</DateWords>
        </DateShare>
        <DateShare>
          <DateNum>{zeroPad(hours)}</DateNum>
          <DateWords>H</DateWords>
        </DateShare>
        <DateShare>
          <DateNum>{zeroPad(minutes)}</DateNum>
          <DateWords>M</DateWords>
        </DateShare>
        <DateShare>
          <DateNum>{zeroPad(seconds)}</DateNum>
          <DateWords>S</DateWords>
        </DateShare>
      </Time>
    )
  }
  return (
    <Page>
      <MobileTop>
        <SeeMore src={ImageCommon.seeMore}></SeeMore>
        <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
        <Bnb>BNB</Bnb>
        <MobileWallet src={ImageCommon.mWallet}></MobileWallet>
      </MobileTop>
      <Content>
        <LeftMenu>
          <TopLogo src={ImageCommon.logo}></TopLogo>
          <NavMenu>
            {MenuList.map((item, index) => {
              return (
                <MenuWords
                  selected={tabIndex === index}
                  onClick={() => setTabIndex(index)}>
                  {item}
                </MenuWords>
              )
            })}
            {/* <MenuWords>Home</MenuWords>
            <CheckMenu>Oecan Box</CheckMenu>
            <MenuWords>Inventory</MenuWords>
            <MenuWords>Market Place</MenuWords>
            <MenuWords>Techcenter</MenuWords>
            <MenuWords>Shellmine</MenuWords>
            <MenuWords>Adventure</MenuWords>
            <MenuWords>Treasury</MenuWords>
            <MenuWords>Invite</MenuWords> */}
          </NavMenu>
        </LeftMenu>
        <MainContent>
          <Group1>
            <PriceWords>
              ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT
            </PriceWords>
            <TopBtns>
              {BtnList.map((item, index) => {
                return (
                  <NormalBtn
                    choosed={btnIndex === index}
                    onClick={() => setBtnIndex(index)}>
                    {item}
                  </NormalBtn>
                )
              })}
              {/* <NormalBtn>Document</NormalBtn>
              <NormalBtn>Buy ALGA</NormalBtn>
              <NormalBtn>Buy CORAL</NormalBtn>
              <Wallet>
                <WalletWords>Sellect Wallet</WalletWords>
              </Wallet> */}
            </TopBtns>
          </Group1>
          <NavCenter>
            <NavCenterMenu>
              <div
                style={{ position: 'relative' }}
                onClick={() => setNavIndex(0)}>
                <UncheckMenu checked={navIndex === 0}>OCEAN BOX</UncheckMenu>
                <UnderLine sel={navIndex === 0}></UnderLine>
              </div>
              <div
                onClick={() => setNavIndex(1)}
                style={{ position: 'relative' }}>
                <UncheckMenu checked={navIndex === 1}>
                  AIRDROP OCEAN BOX
                </UncheckMenu>
                <UnderLine sel={navIndex === 1}></UnderLine>
              </div>
            </NavCenterMenu>
            <IconAndDigtal>
              <Alga>
                <Icon src={ImageCommon.alga}></Icon>
                <DigtalWords>ALGA:34</DigtalWords>
                <DigtalWordsm>34</DigtalWordsm>
              </Alga>
              <Coral>
                <Icon src={ImageCommon.shanhu}></Icon>
                <DigtalWords>CORAL:23</DigtalWords>
                <DigtalWordsm>23</DigtalWordsm>
              </Coral>
            </IconAndDigtal>
          </NavCenter>
          <Line></Line>

          <ChooseBtn>
            <ChooseBtnWords>Airdrop Ocean Box</ChooseBtnWords>
          </ChooseBtn>
          <Center>
            <AirdropImg src={ImageCommon.airDrop}></AirdropImg>
            <CountDown>Countdown</CountDown>
            <Banner1 src={ImageCommon.banner1}></Banner1>
            <List>
              <DurationTime src={ImageCommon.timeBtn}></DurationTime>
              <BigTitle>Airdrop Ocean Box</BigTitle>
              <Countdown
                date={Date.now() + 1000 * 60 * 60 * 24 * 2}
                renderer={renderer}
              />
              {/* <Time>
                <DateShare>
                  <DateNum>01</DateNum>
                  <DateWords>D</DateWords>
                </DateShare>
                <DateShare>
                  <DateNum>23</DateNum>
                  <DateWords>H</DateWords>
                </DateShare>
                <DateShare>
                  <DateNum>45</DateNum>
                  <DateWords>M</DateWords>
                </DateShare>
                <DateShare>
                  <DateNum>59</DateNum>
                  <DateWords>S</DateWords>
                </DateShare>
              </Time> */}
              <MobileBanner src={ImageCommon.banner1}></MobileBanner>
              <SmallerTitle>REDEMPTION CODE</SmallerTitle>
              <MobileTitle>Redemption Code</MobileTitle>
              <ListLine></ListLine>
              <EnterCode>Please Enter Redemption Code </EnterCode>
              <ConvertBtn src={ImageCommon.convert}></ConvertBtn>
            </List>
            <MobileLinkIcons>
              <LinkIcon src={ImageCommon.Discord}></LinkIcon>
              <LinkIcon src={ImageCommon.github}></LinkIcon>
              <LinkIcon src={ImageCommon.twitter}></LinkIcon>
              <LinkIcon src={ImageCommon.telegram}></LinkIcon>
            </MobileLinkIcons>
            <MobileCopyRight>
              @2022 Ocean Park.All Rights Reserved.
            </MobileCopyRight>
          </Center>
          <MobileBottom>
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
          </MobileBottom>
        </MainContent>
      </Content>
      <Footer>
        <BottomLogo src={ImageCommon.logo}></BottomLogo>
        <BottomRight>
          <BottomIcons>
            <BottomNormalIcon src={ImageCommon.github}></BottomNormalIcon>
            <BottomExcepIcon src={ImageCommon.twitter}></BottomExcepIcon>
            <BottomNormalIcon src={ImageCommon.telegram}></BottomNormalIcon>
          </BottomIcons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </BottomRight>
      </Footer>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1379)};
  background: #1a202e;
  background-image: url(${ImageCommon.boxBgc});
  background-size: ${autoWidthVW(1920)} ${autoWidthVW(1200)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1298)};
    background: #131922;
  }
`
const Content = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1200)};
  display: flex;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1298)};
    flex-direction: column;
  }
`
const LeftMenu = styled.div`
  width: ${autoWidthVW(340)};
  height: ${autoWidthVW(1080)};
  background: rgba(26, 32, 46, 0.4);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
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
  height: ${autoWidthVW(665)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
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
      font-size: ${autoWidthVW(24)};
      font-family: Medium;
      font-weight: 500;
      color: #1a202e;
      line-height: ${autoWidthVW(50)};
      text-align: center;
    `}
`
const CheckMenu = styled.div`
  width: ${autoWidthVW(260)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.checkBox});
  background-size: 100% 100%;
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(50)};
  text-align: center;
`
const MainContent = styled.div`
  width: ${autoWidthVW(1580)};
  height: ${autoWidthVW(1200)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1298)};
  }
`
const Group1 = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(73)};
  margin-right: ${autoWidthVW(254)};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const PriceWords = styled.div`
  width: ${autoWidthVW(220)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(25)};
`
const TopBtns = styled.div`
  margin-left: ${autoWidthVW(263)};
  // margin-right:${autoWidthVW(0)};
  width: ${autoWidthVW(770)};
  display: flex;
  justify-content: space-between;
`
const NormalBtn = styled.div`
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
      background-image: url(${ImageCommon.wallet});
      background-size: 100% 100%;
      width: ${autoWidthVW(200)};
      height: ${autoWidthVW(50)};
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(19)};
      padding-bottom: ${autoWidthVW(15)};
      box-sizing: border-box;
      color: #1a202e;
      line-height: ${autoWidthVW(15)};
      overflow: hidden;
      text-align: left;
    `}
`
const Wallet = styled.div`
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.wallet});
  background-size: 100%;
`
const WalletWords = styled.div`
  margin-left: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(16)};
  width: ${autoWidthVW(116)};
  height: ${autoWidthVW(16)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(19)};
`
const NavCenter = styled.div`
  margin-top: ${autoWidthVW(82)};
  margin-left: ${autoWidthVW(73)};
  margin-right: ${autoWidthVW(255)};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(0)};
    margin-left: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(0)};
  }
`
const IconAndDigtal = styled.div`
  margin-left: ${autoWidthVW(239)};
  width: ${autoWidthVW(320)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(20)};
    margin-left: ${autoWidthVW(48)};
    width: ${autoWidthVW(216)};
  }
`
const Alga = styled.div`
  width: ${autoWidthVW(139)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: ${autoWidthVW(79)};
  }
`
const Icon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const Coral = styled.div`
  width: ${autoWidthVW(151)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: ${autoWidthVW(77)};
  }
`
const DigtalWords = styled.div`
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
const DigtalWordsm = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};

  @media (min-width: 768px) {
    display: none;
  }
`
const NavCenterMenu = styled.div`
  margin-left: ${autoWidthVW(2)};
  width: ${autoWidthVW(693)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const UncheckMenu = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(38)};
  ${(props) =>
    props.checked &&
    css`
      font-size: ${autoWidthVW(32)};
      font-family: Gotham-Bold, Gotham;
      font-weight: bold;
      color: #8fd7ff;
      line-height: ${autoWidthVW(38)};
    `}
`

const Line = styled.div`
  margin-top: ${autoWidthVW(37)};
  margin-left: ${autoWidthVW(55)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #ffffff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`
const UnderLine = styled.div`
  // width: ${autoWidthVW(382)};

  ${(props) => {
    if (props.sel)
      return `
    height: ${autoWidthVW(10)};
    background: #8fd7ff;
    border-radius: ${autoWidthVW(5)};
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: ${autoWidthVW(77)};
    z-index: 3;
    `
    else return `display:none;`
  }}

  @media (max-width: 768px) {
    display: none;
  }
`
const Center = styled.div`
  margin-top: ${autoWidthVW(44)};
  margin-left: ${autoWidthVW(55)};
  margin-right: ${autoWidthVW(243)};
  display: flex;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(30)};
    margin-left: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(0)};
    flex-direction: column;
  }
`
const Banner1 = styled.img`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(635)};

  @media (max-width: 768px) {
    display: none;
  }
`
const List = styled.div`
  display: flex;
  flex-direction: column;
`
const DurationTime = styled.img`
  width: ${autoWidthVW(587)};
  height: ${autoWidthVW(216)};

  @media (max-width: 768px) {
    display: none;
  }
`
const BigTitle = styled.div`
  margin-left: ${autoWidthVW(80)};
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(72)};
  letter-spacing: ${autoWidthVW(1)};
  position: relative;
  top: ${autoWidthVW(-11)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Time = styled.div`
  margin-left: ${autoWidthVW(110)};
  width: ${autoWidthVW(359)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(53)};
    width: ${autoWidthVW(266)};
  }
`
const DateShare = styled.div`
  display: flex;
`
const DateNum = styled.div`
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #ffddc3;
  line-height: ${autoWidthVW(72)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(32)};
    color: #8fd7ff;
    line-height: ${autoWidthVW(49)};
  }
`
const DateWords = styled.div`
  margin-left: ${autoWidthVW(4)};
  margin-top: ${autoWidthVW(25)};
  margin-bottom: ${autoWidthVW(11)};
  font-size: ${autoWidthVW(24)};
  font-family: Regular;
  font-weight: 400;
  color: #ffffff;
  line-height: ${autoWidthVW(36)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(6)};
    margin-top: ${autoWidthVW(17)};
    margin-bottom: ${autoWidthVW(8)};
    font-size: ${autoWidthVW(16)};
    line-height: ${autoWidthVW(24)};
  }
`
const SmallerTitle = styled.div`
  margin-left: ${autoWidthVW(40)};
  margin-top: ${autoWidthVW(70)};
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};

  @media (max-width: 768px) {
    display: none;
  }
`
const ListLine = styled.div`
  margin-left: ${autoWidthVW(40)};
  margin-top: ${autoWidthVW(29)};
  width: ${autoWidthVW(500)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #979797;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`
const EnterCode = styled.div`
  margin-top: ${autoWidthVW(39)};
  margin-left: ${autoWidthVW(33)};
  width: ${autoWidthVW(500)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(2)} solid #8fd7ff;
  box-sizing: border-box;
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(45)};
  text-align: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(30)};
    margin-left: ${autoWidthVW(30)};
    width: ${autoWidthVW(315)};
    border: ${autoWidthVW(1)} solid #8fd7ff;
    font-size: ${autoWidthVW(12)};
    font-family: Medium;
    font-weight: 500;
    color: #5b6278;
    line-height: ${autoWidthVW(45)};
  }
`
const ConvertBtn = styled.img`
  margin-left: ${autoWidthVW(181)};
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(10)};
    margin-left: ${autoWidthVW(81)};
  }
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
const BottomLogo = styled.img`
  margin-top: ${autoWidthVW(69)};
  margin-left: ${autoWidthVW(370)};
  width: ${autoWidthVW(143)};
  height: ${autoWidthVW(64)};
`
const BottomRight = styled.div`
  margin-left: ${autoWidthVW(798)};
  display: flex;
  flex-direction: column;
`
const BottomIcons = styled.div`
  margin-top: ${autoWidthVW(47)};
  margin-left: ${autoWidthVW(138)};
  width: ${autoWidthVW(190)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const BottomNormalIcon = styled.img`
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
`
const BottomExcepIcon = styled.img`
  width: ${autoWidthVW(36)};
  height: ${autoWidthVW(29)};
`
const CopyRight = styled.div`
  margin-top: ${autoWidthVW(30)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};
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
const MobileLogo = styled.img`
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
const MobileWallet = styled.img`
  margin-left: ${autoWidthVW(8)};
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(51)};
`
const ChooseBtn = styled.div`
  margin-top: ${autoWidthVW(25)};
  margin-left: ${autoWidthVW(48)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.chooseBooton});
  background-size: 100% 100%;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const ChooseBtnWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const AirdropImg = styled.img`
  margin-left: ${autoWidthVW(15)};
  width: ${autoWidthVW(348)};
  height: ${autoWidthVW(190)};

  @media (min-width: 768px) {
    display: none;
  }
`
const CountDown = styled.div`
  margin-top: ${autoWidthVW(1)};
  margin-left: ${autoWidthVW(132)};
  font-size: ${autoWidthVW(22)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(33)};

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileBanner = styled.img`
  margin-top: ${autoWidthVW(30)};
  width: 100%;
  height: ${autoWidthVW(340)};

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileTitle = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(103)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileLinkIcons = styled.div`
  margin-top: ${autoWidthVW(53)};
  margin-left: ${autoWidthVW(88)};
  margin-right: ${autoWidthVW(87)};
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`
const LinkIcon = styled.img`
  width: ${autoWidthVW(32)};
  height: ${autoWidthVW(32)};
`
const MobileCopyRight = styled.div`
  margin-top: ${autoWidthVW(19)};
  margin-left: ${autoWidthVW(64)};
  font-size: ${autoWidthVW(12)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(14)};

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileBottom = styled.div`
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
  display: flex;
  box-sizing: border-box;

  @media (min-width: 768px) {
    display: none;
  }
`
const Home = styled.div`
  margin-left: ${autoWidthVW(44)};
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
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(14)};
`
const Game = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(73)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const GameIcon = styled.img`
  width: ${autoWidthVW(55)};
  height: ${autoWidthVW(40)};
`
const GameWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const Market = styled.div`
  margin-top: ${autoWidthVW(23)};
  margin-left: ${autoWidthVW(76)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const MarketIcon = styled.img`
  width: ${autoWidthVW(44)};
  height: ${autoWidthVW(40)};
`
const MarketWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(14)};
`
export default AirdropOceanBOX
