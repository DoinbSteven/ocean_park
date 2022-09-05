import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'
import ImageCommon from '../images/ImageCommon'
export const MenuList = [
  'Home',
  'Ocean Box',
  'Inventory',
  'Market Place',
  'Techcenter',
  'Shellmine',
  'Adventure',
  'Treasury',
  'Invite',
]
function LeftMenu() {
  const [menuIndex, setMenuIndex] = useState(1)
  return (
    <Contain>
      <TopLogo src={ImageCommon.logo}></TopLogo>
      <MenuGroup>
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
      </MenuGroup>
    </Contain>
  )
}
const Contain = styled.div`
  width: ${autoWidthVW(340)};
  background: rgba(26, 32, 46, 0.4);
  border: ${autoWidthVW(1)} solid #5b6278;
  display: flex;
  flex-direction: column;
  padding-bottom: ${autoWidthVW(210)};

  @media (max-width: 768px) {
    display: none;
  }
`
const TopLogo = styled.img`
  margin-top: ${autoWidthVW(73)};
  margin-left: ${autoWidthVW(70)};
  margin-right: ${autoWidthVW(70)};
  width: ${autoWidthVW(200)};
`
const MenuGroup = styled.div`
  margin-top: ${autoWidthVW(104)};
  display: flex;
  flex-direction: column;
  align-items: center;
  // box-sizing: border-box;
`
const MenuWords = styled.div`
  padding-bottom: ${autoWidthVW(50)};
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
      text-align: center;
      box-sizing: border-box;
      margin-bottom: ${autoWidthVW(39)};
      line-height: ${autoWidthVW(50)};
      // margin-top: ${autoWidthVW(35)};
    `}
`
export default LeftMenu
