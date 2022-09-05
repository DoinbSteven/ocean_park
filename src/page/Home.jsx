import styled from 'styled-components'
import ImageCommon from '../images/ImageCommon'
import { autoWidthVW } from '../common/Common'
import '../common/custom.css'
import { useState } from 'react'
import { useEffect } from 'react'
// import Countdown, { zeroPad } from 'react-countdown'

function Home() {
  const [tabIndex, setTabIndex] = useState(0)
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const countDown = () => {
    let jTime = +new Date('2022/9/10 19:00:00')
    let newTime = +new Date()
    let allSecond = (jTime - newTime) / 1000
    let second = parseInt(allSecond % 60)
    second = second < 10 ? '0' + second : second
    let minute = parseInt((allSecond / 60) % 60)
    minute = minute < 10 ? '0' + minute : minute
    let hour = parseInt((allSecond / 60 / 60) % 24)
    hour = hour < 10 ? '0' + hour : hour
    let day = parseInt(allSecond / 60 / 60 / 24)
    day = day < 10 ? '0' + day : day
    setDays(day)
    setHours(hour)
    setMinutes(minute)
    setSeconds(second)
  }
  useEffect(() => {
    setInterval(countDown, 1000)
  }, [])
  // const renderer = ({ days, hours, minutes, seconds }) => {
  //   return (
  //     <TimeDisplay>
  //       <Share>
  //         <TimeNum>{zeroPad(days)}</TimeNum>
  //         <TimeWords>D</TimeWords>
  //       </Share>
  //       <Share>
  //         <TimeNum>{zeroPad(hours)}</TimeNum>
  //         <TimeWords>H</TimeWords>
  //       </Share>
  //       <Share>
  //         <TimeNum>{zeroPad(minutes)}</TimeNum>
  //         <TimeWords>M</TimeWords>
  //       </Share>
  //       <Share>
  //         <TimeNum>{zeroPad(seconds)}</TimeNum>
  //         <TimeWords>S</TimeWords>
  //       </Share>
  //     </TimeDisplay>
  //   )
  // }
  return (
    <MainContainer>
      <Top>
        <SeeMoreImg src={ImageCommon.seeMore}></SeeMoreImg>
        <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
        <BnbBtn>
          <BnbWords>BNB</BnbWords>
        </BnbBtn>
        <WalletImg src={ImageCommon.mWallet}></WalletImg>
      </Top>
      <Banner>
        {/* <img src={ImageCommon.banner}  /> */}
        <Wallet>
          {/* <img src={ImageCommon.wallet} alt="" /> */}
          <Sellect>Sellect Wallet</Sellect>
        </Wallet>
        {/* <img src={ImageCommon.playButton} /> */}
        <PlayBoxImg src={ImageCommon.playButton}></PlayBoxImg>
        <Buttons>
          <Button>Document</Button>
          <Button>Buy ALGA</Button>
          <Button>Buy CORAL</Button>
        </Buttons>
      </Banner>
      <MobileButtons>
        <MobileButton>Document</MobileButton>
        <MobileButton>Buy ALGA</MobileButton>
        <MobileButton>Buy CORAL</MobileButton>
      </MobileButtons>
      <TimeBtn></TimeBtn>
      <BoxTitle>AIRDROP OCEAN BOX</BoxTitle>
      <AirDropImg src={ImageCommon.airDrop}></AirDropImg>
      <CustDown>Countdown</CustDown>

      {/* <Countdown
        date={Date.now() + 1000 * 60 * 60 * 24 * 2}
        renderer={renderer}
      /> */}
      <TimeDisplay>
        <Share>
          <TimeNum>{days}</TimeNum>
          <TimeWords>D</TimeWords>
        </Share>
        <Share>
          <TimeNum>{hours}</TimeNum>
          <TimeWords>H</TimeWords>
        </Share>
        <Share>
          <TimeNum>{minutes}</TimeNum>
          <TimeWords>M</TimeWords>
        </Share>
        <Share>
          <TimeNum>{seconds}</TimeNum>
          <TimeWords>S</TimeWords>
        </Share>
      </TimeDisplay>
      <CharactersTitle>Characters</CharactersTitle>
      <ParkDesc>
        Ocean Park is an on-chain game based on BNB Chain. Players can
        summonbabies, complete daily mining quests, conquer dark monsters, and
        lootrare items to play and earn. The baby lives in the underwater world,
        and the most abundant resource in this world is cryptocurrency. These
        resources are the dearest friends of babies, and they are also things
        that babies strive to protect. The baby has been living in happiness and
        joy。
      </ParkDesc>
      <Exhibition>
        <ImgExhibition>
          <SmallImage>
            <LeftBtn
              onClick={() => setTabIndex(tabIndex - 1)}
              src={ImageCommon.leftBtn}></LeftBtn>
            <ImgList>
              <Img70
                selectd={tabIndex === 0}
                onClick={() => setTabIndex(0)}
                src={ImageCommon.role01Btn}></Img70>
              <Img72
                selectd={tabIndex === 1}
                onClick={() => setTabIndex(1)}
                src={ImageCommon.role02Btn}></Img72>
              <Img72
                selectd={tabIndex === 2}
                onClick={() => setTabIndex(2)}
                src={ImageCommon.role03Bth}></Img72>
            </ImgList>
            <DownBtn
              onClick={() => setTabIndex(tabIndex + 1)}
              src={ImageCommon.downBtn}></DownBtn>
          </SmallImage>
          <BigImage imgIndex={tabIndex}></BigImage>
        </ImgExhibition>
        <InfoExhibition>
          <InfoName>Globefish</InfoName>
          <InfoState>
            <WordsContent>
              He is an excellent healer, able to save team members in the battle
              against the dark planet.
            </WordsContent>
            <Mainlist>
              <MainBtn src={ImageCommon.mainBtn}></MainBtn>
              <N99>99</N99>
            </Mainlist>
            <Diagonal>/</Diagonal>
            <AuxList>
              <AuxBtn src={ImageCommon.auxBtn}></AuxBtn>
              <N56>56</N56>
            </AuxList>
          </InfoState>
          <Attribute>
            <Defense>
              <DefenseIcon src={ImageCommon.defense}></DefenseIcon>
              <DefenseDigital>
                <DefenseWords>Defense</DefenseWords>
                <Strip>
                  <DefenseStrip></DefenseStrip>
                </Strip>
              </DefenseDigital>
              <Digtal>24</Digtal>
            </Defense>

            <Attack>
              <AttackIcon src={ImageCommon.attack}></AttackIcon>
              <AttackDigtal>
                <AttackWords>Attack</AttackWords>
                <Strip>
                  <AttackStrip></AttackStrip>
                </Strip>
              </AttackDigtal>
              <Digtal>35</Digtal>
            </Attack>

            <Intelligence>
              <IntelligenceIcon src={ImageCommon.mentality}></IntelligenceIcon>
              <IntelligenceDigtal>
                <IntelligenceWords>Intelligence</IntelligenceWords>
                <Strip>
                  <IntelligenceStrip></IntelligenceStrip>
                </Strip>
              </IntelligenceDigtal>
              <Digtal>99</Digtal>
            </Intelligence>

            <Magic>
              <MagicIcon src={ImageCommon.magic}></MagicIcon>
              <MagicDigtal>
                <MagicWords>Magic</MagicWords>
                <Strip>
                  <MagicStrip></MagicStrip>
                </Strip>
              </MagicDigtal>
              <Digtal>56</Digtal>
            </Magic>

            <Treat>
              <TreatIcon src={ImageCommon.treat}></TreatIcon>
              <TreatDigtal>
                <TreatWords>Treat</TreatWords>
                <Strip>
                  <TreatStrip></TreatStrip>
                </Strip>
              </TreatDigtal>
              <Digtal>45</Digtal>
            </Treat>
          </Attribute>
        </InfoExhibition>
      </Exhibition>
      <MobileExhibition>
        <IconsAndImgMobile>
          <UpBtn src={ImageCommon.up}></UpBtn>
          <SmallImgMobile>
            <IconsMobile src={ImageCommon.smallRole01}></IconsMobile>
            <IconsMobile src={ImageCommon.smallRole02}></IconsMobile>
            <IconsMobile src={ImageCommon.smallRole03}></IconsMobile>
          </SmallImgMobile>
          <MobileDownBtn src={ImageCommon.mDown}></MobileDownBtn>
        </IconsAndImgMobile>
        <RoleState>
          <RoleImg src={ImageCommon.Role1}></RoleImg>
          <RoleWords>
            He is an excellent healer, able to save team members in the battle
            against the dark planet
          </RoleWords>
          <MainAndAuxIcon>
            <MainIcon>
              <MainWords>Main</MainWords>
            </MainIcon>
            <AuxIcon>
              <AuxWords>Aux</AuxWords>
            </AuxIcon>
          </MainAndAuxIcon>
          <RoleWordsM>
            <MainNum>99</MainNum>
            <Line2>/</Line2>
            <AuxNum>56</AuxNum>
          </RoleWordsM>
        </RoleState>
      </MobileExhibition>

      <DigtalDisplay>
        <SkilIcons>
          <SkillIcon src={ImageCommon.defense}></SkillIcon>
          <SkillIcon src={ImageCommon.attack}></SkillIcon>
          <SkillIcon src={ImageCommon.mentality}></SkillIcon>
          <SkillIcon src={ImageCommon.magic}></SkillIcon>
          <SkillIcon src={ImageCommon.treat}></SkillIcon>
        </SkilIcons>
        <SkillExplain>
          <SkillName>Defense</SkillName>
          <SkillName>Attack</SkillName>
          <SkillName>Mentality</SkillName>
          <SkillName>Magic</SkillName>
          <SkillName>Treat</SkillName>
        </SkillExplain>
        <StripMobile>
          <MagicStrip></MagicStrip>
          <TreatStrip></TreatStrip>
        </StripMobile>
        <SkillDigtal>
          <SkillDigtalNum>56</SkillDigtalNum>
          <SkillDigtalNum>56</SkillDigtalNum>
          <SkillDigtalNum>56</SkillDigtalNum>
          <SkillDigtalNum>56</SkillDigtalNum>
          <SkillDigtalNum>56</SkillDigtalNum>
        </SkillDigtal>
      </DigtalDisplay>
      <Footer>
        <Logo src={ImageCommon.logo}></Logo>
        <State>
          <Icons>
            <IconsImg src={ImageCommon.github}></IconsImg>
            <IconsImg src={ImageCommon.twitter}></IconsImg>
            <IconsImg src={ImageCommon.telegram}></IconsImg>
          </Icons>
          <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
        </State>
      </Footer>
      <Bottom>
        <BottomItems>
          <HomeItem>
            <HomeIcon src={ImageCommon.HomeBright}></HomeIcon>
            <HomeWords>Home</HomeWords>
          </HomeItem>
          <GameItem>
            <GameIcon src={ImageCommon.Game}></GameIcon>
            <GameWords>Game</GameWords>
          </GameItem>
          <MarketItem>
            <MarketIcon src={ImageCommon.Market}></MarketIcon>
            <MarketWords>Market</MarketWords>
          </MarketItem>
        </BottomItems>
      </Bottom>
    </MainContainer>
  )
}
const MainContainer = styled.div`
  // position:relative;
  // width: 1920px;
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(2678)};
  background: #1a202e;
  @media (max-width: 768px) {
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(2206)};
    overflow: hidden;
  } ;
`
const Top = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    height: ${autoWidthVW(80)};
    background: #28374c;
    box-shadow: 0px 4px 4px 0px #131922;
    display: flex;
    align-items: center;
  }
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
const WalletImg = styled.img`
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(8)};
    width: ${autoWidthVW(50)};
    height: ${autoWidthVW(51)};
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
const Banner = styled.div`
  // position:relative;
  width: 100%;
  height: ${autoWidthVW(1080)};
  background-image: url(${ImageCommon.banner});
  background-color: #1a202e;
  background-size: 100% 100%;
  overflow: hidden;
  @media (max-width: 768px) {
    background-image: url(${ImageCommon.mbanner});
    height: ${autoWidthVW(520)};
    background-color: #1a202e;
    background-size: 100% 100%;
  }
