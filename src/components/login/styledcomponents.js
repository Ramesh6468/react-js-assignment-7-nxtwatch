import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoginCard = styled.form`
  background-color: #ffffff;
  padding: 30px;
  box-shadow: 0px 0px 1px 1px #0f0f0f;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`

export const ImageItem = styled.img`
  height: 70px;
  @media screen and (max-width: 768px) {
    height: 50px;
  }
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`

export const Label = styled.label`
  color: #475569;
  font-size: 15px;
`

export const CheckBoxCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const Button = styled.button`
  background-color: #00306e;
  border-radius: 10px;
  padding: 10px;
  color: #ffffff;
  margin-top: 10px;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
`
