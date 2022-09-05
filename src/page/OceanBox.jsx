import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import '../common/custom.css'
import { useState } from 'react'
function OceanBox() {
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
  const BottonWordsList = [
    'Document',
    'Buy ALGA',
    'Buy CORAL',
    'Sellect Wallet',
  ]
  const [tabIndex, setTabIndex] = useState(1)
  const [bottonIndex, setBottonIndex] = useState(3)
  const [buyNum, setBuyNum] = useState(0)
  const [sure, setSure] = useState(0)
  return (
    <Container>
      <MoblePage>
        <Header>
          <SeeMoreImg src={ImageCommon.seeMore}></SeeMoreImg>
          <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
          <BnbBtn>
            <BnbWords>BNB</BnbWords>
          </BnbBtn>
          <WalletImg src={ImageCommon.mWallet}></WalletImg>
        </Header>
        <InfoDisplay>
          <AlgaIcon src={ImageCommon.alga}></AlgaIcon>
          <AlgaNum>34</AlgaNum>
          <Shanhu src={ImageCommon.shanhu}></Shanhu>
          <ShanhuNum>23</ShanhuNum>
        </InfoDisplay>

        <OceanBoxBtn>
          <OceanBoxWords>Ocean Box</OceanBoxWords>
        </OceanBoxBtn>
        <BannerImage src={ImageCommon.banner1}></BannerImage>
        <AmountTitle>Amount</AmountTitle>
        <AmountDisplay>
          <AlgaIcon src={ImageCommon.alga}></AlgaIcon> <AlgaNum>100</AlgaNum>
        </AmountDisplay>
        <NumChange>
          <PlusBtn src={ImageCommon.plus}></PlusBtn>
          <TextBox>
            <TextBoxWords>0</TextBoxWords>
          </TextBox>
          <ReduceBtn src={ImageCommon.reduce}></ReduceBtn>
        </NumChange>
        <BuyBotton src={ImageCommon.buyBotton}></BuyBotton>

        <Bottom>
          <BottomItems>
            <HomeItem>
              <HomeIcon src={ImageCommon.Home}></HomeIcon>
              <HomeWords>Home</HomeWords>
            </HomeItem>
            <GameItem>
              <GameIcon src={ImageCommon.GameBright}></GameIcon>
              <GameWords>Game</GameWords>
            </GameItem>
            <MarketItem>
              <MarketIcon src={ImageCommon.Market}></MarketIcon>
              <MarketWords>Market</MarketWords>
            </MarketItem>
          </BottomItems>
        </Bottom>
      </MoblePage>

      <Top>
        <LeftMenu>
          <Logo src={ImageCommon.logo}></Logo>
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
          <PriceDesc>ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT</PriceDesc>
          <Bttons>
            {BottonWordsList.map((item, index) => {
              return (
                <NormalBotton
                  choosed={bottonIndex === index}
                  onClick={() => setBottonIndex(index)}>
                  {item}
                </NormalBotton>
              )
            })}
          </Bttons>

          <TitleBox>
            <TitleContent>
              <div style={{ position: 'relative' }} onClick={() => setSure(0)}>
                <H1Title bright={sure === 0}>OCEAN BOX</H1Title>
                <SelectLine sel={sure === 0}></SelectLine>
              </div>
              <div style={{ position: 'relative' }} onClick={() => setSure(1)}>
                <H1Title bright={sure === 1}>AIRDROP OCEAN BOX</H1Title>
                <SelectLine sel={sure === 1}></SelectLine>
              </div>
            </TitleContent>
            <BoxContent>
              <AlgaBox>
                <BoxImg src={ImageCommon.alga}></BoxImg>
                <Caption>ALGA:34</Caption>
              </AlgaBox>
              <AlgaBox>
                <BoxImg src={ImageCommon.shanhu}></BoxImg>
                <Caption>CORAL:23</Caption>
              </AlgaBox>
            </BoxContent>
          </TitleBox>

          <Line>{/* <SelectLine></SelectLine> */}</Line>

          <Statis>
            <BigImg src={ImageCommon.banner1}></BigImg>
            <Scales>
              <Amount>
                <AmountWords>AMOUNT</AmountWords>
                <AlgaAmount>
                  <BoxImg src={ImageCommon.alga}></BoxImg>
                  <Caption1>100</Caption1>
                </AlgaAmount>
              </Amount>
              <Line2></Line2>
              <ChangeNum>
                <PlusBtn
                  src={ImageCommon.plus}
                  onClick={() => {
                    setBuyNum(buyNum + 1)
                  }}></PlusBtn>
                <TextBox>
                  <TextBoxWords>{buyNum}</TextBoxWords>
                </TextBox>
                <ReduceBtn
                  src={ImageCommon.reduce}
                  onClick={() => {
                    setBuyNum(buyNum - 1)
                  }}></ReduceBtn>
              </ChangeNum>
              <BuyBotton src={ImageCommon.buyBotton}></BuyBotton>
            </Scales>
          </Statis>
        </MainContent>
      </Top>

      <Footer>
        <LogoBottom src={ImageCommon.logo}></LogoBottom>
        <State>
          <Icons>
            <IconsImg src={ImageCommon.discord}></IconsImg>
            <IconsImg src={ImageCommon.github}></IconsImg>
            <IconsImg src={ImageCommon.twitter}></IconsImg>
            <IconsImg src={ImageCommon.telegram}></IconsImg>
          </Icons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </State>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1380)};
  background: rgba(26, 32, 46, 0.8);
  background-image: url(${ImageCommon.boxBgc});
  background-size: ${autoWidthVW(1920)} ${autoWidthVW(1200)};
  // display:flex;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1026)};
    background: #131922;
  }
