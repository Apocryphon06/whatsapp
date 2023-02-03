import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 450px;
  height: 100vh;
  background-color: #111b21;
`
export const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap-between: 20px;
  height: 108px;
  background-color: #2e3b44;
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  font-size: 18px;
  color: #fcfcfc;
  font-weight: 600;
  padding: 20px;
`

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Label = styled.div`
  color: #42cba5;
  font-size: 16px;
`

export const Editable = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #eefaf6;
  font-size: 16px;
`

export const Info = styled.div`
  color: #adbac1;
  line-height: 1.5em;
`

export const SubHeading = styled.div`
  font-size: 20px;
  color: #fcfcfc;
  font-weight: 600;
`

export const CustomButton = styled.button`
  color: black;
  letter-spacing: 1.2px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  background-color: #08a482;
  border: none;
  padding: 10px 30px;
  &:hover {
    background-color: #5ed0bc;
  }
  border-radius: 5px;
`
