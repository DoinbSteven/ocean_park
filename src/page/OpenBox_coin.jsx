import LeftMenu, { MenuList } from '../components/LeftMenu'
import TopGroup from '../components/TopGroup'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
import CenterNav from '../components/CenterNav'
import PurchaseDesc from '../components/PurchaseDesc'
import Footer from '../components/Footer'
function OpenBox_coin() {
  return (
    <Page>
      <Top>
        <LeftMenu></LeftMenu>
        <Right>
          <TopGroup></TopGroup>
          <CenterMenu>
            <CenterNav></CenterNav>
            <PurchaseDesc></PurchaseDesc>
          </CenterMenu>
          <Line></Line>
          <Center>
            <CenterImg>
              <TitleImg src={ImageCommon.Title}></TitleImg>
            </CenterImg>
            <CenterRight>
              <GetAlga>
                <GetWords>Get ALGA </GetWords>
                <GetNums>X99</GetNums>
              </GetAlga>
              <DevideLine></DevideLine>
              <ReceiveBtn src={ImageCommon.Receive}></ReceiveBtn>
            </CenterRight>
          </Center>
        </Right>
      </Top>
      <Footer></Footer>
    </Page>
  )
}
const Page = styled.div`
  width: 100%;
  background-color: #1a202e;
`
const Top = styled.div`
  width: 100%;
  height: ${autoWidthVW(1200)};
  background-image: url(${ImageCommon.boxBgc});
  background-size: 100% 100%;
  display: flex;
`
const CenterMenu = styled.div`
  margin-top: ${autoWidthVW(81)};
  margin-left: ${autoWidthVW(75)};
  margin-right: ${autoWidthVW(253)};
  display: flex;
  justify-content: space-between;
`
const Right = styled.div`
  dispaly: flex;
  flex-direction: column;
`
const Line = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(55)};
  width: ${autoWidthVW(1273)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #ffffff;
  box-sizing: border-box;
`
const Center = styled.div`
  margin-left: ${autoWidthVW(55)};
  margin-top: ${autoWidthVW(44)};
  display: flex;
`
const CenterImg = styled.div`
  width: ${autoWidthVW(700)};
  height: ${autoWidthVW(764)};
  background-image: url(${ImageCommon.box1});
  background-size: 100% 100%;
  position: relative;
`
const TitleImg = styled.img`
  position: absolute;
  left: ${autoWidthVW(573)};
  top: ${autoWidthVW(51)};
  width: ${autoWidthVW(700)};
`
const CenterRight = styled.div`
  margin-left: ${autoWidthVW(12)};
  display: flex;
  flex-direction: column;
  // align-items: center;
`
const GetAlga = styled.div`
  margin-top: ${autoWidthVW(230)};
  display: flex;
  align-items: center;
`
const GetWords = styled.div`
  margin-left: ${autoWidthVW(24)};
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(38)};
`
const GetNums = styled.div`
  margin-left: ${autoWidthVW(201)};
  font-size: ${autoWidthVW(60)};
  font-family: Regular;
  font-weight: 400;
  color: #ffeabc;
  line-height: ${autoWidthVW(90)};
  letter-spacing: ${autoWidthVW(1)};
`
const DevideLine = styled.div`
  margin-left: ${autoWidthVW(23)};
  margin-top: ${autoWidthVW(20)};
  width: ${autoWidthVW(500)};
  height: ${autoWidthVW(1)};
  border: ${autoWidthVW(1)} solid #979797;
  box-sizing: border-box;
`
const ReceiveBtn = styled.img`
  margin-top: ${autoWidthVW(29)};
  width: ${autoWidthVW(214)};
`
export default OpenBox_coin