`
const Header = styled.div`
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(80)};
  box-shadow: ${autoWidthVW(0)} ${autoWidthVW(4)} ${autoWidthVW(4)}
    ${autoWidthVW(0)} #131922;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const SeeMoreImg = styled.img`
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(15)};
    width: ${autoWidthVW(50)};
    height: ${autoWidthVW(50)};
  }
`
const MobileLogo = styled.img`
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(4)};
    width: ${autoWidthVW(90)};
    height: ${autoWidthVW(50)};
  }
`
const BnbBtn = styled.div`
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(79)};
    width: ${autoWidthVW(64)};
    height: ${autoWidthVW(23)};
    background: #ffab00;
    border-radius: ${autoWidthVW(12)};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const BnbWords = styled.div`
  @media (max-width: 768px) {
    font-size: ${autoWidthVW(14)};
    font-family: Medium;
    font-weight: 500;
    color: #ffffff;
    line-height: ${autoWidthVW(17)};
  }
`
const WalletImg = styled.img`
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(8)};
    width: ${autoWidthVW(50)};
    height: ${autoWidthVW(51)};
  }
`

const Top = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1200)};
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

const LeftMenu = styled.div`
  width: ${autoWidthVW(340)};
  height: ${autoWidthVW(1200)};
  background: rgba(26, 32, 46, 0.4);
  // border: ${autoWidthVW(1)} solid #5B6278;

  @media (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.img`
  margin-top: ${autoWidthVW(73)};
  margin-left: ${autoWidthVW(70)};
  width: ${autoWidthVW(200)};
  // height:${autoWidthVW(90)};
`
const NavMenu = styled.div`
  margin-top: ${autoWidthVW(83)};
  margin-bottom: ${autoWidthVW(209)};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MenuWords = styled.div`
  padding-top: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
  cursor: pointer;
  ${(props) =>
    props.selected &&
    css`
      padding-top: ${autoWidthVW(0)};
      margin-top: ${autoWidthVW(33)};
      //   box-sizing: border-box;
      width: ${autoWidthVW(260)};
      height: ${autoWidthVW(50)};
      background-image: url(${ImageCommon.checkBox});
      background-size: 100% 100%;
      font-size: ${autoWidthVW(24)};
      font-family: Medium;
      font-weight: 500;
      color: #1a202e;
      line-height: ${autoWidthVW(52)};
      text-align: center;
    `};
`
const MainContent = styled.div`
  // margin-left:${autoWidthVW(338)};
  width: ${autoWidthVW(1580)};
  height: ${autoWidthVW(1080)};
`
const PriceDesc = styled.div`
  float: left;
  margin-left: ${autoWidthVW(75)};
  margin-top: ${autoWidthVW(30)};
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(20)};
`
const Bttons = styled.div`
  float: left;
  margin-left: ${autoWidthVW(235)};
  margin-top: ${autoWidthVW(30)};
  width: ${autoWidthVW(770)};
  height: ${autoWidthVW(50)};
  display: flex;
  justify-content: space-between;
`
const NormalBotton = styled.div`
  width: ${autoWidthVW(160)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  display: flex;
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
  padding-left: ${autoWidthVW(23)};
  box-sizing: border-box;
  ${(props) =>
    props.choosed &&
    css`
      background-image: url(${ImageCommon.wallet});
      background-size: 100% 100%;
      width: ${autoWidthVW(200)};
      height: ${autoWidthVW(50)};
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(19)};
      box-sizing: border-box;
      color: #1a202e;
      line-height: ${autoWidthVW(19)};
    `}
`
// const ButtonWords = styled.div`
//   font-size: ${autoWidthVW(16)};
//   font-family: Medium;
//   font-weight: 500;
//   color: #ffffff;
//   line-height: ${autoWidthVW(50)};
// `
const SelectButtonWords = styled.div`
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(19)};
`
const SellectBtton = styled.div`
  background-image: url(${ImageCommon.wallet});
  background-size: 100% 100%;
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  padding-left: ${autoWidthVW(20)};
  padding-top: ${autoWidthVW(19)};
  box-sizing: border-box;
`
const TitleBox = styled.div`
  margin-left: ${autoWidthVW(55)};
  margin-top: ${autoWidthVW(162)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(79)};
  display: flex;
  padding-left: ${autoWidthVW(20)};
  align-items: center;
`
const TitleContent = styled.div`
  width: ${autoWidthVW(673)};
  display: flex;
  justify-content: space-between;
`
const H1Title = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #fff;
  line-height: ${autoWidthVW(38)};
  ${(props) =>
    props.bright &&
    css`
      color: #8fd7ff;
    `}