`
const MobileButtons = styled.div`
  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(10)};
    margin-left: ${autoWidthVW(15)};
    width: ${autoWidthVW(345)};
    height: ${autoWidthVW(40)};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const MobileButton = styled.div`
  @media (max-width: 768px) {
    width: ${autoWidthVW(108)};
    height: ${autoWidthVW(40)};
    border-radius: ${autoWidthVW(20)};
    border: ${autoWidthVW(1)} solid #8fd7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${autoWidthVW(12)};
    font-family: Book;
    font-weight: normal;
    color: #ffffff;
    line-height: ${autoWidthVW(14)};
  }
`
const Wallet = styled.div`
  margin-left: ${autoWidthVW(1466)};
  margin-top: ${autoWidthVW(30)};
  padding-top: ${autoWidthVW(10)};
  padding-left: ${autoWidthVW(10)};
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  // background-color:#1A202E ;
  background-image: url(${ImageCommon.wallet});
  box-sizing: border-box;
  // background-size:${autoWidthVW(200)} ${autoWidthVW(50)};
  background-size: 100% 100%;

  @media (max-width: 768px) {
    display: none;
  }
`
const Sellect = styled.div`
  // position:absolute;
  // left:1486;
  // top:49;
  // z-index:2;

  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #1a202e;
  line-height: ${autoWidthVW(30)};
`

