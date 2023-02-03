import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import EditIcon from '@mui/icons-material/Edit'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 350px;
  height: 100vh;
  background-color: #111b21;
`
const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap-between: 20px;
  height: 108px;
  background-color: #2e3b44;
`

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  color: #fcfcfc;
  font-weight: 600;
  padding: 20px;
`

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Label = styled.div`
  color: #42cba5;
  font-size: 16px;
`

const Editable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #eefaf6;
  font-size: 16px;
`

const Info = styled.div`
  color: #adbac1;
`

function ProfileModal() {
  return (
    <Wrapper>
      <Head>
        <Title>
          {' '}
          <ArrowBackIcon
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

export default ProfileModal
