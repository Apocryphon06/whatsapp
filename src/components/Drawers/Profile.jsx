import {
  Wrapper,
  Head,
  Title,
  ImageWrapper,
  ProfileImage,
  Body,
  Label,
  Info,
  Editable,
} from './Styled'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import EditIcon from '@mui/icons-material/Edit'

const Profile = ({toggleDrawer}) => {
  return (
    <Wrapper>
      <Head>
        <Title>
          {' '}
          <ArrowBackIcon
            onClick={toggleDrawer('Profile','left', false)}
            sx={{ paddingRight: '34px', cursor: 'pointer' }}
          />{' '}
          Profile
        </Title>
      </Head>
      <ImageWrapper>
        <ProfileImage src="https://picsum.photos/200" alt="profile" />
      </ImageWrapper>

      <Body>
        <Label>Your name</Label>
        <br />
        <Editable>
          Hrithik <EditIcon sx={{ cursor: 'pointer' }} />{' '}
        </Editable>
        <br />

        <Info>Nisi do fugiat quis deserunt.</Info>
        <br />

        <Label>About</Label>
        <br />

        <Editable>
          Available <EditIcon sx={{ cursor: 'pointer' }} />{' '}
        </Editable>
      </Body>
    </Wrapper>
  )
}

export default Profile
