import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function OpenBox_bradgeList() {
  const MenuList = [
    'Home',
    'Ocena Box',
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
    <>
      <Page>
        <LeftMenu>
          <TopLogo src={ImageCommon.logo}></TopLogo>
          <NavMenu>
            {MenuList.map((item, index) => {
              return (
                <MenuWords
                  selected={tabIndex === index}
                  onClick={() => {
                    setTabIndex(index)
                  }}>
                  {item}
                </MenuWords>
              )
            })}
            {/* <MenuWords>Home</MenuWords>
            <MenuWords>Ocean Box</MenuWords>
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
                    Document
                  </TopBtn>
                )
              })}
              {/* <TopBtn choosed = {btnIndex === index}>Document</TopBtn>
              <TopBtn>Buy ALGA</TopBtn>
              <TopBtn>Buy CORAL</TopBtn>
              <TopBtn>Sellect Wallet</TopBtn> */}
            </TopBtns>
          </Group>
          <BradgeListNav src={ImageCommon.BradgeList}></BradgeListNav>
          <BradgeList>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
            <Share>
              <Digtal>
                <NoNum>NO.12345678</NoNum>
                <TimeNum>23:45:56</TimeNum>
                <SmallTitle>Shark Medal</SmallTitle>
                <X1>X1</X1>
              </Digtal>
              <Line></Line>
            </Share>
          </BradgeList>
        </MainContent>
      </Page>
      <MobilePage>
        <MobileTop>
          <MobieTopLogo src={ImageCommon.mobileLogo}></MobieTopLogo>
          <Bnb>BNB</Bnb>
          <Wallet src={ImageCommon.mWallet}></Wallet>
        </MobileTop>
        <PurchasePrice>
          <PuchaseBox>
            <PurchaseCoin src={ImageCommon.shanhu1}></PurchaseCoin>
            <PurchaseNum>34</PurchaseNum>
          </PuchaseBox>
          <PuchaseBox>
            <PurchaseCoin src={ImageCommon.shanhu}></PurchaseCoin>
            <PurchaseNum>23</PurchaseNum>
          </PuchaseBox>
        </PurchasePrice>
        <ChooseBtn>
          <ChooseBtnWords>My Exchange</ChooseBtnWords>
        </ChooseBtn>
        <List>
          <ListShare>
            <NumAndTime>
              <RankNum>NO.12345678</RankNum>
              <RankTime>23:45:56</RankTime>
            </NumAndTime>
            <DevideLine></DevideLine>
            <SharkMedal>
              <SharkMedalWords>Shark Medal</SharkMedalWords>
              <X1m>X1</X1m>
            </SharkMedal>
          </ListShare>
          <ListShare>
            <NumAndTime>
              <RankNum>NO.12345678</RankNum>
              <RankTime>23:45:56</RankTime>
            </NumAndTime>
            <DevideLine></DevideLine>
            <SharkMedal>
              <SharkMedalWords>Shark Medal</SharkMedalWords>
              <X1m>X1</X1m>
            </SharkMedal>
          </ListShare>
          <ListShare>
            <NumAndTime>
              <RankNum>NO.12345678</RankNum>
              <RankTime>23:45:56</RankTime>
            </NumAndTime>
            <DevideLine></DevideLine>
            <SharkMedal>
              <SharkMedalWords>Shark Medal</SharkMedalWords>
              <X1m>X1</X1m>
            </SharkMedal>
          </ListShare>
          <ListShare>
            <NumAndTime>
              <RankNum>NO.12345678</RankNum>
              <RankTime>23:45:56</RankTime>
            </NumAndTime>
            <DevideLine></DevideLine>
            <SharkMedal>
              <SharkMedalWords>Shark Medal</SharkMedalWords>
              <X1m>X1</X1m>
            </SharkMedal>
          </ListShare>
        </List>
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
      </MobilePage>
    </>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1200)};
  background: #1a202e;
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
      padding-top: ${autoWidthVW(13)};
      box-sizing: border-box;
      text-align: center;
    `}
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
      background-size: 100%, 100%;
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(19)};
      box-sizing: border-box;
      text-align: left;
      line-height: ${autoWidthVW(17)};
      color: #1a202e;
    `}
`
const BradgeListNav = styled.img`
  margin-left: ${autoWidthVW(55)};
  margin-top: ${autoWidthVW(71)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(85)};

  @media (max-width: 768px) {
    display: none;
  }
`
const BradgeList = styled.div`
  margin-left: ${autoWidthVW(75)};
  margin-top: ${autoWidthVW(41)};
  height: ${autoWidthVW(693)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const Share = styled.div`
  width: ${autoWidthVW(1250)};
  display: flex;
  flex-direction: column;
`
const Digtal = styled.div`
  display: flex;
  align-items: center;
`
const NoNum = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
`
const TimeNum = styled.div`
  margin-left: ${autoWidthVW(234)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
`
const SmallTitle = styled.div`
  margin-left: ${autoWidthVW(190)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(29)};
`
const X1 = styled.div`
  margin-left: ${autoWidthVW(291)};
  font-size: ${autoWidthVW(60)};
  font-family: Regular;
  font-weight: 400;
  color: #ffeabc;
  line-height: ${autoWidthVW(90)};
  letter-spacing: ${autoWidthVW(1)};
`
const Line = styled.div`
  margin-top: ${autoWidthVW(12)};
  width: ${autoWidthVW(1250)};
  height: ${autoWidthVW(2)};
  border: ${autoWidthVW(1)} solid #5b6278;
  box-sizing: border-box;
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

const MobieTopLogo = styled.img`
  margin-left: ${autoWidthVW(15)};
  width: ${autoWidthVW(117)};
  height: ${autoWidthVW(50)};
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
const Wallet = styled.img`
  margin-left: ${autoWidthVW(12)};
  width: ${autoWidthVW(60)};
  height: ${autoWidthVW(60)};
`
const PurchasePrice = styled.div`
  margin-left: ${autoWidthVW(30)};
  margin-right: ${autoWidthVW(169)};
  margin-top: ${autoWidthVW(34)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const PuchaseBox = styled.div`
  display: flex;
  align-items: center;
`
const PurchaseCoin = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const PurchaseNum = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const MobilePage = styled.div`
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(1160)};
  background: #131922;

  @media (min-width: 768px) {
    display: none;
  }
`
const ChooseBtn = styled.div`
  margin-top: ${autoWidthVW(11)};
  margin-left: ${autoWidthVW(48)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.chooseBooton});
  background-size: 100% 100%;
  overflow: hidden;
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
const List = styled.div`
  margin-top: ${autoWidthVW(55)};
  margin-left: ${autoWidthVW(30)};
  height: ${autoWidthVW(370)};
  width: ${autoWidthVW(315)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ListShare = styled.div`
  display: flex;
  flex-direction: column;
`
const NumAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const RankNum = styled.div`
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const RankTime = styled.div`
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const DevideLine = styled.div`
  margin-top: ${autoWidthVW(11)};
  width: ${autoWidthVW(316)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #5b6278;
  box-sizing: border-box;
`
const SharkMedal = styled.div`
  margin-top: ${autoWidthVW(8)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SharkMedalWords = styled.div`
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const X1m = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Regular;
  font-weight: 400;
  color: #ffeabc;
  line-height: ${autoWidthVW(36)};
`
const Bottom = styled.div`
  margin-top: ${autoWidthVW(124)};
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
export default OpenBox_bradgeList
