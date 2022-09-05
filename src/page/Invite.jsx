import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import MobileTop from '../components/MobileTop'
import LeftMenu from '../components/LeftMenu'
import TopGroup from '../components/TopGroup'
import Footer from '../components/Footer'
import Bottom from '../components/Bottom'
function Invite() {
  return (
    <Page>
      <MobileTop></MobileTop>
      <Top>
        <LeftMenu></LeftMenu>
        <Right>
          <TopGroup></TopGroup>
          <CenterNav>
            <InviteNav>Invite</InviteNav>
            <Purchase>
              <PurchaseShare>
                <CoinIcon src={ImageCommon.alga}></CoinIcon>
                <CoinWay>ALGA:34</CoinWay>
              </PurchaseShare>
              <PurchaseShare>
                <CoinIcon src={ImageCommon.shanhu}></CoinIcon>
                <CoinWay>CORAL:23</CoinWay>
              </PurchaseShare>
            </Purchase>
          </CenterNav>
          <Line></Line>
          <Center>
            <CenterLeft>
              <Banner src={ImageCommon.Invite_Banner}></Banner>
            </CenterLeft>
            <CenterRight>
              <LinkWords>Invitation Link</LinkWords>
              <LinkDisplay>
                <LinkState>
                  Https://play.milita.games?ref=0ajkshdsfbascsndj234aser3454fghd
                </LinkState>
              </LinkDisplay>
              <CopyBtn>
                <CopyBtnWords>Copy</CopyBtnWords>
              </CopyBtn>
            </CenterRight>
          </Center>
        </Right>
        <RewardTitle>Invitation Reward</RewardTitle>
        <InviteTable>
          <RowShare>
            <RoWords>Direct Invitation</RoWords>
            <RowNum>23</RowNum>
          </RowShare>
          <DevideLine></DevideLine>
          <RowShare>
            <RoWords>Invite Boxes</RoWords>
            <RowNum>23</RowNum>
          </RowShare>
          <DevideLine></DevideLine>
          <RowShare>
            <RoWords>Token reward available</RoWords>
            <RowNum>23</RowNum>
          </RowShare>
        </InviteTable>
        <WithDrawBtn src={ImageCommon.WithDraw}></WithDrawBtn>
        <NavIcons>
          <NavIcon src={ImageCommon.github}></NavIcon>
          <NavIconU src={ImageCommon.twitter}></NavIconU>
          <NavIcon src={ImageCommon.telegram}></NavIcon>
        </NavIcons>
        <MobileCopyright>@2022 Ocean Park.All Rights Reserved.</MobileCopyright>
      </Top>
      <Bottom></Bottom>
      <Footer></Footer>
    </Page>
  )
}
const Page = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1379)};
  background: #1a202e;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(1275)};
  }
`
const Top = styled.div`
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(1200)};
  background-image: url(${ImageCommon.boxBgc});
  background-size: 100% 100%;
  display: flex;

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(995)};
    background-image: url(${ImageCommon.Invite_bgc});
    background-size: ${autoWidthVW(375)} ${autoWidthVW(500)};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Right = styled.div`
  width: ${autoWidthVW(1580)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
  }
`

const CenterNav = styled.div`
  margin-top: ${autoWidthVW(71)};
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(253)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`
const InviteNav = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(38)};
`
const Purchase = styled.div`
  width: ${autoWidthVW(320)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PurchaseShare = styled.div`
  display: flex;
  align-items: center;
`
const CoinIcon = styled.img`
  width: ${autoWidthVW(50)};
  height: ${autoWidthVW(50)};
`
const CoinWay = styled.div`
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
  margin-left: ${autoWidthVW(55)};
  margin-top: ${autoWidthVW(30)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #ffffff;

  @media (max-width: 768px) {
    display: none;
  }
`
const Center = styled.div`
  margin-top: ${autoWidthVW(110)};
  margin-left: ${autoWidthVW(56)};
  margin-right: ${autoWidthVW(227)};
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`
const CenterLeft = styled.div`
  width: ${autoWidthVW(700)};
`
const Banner = styled.img`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(655)};
`
const CenterRight = styled.div`
  width: ${autoWidthVW(700)};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: ${autoWidthVW(-73)};
`
const LinkWords = styled.div`
  margin-top: ${autoWidthVW(107)};
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(72)};
  letter-spacing: ${autoWidthVW(1)};
`
const LinkDisplay = styled.div`
  margin-top: ${autoWidthVW(80)};
  width: ${autoWidthVW(670)};
  height: ${autoWidthVW(160)};
  background: rgba(29, 38, 51, 0.8);
  border-radius: ${autoWidthVW(80)};
  font-size: ${autoWidthVW(16)};
  font-family: Gotham-Book, Gotham;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(160)};
  text-align: center;
`
const LinkState = styled.div`
  margin-left: ${autoWidthVW(158)};
  margin-top: ${autoWidthVW(47)};
  width: ${autoWidthVW(354)};
  height: ${autoWidthVW(65)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(24)};
`
const CopyBtn = styled.div`
  margin-top: ${autoWidthVW(50)};
  width: ${autoWidthVW(135)};
  height: ${autoWidthVW(50)};
  background: linear-gradient(270deg, #fe5368 0%, #e53653 53%, #d94356 100%);
  box-shadow: 0px ${autoWidthVW(2)} ${autoWidthVW(20)} 0px
      rgba(255, 158, 169, 0.51),
    inset 0px ${autoWidthVW(10)} ${autoWidthVW(18)} 0px #ff627b;
  border-radius: ${autoWidthVW(25)};
  // border: ${autoWidthVW(1)} solid;
  border-image: linear-gradient(
      180deg,
      rgba(255, 166, 188, 1),
      rgba(79, 1, 5, 1)
    )
    1 1;
`
const CopyBtnWords = styled.div`
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
  text-align: center;
`

const CopyRight = styled.div`
  margin-top: ${autoWidthVW(30)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(12)};
    margin-top: ${autoWidthVW(20)};
    line-height: ${autoWidthVW(14)};
  }
`

const RewardTitle = styled.div`
  margin-top: ${autoWidthVW(346)};
  font-size: ${autoWidthVW(32)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(49)};

  @media (min-width: 768px) {
    display: none;
  }
`
const InviteTable = styled.div`
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(315)};
  height: ${autoWidthVW(240)};
  background: #1d2633;
  border-radius: ${autoWidthVW(30)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`
const RowShare = styled.div`
  width: ${autoWidthVW(255)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const RoWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const RowNum = styled.div`
  font-size: ${autoWidthVW(24)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(29)};
`
const DevideLine = styled.div`
  width: ${autoWidthVW(279)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #5b6278;
  box-sizing: border-box;
`
const WithDrawBtn = styled.img`
  margin-top: ${autoWidthVW(10)};
  width: ${autoWidthVW(214)};
  height: ${autoWidthVW(96)};

  @media (min-width: 768px) {
    display: none;
  }
`
const NavIcons = styled.div`
  margin-top: ${autoWidthVW(140)};
  width: ${autoWidthVW(153)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: none;
  }
`
const NavIcon = styled.img`
  width: ${autoWidthVW(33)};
  height: ${autoWidthVW(32)};
`
const NavIconU = styled.img`
  width: ${autoWidthVW(29)};
  height: ${autoWidthVW(23)};
`
const MobileCopyright = styled.div`
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

export default Invite
