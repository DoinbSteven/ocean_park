import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import LeftMenu from '../components/LeftMenu'
import TopGroup from '../components/TopGroup'
function Treasury_open() {
  return (
    <>
      <Page>
        <Top>
          <LeftMenu></LeftMenu>
          <MainContent>
            <TopGroup></TopGroup>
            <TreasuryNav src={ImageCommon.Treasury}></TreasuryNav>
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
            <Center>
              <Green_Open>
                <Puffer>
                  <Num>9</Num>
                  <NoNum>NO.2341355756</NoNum>
                </Puffer>
              </Green_Open>
              <CenterRight>
                <Title src={ImageCommon.Title}></Title>
                <Receive>
                  <SmallTitle>Get Globefish </SmallTitle>
                  <Line></Line>
                  <NftNum>
                    <NftWords>NFT Number: </NftWords>
                    <NftNumber>123452346</NftNumber>
                  </NftNum>
                  <NftLevel>
                    <LevelWords>NFT Level:</LevelWords>
                    <LevelNum>Level 9</LevelNum>
                  </NftLevel>
                  <ReceiveBtn src={ImageCommon.Receive}></ReceiveBtn>
                </Receive>
              </CenterRight>
            </Center>
          </MainContent>
        </Top>
        <Down>
          <BlueOpen src={ImageCommon.Blue_Open}></BlueOpen>
          <GoldOpen src={ImageCommon.Gold_Open}></GoldOpen>
        </Down>
      </Page>
      <MobliePage>
        <CloseWhite src={ImageCommon.close_white}></CloseWhite>
        <MobileTitle src={ImageCommon.Title}></MobileTitle>
        <GreenOpen>
          <MobilePuffer>
            <NumM>9</NumM>
            <NoNumM>NO.2341355756</NoNumM>
          </MobilePuffer>
        </GreenOpen>
        <ReceiveM>
          <GetGobelfish>Get Globefish </GetGobelfish>
          <CenterLine></CenterLine>
          <NftNum>
            <NftWords>NFT Number: </NftWords>
            <NftNumber>123452346</NftNumber>
          </NftNum>
          <NftLevel>
            <LevelWords>NFT Level:</LevelWords>
            <LevelNum>Level 9</LevelNum>
          </NftLevel>
          <ReceiveBtn src={ImageCommon.Receive}></ReceiveBtn>
        </ReceiveM>
        <OpenBox>
          <BlueOpen src={ImageCommon.Blue_Open}></BlueOpen>
          <GoldOpen src={ImageCommon.Gold_Open}></GoldOpen>
        </OpenBox>
      </MobliePage>
    </>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(2205)};
  background: #1a202e;

  @media (max-width: 768px) {
    display: none;
  }
`
const Top = styled.div`
  height: ${autoWidthVW(1200)};
  background-image: url(${ImageCommon.Treasury_open});
  backgroud-size: 100% 100%;
  display: flex;
`

const MainContent = styled.div`
  width: ${autoWidthVW(1580)};
  background: rgba(19, 25, 34, 0.9);
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
const Center = styled.div`
  margin-top: ${autoWidthVW(65)};
  margin-left: ${autoWidthVW(53)};
  margin-right: ${autoWidthVW(214)};
  display: flex;
`
const Green_Open = styled.div`
  width: ${autoWidthVW(580)};
  height: ${autoWidthVW(800)};
  background-image: url(${ImageCommon.Green_Open});
  background-size: 100% 100%;
  position: relative;
  box-sizing: border-box;
`
const Puffer = styled.div`
  position: absolute;
  top: ${autoWidthVW(-8)};
  left: ${autoWidthVW(206)};
  z-index: 3;
  width: ${autoWidthVW(212)};
  height: ${autoWidthVW(316)};
  background-image: url(${ImageCommon.Puffer1});
  background-size: 100% 100%;
`
const Num = styled.div`
  margin-top: ${autoWidthVW(206)};
  margin-left: ${autoWidthVW(98)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(24)};
`
const NoNum = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(46)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const CenterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.img`
  margin-top: ${autoWidthVW(51)};
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(69)};
`
const Receive = styled.div`
  margin-top: ${autoWidthVW(110)};
  height: ${autoWidthVW(287)};
  width: ${autoWidthVW(500)};
  display: flex;
  flex-direction: column;
`
const SmallTitle = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};
`
const Line = styled.div`
  margin-top: ${autoWidthVW(29)};
  width: ${autoWidthVW(500)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #979797;
  box-sizing: border-box;
`
const NftNum = styled.div`
  margin-top: ${autoWidthVW(13)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(19)};
  }
`
const NftWords = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(16)};
  }
`
const NftNumber = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(16)};
  }
`
const NftLevel = styled.div`
  display: flex;
  justify-content: space-between;
`
const LevelWords = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(16)};
  }
`
const LevelNum = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(16)};
  }
`
const ReceiveBtn = styled.img`
  margin-left: ${autoWidthVW(128)};
  margin-top: ${autoWidthVW(36)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(48)};
    margin-top: ${autoWidthVW(10)};
  }
`
const Down = styled.div`
  width: ${autoWidthVW(1005)};
  display: flex;
`
const BlueOpen = styled.img`
  margin-left: ${autoWidthVW(380)};
  margin-top: ${autoWidthVW(105)};
  width: ${autoWidthVW(580)};
  height: ${autoWidthVW(800)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    margin-top: ${autoWidthVW(0)};
    width: ${autoWidthVW(340)};
    height: ${autoWidthVW(469)};
  }
`
const GoldOpen = styled.img`
  margin-left: ${autoWidthVW(96)};
  margin-top: ${autoWidthVW(105)};
  width: ${autoWidthVW(580)};
  height: ${autoWidthVW(800)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    margin-top: ${autoWidthVW(39)};
    width: ${autoWidthVW(340)};
    height: ${autoWidthVW(469)};
  }
`
const MobliePage = styled.div`
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(2125)};
  background: #1a202e;
  position: fixed;

  @media (min-width: 768px) {
    display: none;
  }
`
const CloseWhite = styled.img`
  margin-left: ${autoWidthVW(305)};
  margin-top: ${autoWidthVW(27)};
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
`
const MobileTitle = styled.img`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(38)};
  width: ${autoWidthVW(300)};
  height: ${autoWidthVW(30)};
`
const GreenOpen = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(18)};
  width: ${autoWidthVW(340)};
  height: ${autoWidthVW(469)};
  background-image: url(${ImageCommon.Green_Open});
  background-size: 100% 100%;
  position: relative;
`
const MobilePuffer = styled.div`
  position: absolute;
  top: ${autoWidthVW(-9)};
  left: ${autoWidthVW(66)};
  z-index: 3;
  width: ${autoWidthVW(212)};
  height: ${autoWidthVW(317)};
  background-image: url(${ImageCommon.Puffer1});
  background-size: 100% 100%;
`
const NumM = styled.div`
  margin-top: ${autoWidthVW(206)};
  margin-left: ${autoWidthVW(97)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(24)};
`
const NoNumM = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(48)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const ReceiveM = styled.div`
  margin-top: ${autoWidthVW(6)};
  margin-left: ${autoWidthVW(32)};
  width: ${autoWidthVW(315)};
  display: flex;
  flex-direction: column;
`
const GetGobelfish = styled.div`
  font-size: ${autoWidthVW(22)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(26)};
`
const CenterLine = styled.div`
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(315)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #979797;
`
const OpenBox = styled.div`
  margin-top: ${autoWidthVW(37)};
  display: flex;
  align-items: center;
  flex-direction: column;
`
export default Treasury_open