const PlayBoxImg = styled.img`
  margin-left: ${autoWidthVW(395)};
  margin-top: ${autoWidthVW(579)};
  width: ${autoWidthVW(326)};
  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(432)};
    margin-left: ${autoWidthVW(77)};
    width: ${autoWidthVW(224)};
    height: ${autoWidthVW(96)};
  }
`
const Buttons = styled.div`
  margin-top: ${autoWidthVW(44)};
  margin-left: ${autoWidthVW(393)};
  width: ${autoWidthVW(476)};
  // height: ${autoWidthVW(96)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 786px) {
    display: none;
  }
`
const Button = styled.div`
  width: ${autoWidthVW(204)};
  height: ${autoWidthVW(96)};
  background-image: url(${ImageCommon.buyBooton});
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(10)};
`

const TimeBtn = styled.div`
  // position:absolute;
  margin-left: ${autoWidthVW(671)};
  margin-top: ${autoWidthVW(45)};
  width: ${autoWidthVW(587)};
  height: ${autoWidthVW(216)};
  background-image: url(${ImageCommon.timeBtn});
  background-size: 100% 100%;

  @media (max-width: 768px) {
    display: none;
  }
`

const BoxTitle = styled.div`
  margin-left: ${autoWidthVW(718)};
  // width: ${autoWidthVW(500)};
  // height: 72px;
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(72)};
  letter-spacing: ${autoWidthVW(1)};

  @media (max-width: 768px) {
    display: none;
  }
`
const AirDropImg = styled.img`
  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(41)};
    margin-left: ${autoWidthVW(15)};
    width: ${autoWidthVW(348)};
    height: ${autoWidthVW(190)};
  }
  @media (min-width: 768px) {
    display: none;
  }
`
const CustDown = styled.div`
  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(1)};
    margin-left: ${autoWidthVW(132)};
    font-size: ${autoWidthVW(22)};
    font-family: Regular;
    font-weight: 400;
    color: #8fd7ff;
    line-height: ${autoWidthVW(33)};
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const TimeDisplay = styled.div`
  width: ${autoWidthVW(375)};
  height: ${autoWidthVW(72)};
  margin-left: ${autoWidthVW(781)};
  margin-top: ${autoWidthVW(16)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(53)};
    width: ${autoWidthVW(266)};
    height: ${autoWidthVW(49)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Share = styled.div`
  margin-right: ${autoWidthVW(16)};
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-right: ${autoWidthVW(21)};
    display: flex;
    justify-content: space-between;
  }
`
const TimeNum = styled.div`
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #ffddc3;
  line-height: ${autoWidthVW(72)};
  // vertical-align:bottom;

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(32)};
    font-family: Regular;
    font-weight: 400;
    color: #8fd7ff;
    line-height: ${autoWidthVW(49)};
  }
`
const TimeWords = styled.div`
  margin-top: ${autoWidthVW(22)};
  font-size: ${autoWidthVW(24)};
  font-family: Regular;
  font-weight: 400;
  color: #ffffff;
  line-height: ${autoWidthVW(36)};
  padding-left: ${autoWidthVW(4)};
  // vertical-align:bottom;

  @media (max-width: 768px) {
    font-size: ${autoWidthVW(16)};
    font-family: Regular;
    font-weight: 400;
    color: #ffffff;
    line-height: ${autoWidthVW(24)};
    padding-left: ${autoWidthVW(6)};
    margin-top: ${autoWidthVW(17)};
  }
`

const CharactersTitle = styled.div`
  margin-left: ${autoWidthVW(812)};
  margin-top: ${autoWidthVW(122)};
  font-size: ${autoWidthVW(48)};
  font-family: Regular;
  font-weight: 400;
  color: #8fd7ff;
  line-height: ${autoWidthVW(72)};
  letter-spacing: ${autoWidthVW(1)};

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(89)};
    margin-top: ${autoWidthVW(40)};
    font-size: ${autoWidthVW(32)};
    font-family: Regular;
    font-weight: 400;
    color: #8fd7ff;
    line-height: ${autoWidthVW(49)};
  }
`
const ParkDesc = styled.div`
  margin-top: ${autoWidthVW(30)};
  margin-left: ${autoWidthVW(320)};
  width: ${autoWidthVW(1280)};
  height: ${autoWidthVW(80)};
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(20)};
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(15)};
    margin-left: ${autoWidthVW(30)};
    width: ${autoWidthVW(315)};
    height: ${autoWidthVW(185)};
    font-size: ${autoWidthVW(12)};
    font-family: Book;
    font-weight: normal;
    color: #ffffff;
    line-height: ${autoWidthVW(20)};
  }
`
const Exhibition = styled.div`
  margin-left: ${autoWidthVW(320)};
  margin-top: ${autoWidthVW(40)};
  display: flex;
  justify-content: space-between;
  width: ${autoWidthVW(1212)};
  height: ${autoWidthVW(571)};

  @media (max-width: 768px) {
    display: none;
  }
`
const ImgExhibition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${autoWidthVW(470)};
  height: 100%;

  // @media (max-width:768px){
  //  dispaly:none
  // }
`
const SmallImage = styled.div`
  margin-left: ${autoWidthVW(47)};
  display: flex;
  align-items: center;
`
const LeftBtn = styled.img`
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
`
const ImgList = styled.div`
  margin-left: ${autoWidthVW(39)};
  width: ${autoWidthVW(259)};
  height: ${autoWidthVW(72)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Img70 = styled.img`
  width: ${autoWidthVW(70)};
  height: ${autoWidthVW(70)};
`
const Img72 = styled.img`
  width: ${autoWidthVW(72)};
  height: ${autoWidthVW(72)};
`

const DownBtn = styled.img`
  margin-left: ${autoWidthVW(39)};
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};
`

const BigImage = styled.div`
  width: ${autoWidthVW(510)};
  height: ${autoWidthVW(470)};
  background-image: url(${(props) => {
    if (props.imgIndex === 0) return ImageCommon.bigFishImg
    if (props.imgIndex === 1) return ImageCommon.Sharkbig
    if (props.imgIndex === 2) return ImageCommon.Turtlebig
  }});
  background-size: 100% 100%;
`
const InfoExhibition = styled.div`
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(594)};
  display: flex;
  // align-items:center;
  flex-direction: column;
`
const InfoName = styled.div`
  margin-left: ${autoWidthVW(71)};
  font-size: ${autoWidthVW(40)};
  font-family: Regular;
  font-weight: 400;
  color: #ffffff;
  line-height: ${autoWidthVW(60)};
`
const InfoState = styled.div`
  margin-top: ${autoWidthVW(7)};
  margin-left: ${autoWidthVW(71)};
  display: flex;
`
const WordsContent = styled.div`
  width: ${autoWidthVW(260)};
  height: ${autoWidthVW(82)};
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(18)};
  overflow: hidden;
`
const Mainlist = styled.div`
  margin-left: ${autoWidthVW(70)};
  height: ${autoWidthVW(82)};
  display: flex;
  flex-direction: column;
`
const Diagonal = styled.div`
  margin-left: ${autoWidthVW(12)};
  margin-top: ${autoWidthVW(42)};
  width: ${autoWidthVW(19)};
  height: ${autoWidthVW(42)};
  // border: ${autoWidthVW(1)} solid #FFFFFF;
`
const AuxList = styled.div`
  margin-left: ${autoWidthVW(17)};
  height: ${autoWidthVW(82)};
  display: flex;
  flex-direction: column;
`

const MainBtn = styled.img`
  margin-top: ${autoWidthVW(2)};
  margin-left: ${autoWidthVW(8)};
  width: ${autoWidthVW(53)};
  height: ${autoWidthVW(26)};
`
const AuxBtn = styled.img`
  margin-top: ${autoWidthVW(2)};
  margin-left: ${autoWidthVW(8)};
  width: ${autoWidthVW(53)};
  height: ${autoWidthVW(26)};
`
const N99 = styled.div`
    margin-top;${autoWidthVW(15)};
    font-size: ${autoWidthVW(40)};
    padding-left:${autoWidthVW(10)};
    font-family: Gotham-Bold, Gotham;
    font-weight: bold;
    color: #FF5377;
    line-height: ${autoWidthVW(48)};
  `

const N56 = styled.div`
    margin-top;${autoWidthVW(15)};
    width: ${autoWidthVW(67)};
    height: ${autoWidthVW(40)};
    font-size: ${autoWidthVW(40)};
    padding-left:${autoWidthVW(10)};
    font-family: Gotham-Bold, Gotham;
    font-weight: bold;
    color: #8FD7FF;
    line-height: ${autoWidthVW(48)};
  `

const Attribute = styled.div`
  margin-top: ${autoWidthVW(34)};
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(353)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Defense = styled.div`
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const DefenseIcon = styled.img`
  width: ${autoWidthVW(40)};
`
const DefenseDigital = styled.div`
  background-image: url(${ImageCommon.rectangle1});
  width: ${autoWidthVW(520)};
  heigth: ${autoWidthVW(40)};
  background-size: 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const DefenseWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const Strip = styled.div`
  background-image: url(${ImageCommon.backBlack});
  width: ${autoWidthVW(401)};
  height: ${autoWidthVW(14)};
  background-size: 100% 100%;
`
const DefenseStrip = styled.div`
  width: ${autoWidthVW(65)};
  height: ${autoWidthVW(14)};
  background: #5b6278;
`
const Digtal = styled.div`
  font-size: ${autoWidthVW(28)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(34)};
`
const Attack = styled.div`
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const AttackIcon = styled.img`
  width: ${autoWidthVW(40)};
`
const AttackDigtal = styled.div`
  background-image: url(${ImageCommon.rectangle1});
  width: ${autoWidthVW(520)};
  height: ${autoWidthVW(40)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-size: 100% 100%;
`
const AttackWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const AttackStrip = styled.div`
  width: ${autoWidthVW(152)};
  height: ${autoWidthVW(14)};
  background: #5b6278;
`
const Intelligence = styled.div`
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const IntelligenceIcon = styled.img`
  width: ${autoWidthVW(40)};
`
const IntelligenceDigtal = styled.div`
  background-image: url(${ImageCommon.rectangle1});
  width: ${autoWidthVW(520)};
  height: ${autoWidthVW(40)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-size: 100% 100%;
`
const IntelligenceWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const IntelligenceStrip = styled.div`
  width: ${autoWidthVW(376)};
  height: ${autoWidthVW(14)};
  background: #ff5377;
`
const Magic = styled.div`
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const MagicIcon = styled.img`
  width: ${autoWidthVW(40)};
`
const MagicDigtal = styled.div`
  background-image: url(${ImageCommon.rectangle1});
  width: ${autoWidthVW(520)};
  height: ${autoWidthVW(40)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-size: 100% 100%;
`
const MagicWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const MagicStrip = styled.div`
  width: ${autoWidthVW(247)};
  height: ${autoWidthVW(13)};
  background: #8fd7ff;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(206)};
    margin-top: ${autoWidthVW(3)};
    margin-bottom: ${autoWidthVW(3)};
    width: ${autoWidthVW(40)};
    height: ${autoWidthVW(4)};
    background: #ff5377;
    border-radius: ${autoWidthVW(2)};
  }
`
const Treat = styled.div`
  width: ${autoWidthVW(643)};
  height: ${autoWidthVW(41)};
  display: flex;
  justify-content: space-between;
`
const TreatIcon = styled.img`
  width: ${autoWidthVW(40)};
`
const TreatDigtal = styled.div`
  background-image: url(${ImageCommon.rectangle1});
  width: ${autoWidthVW(520)};
  height: ${autoWidthVW(40)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-size: 100% 100%;
`
const TreatWords = styled.div`
  font-size: ${autoWidthVW(14)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(17)};
`
const TreatStrip = styled.div`
  width: ${autoWidthVW(185)};
  height: ${autoWidthVW(14)};
  background: #5b6278;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(22)};
    margin-top: ${autoWidthVW(3)};
    margin-bottom: ${autoWidthVW(3)};
    width: ${autoWidthVW(40)};
    height: ${autoWidthVW(4)};
    background: #8fd7ff;
    border-radius: ${autoWidthVW(2)};
  }
`
const Icons = styled.div`
  margin-left: ${autoWidthVW(138)};
  margin-top: ${autoWidthVW(47)};
  width: ${autoWidthVW(190)};
  // height:${autoWidthVW(40)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(45)};
    width: ${autoWidthVW(152)};
    height: ${autoWidthVW(32)};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const IconsImg = styled.img`
  width: ${autoWidthVW(40)};
  height: ${autoWidthVW(40)};

  @media (max-width: 768px) {
    width: ${autoWidthVW(32)};
    height: ${autoWidthVW(32)};
  }
`
const CopyRight = styled.div`
  margin-top: ${autoWidthVW(30)};
  // margin-left:${autoWidthVW(1310)};
  font-size: ${autoWidthVW(16)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(19)};

  @media (max-width: 768px) {
    margin-tip: ${autoWidthVW(20)};
    width: ${autoWidthVW(246)};
    height: ${autoWidthVW(12)};
    font-size: ${autoWidthVW(12)};
    font-family: Book;
    font-weight: normal;
    color: #ffffff;
    line-height: ${autoWidthVW(14)};
  }
`
const Logo = styled.img`
  margin-top: ${autoWidthVW(58)};
  margin-left: ${autoWidthVW(289)};
  width: ${autoWidthVW(143)};
  height: ${autoWidthVW(64)};

  @media (max-width: 768px) {
    display: none;
  }
`
const Footer = styled.div`
  margin-top: ${autoWidthVW(93)};
  width: ${autoWidthVW(1920)};
  height: ${autoWidthVW(180)};
  display: flex;

  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(59)};
    width: 100%;
    height: ${autoWidthVW(144)};
    width: ${autoWidthVW(40)};
  }
`
const State = styled.div`
  margin-left: ${autoWidthVW(879)};
  width: ${autoWidthVW(328)};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(67)};
    width: ${autoWidthVW(246)};
    height: ${autoWidthVW(64)};
    display: flex;
    flex-direction: column;
  }
