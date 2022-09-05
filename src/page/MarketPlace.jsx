import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import TopGroup from '../components/TopGroup'
import MobileTop from '../components/MobileTop'
import Bottom from '../components/Bottom'
function MarketPlace() {
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
  const [menuIndex, setMenuIndex] = useState(3)
  return (
    <Page>
      <MobileTop></MobileTop>
      <Content>
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
          <TopGroup></TopGroup>
          <NavAndIcon>
            <Nav>
              <UnChckNav>AVAILABLE</UnChckNav>
              <CheckNav>ON MARKETPLACE</CheckNav>
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
          <CenterNav>
            <CheckMenuWords>FOOD</CheckMenuWords>
            <CenterMenuWords>PROPS</CenterMenuWords>
            <CenterMenuWords>ORE</CenterMenuWords>
          </CenterNav>
          <UnderLine></UnderLine>
          <ChooseBotton>
            <ChooseBootonWords>Market Place-Food</ChooseBootonWords>
          </ChooseBotton>
          <SkillDetailsTop>
            <Puffer>
              <Num>9</Num>
              <NoNum>NO.2341355756</NoNum>
            </Puffer>
            <Shark></Shark>
            <Narwhal>
              <Num>2</Num>
              <NoNum>NO.2341355756</NoNum>
            </Narwhal>
          </SkillDetailsTop>
          <SkillDetailsDown>
            <Turtle>
              <Num>6</Num>
              <NoNum>NO.2341355756</NoNum>
            </Turtle>
            <Octopus>
              <Num>1</Num>
              <NoNum>NO.2341355756</NoNum>
            </Octopus>
          </SkillDetailsDown>
          <MobileSkill>
            <Narwhal>
              <Num>2</Num>
              <NoNum>NO.2341355756</NoNum>
            </Narwhal>
            <Shark></Shark>
            <Turtle>
              <Num>6</Num>
              <NoNum>NO.2341355756</NoNum>
            </Turtle>
            <Octopus>
              <Num>1</Num>
              <NoNum>NO.2341355756</NoNum>
            </Octopus>
            <Puffer>
              <Num>9</Num>
              <NoNum>NO.2341355756</NoNum>
            </Puffer>
          </MobileSkill>
          <MobileLinkIcons>
            <LinkIcon src={ImageCommon.github}></LinkIcon>
            <LinkIconU src={ImageCommon.twitter}></LinkIconU>
            <LinkIcon src={ImageCommon.telegram}></LinkIcon>
          </MobileLinkIcons>
          <MobileCopyRight>
            @2022 Ocean Park.All Rights Reserved.
          </MobileCopyRight>
          <Bottom>
            {/* <BottomContent>
              <Boxtop20>
                <HomeIcon src={ImageCommon.Home}></HomeIcon>
                <Words>Home</Words>
              </Boxtop20>
              <Boxtop20>
                <GameIcon src={ImageCommon.GameBright}></GameIcon>
                <BrightWords>Game</BrightWords>
              </Boxtop20>
              <Boxtop23>
                <MarketIcon src={ImageCommon.Market}></MarketIcon>
                <Words>Market</Words>
              </Boxtop23>
            </BottomContent> */}
          </Bottom>
        </Right>
      </Content>
      <Fotter>
        <FooterLogo src={ImageCommon.logo}></FooterLogo>
        <FooterRight>
          <LinkIcons>
            <LinkIcon src={ImageCommon.github}></LinkIcon>
            <LinkIconU src={ImageCommon.twitter}></LinkIconU>
            <LinkIcon src={ImageCommon.telegram}></LinkIcon>
          </LinkIcons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </FooterRight>
      </Fotter>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(2120)};
  background: rgba(26, 32, 46, 1);
  background-image: url(${ImageCommon.Banner2});
  background-size: ${autoWidthVW(1920)} ${autoWidthVW(1200)};
  background-repeat: no-repeat;
`
const Content = styled.div`
  height: ${autoWidthVW(1940)};
  display: flex;

  @media (max-width: 768px) {
    height: auto;
    background: #131922;
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
const Right = styled.div`
  width: ${autoWidthVW(1580)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
  }
`

const NavAndIcon = styled.div`
  margin-left: ${autoWidthVW(81)};
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
  width: ${autoWidthVW(619)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const UnChckNav = styled.div`
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
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};
`
const Icons = styled.div`
  margin-left: ${autoWidthVW(305)};
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
  margin-top: ${autoWidthVW(38)};
  margin-left: ${autoWidthVW(55)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterNav = styled.div`
  width: ${autoWidthVW(515)};
  height: ${autoWidthVW(60)};
  margin-left: ${autoWidthVW(75)};
  background: #5b6278;
  border-radius: 0px 0px ${autoWidthVW(30)} ${autoWidthVW(30)};
  position: relative;
  top: ${autoWidthVW(-1)};
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterMenuWords = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
`
const CheckMenuWords = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(29)};
`
const UnderLine = styled.div`
  margin-left: ${autoWidthVW(75)};
  width: ${autoWidthVW(203)};
  height: ${autoWidthVW(10)};
  background: #8fd7ff;
  border-radius: ${autoWidthVW(5)};
  position: relative;
  top: ${autoWidthVW(-66)};
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`
const SkillDetailsTop = styled.div`
  margin-top: ${autoWidthVW(49)};
  margin-left: ${autoWidthVW(90)};
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
  background-image: url(${ImageCommon.MarketPuffer});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: ${autoWidthVW(312)};
    height: ${autoWidthVW(616)};
  }
