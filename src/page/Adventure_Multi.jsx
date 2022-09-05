import styled from "styled-components";
import ImageCommon from "../images/ImageCommon";
import { autoWidthVW } from '../common/Common';
import '../common/custom.css';
function Adventure_Multi() {
    return (
        <>
            <MobileTop>
                <SeeMore src={ImageCommon.seeMore}></SeeMore>
                <MobileLogo src={ImageCommon.mobileLogo}></MobileLogo>
                <Bnb>BNB</Bnb>
                <MobileWallet src={ImageCommon.mWallet}></MobileWallet>
            </MobileTop>
            <Page>
                <LeftMenu>
                    <TopLogo src={ImageCommon.logo}></TopLogo>
                    <NavMenu>
                        <MenuWords>Home</MenuWords>
                        <MenuWords>Ocean Box</MenuWords>
                        <MenuWords>Inventory</MenuWords>
                        <MenuWords>Market Place</MenuWords>
                        <MenuWords>Techcenter</MenuWords>
                        <MenuWords>Shellmine</MenuWords>
                        <CheckMenu>Adventure</CheckMenu>
                        <MenuWords>Treasury</MenuWords>
                        <MenuWords>Invite</MenuWords>
                    </NavMenu>
                </LeftMenu>
                <Right>
                    <Group1>
                        <PriceWords>ALGA Price: 7.23 USDT
                            CORAL Price: 7.23 USDT</PriceWords>
                        <TopBtns>
                            <NormalBtn>Document</NormalBtn>
                            <NormalBtn>Buy ALGA</NormalBtn>
                            <NormalBtn>Buy CORAL</NormalBtn>
                            <Wallet>
                                <WalletWords>Sellect Wallet</WalletWords>
                            </Wallet>
                        </TopBtns>
                    </Group1>

                    <NavCenter>
                        <LeftArrow src={ImageCommon.leftArrow}></LeftArrow>
                        <SingleTitle>SINGLE INSTANCE</SingleTitle>
                        <IconAndDigtal>
                            <Alga>
                                <Icon src={ImageCommon.alga}></Icon>
                                <DigtalWords>ALGA:34</DigtalWords>
                                <DigtalWordsm>34</DigtalWordsm>
                            </Alga>
                            <Coral>
                                <Icon src={ImageCommon.shanhu}></Icon>
                                <DigtalWords>CORAL:23</DigtalWords>
                                <DigtalWordsm>23</DigtalWordsm>
                            </Coral>
                        </IconAndDigtal>
                    </NavCenter>
                    <Line></Line>
                    <ChooseBooton>
                        <ChooseBtnWords>Single Instance</ChooseBtnWords>
                    </ChooseBooton>
                    <AmountImg src={ImageCommon.single_amount}></AmountImg>
                    {/* <SingleInstance src={ImageCommon.single_instance}></SingleInstance> */}
                    <SingleMulti src={ImageCommon.muiltInstance}></SingleMulti>
                    <MobleAmount>
                        <Amountm src={ImageCommon.Amount}></Amountm>
                        <AmountWords>Amount</AmountWords>
                        <AmountNum>3</AmountNum>
                        <AddBtn>Add To</AddBtn>
                    </MobleAmount>
                    <Ranking>
                        <Share>
                            <DigtalAndBtn>
                                <RankNum>NO.12345678</RankNum>
                                <Time>23:45:56</Time>
                                <ReceiveBtn>Receive</ReceiveBtn>
                                <ExitBtn>Exit</ExitBtn>
                            </DigtalAndBtn>
                            <Line2></Line2>
                        </Share>
                        <Share>
                            <DigtalAndBtn>
                                <RankNum>NO.12345678</RankNum>
                                <Time>23:45:56</Time>
                                <ReceiveBtn>Receive</ReceiveBtn>
                                <ExitBtn>Exit</ExitBtn>
                            </DigtalAndBtn>
                            <Line2></Line2>
                        </Share>
                        <Sharem>
                            <DigtalAndBtn>
                                <RankNum>NO.12345678</RankNum>
                                <Time>23:45:56</Time>
                                <ReceiveBtn>Receive</ReceiveBtn>
                                <ExitBtn>Exit</ExitBtn>
                            </DigtalAndBtn>
                            <Line2></Line2>
                        </Sharem>
                        <Sharem>
                            <DigtalAndBtn>
                                <RankNum>NO.12345678</RankNum>
                                <Time>23:45:56</Time>
                                <ReceiveBtn>Receive</ReceiveBtn>
                                <ExitBtn>Exit</ExitBtn>
                            </DigtalAndBtn>
                            <Line2></Line2>
                        </Sharem>
                        <Sharem>
                            <DigtalAndBtn>
                                <RankNum>NO.12345678</RankNum>
                                <Time>23:45:56</Time>
                                <ReceiveBtn>Receive</ReceiveBtn>
                                <ExitBtn>Exit</ExitBtn>
                            </DigtalAndBtn>
                            <Line2></Line2>
                        </Sharem>
                        <LastShare>
                            <DigtalAndBtn>
                                <RankNum>NO.12345678</RankNum>
                                <Time>23:45:56</Time>
                                <ReceiveBtn>Receive</ReceiveBtn>
                                <ExitBtn>Exit</ExitBtn>
                            </DigtalAndBtn>
                        </LastShare>
                    </Ranking>
                    <MoblieIcons>
                        <NormalLink src={ImageCommon.github}></NormalLink>
                        <SmallLink src={ImageCommon.twitter}></SmallLink>
                        <NormalLink src={ImageCommon.telegram}></NormalLink>
                    </MoblieIcons>
                    <MobileCopyRight>@2022 Ocean Park.All Rights Reserved.</MobileCopyRight>

                    <MobileBottom>
                        <MoblieBottomIcons>
                            <HomeIcon src={ImageCommon.Home}></HomeIcon>
                            <GameIcon src={ImageCommon.GameBright}></GameIcon>
                            <MarketIcon src={ImageCommon.Market}></MarketIcon>
                        </MoblieBottomIcons>
                        <BottomIconWords>
                            <NormalWords>Home</NormalWords>
                            <CheckWords>Game</CheckWords>
                            <NormalWords>Market</NormalWords>
                        </BottomIconWords>
                    </MobileBottom>
                </Right>
            </Page>
            <Fotter>
                <BottomLogo src={ImageCommon.logo}></BottomLogo>
                <BottomRight>
                    <BottomIcons>
                        <NormalLink src={ImageCommon.github}></NormalLink>
                        <SmallLink src={ImageCommon.twitter}></SmallLink>
                        <NormalLink src={ImageCommon.telegram}></NormalLink>
                    </BottomIcons>
                    <CopyRight>@2022 Ocean Park.All Rights Reserved.</CopyRight>
                </BottomRight>
            </Fotter>
        </>

    )
}

