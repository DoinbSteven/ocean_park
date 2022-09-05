import styled from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function Bottom() {
  return (
    <Container>
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
    </Container>
  )
}
const Container = styled.div`
  @media (max-width: 768px) {
    width: 100%;
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
    margin-top: ${autoWidthVW(30)};
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const Home = styled.div`
  margin-left: ${autoWidthVW(44)};
  margin-top: ${autoWidthVW(20)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
`
const HomeIcon = styled.img`
  width: ${autoWidthVW(43)};
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
const GameIcon = styled.img`
  width: ${autoWidthVW(55)};
`
const GameWords = styled.div`
  margin-top: ${autoWidthVW(10)};
  margin-left: ${autoWidthVW(4)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #8fd7ff;
  line-height: ${autoWidthVW(17)};
`
const Market = styled.div`
  margin-left: ${autoWidthVW(73)};
  margin-top: ${autoWidthVW(23)};
  margin-right: ${autoWidthVW(41)};
  margin-bottom: ${autoWidthVW(36)};
  display: flex;
  flex-direction: column;
`
const MarketIcon = styled.img`
  margin-left: ${autoWidthVW(3)};
  width: ${autoWidthVW(43)};
`
const MarketWords = styled.div`
  margin-top: ${autoWidthVW(7)};
  font-size: ${autoWidthVW(14)};
  font-family: Medium;
  font-weight: 500;
  color: #777e90;
  line-height: ${autoWidthVW(17)};
`
export default Bottom
