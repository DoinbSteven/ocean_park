import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import styled, { css } from 'styled-components'
import '../common/custom.css'
import { useState } from 'react'
function Adventure() {
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
  const [menuIndex, setMenuIndex] = useState(6)
  const [btnIndex, setBtnIndex] = useState(3)
  return (
    <Page>
      <Topper>
        <SeeMore src={ImageCommon.seeMore}></SeeMore>
        <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
        <Bnb>BNB</Bnb>
        <Wallet src={ImageCommon.mWallet}></Wallet>
      </Topper>
      <Container>
        <MainContainer>
          <LeftNav>
            <Logo src={ImageCommon.logo}></Logo>
            <NavMenu>
              {MenuList.map((item, index) => {
                return (
                  <NavMenuWords
                    selected={menuIndex === index}
                    onClick={() => {
                      setMenuIndex(index)
                    }}>
                    {item}
                  </NavMenuWords>
                )
              })}
              {/* <NavMenuWords>Home</NavMenuWords>
              <NavMenuWords>Ocean Box</NavMenuWords>
              <NavMenuWords>Inventory</NavMenuWords>
              <NavMenuWords>Market Place</NavMenuWords>
              <NavMenuWords>Techcenter</NavMenuWords>
              <NavMenuWords>Shellmine</NavMenuWords>
              <CheckMenu>
                <CheckedWords>Adventure</CheckedWords>
              </CheckMenu>
              <NavMenuWords>Treasury</NavMenuWords>
              <NavMenuWords>Invite</NavMenuWords> */}
            </NavMenu>
          </LeftNav>
          <MainContent>
            <MainTop>
              <PriceAndBtn>
                <PriceDesc>
                  ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT
                </PriceDesc>
                <Btns>
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
                  <CheckedBtn>Sellect Wallet</CheckedBtn> */}
                </Btns>
              </PriceAndBtn>
              <ImgAndDigtal>
                <Coral>
                  <Img src={ImageCommon.shanhu}></Img>
                  <Num>CORAL:23</Num>
                </Coral>
                <Alga>
                  <Img src={ImageCommon.alga}></Img>
                  <Num>ALGA:34</Num>
                </Alga>
                <MobileAlga>
                  <Img src={ImageCommon.alga}></Img>
                  <Num>34</Num>
                </MobileAlga>
                <MobileCoral>
                  <Img src={ImageCommon.shanhu}></Img>
                  <Num>23</Num>
                </MobileCoral>
              </ImgAndDigtal>
              <Line></Line>
              <Purchase>
                <PurchaseImages>
                  <PurchaseImage src={ImageCommon.Single}></PurchaseImage>
                  <PurchaseImage src={ImageCommon.multi}></PurchaseImage>
                  <PurchaseImage src={ImageCommon.world}></PurchaseImage>
                </PurchaseImages>
                <PurchasePrice>
                  <ExisitPrice>
                    <PriceWords>2000</PriceWords>
                    <PriceWay src={ImageCommon.alga}></PriceWay>
                  </ExisitPrice>
                  <SoonPrice>Coming Soon</SoonPrice>
                  <SoonPrice>Coming Soon</SoonPrice>
                </PurchasePrice>

                <Single>
                  <PurchaseImage src={ImageCommon.Single}></PurchaseImage>
                  <ExisitPrice>
                    <PriceWay src={ImageCommon.alga}></PriceWay>
                    <PriceWords>2000</PriceWords>
                  </ExisitPrice>
                </Single>
                <Multi>
                  <PurchaseImage src={ImageCommon.multi}></PurchaseImage>
                  <ExisitPrice>
                    <PriceWay src={ImageCommon.alga}></PriceWay>
                    <PriceWords>2000</PriceWords>
                  </ExisitPrice>
                </Multi>
                <World>
                  <PurchaseImage src={ImageCommon.world}></PurchaseImage>
                  <SoonPrice>Coming Soon</SoonPrice>
                </World>
              </Purchase>
            </MainTop>
          </MainContent>
        </MainContainer>
      </Container>

      <Footer>
        {/* <ContentBottom>
                    <NormalIcon src={ImageCommon.github}></NormalIcon>
                    <ExcIcon src={ImageCommon.twitter}></ExcIcon>
                    <NormalIcon src={ImageCommon.telegram}></NormalIcon>
                </ContentBottom> */}
        <BottomLogo src={ImageCommon.logo}></BottomLogo>
        <LinkAndCopyRight>
          <LinkIcons>
            <NormalIcon src={ImageCommon.github}></NormalIcon>
            <ExcIcon src={ImageCommon.twitter}></ExcIcon>
            <NormalIcon src={ImageCommon.telegram}></NormalIcon>
          </LinkIcons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </LinkAndCopyRight>
        <MobileIcons>
          <NormalIcon src={ImageCommon.github}></NormalIcon>
          <ExcIcon src={ImageCommon.twitter}></ExcIcon>
          <NormalIcon src={ImageCommon.telegram}></NormalIcon>
        </MobileIcons>
        <MobileCopyRight>@2022 Ocean Park.All Rights Reserved.</MobileCopyRight>
      </Footer>
      <BottomDiv>
        <Bottom>
          <Home>
            <HomeIcons src={ImageCommon.Home}></HomeIcons>
            <HomeWords>Home</HomeWords>
          </Home>
          <Game>
            <GameIcons src={ImageCommon.GameBright}></GameIcons>
            <GameWords>Game</GameWords>
          </Game>
          <Market>
            <MarketIcons src={ImageCommon.Market}></MarketIcons>
            <MarketWords>Market</MarketWords>
          </Market>
        </Bottom>
      </BottomDiv>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1260)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(2025)};
  }
