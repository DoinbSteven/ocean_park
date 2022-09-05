import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import OceanBox from './page/OceanBox'
import Adventure from './page/Adventure'
import InventoryRole from './page/InventoryRole'
import Adventure_single from './page/Adventure_single'
import Adventure_Multi from './page/Adventure_Multi'
import Adventure_world from './page/Adventure_world'
import AirdropOceanBOX from './page/AirdropOceanBox'
import Openbox_role from './page/Openbox-role'
import MarketPlace from './page/MarketPlace'
import Techcenter_ready from './page/Techcenter_ready'
import Techcenter_working from './page/Techcenter_working'
import OpenBox_badge from './page/OpenBox_badge'
import OpenBox_bradgeList from './page/OpenBox_bradgeList'
import Treasury from './page/Treasury'
import Treasury_open from './page/Treasury_open'
import ComingSoon from './page/CommingSoon'
import Invite from './page/Invite'
import Invite_Table from './page/Invite_Table'
import ChooseTable from './page/ChooseTable'
import OpenBox_coin from './page/OpenBox_coin'
import RotationChart from './page/RotationChart'
import Rolesell from './page/Rolesell'
function App () {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='/oceanBox' element={<OceanBox />}></Route>
        <Route path='/oceanBox/airdrop' element={<AirdropOceanBOX />}></Route>
        <Route path='/openBox/coin' element={<OpenBox_coin />}></Route>
        <Route path='/openBox/role' element={<Openbox_role />}></Route>
        <Route path='/openBox/badge' element={<OpenBox_badge />}></Route>
        <Route path='/openBox/bradge/list' element={<OpenBox_bradgeList />}></Route>
        <Route path='/inventoryRole' element={<InventoryRole />}></Route>
        <Route path='/adventure' element={<Adventure />}></Route>
        <Route path='/adventure/single' element={<Adventure_single />}></Route>
        <Route path='/adventure/multi' element={<Adventure_Multi />}></Route>
        <Route path='/adventure/world' element={<Adventure_world />}></Route>
        <Route path='/marketPlace' element={<MarketPlace />}></Route>
        <Route path='/techcenter/ready' element={<Techcenter_ready />}></Route>
        <Route path='/techcenter/working' element={<Techcenter_working />}></Route>
        <Route path='/treasury' element={<Treasury />}></Route>
        <Route path='/treasury/open' element={<Treasury_open />}></Route>
        <Route path='/comingsoon' element={<ComingSoon />}></Route>
        <Route path='/invite' element={<Invite />}></Route>
        <Route path='/invite/table' element={<Invite_Table />}></Route>
        <Route path='/chooseTable' element={<ChooseTable />}></Route>
        <Route path='/rotation' element={<RotationChart />}></Route>
        <Route path='rolesell' element={<Rolesell />}></Route>
      </Routes>
    </div>
  )
}

export default App
