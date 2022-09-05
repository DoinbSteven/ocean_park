import { useState } from 'react'
import styled, { css } from 'styled-components'
import { autoWidthVW } from '../common/Common'

function CenterNav() {
  const [navIndex, setNavIndex] = useState(1)
  return (
    <NavMenu>
      <div style={{ position: 'relative' }} onClick={() => setNavIndex(0)}>
        <NavWords sel={navIndex === 0}>Ocean Box</NavWords>
        <UnderLine checked={navIndex === 0}></UnderLine>
      </div>
      <div
        style={{ position: 'relative', marginLeft: '100px' }}
        onClick={() => setNavIndex(1)}>
        <NavWords sel={navIndex === 1}>Airdrop Ocean Box</NavWords>
        <UnderLine checked={navIndex === 1}></UnderLine>
      </div>
    </NavMenu>
  )
}
const NavWords = styled.div`
  font-size: ${autoWidthVW(32)};
  font-family: Gotham-Bold, Gotham;
  font-weight: bold;
  color: #ffffff;
  line-height: ${autoWidthVW(38)};
  ${(props) =>
    props.sel &&
    css`
      color: #8fd7ff;
    `}
`
const UnderLine = styled.div`
  ${(props) => {
    if (props.checked)
      return ` position: absolute;
  top: ${autoWidthVW(75)};
  left: 0;
  right: 0;
  z-index:3;
  height: ${autoWidthVW(10)};
  background: #8fd7ff;
  border-radius: ${autoWidthVW(5)};
  `
    else return `display:none;`
  }}
`
const NavMenu = styled.div`
  display: flex;
`
export default CenterNav
