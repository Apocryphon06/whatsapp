import ChatView from './ChatView'
import { fields } from '../data.js'
import React, { useState } from 'react'
import SideDrawer from './Drawer.jsx'

// styled-components
import styled from 'styled-components'

// mui imports
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FilterListIcon from '@mui/icons-material/FilterList'

import chat from '../assets/chat.svg'
import status from '../assets/status.svg'
import groups from '../assets/groups.svg'

const ChatListingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111b21;
  width: 450px;
  height: 100vh;
  border-right: 1px solid #2e3b44;
`

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1f2c33;
`

const NavActions = styled.div`
  display: flex;
  flex-direction: row;
`

const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const UserIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 90px;
  cursor: pointer;
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  line-height: 1.5em;
`

const Name = styled.div`
  font-size: 16px;
  color: #fcfcfc;
  font-weight: 600;
`

const Recent = styled.div`
  color: #d8d8d8;
  font-size: 14px;
`

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #111b21;
  padding: 10px;
`

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #2a3942;
  padding: 7px;
  border-radius: 9px;
`

const Search = styled.input`
  width: 22vw;
  background: transparent;
  border: none;
  color: #fcfcfc;
  font-size: 13px;
  &:focus {
    outline: none;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: #111b21;
  border-bottom: 1px solid #2e3b44;
  &:hover {
    background-color: #2a3942;
  }
`

const LastActivity = styled.div`
  color: #adbac1;
  font-size: 12px;
`

const Area = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`

const Scrollable = styled.div`
  overflow: hidden;
  padding-right: 7px;
  &:hover {
    overflow-y: scroll;
  }
`

function ChatListing() {
  const [person, setPerson] = useState({})

  const [isActive, setIsActive] = useState(false)

  // drawer states
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
  })
  const [name, setName] = useState('')
  const toggleDrawer = (name, anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setName(name)
    setState({ ...state, [anchor]: open })
  }

  // menu states
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const options = [
    'New Group',
    'New Community',
    'Starred messages',
    'Settings',
    'Log out',
  ]
  return (
    <Area>
      <ChatListingWrapper>
        <Nav>
          <UserIcon
            style={{ cursor: 'pointer' }}
            src={`https://picsum.photos/200`}
            alt="user"
            onClick={toggleDrawer('Profile', 'left', true)}
          />
          <NavActions>
            <img
              onClick={toggleDrawer('Communities', 'left', true)}
              style={{
                color: '#adbac1',
                width: '23px',
                height: '23px',
                cursor: 'pointer',
                marginRight: '25px',
              }}
              src={groups}
              alt={groups}
            />

            <img
              style={{
                color: '#adbac1',
                width: '23px',
                height: '23px',
                cursor: 'pointer',
                marginRight: '25px',
              }}
              src={status}
              alt={status}
            />

            <img
              onClick={toggleDrawer('Chat', 'left', true)}
              style={{
                color: '#adbac1',
                width: '23px',
                height: '23px',
                cursor: 'pointer',
                marginRight: '25px',
              }}
              src={chat}
              alt={chat}
            />
            <MoreVertIcon
              sx={{
                color: '#adbac1',
                width: '23px',
                height: '23px',
                cursor: 'pointer',
              }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                style: {
                  backgroundColor: '#1f2c33',
                  color: '#d1d7db',
                  margin: 0,
                },
              }}
            >
              {options.map((item) => (
                <MenuItem
                  sx={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                    },
                    fontSize: '15px',
                    padding: '10px 40px',
                    textAlign: 'start',
                  }}
                  onClick={handleClose}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </NavActions>
        </Nav>
        <SearchWrapper>
          <SearchContainer>
            <SearchIcon
              sx={{
                color: '#8696a0',
                cursor: 'pointer',
                width: '20px',
                height: '20px',
                marginRight: '10px',
                marginLeft: '10px',
              }}
            />
            <Search placeholder=" Search or start a new chat " />
          </SearchContainer>
          <FilterListIcon
            sx={{
              color: '#8696a0',
              cursor: 'pointer',
              width: '20px',
              height: '20px',
            }}
          />
        </SearchWrapper>

        <Scrollable>
          {fields.map((item) => (
            <ItemWrapper
              onClick={() => {
                setIsActive(true)
                setPerson({
                  name: item.name,
                  activity: item.activity,
                  url: item.url,
                })
              }}
            >
              <User>
                <UserIcon
                  style={{ width: '50px', height: '50px' }}
                  src={item.url}
                  alt="user"
                />
                <InfoWrapper>
                  <Name>{item.name}</Name>
                  <Recent>{item.recent_text}</Recent>
                </InfoWrapper>
              </User>
              <LastActivity>{item.activity}</LastActivity>
            </ItemWrapper>
          ))}
        </Scrollable>
      </ChatListingWrapper>
      <ChatView
        isActive={isActive}
        name={person.name}
        activity={person.activity}
        url={person.url}
      />
      <SideDrawer state={state} toggleDrawer={toggleDrawer} name={name} />
    </Area>
  )
}

export default ChatListing