`
// const H1TitleBright = styled(H1Title)`
//   color: #8fd7ff;
// `

// const OBox = styled.div`
//     margin-left:${autoWidthVW(75)};
//     margin-top:${autoWidthVW(162)};
// `
// const AOBox = styled.div`
//     margin-left:${autoWidthVW(386)};
//     margin-top:${autoWidthVW(162)};
// `
const BoxContent = styled.div`
  width: ${autoWidthVW(320)};
  margin-left: ${autoWidthVW(239)};
  display: flex;
  justify-content: space-between;
`
const AlgaBox = styled.div`
  display: flex;
  // align-items:center;
  height: ${autoWidthVW(50)};
`
const Caption = styled.div`
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
`
const BoxImg = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
  vertical-align: middle;
`
const Line = styled.div`
  position: relative;
  margin-left: ${autoWidthVW(55)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #ffffff;
`
const SelectLine = styled.div`
  ${(props) => {
    if (!props.sel) return 'display:none'
    else
      return `
    position: absolute;
    top: ${autoWidthVW(55)};
    z-index: 1;
    // width: ${autoWidthVW(211)};
    left:0;
    right:0;
    height: ${autoWidthVW(10)};
    background: #8fd7ff;
    border-radius: ${autoWidthVW(5)};
    `
  }}
`
const Statis = styled.div`
  width: ${autoWidthVW(1233)};
  height: ${autoWidthVW(634)};
  margin-top: ${autoWidthVW(44)};
  margin-left: ${autoWidthVW(57)};
  display: flex;
  justify-content: space-between;
`
const BigImg = styled.img`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(634)};
`
const Scales = styled.div`
  width: ${autoWidthVW(500)};
  height: ${autoWidthVW(634)};
`
const Amount = styled.div`
  margin-top: ${autoWidthVW(191)};
  margin-right: ${autoWidthVW(1)};
  height: ${autoWidthVW(50)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const AmountWords = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};
`
const AlgaAmount = styled.div`
  width: ${autoWidthVW(120)};
  height: ${autoWidthVW(50)};
  display: flex;
  justify-content: space-between;
`
const Caption1 = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
`
const Line2 = styled.div`
  margin-top: ${autoWidthVW(29)};
  width: ${autoWidthVW(500)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #979797;
`
const ChangeNum = styled.div`
  margin-top: ${autoWidthVW(39)};
  width: ${autoWidthVW(484)};
  height: ${autoWidthVW(50)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PlusBtn = styled.img`
  width: ${autoWidthVW(41)};
  height: ${autoWidthVW(40)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(41)};
    height: ${autoWidthVW(40)};
  }
`
const TextBox = styled.div`
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(2)} solid #8fd7ff;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: ${autoWidthVW(168)};
    height: ${autoWidthVW(50)};
    border-radius: ${autoWidthVW(25)};
    border: ${autoWidthVW(1)} solid #8fd7ff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const TextBoxWords = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(29)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(18)};
    font-family: Medium;
    font-weight: 500;
    color: #8fd7ff;
    line-height: ${autoWidthVW(22)};
  }
`
const ReduceBtn = styled.img`
  width: ${autoWidthVW(42)};
  height: ${autoWidthVW(40)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(42)};
    height: ${autoWidthVW(40)};
  }
`
const BuyBotton = styled.img`
  margin-left: ${autoWidthVW(135)};
  margin-top: ${autoWidthVW(29)};
  width: ${autoWidthVW(215)};
  height: ${autoWidthVW(96)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(2)};
    margin-left: ${autoWidthVW(81)};
    width: ${autoWidthVW(215)};
    height: ${autoWidthVW(96)};
  }
