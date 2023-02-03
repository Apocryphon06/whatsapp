import {
  Wrapper,
  Head,
  Title,
  ImageWrapper,
  ProfileImage,
  Info,
  SubHeading,
  CustomButton,
} from './Styled'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import community from '../../assets/community.svg'

const Communities = ({ toggleDrawer }) => {
  return (
    <Wrapper>
      <Head>
        <Title>
          {' '}
          <ArrowBackIcon
            onClick={toggleDrawer('Communities', 'left', false)}
            sx={{ paddingRight: '34px', cursor: 'pointer' }}
          />{' '}
          Communities
        </Title>
      </Head>
      <ImageWrapper>
        <ProfileImage src={community} alt="community" />
        <br />
        <SubHeading>Introducing Communities</SubHeading>
        <br />
        <Info>
          Easily organize your related groups and send announcements. Now, your
          communities, like neighborhoods or schools, can have their own space.
        </Info>
        <br />
        <CustomButton>start a community</CustomButton>
      </ImageWrapper>
    </Wrapper>
  )
}

export default Communities
