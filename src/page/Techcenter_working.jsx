import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function NavMenuItem({ selected, children, onClick }) {
  if (selected) return <CheckMenu onClick={onClick}>{children}</CheckMenu>
  return <MenuWords onClick={onClick}>{children}</MenuWords>
}
function NormalBtnItem({ choosed, children, onClick }) {
  if (choosed)
    return (
      <WalletBtn onClick={onClick}>
        <WalletWords>{children}</WalletWords>
      </WalletBtn>
    )
  return <NormalBtn onClick={onClick}>{children}</NormalBtn>
}
function CheckNavItem({ navSelectd, children, onClick }) {
  if (navSelectd) return <CheckNav onClick={onClick}>{children}</CheckNav>
  return <UnCheckNav onClick={onClick}>{children}</UnCheckNav>
}
function Techcenter_working() {
  const [tabIndex, setTabIndex] = useState(3)
  const [chooseIndex, setChooseIndex] = useState(3)
  const [navIndex, setNavIndex] = useState(1)
  return (
    <Page>
      <MobileTop>
        <SeeMore src={ImageCommon.seeMore}></SeeMore>
        <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
        <Bnb>BNB</Bnb>
        <MobileWallet src={ImageCommon.mWallet}></MobileWallet>
      </MobileTop>
      <MainContent>
        <LeftMenu>
          <TopLogo src={ImageCommon.logo}></TopLogo>
          <NavMenu>
            <NavMenuItem
              selected={tabIndex === 0}
              onClick={() => setTabIndex(0)}>
              Home
            </NavMenuItem>
            <NavMenuItem
              selected={tabIndex === 1}
              onClick={() => setTabIndex(1)}>
              Ocean Park
            </NavMenuItem>
            <NavMenuItem
              selected={tabIndex === 2}
              onClick={() => setTabIndex(2)}>
              Inventory
            </NavMenuItem>
            {/* <MenuWords>Inventory</MenuWords> */}
            <NavMenuItem
              selected={tabIndex === 3}
              onClick={() => setTabIndex(3)}>
              Market Place
            </NavMenuItem>
            {/* <CheckMenu>Market Place</CheckMenu> */}
            {/* <MenuWords>Techcenter</MenuWords> */}
            <NavMenuItem
              selected={tabIndex === 4}
              onClick={() => setTabIndex(4)}>
              Techcenter
            </NavMenuItem>
            <NavMenuItem
              selected={tabIndex === 5}
              onClick={() => setTabIndex(5)}>
              Shellmine
            </NavMenuItem>
            <NavMenuItem
              selected={tabIndex === 6}
              onClick={() => setTabIndex(6)}>
              Adventure
            </NavMenuItem>
            <NavMenuItem
              selected={tabIndex === 7}
              onClick={() => setTabIndex(7)}>
              Treasury
            </NavMenuItem>
            <NavMenuItem
              selected={tabIndex === 8}
              onClick={() => setTabIndex(8)}>
              Invite
            </NavMenuItem>
          </NavMenu>
        </LeftMenu>
        <Right>
          <Group1>
            <PriceWords>
              ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT
            </PriceWords>
            <TopBtns>
              <NormalBtnItem
                choosed={chooseIndex === 0}
                onClick={() => setChooseIndex(0)}>
                Document
              </NormalBtnItem>
              <NormalBtnItem
                choosed={chooseIndex === 1}
                onClick={() => setChooseIndex(1)}>
                Buy ALGA
              </NormalBtnItem>
              <NormalBtnItem
                choosed={chooseIndex === 2}
                onClick={() => setChooseIndex(2)}>
                Buy CORAL
              </NormalBtnItem>
              <NormalBtnItem
                choosed={chooseIndex === 3}
                onClick={() => setChooseIndex(3)}>
                Sellect Wallet
              </NormalBtnItem>
            </TopBtns>
          </Group1>
          <NavAndIcon>
            <Nav>
              <div
                style={{ position: 'relative' }}
                onClick={() => setNavIndex(0)}>
                <CheckNav navSelectd={navIndex === 0}>READY</CheckNav>
                <UnderLine lineChecked={navIndex === 0}></UnderLine>
              </div>
              <div
                style={{ position: 'relative' }}
                onClick={() => setNavIndex(1)}>
                <CheckNav navSelectd={navIndex === 1}>WORKING</CheckNav>
                <UnderLine lineChecked={navIndex === 1}></UnderLine>
              </div>
            </Nav>
            <Icons>
              <IconShare>
                <Icon src={ImageCommon.alga}></Icon>
                <Digtal>ALGA:34</Digtal>
                <MobileDigtal>34</MobileDigtal>
              </IconShare>
              <IconShare>
                <Icon src={ImageCommon.shanhu}></Icon>
                <Digtal>CORAL:23</Digtal>
                <MobileDigtal>23</MobileDigtal>
              </IconShare>
            </Icons>
          </NavAndIcon>
          <Line></Line>

          <ChooseBtn>
            <ChooseBtnWords>Techcenter-Working</ChooseBtnWords>
          </ChooseBtn>
          <SkilDetailTop>
            <Puffer>
              <Num>9</Num>
              <NoNum>NO.2341355756</NoNum>
              <IncomeUp>
                <IncomePercent>
                  <IncomeWords>Income</IncomeWords>
                  <Percent>200%</Percent>
                </IncomePercent>
                <ReceiveBtn>Receive</ReceiveBtn>
              </IncomeUp>
              <SplitLine></SplitLine>
              <IncomeDown>
                <IncomeWords>Income</IncomeWords>
                <IncomeTime>23:45:56</IncomeTime>
              </IncomeDown>
              <ExitBtn src={ImageCommon.ExitBotton}></ExitBtn>
            </Puffer>
            <Shark>
              <SharkNum>9</SharkNum>
              <NoNum>NO.2341355756</NoNum>
              <IncomeUp>
                <IncomePercent>
                  <IncomeWords>Income</IncomeWords>
                  <Percent>200%</Percent>
                </IncomePercent>
                <ReceiveBtn>Receive</ReceiveBtn>
              </IncomeUp>
              <SplitLine></SplitLine>
              <IncomeDown>
                <IncomeWords>Income</IncomeWords>
                <IncomeTime>23:45:56</IncomeTime>
              </IncomeDown>
              <ExitBtn src={ImageCommon.ExitBotton}></ExitBtn>
            </Shark>
            <Narwhal>
              <Num>2</Num>
              <NoNum>NO.2341355756</NoNum>
              <IncomeUp>
                <IncomePercent>
                  <IncomeWords>Income</IncomeWords>
                  <Percent>200%</Percent>
                </IncomePercent>
                <ReceiveBtn>Receive</ReceiveBtn>
              </IncomeUp>
              <SplitLine></SplitLine>
              <IncomeDown>
                <IncomeWords>Income</IncomeWords>
                <IncomeTime>23:45:56</IncomeTime>
              </IncomeDown>
              <ExitBtn src={ImageCommon.ExitBotton}></ExitBtn>
            </Narwhal>
          </SkilDetailTop>
          <SkillDetailDown>
            <Turtle>
              <Num>6</Num>
              <NoNum>NO.2341355756</NoNum>
              <IncomeUp>
                <IncomePercent>
                  <IncomeWords>Income</IncomeWords>
                  <Percent>200%</Percent>
                </IncomePercent>
                <ReceiveBtn>Receive</ReceiveBtn>
              </IncomeUp>
              <SplitLine></SplitLine>
              <IncomeDown>
                <IncomeWords>Income</IncomeWords>
                <IncomeTime>23:45:56</IncomeTime>
              </IncomeDown>
              <ExitBtn src={ImageCommon.ExitBotton}></ExitBtn>
            </Turtle>
            <Octopus>
              <OctopusNum>1</OctopusNum>
              <NoNum>NO.2341355756</NoNum>
              <IncomeUp>
                <IncomePercent>
                  <IncomeWords>Income</IncomeWords>
                  <Percent>200%</Percent>
                </IncomePercent>
                <ReceiveBtn>Receive</ReceiveBtn>
              </IncomeUp>
              <SplitLine></SplitLine>
              <IncomeDown>
                <IncomeWords>Income</IncomeWords>
                <IncomeTime>23:45:56</IncomeTime>
              </IncomeDown>
              <ExitBtn src={ImageCommon.ExitBotton}></ExitBtn>
            </Octopus>
          </SkillDetailDown>
          <MoblileTurtle>
            <Num>9</Num>
            <NoNum>NO.2341355756</NoNum>
            <IncomeUp>
              <IncomePercent>
                <IncomeWords>Income</IncomeWords>
                <IncomeNum>1234567</IncomeNum>
              </IncomePercent>
              <ReceiveBtn>Receive</ReceiveBtn>
            </IncomeUp>
            <SplitLine></SplitLine>
            <IncomeDown>
              <IncomeWords>Income</IncomeWords>
              <IncomeTime>23:45:56</IncomeTime>
            </IncomeDown>
            <ExitBtn src={ImageCommon.ExitBotton}></ExitBtn>
          </MoblileTurtle>
          <MobileLinkIcons>
            <LinkIcon src={ImageCommon.github}></LinkIcon>
            <LinkIconU src={ImageCommon.twitter}></LinkIconU>
            <LinkIcon src={ImageCommon.telegram}></LinkIcon>
          </MobileLinkIcons>
          <MobileCopyRight>
            @2022 Ocean Park.All Rights Reserved.
          </MobileCopyRight>
          <Bottom>
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
          </Bottom>
        </Right>
      </MainContent>
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
  height: ${autoWidthVW(2120)};
  background: #1a202e;
  background-image: url(${ImageCommon.Banner2});
  background-size: 100% ${autoWidthVW(1200)};
  background-repeat: no-repeat;
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
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
  margin-left: ${autoWidthVW(15)};
`
const MobileLogo = styled.img`
  margin-left: ${autoWidthVW(4)};
  margin-top: ${autoWidthVW(15)};
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
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(51)};
  margin-left: ${autoWidthVW(8)};
`
const MainContent = styled.div`
  height: ${autoWidthVW(1940)};
  display: flex;

  @media (max-width: 768px) {
    height: ${autoWidthVW(1275)};
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
const Right = styled.div`
  width: ${autoWidthVW(1580)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    background: #131922;
  }
`
const Group1 = styled.div`
  margin-left: ${autoWidthVW(80)};
  margin-right: ${autoWidthVW(252)};
  margin-top: ${autoWidthVW(30)};
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
  line-height: ${autoWidthVW(25)};
`
const TopBtns = styled.div`
  margin-left: ${autoWidthVW(276)};
  margin-right: ${autoWidthVW(0)};
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
`
const WalletBtn = styled.div`
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.wallet});
  background-size: 100% 100%;
`
const WalletWords = styled.div`
  margin-left: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(16)};
  // margin-bottom:${autoWidthVW(15)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(19)};
`

const NavAndIcon = styled.div`
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(253)};
  margin-top: ${autoWidthVW(82)};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(20)};
    margin-left: ${autoWidthVW(48)};
    margin-right: ${autoWidthVW(111)};
  }
`
const Nav = styled.div`
  width: ${autoWidthVW(395)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const UnCheckNav = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(38)};
`
const CheckNav = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;

  color: #ffffff;
  line-height: ${autoWidthVW(38)};
  ${(props) =>
    props.navSelectd &&
    css`
      color: #8fd7ff;
    `}//   height: ${autoWidthVW(75)};
  //   border-bottom: ${autoWidthVW(10)} solid #8fd7ff;
  //   border-radius: ${autoWidthVW(5)};
`
const Icons = styled.div`
  margin-left: ${autoWidthVW(537)};
  width: ${autoWidthVW(320)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    width: ${autoWidthVW(216)};
  }
`
const IconShare = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const Digtal = styled.div`
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
  margin-left: ${autoWidthVW(47)};
  margin-top: ${autoWidthVW(37)};
  width: ${autoWidthVW(1280)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`
const UnderLine = styled.div`
  ${(props) => {
    if (props.lineChecked)
      return `
  position:absolute;
  left:0;
  right:0;
  top:${autoWidthVW(75)};
  height: ${autoWidthVW(10)};
  background: #8fd7ff;
  border-radius: ${autoWidthVW(7)};
  `
    else return `display:none`
  }}
`
const SkilDetailTop = styled.div`
  margin-left: ${autoWidthVW(90)};
  margin-top: ${autoWidthVW(66)};
  margin-right: ${autoWidthVW(283)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const Puffer = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.TechWorkingPuffer});
  background-size: 100% 100%;
  overflow: hidden;
`
const Num = styled.div`
  margin-top: ${autoWidthVW(300)};
  margin-left: ${autoWidthVW(166)};
  font-size: ${autoWidthVW(30)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(36)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(305)};
    margin-left: ${autoWidthVW(143)};
  }
`
const NoNum = styled.div`
  margin-top: ${autoWidthVW(19)};
  margin-left: ${autoWidthVW(95)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(24)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(75)};
  }