`
const Container = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1080)};
  display: flex;
`
const MainContainer = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1080)};
  background: rgba(26, 32, 46, 0.4);
  background-image: url(${ImageCommon.adventure});
  background-size: 100% 100%;
  display: flex;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1800)};
    background: #131922;
    display: flex;
  }
`
const LeftNav = styled.div`
  width: ${autoWidthVW(340)};
  height: ${autoWidthVW(1080)};
  background: rgba(26, 32, 46, 0.4);
  // border: ${autoWidthVW(1)} solid #5B6278;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }
`
const Logo = styled.img`
  margin-top: ${autoWidthVW(73)};
  margin-left: ${autoWidthVW(70)};
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(90)};
`
const NavMenu = styled.div`
  margin-top: ${autoWidthVW(104)};
  // margin-bottom:${autoWidthVW(150)};
  height: ${autoWidthVW(664)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const NavMenuWords = styled.div`
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
      background-size: 100%, 100%;
      padding-top: ${autoWidthVW(11)};
      box-sizing: border-box;
      text-align: center;
      color: #1a202e;
    `}
`
const CheckMenu = styled.div`
  margin-left: ${autoWidthVW(40)};
  width: ${autoWidthVW(260)};
  height: ${autoWidthVW(50)};
  background: linear-gradient(270deg, #9cd0ed 0%, #9bd0ed 53%, #b9e0f3 100%);
  border-radius: ${autoWidthVW(25)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(236, 249, 255, 1),
      rgba(105, 179, 218, 1)
    )
    1 1;
`
const CheckedWords = styled.div`
  margin-left: ${autoWidthVW(50)};
  margin-top: ${autoWidthVW(11)};
  margin-bottom: ${autoWidthVW(9)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
`
const MainContent = styled.div`
  width: ${autoWidthVW(1580)};
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(2025)};
  }
`
const MainTop = styled.div`
  margin-left: ${autoWidthVW(53)};
  margin-top: ${autoWidthVW(29)};
  height: ${autoWidthVW(202)};
  width: ${autoWidthVW(1273)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    margin-top: ${autoWidthVW(0)};
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(2025)};
  }