const Page = styled.div`
    width:${autoWidthVW(1920)};
    height:${autoWidthVW(1080)};
    background: rgba(26, 32, 46, 1);
    background-image:url(${ImageCommon.adventure_single});
    background-size:100% ${autoWidthVW(1080)};
    background-repeat:no-repeat;
    display:flex;

    @media (max-width:768px){
        width:${autoWidthVW(375)};
        height:${autoWidthVW(1195)};
        background: #131922;
        flex-direction:column;
    }
`
const LeftMenu = styled.div`
    width: ${autoWidthVW(340)};
    height: ${autoWidthVW(1080)};
    background: rgba(26, 32, 46, 0.4);
    // border: ${autoWidthVW(1)} solid #5B6278;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;

    @media (max-width:768px){
        display:none;
    }
`
const TopLogo = styled.img`
    margin-top:${autoWidthVW(73)};
    margin-left:${autoWidthVW(70)};
    width:${autoWidthVW(200)};
    height:${autoWidthVW(89)};
`
const NavMenu = styled.div`
    margin-top:${autoWidthVW(104)};
    height:${autoWidthVW(664)};
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-between;
`
const MenuWords = styled.div`
    font-size: ${autoWidthVW(24)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(29)};
`
const CheckMenu = styled.div`
    width: ${autoWidthVW(260)};
    height: ${autoWidthVW(50)};
    background-image:url(${ImageCommon.checkBox});
    background-size:100%;
    font-size: ${autoWidthVW(24)};
    font-family: Medium;
    font-weight: 500;
    color: #1A202E;
    line-height: ${autoWidthVW(50)};
    text-align:center;
`
const Right = styled.div`
    width:${autoWidthVW(1580)};
    height:${autoWidthVW(1080)};
    display:flex;
    flex-direction:column;

    @media (max-width:768px){
        width:${autoWidthVW(375)};
        height:${autoWidthVW(1275)};
        background: #131922;
        flex-direction:column;
    }
`
const Group1 = styled.div`
    margin-top:${autoWidthVW(30)};
    margin-left:${autoWidthVW(73)};
    margin-right:${autoWidthVW(254)};
    display:flex;
    align-items:center;

    @media (max-width:768px){
        display:none;
    }
`
const PriceWords = styled.div`
    width: ${autoWidthVW(220)};
    height: ${autoWidthVW(50)};
    font-size: ${autoWidthVW(16)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(25)};
`
const TopBtns = styled.div`
    margin-left:${autoWidthVW(263)};
    // margin-right:${autoWidthVW(0)};
    width:${autoWidthVW(770)};
    display:flex;
    justify-content:space-between;
    
`
const NormalBtn = styled.div`
    width: ${autoWidthVW(160)};
    height: ${autoWidthVW(50)};
    border-radius: ${autoWidthVW(25)};
    border: ${autoWidthVW(1)} solid #8FD7FF;
    font-size: ${autoWidthVW(16)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(50)};
    text-align:center;
`
const Wallet = styled.div`
    width:${autoWidthVW(200)};
    height:${autoWidthVW(50)};
    background-image:url(${ImageCommon.wallet});
    background-size:100%;
`
const WalletWords = styled.div`
    margin-left:${autoWidthVW(20)};
    margin-top:${autoWidthVW(16)};
    width: ${autoWidthVW(116)};
    height: ${autoWidthVW(16)};
    font-size: ${autoWidthVW(16)};
    font-family: Medium;
    font-weight: 500;
    color: #1A202E;
    line-height: ${autoWidthVW(19)};
`
const NavCenter = styled.div`
    margin-top:${autoWidthVW(82)};
    margin-left:${autoWidthVW(73)};
    margin-right:${autoWidthVW(255)};
    display:flex;
    align-items:center;

    @media (max-width:768px){
        margin-top:${autoWidthVW(0)};
        margin-left:${autoWidthVW(0)};
        margin-right:${autoWidthVW(0)};
    }
`
const LeftArrow = styled.img`
    width:${autoWidthVW(18)};
    height:${autoWidthVW(31)};

    @media (max-width:768px){
        display:none;
    }
`
const SingleTitle = styled.div`
    margin-left:${autoWidthVW(30)};
    font-size: ${autoWidthVW(32)};
    font-family: Gotham-Bold, Gotham;
    font-weight: bold;
    color: #8FD7FF;
    line-height: ${autoWidthVW(38)};

    @media (max-width:768px){
        display:none;
    }
`
const IconAndDigtal = styled.div`
    margin-left:${autoWidthVW(571)};
    width:${autoWidthVW(320)};
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media (max-width:768px){
        margin-top:${autoWidthVW(20)};
        margin-left:${autoWidthVW(48)};
        width:${autoWidthVW(216)};
    }
`
const Alga = styled.div`
    width:${autoWidthVW(139)};
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media (max-width:768px){
        width:${autoWidthVW(79)};
    }
`
const Icon = styled.img`
    width:${autoWidthVW(50)};
    height:${autoWidthVW(50)};
`
const Coral = styled.div`
    width:${autoWidthVW(151)};
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media (max-width:768px){
        width:${autoWidthVW(77)};
    }
`
const DigtalWords = styled.div`
    margin-left:${autoWidthVW(4)};
    font-size: ${autoWidthVW(18)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(22)};

    @media (max-width:768px){
        display:none;
    }
`
const DigtalWordsm = styled.div`
    margin-left:${autoWidthVW(4)};
    font-size: ${autoWidthVW(18)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(22)};

    @media (min-width:768px){
        display:none;
    }
`
const Line = styled.div`
    margin-top:${autoWidthVW(37)};
    width: ${autoWidthVW(1280)};
    margin-left:${autoWidthVW(45)};
    height: 1px;
    box-sizing:border-box;
    border: 1px solid #8FD7FF; 

    @media (max-width:768px){
        display:none;
    }
`
const AmountImg = styled.img`
    margin-top:${autoWidthVW(23)};
    margin-left:${autoWidthVW(787)};
    width:${autoWidthVW(359)};
    height:${autoWidthVW(80)};

    @media (max-width:768px){
        display:none;
    }
`
const SingleMulti = styled.img`
    margin-left:${autoWidthVW(239)};
    width:${autoWidthVW(912)};
    height:${autoWidthVW(531)};

     @media (max-width:768px){
        margin-top:${autoWidthVW(37)};
        margin-left:${autoWidthVW(11)};
        width:${autoWidthVW(357)};
        height:${autoWidthVW(216)};
    }
`