`
const IncomeUp = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(74)};
  margin-right: ${autoWidthVW(69)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(40)};
    margin-left: ${autoWidthVW(51)};
    margin-right: ${autoWidthVW(46)};
  }
`
const IncomePercent = styled.div`
  display: flex;
  flex-direction: column;
`
const IncomeWords = styled.div`
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(12)};
    font-family: Book;
    font-weight: normal;
    color: #ffffff;
    line-height: ${autoWidthVW(14)};
  }
`
const Percent = styled.div`
  margin-top: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(20)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(24)};
`
const ReceiveBtn = styled.div`
  margin-top: ${autoWidthVW(8)};
  width: ${autoWidthVW(100)};
  height: ${autoWidthVW(40)};
  border-radius: ${autoWidthVW(20)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #8fd7ff;
  line-height: ${autoWidthVW(36)};
  text-align: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(0)};
    width: ${autoWidthVW(100)};
    font-size: ${autoWidthVW(14)};
  }
`
const SplitLine = styled.div`
  margin-top: ${autoWidthVW(13)};
  margin-left: ${autoWidthVW(27)};
  width: ${autoWidthVW(300)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #5b6278;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(23)};
    margin-left: ${autoWidthVW(34)};
    width: ${autoWidthVW(240)};
  }
`
const IncomeDown = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(74)};
  margin-right: ${autoWidthVW(74)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(16)};
    margin-left: ${autoWidthVW(51)};
    margin-right: ${autoWidthVW(48)};
  }
