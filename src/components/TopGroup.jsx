import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
function TopGroup() {
  const BtnList = ['Document', 'Buy ALGA', 'Buy CORAL', 'Sellect Wallet']
  const [btnIndex, setBtnIndex] = useState(3)
  return (
    <Container>
      <PriceDesc>ALGA Price: 7.23 USDT CORAL Price: 7.23 USDT</PriceDesc>
      <TopBtns>
        {BtnList.map((item, index) => {
          return (
            <TopBtn
              selected={btnIndex === index}
              onClick={() => {
                setBtnIndex(index)
              }}>
              {item}
            </TopBtn>
          )
        })}
      </TopBtns>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  // align-items: center;
  justify-content: space-between;
  margin-left: ${autoWidthVW(75)};
  margin-top: ${autoWidthVW(30)};
  margin-right: ${autoWidthVW(252)};

  @media (max-width: 768px) {
    display: none;
  }
`
const PriceDesc = styled.div`
  width: ${autoWidthVW(200)};
  height: ${autoWidthVW(50)};
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(20)};
`
const TopBtns = styled.div`
  margin-left: ${autoWidthVW(253)};
  display: flex;
  // align-items: center;
`
const TopBtn = styled.div`
  width: ${autoWidthVW(160)};
  height: ${autoWidthVW(50)};
  margin-right: ${autoWidthVW(30)};
  border-radius: ${autoWidthVW(25)};
  border: ${autoWidthVW(1)} solid #8fd7ff;
  font-size: ${autoWidthVW(16)};
  font-family: Medium;
  font-weight: 500;
  color: #ffffff;
  line-height: ${autoWidthVW(50)};
  text-align: center;
  ${(props) =>
    props.selected &&
    css`
      width: ${autoWidthVW(200)};
      height: ${autoWidthVW(50)};
      background-image: url(${ImageCommon.wallet});
      background-size: 100% 100%;
      text-align: left;
      color: #1a202e;
      padding-left: ${autoWidthVW(20)};
      padding-top: ${autoWidthVW(19)};
      box-sizing: border-box;
      line-height: ${autoWidthVW(15)};
    `}
`

export default TopGroup