`
const MobileExhibition = styled.div`
  @media (max-width: 768px) {
    margin-top: ${autoWidthVW(40)};
    margin-left: ${autoWidthVW(19)};
    width: ${autoWidthVW(349)};
    height: ${autoWidthVW(410)};
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
const UpBtn = styled.img`
  @media (max-width: 768px) {
    margin-left: ${autoWidthVW(16)};
    width: ${autoWidthVW(40)};
    height: ${autoWidthVW(40)};
  }
`
const IconsAndImgMobile = styled.div`
  @media (max-width: 768px) {
    width: ${autoWidthVW(71)};
    height: 100%;
    dispaly: flex;
    flex-direction: column;
  }
`
const SmallImgMobile = styled.div`
  margin-top: ${autoWidthVW(30)};
  width: 100%;
  height: ${autoWidthVW(272)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const IconsMobile = styled.img`
  @media (max-width: 768px) {
    width: ${autoWidthVW(71)};
    height: ${autoWidthVW(72)};
  }
`
const MobileDownBtn = styled.img`
  margin-top: ${autoWidthVW(29)};
  margin-left: ${autoWidthVW(16)};
  width: ${autoWidthVW(40)};
  heigth: ${autoWidthVW(40)};
`
const RoleState = styled.div`
  margin-left: ${autoWidthVW(26)};
  width: ${autoWidthVW(252)};
  height: 100%;
  display: flex;
  flex-direction: column;
`
const RoleImg = styled.img`
  width: ${autoWidthVW(252)};
  height: ${autoWidthVW(287)};
`
const RoleWords = styled.div`
  margin-left: ${autoWidthVW(9)};
  width: ${autoWidthVW(235)};
  height: ${autoWidthVW(42)};
  font-size: ${autoWidthVW(10)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(14)};
  text-align: center;
  overflow: hidden;
`
const MainAndAuxIcon = styled.div`
  display:flex;
  margin-top:${autoWidthVW(19)};
  margin-left:${autoWidthVW(9)}
  width:${autoWidthVW(13)};
  align-items:center;
`
const MainIcon = styled.div`
  margin-left:${autoWidthVW(61)};
  width:${autoWidthVW(35)};
  height;${autoWidthVW(13)};
  background: #FF5377;
  border-radius: ${autoWidthVW(7)};
`
const AuxIcon = styled.div`
  margin-left:${autoWidthVW(59)};
  width:${autoWidthVW(35)};
  height;${autoWidthVW(13)};
  background: #8FD7FF;
  border-radius: ${autoWidthVW(7)};
`
const MainWords = styled.div`
  margin-left: ${autoWidthVW(3)};
  margin-bottom: ${autoWidthVW(2)};
  width: ${autoWidthVW(25)};
  height: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(10)};
  font-family: Book;
  font-weight: normal;
  color: #1a202e;
  line-height: ${autoWidthVW(12)};
