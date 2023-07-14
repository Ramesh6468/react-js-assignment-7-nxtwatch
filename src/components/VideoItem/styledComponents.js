import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 20px;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
`

export const ThumbNail = styled.img`
  width: 300px;
`

export const VideoDetailCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
`
export const ChannelLogo = styled.img`
  height: 50px;
  margin-top: 7px;
`

export const TittleCard = styled.div`
  display: flex;
  flex-direction: column;
`

export const ViewCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.p`
  color: ${props => (props.isDark ? '#64748b' : '#1e293b')};
  margin-top: 5px;
`

export const Name = styled.p`
  color: #606060;
`

export const Count = styled.p`
  color: #606060;
`