`
const IncomeTime = styled.div`
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(19)};
`
const ExitBtn = styled.img`
  margin-left: ${autoWidthVW(70)};
  margin-top: ${autoWidthVW(10)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(48)};
    margin-top: ${autoWidthVW(10)};
  }
`
const Shark = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.TechWorkingShark});
  background-size: 100% 100%;
`
const SharkNum = styled.div`
  margin-top: ${autoWidthVW(295)};
  margin-left: ${autoWidthVW(165)};
  font-size: ${autoWidthVW(30)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(36)};
`
const Narwhal = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.TechWorkingNarwhal});
  background-size: 100% 100%;
`
const SkillDetailDown = styled.div`
  margin-top: ${autoWidthVW(160)};
  margin-left: ${autoWidthVW(88)};
  margin-right: ${autoWidthVW(710)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const Turtle = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.TechWorkingTurtle});
  background-size: 100% 100%;
`
const Octopus = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.TechWorkingOctopus});
  background-size: 100% 100%;
`
const Footer = styled.div`
  width: 100%;
  height: ${autoWidthVW(180)};
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
`
const FooterRight = styled.div`
  margin-left: ${autoWidthVW(798)};
  width: ${autoWidthVW(328)};
  display: flex;
  flex-direction: column;
`
const LinkIcons = styled.div`
  margin-left: ${autoWidthVW(138)};
  margin-top: ${autoWidthVW(47)};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  widht: ${autoWidthVW(36)};
  height: ${autoWidthVW(29)};

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
`
const OctopusNum = styled.div`
  margin-top: ${autoWidthVW(300)};
  margin-left: ${autoWidthVW(170)};
  font-size: ${autoWidthVW(30)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(36)};
`
const MobileDigtal = styled.div`
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
const ChooseBtn = styled.div`
  margin-left: ${autoWidthVW(48)};
  margin-top: ${autoWidthVW(25)};
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
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const MoblileTurtle = styled.div`
  width: ${autoWidthVW(312)};
  height: ${autoWidthVW(676)};
  margin-top: ${autoWidthVW(32)};
  margin-left: ${autoWidthVW(34)};
  background-image: url(${ImageCommon.TechWorkingTurtle});
  background-size: 100% 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }
`
const IncomeNum = styled.div`
  margin-top: ${autoWidthVW(12)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(19)};
`
const MobileLinkIcons = styled.div`
  margin-top: ${autoWidthVW(48)};
  margin-left: ${autoWidthVW(110)};
  margin-right: ${autoWidthVW(112)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileCopyRight = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(65)};
  width: ${autoWidthVW(246)};
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
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`
const Home = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(44)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
  margin-left: ${autoWidthVW(73)};
  margin-top: ${autoWidthVW(20)};
  diaplay: flex;
  flex-direction: column;
  justify-content: space-between;
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
  margin-left: ${autoWidthVW(76)};
  margin-top: ${autoWidthVW(23)};
  display: flex;
  flex-direction: column;
`
const MarketIcon = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const MarketWords = styled.div`
  margin-left: ${autoWidthVW(3)};
  margin-top: ${autoWidthVW(7)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #5b6278;
  line-height: ${autoWidthVW(17)};
`
export default Techcenter_working
