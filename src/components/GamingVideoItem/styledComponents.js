import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
`

export const GamingCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

export const GamingImg = styled.img`
  height: 300px;
`

export const Title1 = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#222222')};
`

export const Count = styled.p`
  color: #909090;
  font-size: 20px;
`
