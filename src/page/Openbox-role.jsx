import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import '../common/custom.css'
import { useState } from 'react'
function Openbox_role() {
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
  const BtnList = ['Document', 'Buy ALGA', 'Buy CORAL', 'Sellect Wallet']
  const [tabIndex, setTabIndex] = useState(1)
  const [btnIndex, setBtnIndex] = useState(3)
  return (
    <Page>
      <CloseBtn></CloseBtn>
      <Puffer>
        <RankNum>9</RankNum>
        <NoNum>NO.2341355756</NoNum>
      </Puffer>
      <Receive></Receive>
      <Box></Box>
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
                    onClick={() => {
                      setBtnIndex(index)
                    }}>
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
          <Center>
            <OpenBoxRole src={ImageCommon.OpenBoxRole}></OpenBoxRole>
          </Center>
        </MainContent>
      </Content>
      <Footer>
        <BottomLogo src={ImageCommon.logo}></BottomLogo>
        <BottomCenter>
          <BottomNormalIcon src={ImageCommon.discord_icon}></BottomNormalIcon>
          <BottomNormalIcon src={ImageCommon.telegram_icon}></BottomNormalIcon>
          <BottomNormalIcon src={ImageCommon.twitter_icon}></BottomNormalIcon>
          <BottomNormalIcon src={ImageCommon.github_icon}></BottomNormalIcon>
        </BottomCenter>
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
    height: auto;
    background: rgba(19, 25, 34, 1);
    background-image: none;
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
      width: ${autoWidthVW(200)};
      height: ${autoWidthVW(50)};
      background-image: url(${ImageCommon.wallet});
      background-size: 100%;
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(16)};
      font-size: ${autoWidthVW(16)};
      font-family: Medium;
      font-weight: 500;
      color: #1a202e;
      line-height: ${autoWidthVW(19)};
      text-align: left;
      box-sizing: border-box;
      overflow: hidden;
    `}
`

const Center = styled.div`
  margin-top: ${autoWidthVW(71)};
  margin-left: ${autoWidthVW(55)};
  margin-right: ${autoWidthVW(252)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(30)};
    margin-left: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(0)};
    display: flex;
    flex-direction: column;
  }
`
const OpenBoxRole = styled.img`
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(889)};

  @media (max-width: 768px) {
    display: none;
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
  margin-left: ${autoWidthVW(281)};
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

const BottomCenter = styled.div`
  margin-top: ${autoWidthVW(86)};
  margin-left: ${autoWidthVW(324)};
  width: ${autoWidthVW(193)};
  display: flex;
  justify-content: space-between;
`
const CloseBtn = styled.div`
  position: fixed;
  left: ${autoWidthVW(305)};
  top: ${autoWidthVW(27)};
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
  background-image: url(${ImageCommon.close_white});
  background-size: 100% 100%;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`
const Puffer = styled.div`
  position: fixed;
  top: ${autoWidthVW(113)};
  left: ${autoWidthVW(83)};
  width: ${autoWidthVW(212)};
  height: ${autoWidthVW(316)};
  background-image: url(${ImageCommon.Puffer1});
  background-size: 100% 100%;
  z-index: 999;

  @media (min-width: 768px) {
    display: none;
  }
`
const RankNum = styled.div`
  margin-top: ${autoWidthVW(205)};
  margin-left: ${autoWidthVW(98)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(24)};
`
const NoNum = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(48)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const Box = styled.div`
  position: fixed;
  top: ${autoWidthVW(-20)};
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(742)};
  background-image: url(${ImageCommon.box});
  background-size: 100% 100%;
  z-index: 800;
  @media (min-width: 768px) {
    display: none;
  }
`
const Receive = styled.div`
  position: fixed;
  top: ${autoWidthVW(480)};
  left: ${autoWidthVW(80)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};
  background-image: url(${ImageCommon.Receive});
  background-size: 100% 100%;
  z-indx: 1000000;
  @media (min-width: 768px) {
    display: none;
  }
`

export default Openbox_role
