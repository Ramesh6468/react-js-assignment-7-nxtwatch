import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  margin: 20px;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

export const ThumbNail = styled.img`
  width: 300px;
`

export const VideoDetailCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: ;
`
export const ChannelLogo = styled.img`
  height: 50px;
  margin-top: 7px;
`

export const TittleCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const ViewCard = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.p`
  color: ${props => (props.isDark ? '#64748b' : '#1e293b')};
  margin-top: 5px;
  font-weight: bold;
`

export const Name = styled.p`
  color: #606060;
`

export const Count = styled.p`
  color: #606060;
`
