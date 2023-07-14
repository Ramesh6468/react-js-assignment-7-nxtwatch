import styled from 'styled-components'

export const FailureViewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImgCard = styled.img`
  height: 300px;
`

export const ErrorMsg2 = styled.h1`
  color: ${props => (props.isDark ? '#231f20' : '#ffffff')};
  font-weight: bold;
`

export const Para3 = styled.p`
color ; #606060;

`

export const Button = styled.button`
  background-color: #4f46e5;
  padding: 10px;
  color: #ffffff;
  border-radius: 10px;
`
