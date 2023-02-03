import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import Chat from './Drawers/Chat'
import Profile from './Drawers/Profile'
import Communities from './Drawers/Communities'

export default function SideDrawer({ state, toggleDrawer, name }) {
  return (
    <div>
      <React.Fragment key={'left'}>
        <Drawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
        >
          <Box sx={{ width: 450 }} role="presentation">
            {name === 'Profile' && <Profile toggleDrawer={toggleDrawer} />}
            {name === 'Communities' && (
              <Communities toggleDrawer={toggleDrawer} />
            )}
            {name === 'Chat' && <Chat toggleDrawer={toggleDrawer} />}
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  )
}
