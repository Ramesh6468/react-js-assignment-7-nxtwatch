import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import {
  ListItem,
  VideoContainer,
  ThumbNail,
  VideoDetailCard,
  TittleCard,
  ViewCard,
  Title,
  Name,
  Count,
} from './styledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, name, viewCount, publishedAt} = videoDetails
  console.log(name)

  return (
    <ThemeContext>
      {value => {
        const {isDark} = value
        return (
          <Link to={`videos/${id}`}>
            <ListItem isDark={isDark}>
              <VideoContainer>
                <ThumbNail src={thumbnailUrl} alt="thumbnail" />
                <VideoDetailCard>
                  <TittleCard>
                    <Title isDark={isDark}>{title}</Title>
                    <Name>{name}</Name>
                    <ViewCard>
                      <Count>{viewCount} views</Count>
                      <Count>
                        {formatDistanceToNow(new Date(publishedAt))}
                      </Count>
                    </ViewCard>
                  </TittleCard>
                </VideoDetailCard>
              </VideoContainer>
            </ListItem>
          </Link>
        )
      }}
    </ThemeContext>
  )
}

export default SavedVideoItem
