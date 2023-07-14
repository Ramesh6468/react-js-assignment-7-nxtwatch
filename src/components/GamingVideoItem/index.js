import {Link} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'

import {
  ListItem,
  GamingCard,
  GamingImg,
  Title1,
  Count,
} from './styledComponents'

const GamingVideoItem = props => {
  const {videoDetails} = props
  const {id, thumbnailUrl, title, viewCount} = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`videos/${id}`}>
            <ListItem>
              <GamingCard>
                <GamingImg src={thumbnailUrl} alt="gamingItem" />
                <Title1 isDark={isDark}>{title}</Title1>
                <Count>{viewCount} watching worldwide</Count>
              </GamingCard>
            </ListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideoItem
