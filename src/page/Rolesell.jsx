import styled, { css } from 'styled-components'
import ImageCommon from '../images/ImageCommon'
import { autoWidthVW } from '../common/Common'
import '../common/custom.css'
import { useState } from 'react'
function Rolesell() {
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
  const [menuIndex, setMenuIndex] = useState(2)
  const [btnIndex, setBtnIndex] = useState(3)
  const [navIndex, setNavIndex] = useState(1)
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <>
      <Subject>
        <BulletFrame>
          <Eject>
            <TurtleSell>
              <Num>6</Num>
              <NoNum>NO.2341355756</NoNum>
            </TurtleSell>
            <SellDesc>
              <CloseBtn src={ImageCommon.Close}></CloseBtn>
              <Intrdoce>
                <SellTitle>SELL TURTLE</SellTitle>
                <TitleLine></TitleLine>
                <Price>Price</Price>
                <PriceInput>
                  <TotalNum>1</TotalNum>
                  <CoinStyle src={ImageCommon.alga}></CoinStyle>
                </PriceInput>
                <Free>
                  <Percent>Transaction Fee (6%)</Percent>
                  <Number>4</Number>
                </Free>
                <ConfirmBtn src={ImageCommon.convert}></ConfirmBtn>
              </Intrdoce>
            </SellDesc>
          </Eject>
          <MobileClose src={ImageCommon.Close}></MobileClose>
          <SellGoods>
            <GoodsNum>9</GoodsNum>
            <GoodsNoNum>NO.2341355756</GoodsNoNum>
            <Price>Price</Price>
            <PriceInput>
              <TotalNum>1</TotalNum>
              <CoinStyle src={ImageCommon.alga}></CoinStyle>
            </PriceInput>
            <Free>
              <Percent>Transaction Fee (6%)</Percent>
              <Number>4</Number>
            </Free>
            <ConfirmBtn src={ImageCommon.convert}></ConfirmBtn>
          </SellGoods>
        </BulletFrame>
        <Top>
          <SeeMore src={ImageCommon.seeMore}></SeeMore>
          <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
          <Bnb>BNB</Bnb>
          <MobileWallet src={ImageCommon.mWallet}></MobileWallet>
        </Top>
        <LeftBtn>
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
        </LeftBtn>
        <Right>
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
            </TopBtns>
          </Group1>
          <Group2>
            <CenterMenu>
              <div
                style={{ position: 'relative' }}
                onClick={() => {
                  setNavIndex(0)
                }}>
                <CenterMenuWords checked={navIndex === 0}>
                  AVAILABLE
                </CenterMenuWords>
                <UnderLine sel={navIndex === 0}></UnderLine>
              </div>
              <div
                style={{ position: 'relative' }}
                onClick={() => {
                  setNavIndex(1)
                }}>
                <CenterMenuWords checked={navIndex === 1}>
                  ON MARKETPLACE
                </CenterMenuWords>
                <UnderLine sel={navIndex === 1}></UnderLine>
              </div>
            </CenterMenu>
            <DigtalExplain>
              <FlexBox>
                <Image src={ImageCommon.alga}></Image>
                <Digtal>ALGA:34</Digtal>
                <MobileDigtal>34</MobileDigtal>
              </FlexBox>
              <FlexBox>
                <Image src={ImageCommon.shanhu}></Image>
                <Digtal>CORAL:23</Digtal>
                <MobileDigtal>23</MobileDigtal>
              </FlexBox>
            </DigtalExplain>
          </Group2>
          <Inventory>
            <InventoryWords>Inventory-Role</InventoryWords>
          </Inventory>
          <Line></Line>
          <CenterMenu2>
            <Menu2words
              sure={tabIndex === 0}
              onClick={() => {
                setTabIndex(0)
              }}>
              ROLE
            </Menu2words>
            <Menu2words
              sure={tabIndex === 1}
              onClick={() => {
                setTabIndex(1)
              }}>
              PROPS
            </Menu2words>
          </CenterMenu2>

          <PicturesUp>
            <Puffer>
              <CenterNum1>9</CenterNum1>
              <CenterNum2>NO.2341355756</CenterNum2>
            </Puffer>
            <Shark>
              <SellBtn>Sell</SellBtn>
              <UpgradeBtn>Upgrade</UpgradeBtn>
            </Shark>
            <Turtle>
              <CenterNum1>2</CenterNum1>
              <CenterNum2>NO.2341355756</CenterNum2>
              <InPictureBtn>
                <SellBtnIn>Sell</SellBtnIn>
                <UpgradeBtnIn>Upgrade</UpgradeBtnIn>
              </InPictureBtn>
            </Turtle>
            <Trutle2>
              <CenterNum1>6</CenterNum1>
              <CenterNum2>NO.2341355756</CenterNum2>
              <InPictureBtn>
                <SellBtnIn>Sell</SellBtnIn>
                <UpgradeBtnIn>Upgrade</UpgradeBtnIn>
              </InPictureBtn>
            </Trutle2>
          </PicturesUp>
          <PictureDown>
            <Trutle1>
              <CenterNum1>6</CenterNum1>
              <CenterNum2>NO.2341355756</CenterNum2>
              <InPictureBtn>
                <SellBtnIn>Sell</SellBtnIn>
                <UpgradeBtnIn>Upgrade</UpgradeBtnIn>
              </InPictureBtn>
            </Trutle1>
            <Turtle3>
              <CenterNum1>2</CenterNum1>
              <CenterNum2>NO.2341355756</CenterNum2>
              <InPictureBtn>
                <SellBtnIn>Sell</SellBtnIn>
                <UpgradeBtnIn>Upgrade</UpgradeBtnIn>
              </InPictureBtn>
            </Turtle3>
            <Octopus>
              <CenterNum1>1</CenterNum1>
              <CenterNum2>NO.2341355756</CenterNum2>
              <InPictureBtn>
                <SellBtnIn>Sell</SellBtnIn>
                <UpgradeBtnIn>Upgrade</UpgradeBtnIn>
              </InPictureBtn>
            </Octopus>
          </PictureDown>
          <MobileIcon>
            <NormalIcon src={ImageCommon.github}></NormalIcon>
            <DifferenceIcon src={ImageCommon.twitter}></DifferenceIcon>
            <NormalIcon src={ImageCommon.telegram}></NormalIcon>
          </MobileIcon>
          <MobileCopyRight>
            @2022 Ocean Park.All Rights Reserved.
          </MobileCopyRight>
          <MoblieBottom>
            <BottomIcons>
              <HomeIcon src={ImageCommon.Home}></HomeIcon>
              <GameIcon src={ImageCommon.Game}></GameIcon>
              <MarketIcon src={ImageCommon.Market}></MarketIcon>
            </BottomIcons>
            <BottomIconWords>
              <NormalWords>Home</NormalWords>
              <NormalWords>Game</NormalWords>
              <CheckWords>Market</CheckWords>
            </BottomIconWords>
          </MoblieBottom>
        </Right>
      </Subject>
      <Bottom>
        <BottomLogo src={ImageCommon.logo}></BottomLogo>
        <BottomRight>
          <Icons>
            <NormalIcon src={ImageCommon.github}></NormalIcon>
            <DifferenceIcon src={ImageCommon.twitter}></DifferenceIcon>
            <NormalIcon src={ImageCommon.telegram}></NormalIcon>
          </Icons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </BottomRight>
      </Bottom>
    </>
  )
}

const Subject = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1940)};
  background: #1a202e;
  background-image: url(${ImageCommon.boxBgc});
  background-size: ${autoWidthVW(1920)} ${autoWidthVW(1200)};
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(4144)};
    background: #131922;
  }
`

const LeftBtn = styled.div`
  width: ${autoWidthVW(340)};
  height: ${autoWidthVW(1193)};
  background: rgba(26, 32, 46, 0.4);
  border: ${autoWidthVW(1)} solid #5b6278;
  box-sizing: border-box;
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
  margin-bottom: ${autoWidthVW(263)};
  height: ${autoWidthVW(665)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
      padding-top: ${autoWidthVW(10)};
      box-sizing: border-box;
      text-align: center;
    `}
`
const CheckedMenu = styled.div`
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
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(50)};
  text-align: center;
`
const Right = styled.div`
  width: ${autoWidthVW(1580)};
  height: ${autoWidthVW(2120)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(4304)};
    background: #131922;
  }
`
const Group1 = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(252)};
  display: flex;
  align-items: center;
  // background:blue;

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
      color: #1a202e;
      background-image: url(${ImageCommon.wallet});
      background-size: 100% 100%;
      box-sizing: border-box;
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(19)};
      text-align: left;
      line-height: ${autoWidthVW(13)};
    `}
`
const Wallet = styled.div`
  width: ${autoWidthVW(200)};
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
  display: flex;
  align-items: center;
`
const WalletWords = styled.div`
  margin-left: ${autoWidthVW(20)};
  margin-top: ${autoWidthVW(19)};
  margin-bottom: ${autoWidthVW(15)};
  width: ${autoWidthVW(116)};
  height: ${autoWidthVW(16)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(19)};
`
const WalletImage = styled.img`
  margin-left: ${autoWidthVW(15)};
  width: ${autoWidthVW(34)};
  height: ${autoWidthVW(35)};
`
const Group2 = styled.div`
  margin-left: ${autoWidthVW(83)};
  margin-top: ${autoWidthVW(82)};
  margin-right: ${autoWidthVW(253)};
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    margin-top: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(0)};
  }
`
const CenterMenu = styled.div`
  width: ${autoWidthVW(619)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterMenuWords = styled.div`
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
const DigtalExplain = styled.div`
  margin-left: ${autoWidthVW(305)};
  width: ${autoWidthVW(320)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(48)};
    margin-top: ${autoWidthVW(20)};
    width: ${autoWidthVW(216)};
  }
`
const FlexBox = styled.div`
  display: flex;
`
const Image = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const Digtal = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};

  @media (max-width: 768px) {
    display: none;
  }
`
const MobileDigtal = styled.div`
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};

  @media (min-width: 768px) {
    display: none;
  }
`
const Line = styled.div`
  margin-top: ${autoWidthVW(38)};
  margin-left: ${autoWidthVW(55)};
  margin-right: ${autoWidthVW(252)};
  // width: 1273px;
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
    height: ${autoWidthVW(10)};
    background: #8fd7ff;
    border-radius: ${autoWidthVW(5)};
    position: absolute;
    top: ${autoWidthVW(78)};
    left:0;
    right:0;
    z-index: 2;
    `
  }}

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterMenu2 = styled.div`
  margin-left: ${autoWidthVW(75)};
  width: ${autoWidthVW(360)};
  height: ${autoWidthVW(60)};
  background: #5b6278;
  border-radius: 0px 0px ${autoWidthVW(30)} ${autoWidthVW(30)};
  position: relative;
  top: ${autoWidthVW(-1)};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    display: none;
  }
`
const Menu2words = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #fff;
  line-height: ${autoWidthVW(29)};

  ${(props) =>
    props.sure &&
    css`
      color: #8fd7ff;
    `}
`
const PicturesUp = styled.div`
  margin-left: ${autoWidthVW(90)};
  margin-right: ${autoWidthVW(283)};
  margin-top: ${autoWidthVW(49)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(0)};
    margin-top: ${autoWidthVW(37)};
    flex-direction: column;
    align-items: center;
  }
`

const Puffer = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.Puffer});
  background-size: 100%;
`
const CenterNum1 = styled.div`
  margin-top: ${autoWidthVW(300)};
  margin-left: ${autoWidthVW(166)};
  // width: ${autoWidthVW(21)};
  // height: ${autoWidthVW(30)};
  font-size: ${autoWidthVW(30)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(36)};
`
const CenterNum2 = styled.div`
  margin-top: ${autoWidthVW(19)};
  margin-left: ${autoWidthVW(95)};
  font-size: ${autoWidthVW(20)};
  font-family: Gotham-Medium, Gotham;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(24)};
`
const Shark = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.shark});
  background-size: 100%;
  display: flex;
`
const SellBtn = styled.div`
  margin-top: ${autoWidthVW(622)};
  margin-left: ${autoWidthVW(44)};
  width: ${autoWidthVW(108)};
  height: ${autoWidthVW(40)};
  background: linear-gradient(270deg, #75b5d9 0%, #7bbcdf 53%, #78c1e5 100%);
  box-shadow: 0px ${autoWidthVW(3)} ${autoWidthVW(20)} 0px
      rgba(131, 174, 251, 0.51),
    inset 0px ${autoWidthVW(15)} ${autoWidthVW(18)} 0px #b5e5ff;
  border-radius: ${autoWidthVW(20)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(203, 237, 252, 1),
      rgba(81, 159, 201, 1)
    )
    1 1;
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(40)};
  text-align: center;
`
const UpgradeBtn = styled.div`
  margin-top: ${autoWidthVW(622)};
  margin-left: ${autoWidthVW(50)};
  width: ${autoWidthVW(108)};
  height: ${autoWidthVW(40)};
  background: linear-gradient(270deg, #fe5368 0%, #e53653 53%, #d94356 100%);
  box-shadow: 0px ${autoWidthVW(2)} ${autoWidthVW(20)} 0px
      rgba(255, 158, 169, 0.51),
    inset 0px 10px 18px 0px #ff627b;
  border-radius: ${autoWidthVW(20)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(255, 166, 188, 1),
      rgba(79, 1, 5, 1)
    )
    1 1;
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(40)};
  text-align: center;
`
const Turtle = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.Narwhal});
  background-size: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`
const Turtle3 = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.Narwhal});
  background-size: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`
const InPictureBtn = styled.div`
  margin-top: ${autoWidthVW(247)};
  margin-left: ${autoWidthVW(44)};
  margin-right: ${autoWidthVW(47)};
  display: flex;
  justify-content: space-between;
`
const SellBtnIn = styled.div`
  width: ${autoWidthVW(108)};
  height: ${autoWidthVW(40)};
  background: linear-gradient(270deg, #75b5d9 0%, #7bbcdf 53%, #78c1e5 100%);
  box-shadow: 0px ${autoWidthVW(3)} ${autoWidthVW(20)} 0px
      rgba(131, 174, 251, 0.51),
    inset 0px ${autoWidthVW(15)} ${autoWidthVW(18)} 0px #b5e5ff;
  border-radius: ${autoWidthVW(20)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(203, 237, 252, 1),
      rgba(81, 159, 201, 1)
    )
    1 1;
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(40)};
  text-align: center;
`
const UpgradeBtnIn = styled.div`
  width: ${autoWidthVW(108)};
  height: ${autoWidthVW(40)};
  background: linear-gradient(270deg, #fe5368 0%, #e53653 53%, #d94356 100%);
  box-shadow: 0px ${autoWidthVW(2)} ${autoWidthVW(20)} 0px
      rgba(255, 158, 169, 0.51),
    inset 0px 10px 18px 0px #ff627b;
  border-radius: ${autoWidthVW(20)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(255, 166, 188, 1),
      rgba(79, 1, 5, 1)
    )
    1 1;
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(40)};
  text-align: center;
`
const PictureDown = styled.div`
  margin-left: ${autoWidthVW(88)};
  margin-right: ${autoWidthVW(710)};
  margin-top: ${autoWidthVW(64)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(0)};
    margin-right: ${autoWidthVW(0)};
    margin-top: ${autoWidthVW(0)};
    flex-direction: column;
    align-items: center;
  }
`
const Trutle1 = styled.div`
  margin-top: ${autoWidthVW(14)};
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.Trutle});
  background-size: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`
const Trutle2 = styled.div`
  margin-top: ${autoWidthVW(0)};
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.Trutle});
  background-size: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`
const Octopus = styled.div`
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(726)};
  background-image: url(${ImageCommon.Octopus});
  background-size: 100%;
`
const Bottom = styled.div`
  width: ${autoWidthVW(1918)};
  height: ${autoWidthVW(180)};
  background: #1a202e;
  box-shadow: ${autoWidthVW(0)} ${autoWidthVW(-4)} ${autoWidthVW(10)}
    ${autoWidthVW(0)} #080a0f;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const BottomLogo = styled.img`
  margin-left: ${autoWidthVW(368)};
  margin-top: ${autoWidthVW(69)};
  width: ${autoWidthVW(143)};
  height: ${autoWidthVW(64)};

  @media (max-width: 768px) {
    display: none;
  }
`
const BottomRight = styled.div`
  margin-left: ${autoWidthVW(798)};
  margin-right: ${autoWidthVW(281)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Icons = styled.div`
  margin-top: ${autoWidthVW(47)};
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
const DifferenceIcon = styled.img`
  width: ${autoWidthVW(36)};
  height: ${autoWidthVW(29)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(29)};
    height: ${autoWidthVW(33)};
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
const Top = styled.div`
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
const Inventory = styled.div`
  margin-top: ${autoWidthVW(25)};
  margin-left: ${autoWidthVW(48)};
  background-image: url(${ImageCommon.chooseBooton});
  width: ${autoWidthVW(280)};
  height: ${autoWidthVW(50)};
  background-size: 100%;

  @media (min-width: 768px) {
    display: none;
  }
`
const InventoryWords = styled.div`
  box-sizing: border-box;
  margin-left: ${autoWidthVW(24)};
  margin-top: ${autoWidthVW(13)};
  margin-bottom: ${autoWidthVW(16)};
  width: ${autoWidthVW(139)};
  height: ${autoWidthVW(18)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(22)};
`
const MobileIcon = styled.div`
  margin-top: ${autoWidthVW(62)};
  margin-left: ${autoWidthVW(110)};
  margin-right: ${autoWidthVW(112)};
  display: flex;
  justify-content: space-between;

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
const BottomIcons = styled.div`
  margin-left: ${autoWidthVW(44)};
  margin-right: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const HomeIcon = styled.img`
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`
const GameIcon = styled.img`
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(55)};
  height: ${autoWidthVW(40)};
`
const MarketIcon = styled.img`
  margin-top: ${autoWidthVW(23)};
  width: ${autoWidthVW(43)};
  height: ${autoWidthVW(40)};
`

const MoblieBottom = styled.div`
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

  @media (min-width: 768px) {
    display: none;
  }
`
const BottomIconWords = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(44)};
  margin-right: ${autoWidthVW(37)};
  display: flex;
  justify-content: space-between;
`
const NormalWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
const CheckWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const BulletFrame = styled.div`
  position: absolute;
  left: ${autoWidthVW(340)};
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 32, 46, 0.9);
  z-index: 999;

  @media (max-width: 768px) {
    left: 0;
  }
`
const Eject = styled.div`
  // width: ${autoWidthVW(1080)};
  // height: ${autoWidthVW(750)};
  margin-left: ${autoWidthVW(250)};
  margin-top: ${autoWidthVW(255)};
  margin-right: ${autoWidthVW(250)};
  background: #111821;
  border-radius: ${autoWidthVW(30)};
  border: 1px solid rgba(51, 59, 70, 1);
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const TurtleSell = styled.div`
  margin-left: ${autoWidthVW(90)};
  margin-top: ${autoWidthVW(57)};
  margin-bottom: ${autoWidthVW(57)};
  width: ${autoWidthVW(357)};
  height: ${autoWidthVW(636)};
  background-image: url(${ImageCommon.Trutle});
  background-size: 100% 100%;
  overflow: hidden;
`
const Num = styled.div`
  margin-top: ${autoWidthVW(260)};
  margin-left: ${autoWidthVW(167)};
  margin-right: ${autoWidthVW(169)};
  font-size: ${autoWidthVW(30)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(36)};
`
const NoNum = styled.div`
  margin-top: ${autoWidthVW(13)};
  margin-left: ${autoWidthVW(95)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(24)};
`
const SellDesc = styled.div`
  margin-top: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(80)};
  display: flex;
  flex-direction: column;
`
const CloseBtn = styled.img`
  margin-left: ${autoWidthVW(523)};
  width: ${autoWidthVW(30)};
`
const Intrdoce = styled.div`
  margin-top: ${autoWidthVW(102)};
  margin-left: ${autoWidthVW(90)};
  display: flex;
  flex-direction: column;
`
const SellTitle = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};
`
const TitleLine = styled.div`
  margin-top: ${autoWidthVW(28)};
  width: ${autoWidthVW(380)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #777e90;
`
const Price = styled.div`
  margin-top: ${autoWidthVW(23)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(32)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(40)};
    font-size: ${autoWidthVW(16)};
    line-height: ${autoWidthVW(20)};
    margin-left: ${autoWidthVW(130)};
  }
`
const PriceInput = styled.div`
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(370)};
  height: ${autoWidthVW(50)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(2)} solid #8fd7ff;
  padding-left: ${autoWidthVW(39)};
  padding-right: ${autoWidthVW(20)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: ${autoWidthVW(230)};
    margin-left: ${autoWidthVW(40)};
  }
`
const TotalNum = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(29)};
`
const CoinStyle = styled.img`
  width: ${autoWidthVW(50)};
`
const Free = styled.div`
  margin-top: ${autoWidthVW(20)};
  display: flex;
  align-items: center;
`
const Percent = styled.div`
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(12)};
    margin-left: ${autoWidthVW(45)};
  }
`
const Number = styled.div`
  margin-left: ${autoWidthVW(134)};
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(29)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(55)};
  }
`
const ConfirmBtn = styled.img`
  margin-top: ${autoWidthVW(50)};
  width: ${autoWidthVW(168)};

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(20)};
    margin-left: ${autoWidthVW(65)};
  }
`
const MobileClose = styled.img`
  margin-top: ${autoWidthVW(40)};
  margin-left: ${autoWidthVW(321)};
  width: ${autoWidthVW(24)};

  @media (min-width: 768px) {
    display: none;
  }
`
const SellGoods = styled.div`
  margin-top: ${autoWidthVW(34)};
  margin-left: ${autoWidthVW(34)};
  width: ${autoWidthVW(312)};
  height: ${autoWidthVW(676)};
  background-image: url(${ImageCommon.NarwhalNormal});
  background-size: 100% 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    display: none;
  }
`
const GoodsNum = styled.div`
  margin-top: ${autoWidthVW(305)};
  margin-left: ${autoWidthVW(143)};
  font-size: ${autoWidthVW(30)};
  font-family: Medium;
  font-weight: 500;
  color: #ff5377;
  line-height: ${autoWidthVW(36)};
`
const GoodsNoNum = styled.div`
  margin-top: ${autoWidthVW(18)};
  margin-left: ${autoWidthVW(72)};
  font-size: ${autoWidthVW(20)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(24)};
`
export default Rolesell