const Ranking = styled.div`
    margin-left:${autoWidthVW(413)};
    margin-top:${autoWidthVW(34)};
    margin-right:${autoWidthVW(617)};
    margin-bottom:${autoWidthVW(35)};
    height:${autoWidthVW(158)};
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    @media (max-width:768px){
        margin-top:${autoWidthVW(40)};
        margin-left:${autoWidthVW(30)};
        margin-right:${autoWidthVW(30)};
        margin-bottom:${autoWidthVW(0)};
        height:${autoWidthVW(321)};
    }


`
const Share = styled.div`
    height:${autoWidthVW(50)};
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    @media (max-width:768px){
        height:${autoWidthVW(45)};
    }
`

const DigtalAndBtn = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const RankNum = styled.div`
    font-size: ${autoWidthVW(24)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(29)};

    @media (max-width:768px){
        font-size: ${autoWidthVW(14)};
        line-height: ${autoWidthVW(17)};
    }
`
const Time = styled.div`
    font-size: ${autoWidthVW(24)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(29)};

     @media (max-width:768px){
        font-size: ${autoWidthVW(14)};
        line-height: ${autoWidthVW(17)};
    }
`
const ReceiveBtn = styled.div`
    width: ${autoWidthVW(90)};
    height: ${autoWidthVW(30)};
    border-radius: ${autoWidthVW(20)};
    border: ${autoWidthVW(2)} solid #8FD7FF;
    font-size: ${autoWidthVW(14)};
    font-family: Gotham-Bold, Gotham;
    font-weight: bold;
    color: #8FD7FF;
    line-height: ${autoWidthVW(30)};
    text-align:center;

    @media (max-width:768px){
        width: ${autoWidthVW(60)};
        border: ${autoWidthVW(1)} solid #8FD7FF;
        font-size: ${autoWidthVW(12)};
        line-height: ${autoWidthVW(25)};
    }
 `