`
const Footer = styled.div`
  margin-top: ${autoWidthVW(1)};
  height: ${autoWidthVW(179)};
  display: flex;
  background: #1a202e;
  box-shadow: 0px ${autoWidthVW(-4)} ${autoWidthVW(10)} 0px #080a0f;

  @media (max-width: 768px) {
    display: none;
  }
`
const LogoBottom = styled.img`
  margin-left: ${autoWidthVW(370)};
  margin-top: ${autoWidthVW(69)};
  width: ${autoWidthVW(144)};
  height: ${autoWidthVW(60)};
`
const State = styled.div`
  margin-left: ${autoWidthVW(797)};
  width: ${autoWidthVW(609)};
  display: flex;
  flex-direction: column;
`
const Icons = styled.div`
  margin-left: ${autoWidthVW(60)};
  margin-top: ${autoWidthVW(47)};
  width: ${autoWidthVW(261)};
  height: ${autoWidthVW(40)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const IconsImg = styled.img`
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
`
const CopyRight = styled.div`
  margin-top: ${autoWidthVW(30)};
  // margin-left:${autoWidthVW(797)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};
`
const InfoDisplay = styled.div`
  margin-left: ${autoWidthVW(48)};
  margin-top: ${autoWidthVW(20)};
  height: ${autoWidthVW(50)};
  display: flex;
`
const AlgaIcon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const AlgaNum = styled.div`
  margin-left: ${autoWidthVW(4)};
  margin-top: ${autoWidthVW(16)};
  font-size: ${autoWidthVW(18)};
  font-family: Gotham-Medium, Gotham;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const Shanhu = styled.img`
  margin-left: ${autoWidthVW(60)};
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const ShanhuNum = styled.div`
  margin-left: ${autoWidthVW(4)};
  margin-top: ${autoWidthVW(16)};
  font-size: ${autoWidthVW(18)};
  font-family: Gotham-Medium, Gotham;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const OceanBoxBtn = styled.div`
  margin-left: ${autoWidthVW(48)};
  margin-top: ${autoWidthVW(25)};
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.chooseBooton});
  background-size: 100% 100%;
`
const MoblePage = styled.div`
  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1206)};
    background: #131922;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const OceanBoxWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(50)};
`
const BannerImage = styled.img`
  margin-top: ${autoWidthVW(41)};
  width: 100%;
  height: ${autoWidthVW(340)};
`
const AmountTitle = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(150)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const AmountDisplay = styled.div`
  margin-top: ${autoWidthVW(7)};
  margin-left: ${autoWidthVW(143)};
  display: flex;
`
const NumChange = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(50)};
  width: ${autoWidthVW(275)};
  height: ${autoWidthVW(50)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Bottom = styled.div`
  margin-top: ${autoWidthVW(157)};
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(120)};
  background: #1d2633;
  box-shadow: ${autoWidthVW(0)} ${autoWidthVW(-3)} ${autoWidthVW(10)}
    ${autoWidthVW(10)} rgba(0, 0, 0, 0.5);
  border-radius: ${autoWidthVW(30)} ${autoWidthVW(30)} ${autoWidthVW(0)}
    ${autoWidthVW(0)};
  border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(63, 74, 91, 1),
      rgba(151, 151, 151, 0)
    )
    1 1;
`
const BottomItems = styled.div`
  margin-left: ${autoWidthVW(44)};
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(291)};
  height: ${autoWidthVW(64)};
  display: flex;
  justify-content: space-between;
`
const HomeItem = styled.div`
  display: flex;
  flex-direction: column;
`
const HomeIcon = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const HomeWords = styled.div`
  margin-top: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(14)};
  font-family: Gotham-Medium, Gotham;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const GameItem = styled.div`
  display: flex;
  flex-direction: column;
`
const GameIcon = styled.img`
  width: ${autoWidthVW(55)};
  height: ${autoWidthVW(40)};
`
const GameWords = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
const MarketItem = styled.div`
  margin-top: ${autoWidthVW(3)};
  display: flex;
  flex-direction: column;
`
const MarketIcon = styled.img`
  width: ${autoWidthVW(45)};
  height: ${autoWidthVW(40)};
`
const MarketWords = styled.div`
  margin-left: ${autoWidthVW(2)};
  margin-top: ${autoWidthVW(7)};
  font-size: ${autoWidthVW(14)};
  font-family: Gotham-Medium, Gotham;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
export default OceanBox