`
const PriceAndBtn = styled.div`
  height: ${autoWidthVW(50)};
  width: 100%;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const PriceDesc = styled.div`
  margin-left: ${autoWidthVW(20)};
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(20)};
`
const Btns = styled.div`
  margin-left: ${autoWidthVW(283)};
  width: ${autoWidthVW(770)};
  height: 100%;
  display: flex;
  justify-content: space-between;
`
const NormalBtn = styled.div`
  width: ${autoWidthVW(160)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  text-align: center;
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #fff;
  line-height: ${autoWidthVW(50)};
  ${(props) =>
    props.choosed &&
    css`
      width: ${autoWidthVW(200)};
      height: ${autoWidthVW(50)};
      background-image: url(${ImageCommon.wallet});
      background-size: 100% 100%;
      font-size: ${autoWidthVW(16)};
      font-family: Medium;
      font-weight: 500;
      color: #1a202e;
      line-height: ${autoWidthVW(50)};
      padding-left: ${autoWidthVW(20)};
      box-sizing: border-box;
      text-align: left;
    `}
`
const CheckedBtn = styled.div`
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  background-image: url(${ImageCommon.wallet});
  background-size: 100% 100%;
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(50)};
  padding-left: ${autoWidthVW(20)};
  box-sizing: border-box;
`
const ImgAndDigtal = styled.div`
  margin-top: ${autoWidthVW(71)};
  margin-left: ${autoWidthVW(952)};
  width: ${autoWidthVW(321)};
  height: ${autoWidthVW(50)};
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(20)};
    margin-left: ${autoWidthVW(48)};
    margin-right: ${autoWidthVW(111)};
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`
const Coral = styled.div`
  height: 100%;
  width: ${autoWidthVW(151)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const Img = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const Num = styled.div`
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
`
const Alga = styled.div`
  height: 100%;
  width: ${autoWidthVW(139)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const MobileAlga = styled.div`
  width: ${autoWidthVW(79)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileCoral = styled.div`
  margin-left: ${autoWidthVW(60)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const Line = styled.div`
  margin-top: ${autoWidthVW(30)};
  width: 100%;
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #8fd7ff;

  @media (max-width: 768px) {
    display: none;
  }
`
const Purchase = styled.div`
  margin-top: ${autoWidthVW(70)};
  margin-left: ${autoWidthVW(88)};
  height: ${autoWidthVW(480)};
  width: ${autoWidthVW(1212)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(25)};
    margin-left: ${autoWidthVW(24)};
    width: ${autoWidthVW(332)};
  }
`
const PurchaseImages = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${autoWidthVW(388)};
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`
const PurchaseImage = styled.img`
  width: ${autoWidthVW(332)};
  height: ${autoWidthVW(388)};
`
const PurchasePrice = styled.div`
  margin-top: ${autoWidthVW(40)};
  margin-left: ${autoWidthVW(43)};
  margin-right: ${autoWidthVW(48)};
  width: ${autoWidthVW(1121)};
  height: ${autoWidthVW(50)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`
const Single = styled.div`
  height: ${autoWidthVW(457)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const Multi = styled.div`
  margin-top: ${autoWidthVW(51)};
  height: ${autoWidthVW(457)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const World = styled.div`
  margin-top: ${autoWidthVW(51)};
  height: ${autoWidthVW(461)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const ExisitPrice = styled.div`
  width: ${autoWidthVW(242)};
  height: ${autoWidthVW(52)};
  background-image: url(${ImageCommon.inventory});
  background-size: 100% 100%;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(24)};
    width: ${autoWidthVW(190)};
    height: ${autoWidthVW(50)};
  }
`
const PriceWords = styled.div`
  margin-left: ${autoWidthVW(73)};
  margin-top: ${autoWidthVW(11)};
  margin-bottom: ${autoWidthVW(9)};
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(52)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(6)};
  }
`
const PriceWay = styled.img`
  margin-left: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(2)};
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const SoonPrice = styled.div`
  width: ${autoWidthVW(240)};
  height: ${autoWidthVW(50)};
  background: #5b6278;
  border-radius: ${autoWidthVW(25)};
  font-size: ${autoWidthVW(24)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
  text-align: center;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(24)};
    width: ${autoWidthVW(190)};
    font-size: ${autoWidthVW(24)};
  }
`
const Footer = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(180)};
  background: #1a202e;
  box-shadow: ${autoWidthVW(0)} ${autoWidthVW(-4)} ${autoWidthVW(10)}
    ${autoWidthVW(0)} #080a0f;
  display: flex;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(630)};
    margin-left: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(111)};
    //    display:flex;
    //    justify-content:space-between;
    //    align-items:center;
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(64)};
    box-shadow: none;
    display: flex;
    flex-direction: column;
  }
`
const BottomLogo = styled.img`
  margin-top: ${autoWidthVW(69)};
  margin-left: ${autoWidthVW(370)};
  width: ${autoWidthVW(143)};
  height: ${autoWidthVW(64)};

  @media (max-width: 768px) {
    display: none;
  }
`
const LinkAndCopyRight = styled.div`
  margin-left: ${autoWidthVW(798)};
  margin-top: ${autoWidthVW(47)};
  width: ${autoWidthVW(328)};
  height: ${autoWidthVW(86)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    // margin-left:${autoWidthVW(-180)};
    // margin-top:0;
    // width:${autoWidthVW(246)};
    // height:100%;
    display: none;
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
const LinkIcons = styled.div`
  margin-left: ${autoWidthVW(138)};
  width: ${autoWidthVW(190)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NormalIcon = styled.img`
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(33)};
    height: ${autoWidthVW(32)};
  }
`
const ExcIcon = styled.img`
    width:${autoWidthVW(36)};
    height;${autoWidthVW(29)};

    @media (max-width:768px){
        width:${autoWidthVW(29)};
        height;${autoWidthVW(23)};
    }
`
const Topper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: ${autoWidthVW(80)};
    display: flex;
    align-items: center;
    background: #28374c;
    box-shadow: ${autoWidthVW(0)} ${autoWidthVW(4)} ${autoWidthVW(4)}
      ${autoWidthVW(0)} #131922;
  }

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
  margin-left: ${autoWidthVW(95)};
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
const ContentBottom = styled.div`
  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(78)};
    margin-left: ${autoWidthVW(111)};
    margin-right: ${autoWidthVW(111)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileIcons = styled.div`
  margin-left: ${autoWidthVW(111)};
  margin-right: ${autoWidthVW(111)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const Bottom = styled.div`
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
  box-sizing: border-box;
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`
const BottomDiv = styled.div`
  margin-top: ${autoWidthVW(26)};
  background: rgba(29, 38, 51, 1);
`
const Home = styled.div`
  margin-left: ${autoWidthVW(44)};
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
`
const HomeIcons = styled.img`
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
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
`
const GameIcons = styled.img`
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
  margin-left: ${autoWidthVW(76)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
`
const MarketIcons = styled.img`
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const MarketWords = styled.div`
  margin-top: ${autoWidthVW(7)};
  margin-left: ${autoWidthVW(3)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
const MobileCopyRight = styled.div`
  margin-left: ${autoWidthVW(66)};
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
export default Adventure
