import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function OpenBox_badge() {
  const [tabIndex, setTabIndex] = useState(0)
  const MenuList = [
    'Home',
    'Ocean Box',
    'Inventory',
    ' Market Place',
    ' Techcenter',
    'Shellmine',
    'Adventure',
    ' Treasury',
    ' Invite',
  ]
  const BtnList = ['Document', 'Buy ALGA', 'Buy CORAL', 'Sellect Wallet']
  const MedalImgList1 = [
    ImageCommon.SharkMedal,
    ImageCommon.GlobefishMedal,
    ImageCommon.TurtleMedal,
    ImageCommon.NarwhalMedal,
    ImageCommon.OctopusMedal,
  ]
  const MedalImgList2 = [
    ImageCommon.LittleSquid,
    ImageCommon.BatFish,
    ImageCommon.Hammerhead,
    ImageCommon.Seahorse,
    ImageCommon.Crab,
  ]
  const [btnIndex, setBtnIndex] = useState(3)
  return (
    <Page>
      <MobileFixed>
        <CloseWhite src={ImageCommon.close_white}></CloseWhite>
        <GetMedal>Get Medal!</GetMedal>
        <GetMedalCard src={ImageCommon.SharkMedal}></GetMedalCard>
        <Box src={ImageCommon.box}></Box>
        <ReceiveBtn src={ImageCommon.Receive}></ReceiveBtn>
      </MobileFixed>
      <Top>
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
            {/* <MenuWords selected={tabIndex === 0} onClick={() => setTabIndex(0)}>
              Home
            </MenuWords>
            <MenuWords selected={tabIndex === 1} onClick={() => setTabIndex(1)}>
              Ocean Box
            </MenuWords>
            <MenuWords selected={tabIndex === 2} onClick={() => setTabIndex(2)}>
              Inventory
            </MenuWords>
            <MenuWords selected={tabIndex === 3} onClick={() => setTabIndex(3)}>
              Market Place
            </MenuWords>
            <MenuWords selected={tabIndex === 4} onClick={() => setTabIndex(4)}>
              Techcenter
            </MenuWords>
            <MenuWords selected={tabIndex === 5} onClick={() => setTabIndex(5)}>
              Shellmine
            </MenuWords>
            <MenuWords selected={tabIndex === 6} onClick={() => setTabIndex(6)}>
              Adventure
            </MenuWords>
            <MenuWords selected={tabIndex === 7} onClick={() => setTabIndex(7)}>
              Treasury
            </MenuWords>
            <MenuWords selected={tabIndex === 8} onClick={() => setTabIndex(8)}>
              Invite
            </MenuWords> */}
          </NavMenu>
        </LeftMenu>
        <MainContent>
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
              {/* <TopBtn>Document</TopBtn>
              <TopBtn>Buy ALGA</TopBtn>
              <TopBtn>Buy CORAL</TopBtn>
              <TopBtn>Sellect Wallet</TopBtn> */}
            </TopBtns>
          </Group>
          <CenterImg src={ImageCommon.Openbox_Badge}></CenterImg>
        </MainContent>
      </Top>
      <Down>
        <Row1>
          {MedalImgList1.map((item) => {
            return <MedalImg src={item}></MedalImg>
          })}
          {/* <MedalImg src={ImageCommon.SharkMedal}></MedalImg>
          <MedalImg src={ImageCommon.GlobefishMedal}></MedalImg>
          <MedalImg src={ImageCommon.TurtleMedal}></MedalImg>
          <MedalImg src={ImageCommon.NarwhalMedal}></MedalImg>
          <MedalImg src={ImageCommon.OctopusMedal}></MedalImg> */}
        </Row1>
        <Row2>
          {MedalImgList2.map((item) => {
            return <MedalImg src={item}></MedalImg>
          })}
          {/* <MedalImg src={ImageCommon.LittleSquid}></MedalImg>
          <MedalImg src={ImageCommon.BatFish}></MedalImg>
          <MedalImg src={ImageCommon.Hammerhead}></MedalImg>
          <MedalImg src={ImageCommon.Seahorse}></MedalImg>
          <MedalImg src={ImageCommon.Crab}></MedalImg> */}
        </Row2>
      </Down>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(2120)};
  background: #1a202e;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1900)};
  }
`
const Top = styled.div`
  height: ${autoWidthVW(1200)};
  background-image: url(${ImageCommon.boxBgc});
  background-size: 100% 100%;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const LeftMenu = styled.div`
  width: ${autoWidthVW(340)};
  display: flex;
  flex-direction: column;
  background: rgba(26, 32, 46, 0.4);
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
    `};
`
const MainContent = styled.div`
  width: ${autoWidthVW(1580)};
`
const Group = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(252)};
  display: flex;
  align-items: center;
`
const PriceWords = styled.div`
  width: ${autoWidthVW(248)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(20)};
`
const TopBtns = styled.div`
  margin-left: ${autoWidthVW(235)};
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
      box-sizing: border-box;
      overflow: hidden;
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(19)};
      line-height: ${autoWidthVW(15)};
      text-align: left;
      color: #1a202e;
    `}
`

const CenterImg = styled.img`
  margin-top: ${autoWidthVW(71)};
  margin-left: ${autoWidthVW(55)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(889)};
`
const Down = styled.div`
  height: ${autoWidthVW(90)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Row1 = styled.div`
  margin-left: ${autoWidthVW(334)};
  margin-top: ${autoWidthVW(72)};
  margin-right: ${autoWidthVW(362)};
  display: flex;
  justify-content: space-between;
`
const MedalImg = styled.img`
  width: ${autoWidthVW(212)};
  height: ${autoWidthVW(316)};
`
const Row2 = styled.div`
  margin-left: ${autoWidthVW(334)};
  margin-top: ${autoWidthVW(37)};
  margin-right: ${autoWidthVW(362)};
  display: flex;
  justify-content: space-between;
`
const MobileFixed = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(1900)};

  @media (min-width: 768px) {
    display: none;
  }
`
const CloseWhite = styled.img`
  margin-top: ${autoWidthVW(27)};
  margin-left: ${autoWidthVW(305)};
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
`
const GetMedal = styled.div`
  margin-top: ${autoWidthVW(47)};
  margin-left: ${autoWidthVW(48)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(30)};
  font-family: Regular;
  font-weight: 400;
  color: #ffeabc;
  line-height: ${autoWidthVW(46)};
  text-align: center;
`
const GetMedalCard = styled.img`
  position: relative;
  top: ${autoWidthVW(16)};
  left: ${autoWidthVW(83)};
  z-index: 3;
`
const Box = styled.img`
  position: relative;
  top: ${autoWidthVW(-370)};
  width: 100%;
  height: ${autoWidthVW(742)};
  z-index: 1;
`
const ReceiveBtn = styled.img`
  margin-left: ${autoWidthVW(80)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};
  position: relative;
  top: ${autoWidthVW(-620)};
`
export default OpenBox_badge