`
const AuxWords = styled.div`
  margin-left: ${autoWidthVW(6)};
  margin-bottom: ${autoWidthVW(2)};
  width: ${autoWidthVW(21)};
  height: ${autoWidthVW(10)};
  font-size: ${autoWidthVW(10)};
  font-family: Book;
  font-weight: normal;
  color: #1a202e;
  line-height: ${autoWidthVW(12)};
`
const RoleWordsM = styled.div`
  margin-left: ${autoWidthVW(47)};
  margin-top: ${autoWidthVW(10)};
  height: ${autoWidthVW(40)};
  width: ${autoWidthVW(196)};
  display: flex;
  align-items: center;
`
const MainNum = styled.div`
  margin-left: ${autoWidthVW(5)};
  width: ${autoWidthVW(53)};
  height: ${autoWidthVW(40)};
  font-size: ${autoWidthVW(40)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ff5377;
  line-height: ${autoWidthVW(53)};
  text-align: center;
`
const Line2 = styled.div`
  margin-left: ${autoWidthVW(16)};
  margin-top: ${autoWidthVW(4)};
  width: ${autoWidthVW(15)};
  height: ${autoWidthVW(32)};
  line-height: ${autoWidthVW(32)};
  font-size: ${autoWidthVW(20)};
  color: #fff;
`
const AuxNum = styled.div`
  margin-left: ${autoWidthVW(13)};
  width: ${autoWidthVW(52)};
  height: ${autoWidthVW(40)};
  font-size: ${autoWidthVW(40)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #8fd7ff;
  line-height: ${autoWidthVW(48)};
`
const DigtalDisplay = styled.div`
  margin-top: ${autoWidthVW(40)};
  margin-left: ${autoWidthVW(30)};
  width: ${autoWidthVW(315)};
  height: ${autoWidthVW(110)};
  display: flex;
  flex-direction: column;
  // overflow:hidden;

  @media (min-width: 768px) {
    display: none;
  }
`
const SkilIcons = styled.div`
  height: ${autoWidthVW(40)};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SkillIcon = styled.img`
  width: ${autoWidthVW(41)};
  hieght: ${autoWidthVW(40)};
`
const SkillExplain = styled.div`
  margin-top: ${autoWidthVW(8)};
  width: 100%;
  height: ${autoWidthVW(12)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SkillName = styled.div`
  font-size: ${autoWidthVW(12)};
  font-family: Book;
  font-weight: normal;
  color: #ffffff;
  line-height: ${autoWidthVW(14)};
`
const StripMobile = styled.div`
  margin-top: ${autoWidthVW(11)};
  width: ${autoWidthVW(314)};
  height: ${autoWidthVW(10)};
  background-image: url(${ImageCommon.MobileStrip});
  background-size: 100% 100%;
  display: flex;
  align-items: center;
`
const SkillDigtal = styled.div`
  margin-left: ${autoWidthVW(8)};
  margin-top: ${autoWidthVW(11)};
  width: ${autoWidthVW(299)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const SkillDigtalNum = styled.div`
  width: ${autoWidthVW(25)};
  height: ${autoWidthVW(18)};
  font-size: ${autoWidthVW(18)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(22)};
`
const Bottom = styled.div`
  margin-top: ${autoWidthVW(30)};
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

  @media (min-width: 768px) {
    display: none;
  }
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
export default Home