`
const Shark = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.MarketShark});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: ${autoWidthVW(312)};
    height: ${autoWidthVW(616)};
  }
`
const Narwhal = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.MarketNarwhal});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: ${autoWidthVW(312)};
    height: ${autoWidthVW(616)};
  }
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
    margin-top: ${autoWidthVW(275)};
    margin-left: ${autoWidthVW(143)};
  }
`
const NoNum = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(95)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(24)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(16)};
    margin-left: ${autoWidthVW(72)};
  }
`
const SkillDetailsDown = styled.div`
  margin-left: ${autoWidthVW(90)};
  margin-top: ${autoWidthVW(124)};
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
  background-image: url(${ImageCommon.MarketTurtle});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: ${autoWidthVW(312)};
    height: ${autoWidthVW(616)};
  }
`
const Octopus = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(666)};
  background-image: url(${ImageCommon.MarketOctopus});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    width: ${autoWidthVW(312)};
    height: ${autoWidthVW(616)};
  }
`
const Fotter = styled.div`
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
const ChooseBotton = styled.div`
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.chooseBooton});
  background-size: 100% 100%;
  margin-top: ${autoWidthVW(25)};
  margin-left: ${autoWidthVW(48)};

  @media (min-width: 768px) {
    display: none;
  }
`
const ChooseBootonWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  margin-top: ${autoWidthVW(16)};
  width: ${autoWidthVW(178)};
  height: ${autoWidthVW(18)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(46)};
  box-sizing: border-box;
`
const MobileSkill = styled.div`
  margin-top: ${autoWidthVW(32)};
  margin-left: ${autoWidthVW(34)};
  margin-right: ${autoWidthVW(29)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileLinkIcons = styled.div`
  margin-top: ${autoWidthVW(37)};
  margin-left: ${autoWidthVW(110)};
  margin-right: ${autoWidthVW(112)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileCopyRight = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-left: ${autoWidthVW(65)};
  font-size: ${autoWidthVW(12)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(14)};

  @media (min-width: 768px) {
    display: none;
  }
`
// const Bottom = styled.div`
//   margin-top: ${autoWidthVW(30)};
//   width: ${autoWidthVW(375)};
//   height: ${autoWidthVW(120)};
//   background: #1d2633;
//   box-shadow: 0px ${autoWidthVW(-3)} ${autoWidthVW(10)} 0px rgba(0, 0, 0, 0.5);
//   border-radius: ${autoWidthVW(30)} ${autoWidthVW(30)} 0px 0px;
//   border: ${autoWidthVW(1)} solid;
//   border-image: linear-gradient(
//       180deg,
//       rgba(63, 74, 91, 1),
//       rgba(151, 151, 151, 0)
//     )
//     1 1;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `
const BottomContent = styled.div`
  margin-left: ${autoWidthVW(44)};
  margin-right: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const Boxtop20 = styled.div`
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Boxtop23 = styled.div`
  margin-top: ${autoWidthVW(23)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const HomeIcon = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const Words = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
const BrightWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const GameIcon = styled.img`
  widht: ${autoWidthVW(55)};
  height: ${autoWidthVW(40)};
`
const MarketIcon = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
export default MarketPlace
