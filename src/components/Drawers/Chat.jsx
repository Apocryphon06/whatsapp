import { Wrapper, Head, Title } from './Styled'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const Chat = ({ toggleDrawer }) => {
  return (
    <Wrapper>
      <Head>
        <Title>
          {' '}
          <ArrowBackIcon
            onClick={toggleDrawer('Chat', 'left', false)}
            sx={{ paddingRight: '34px', cursor: 'pointer' }}
          />{' '}
          New Chat
        </Title>
      </Head>
      
    </Wrapper>
  )
}

export default Chat