const ExitBtn = styled.div`
    width: ${autoWidthVW(90)};
    height: ${autoWidthVW(30)};
    border-radius: ${autoWidthVW(20)};
    border: ${autoWidthVW(2)} solid  #FF5377;
    font-size: ${autoWidthVW(14)};
    font-family: Gotham-Bold, Gotham;
    font-weight: bold;
    color:  #FF5377;
    line-height: ${autoWidthVW(30)};
    text-align:center;

     @media (max-width:768px){
        width: ${autoWidthVW(60)};
        border: ${autoWidthVW(1)} solid #8FD7FF;
        font-size: ${autoWidthVW(12)};
        line-height: ${autoWidthVW(25)};
    }
`
const Line2 = styled.div`
    width: ${autoWidthVW(551)};
    height: ${autoWidthVW(1)};
    border: ${autoWidthVW(1)} solid #5B6278;
    box-sizing:border-box;

    @media (max-width:768px){
        width: ${autoWidthVW(316)};
        
    }
`
const Fotter = styled.div`
    width:${autoWidthVW(1920)};
    height:${autoWidthVW(180)};
    background: #1A202E;
    box-shadow: 0px ${autoWidthVW(-4)} ${autoWidthVW(10)} 0px #080A0F;
    display:flex;

    @media (max-width:768px){
        display:none;
    }
`
const BottomLogo = styled.img`
    margin-top:${autoWidthVW(69)};
    margin-left:${autoWidthVW(370)};
    width:${autoWidthVW(143)};
    height:${autoWidthVW(64)};
`
const BottomRight = styled.div`
    margin-top:${autoWidthVW(47)};
    margin-left:${autoWidthVW(798)};
    width:${autoWidthVW(328)};
    height:${autoWidthVW(86)};
    display:flex;
    flex-direction:column;
    justify-content:space-between;

`
const BottomIcons = styled.div`
    margin-left:${autoWidthVW(138)};
    width:${autoWidthVW(190)};
    display:flex;
    align-items:center;
    justify-content:space-between;
`
const NormalLink = styled.img`
    width:${autoWidthVW(40)};
    height:${autoWidthVW(40)};

    @media (max-width:768px){
        width:${autoWidthVW(33)};
        height:${autoWidthVW(32)};
    }
`
const SmallLink = styled.img`
    width:${autoWidthVW(36)};
    height:${autoWidthVW(29)};

    @media (max-width:768px){
        width:${autoWidthVW(29)};
        height:${autoWidthVW(23)};
    }
`
const CopyRight = styled.div`
    font-size: ${autoWidthVW(16)};
    font-family: Book;
    font-weight: normal;
    color: #FFFFFF;
    line-height: ${autoWidthVW(19)};
`
const MobileTop = styled.div`
    width: ${autoWidthVW(375)};
    height: ${autoWidthVW(80)};
    background: #28374C;
    box-shadow: 0px ${autoWidthVW(4)} ${autoWidthVW(4)} 0px #131922;
    display:flex;
    align-items:center;

    @media (min-width:768px){
        display:none;
    }
`
const SeeMore = styled.img`
    margin-left:${autoWidthVW(15)};
    width:${autoWidthVW(50)};
    height:${autoWidthVW(50)};
`
const MobileLogo = styled.img`
    margin-left:${autoWidthVW(4)};
    width:${autoWidthVW(90)};
    height:${autoWidthVW(50)};
`
const Bnb = styled.div`
    margin-left:${autoWidthVW(79)};
    width: ${autoWidthVW(64)};
    height: ${autoWidthVW(23)};
    background: #FFAB00;
    border-radius: ${autoWidthVW(12)};
    font-size: ${autoWidthVW(14)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(23)};
    text-align:center;
`
const MobileWallet = styled.img`
    margin-left:${autoWidthVW(8)};
    width:${autoWidthVW(50)};
    height:${autoWidthVW(51)};
`
const ChooseBooton = styled.div`
    margin-top:${autoWidthVW(25)};
    margin-left:${autoWidthVW(48)};
    background-image:url(${ImageCommon.chooseBooton});
    width:${autoWidthVW(280)};
    height:${autoWidthVW(50)};
    background-size:100%;

    @media (min-width:768px){
        display:none;
    }
`
const ChooseBtnWords = styled.div`
    box-sizing:border-box;
    margin-left:${autoWidthVW(24)};
    margin-top:${autoWidthVW(13)};
    margin-bottom:${autoWidthVW(16)};
    width: ${autoWidthVW(139)};
    height: ${autoWidthVW(18)};
    font-size: ${autoWidthVW(18)};
    font-family: Medium;
    font-weight: 500;
    color: #8FD7FF;
    line-height: ${autoWidthVW(22)};
`
const MobleAmount = styled.div`
    margin-top:${autoWidthVW(20)};
    margin-left:${autoWidthVW(30)};
    width:${autoWidthVW(315)};
    display:flex;
    align-items:center;

    @media (min-width:768px){
        display:none;
    }
`
const Amountm = styled.img`
    width:${autoWidthVW(40)};
    height:${autoWidthVW(40)};
`
const AmountWords = styled.div`
    margin-left:${autoWidthVW(15)};
    font-size: ${autoWidthVW(18)};
    font-family: Medium;
    font-weight: 500;
    color: #FFFFFF;
    line-height: ${autoWidthVW(22)};
`
const AmountNum = styled.div`
    margin-left:${autoWidthVW(10)};
    font-size: ${autoWidthVW(30)};
    font-family: Gotham-Medium, Gotham;
    font-weight: 500;
    color: #8FD7FF;
    line-height: ${autoWidthVW(36)};
`
const AddBtn = styled.div`
    margin-left:${autoWidthVW(46)};
    width: ${autoWidthVW(108)};
    height: ${autoWidthVW(40)};
    background: linear-gradient(270deg, #75B5D9 0%, #7BBCDF 53%, #78C1E5 100%);
    box-shadow: 0px ${autoWidthVW(3)} ${autoWidthVW(20)} 0px rgba(131,174,251,0.51), inset 0px 15px 18px 0px #B5E5FF;
    border-radius: ${autoWidthVW(20)};
    // border: ${autoWidthVW(1)} solid;
    border-image: linear-gradient(180deg, rgba(203, 237, 252, 1), rgba(81, 159, 201, 1)) 1 1;
    font-size: ${autoWidthVW(12)};
    font-family: Gotham-Book, Gotham;
    font-weight: normal;
    color: #FFFFFF;
    line-height: ${autoWidthVW(40)};
    text-align:center;
`
const Sharem = styled.div`
    @media (max-width:768px){
        height:${autoWidthVW(45)};
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    @media (min-width:768px){
        display:none;
    }
`
const LastShare = styled.div`
    height:${autoWidthVW(30)};
    display:flex;
    flex-direction:column;
    justify-content:space-between;

     @media (min-width:768px){
        display:none;
    }
`
const MoblieIcons = styled.div`
    margin-top:${autoWidthVW(90)};
    margin-left:${autoWidthVW(110)};
    width:${autoWidthVW(153)};
    display:flex;
    align-items:center;
    justify-content:space-between;
    // background:pink;

    @media (min-width:768px){
        display:none;
    }

`
const MobileCopyRight = styled.div`
    margin-top:${autoWidthVW(20)};
    margin-left:${autoWidthVW(65)};
    font-size: ${autoWidthVW(12)};
    font-family: Book;
    font-weight: normal;
    color: #FFFFFF;
    line-height: ${autoWidthVW(14)};

    @media (min-width:768px){
        display:none;
    }
`
const MobileBottom = styled.div`
    margin-top:${autoWidthVW(30)};
    width: ${autoWidthVW(375)};
    height:${autoWidthVW(120)};
    background: #1D2633;
    box-shadow: 0px ${autoWidthVW(-3)} ${autoWidthVW(10)} 0px rgba(0,0,0,0.5);
    border-radius: ${autoWidthVW(30)} ${autoWidthVW(30)} 0px 0px;
    border: ${autoWidthVW(1)} solid;
    border-image: linear-gradient(180deg, rgba(63, 74, 91, 1), rgba(151, 151, 151, 0)) 1 1;
    box-sizing:border-box;

     @media (min-width:768px){
        display:none;
    }
`
const MoblieBottomIcons = styled.div`
    margin-top:${autoWidthVW(20)};
    margin-left:${autoWidthVW(44)};
    margin-right:${autoWidthVW(41)};
    display:flex;
    justify-content:space-between;

   
`
const HomeIcon = styled.img`
    margin-top:${autoWidthVW(20)};
    width: ${autoWidthVW(43)};
    height: ${autoWidthVW(40)};
`
const GameIcon = styled.img`
    margin-top:${autoWidthVW(20)};
    width:${autoWidthVW(55)};
    height:${autoWidthVW(40)};
`
const MarketIcon = styled.img`
    margin-top:${autoWidthVW(23)};
    width:${autoWidthVW(43)};
    height:${autoWidthVW(40)};
`
const BottomIconWords = styled.div`
    margin-top:${autoWidthVW(10)};
    margin-left:${autoWidthVW(44)};
    margin-right:${autoWidthVW(37)};
    display:flex;
    justify-content:space-between;
`
const NormalWords = styled.div`
    font-size: ${autoWidthVW(14)};
    font-family: Medium;
    font-weight: 500;
    color: #777E90;
    line-height: ${autoWidthVW(17)};
`
const CheckWords = styled.div`
    font-size: ${autoWidthVW(14)};
    font-family: Medium;
    font-weight: 500;
    color:  #8FD7FF;
    line-height: ${autoWidthVW(17)};
`
export default Adventure_Multi;