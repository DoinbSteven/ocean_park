import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import MobileTop from '../components/MobileTop'
import LeftMenu from '../components/LeftMenu'
import TopGroup from '../components/TopGroup'
import { useState } from 'react'
import Bottom from '../components/Bottom'
import Footer from '../components/Footer'
import MobileLinkIcons from '../components/MobileLinkIcons'
import MobileCopyright from '../components/MobileCopyright'
function Techcenter_ready() {
  const [navIndex, setNavIndex] = useState(0)
  return (
    <Page>
      <MobileTop></MobileTop>
      <MainContent>
        <LeftMenu></LeftMenu>
        <Right>
          <TopGroup></TopGroup>
          <NavAndIcon>
            <Nav>
              <div
                style={{ position: 'relative' }}
                onClick={() => {
                  setNavIndex(0)
                }}>
                <CheckNav checked={navIndex === 0}>READY</CheckNav>
                <UnderLine sel={navIndex === 0}></UnderLine>
              </div>
              <div
                style={{ position: 'relative' }}
                onClick={() => {
                  setNavIndex(1)
                }}>
                <CheckNav checked={navIndex === 1}>READY</CheckNav>
                <UnderLine sel={navIndex === 1}></UnderLine>
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
            <ChooseBtnWords>Techcenter- Ready</ChooseBtnWords>
          </ChooseBtn>
          <SkillDetailTop>
            <Puffer>
              <Num>9</Num>
              <NoNum>NO.2341355756</NoNum>
            </Puffer>
            <Shark></Shark>
            <Narwhal>
              <Num>2</Num>
              <NoNum>NO.2341355756</NoNum>
            </Narwhal>
          </SkillDetailTop>
          <SkillDetailDown>
            <Turtle>
              <Num>6</Num>
              <NoNum>NO.2341355756</NoNum>
            </Turtle>
            <Octopus>
              <Num>1</Num>
              <NoNum>NO.2341355756</NoNum>
            </Octopus>
          </SkillDetailDown>
          <MobileSkillDetail>
            <Narwhal>
              <Num>9</Num>
              <NoNum>NO.2341355756</NoNum>
            </Narwhal>
          </MobileSkillDetail>
          <div style={{ marginTop: `${autoWidthVW(128)}` }}>
            <MobileLinkIcons></MobileLinkIcons>
          </div>
          <MobileCopyright></MobileCopyright>
          <Bottom></Bottom>
        </Right>
      </MainContent>
      <Footer></Footer>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(2120)};
  background: rgba(26, 32, 46, 1);
  background-image: url(${ImageCommon.Banner2});
  background-size: 100% ${autoWidthVW(1200)};
  background-repeat: no-repeat;

  @media: (max-width:768px) {
    width: ${autoWidthVW(375)};
    height: auto;
    background-image: none;
  }
`
const MainContent = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1940)};
  display: flex;

  @media (max-width: 768px) {
    background: rgba(26, 32, 46, 1);
    height: auto;
  }
`
const Right = styled.div`
  width: ${autoWidthVW(1580)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
  }
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

const CheckNav = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;

  line-height: ${autoWidthVW(38)};
  ${(props) =>
    props.checked &&
    css`
      color: #8fd7ff;
    `}
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
  margin-top: ${autoWidthVW(38)};
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
    if (props.sel)
      return `
    position:absolute;
    left:0;
    right:0;
    top:${autoWidthVW(78)};
    height: ${autoWidthVW(10)};
    background: #8fd7ff;
    border-radius: ${autoWidthVW(10)};
    `
    else return 'display:none'
  }}

  @media (max-width: 768px) {
    display: none;
  }
`
const SkillDetailTop = styled.div`
  margin-top: ${autoWidthVW(66)};
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
  height: ${autoWidthVW(616)};
  background-image: url(${ImageCommon.TechReadyPuffer});
  background-size: 100% 100%;
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
    margin-top: ${autoWidthVW(290)};
    margin-left: ${autoWidthVW(143)};
  }
`
const NoNum = styled.div`
  margin-top: ${autoWidthVW(18)};
  margin-left: ${autoWidthVW(100)};
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
const Shark = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(616)};
  background-image: url(${ImageCommon.TechReadyshark});
  background-size: 100% 100%;
`
const Narwhal = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(616)};
  background-image: url(${ImageCommon.TechReadyNarwhal});
  background-size: 100% 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    width: ${autoWidthVW(312)};
    height: ${autoWidthVW(596)};
  }
`
const SkillDetailDown = styled.div`
  margin-top: ${autoWidthVW(54)};
  margin-left: ${autoWidthVW(90)};
  margin-right: ${autoWidthVW(708)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const Turtle = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(616)};
  background-image: url(${ImageCommon.TechReadyTurtle});
  background-size: 100% 100%;
`
const Octopus = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(616)};
  background-image: url(${ImageCommon.TechReadyOctopus});
  background-size: 100% 100%;
`

const LinkIcons = styled.div`
  margin-left: ${autoWidthVW(138)};
  margin-top: ${autoWidthVW(47)};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
const MobileSkillDetail = styled.div`
  margin-top: ${autoWidthVW(32)};
  margin-left: ${autoWidthVW(34)};

  @media (min-width: 768px) {
    display: none;
  }
`

export default Techcenter_ready
