import {BiListPlus} from 'react-icons/bi'

import Header from '../header'
import FilterSection from '../FilterSection'
import SavedVideoItem from '../savedVideoItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  BodyContainer,
  ResponsiveContainer,
  VideosListContainer,
  NoSavedVideosContainer,
  NoSavedVideos,
  NoSavesVideosText,
  NoSavedVideosSuggestion,
  IconContainer,
  Heading,
  LinkItem,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value

      const renderVideos = () => (
        <>
          <LinkItem isDark={isDark}>
            <IconContainer isDark={isDark}>
              <BiListPlus className="header-icon" />
            </IconContainer>
            <Heading isDark={isDark}>Saved Videos</Heading>
          </LinkItem>
          <VideosListContainer>
            {savedVideosList.map(each => (
              <SavedVideoItem key={each.id} videoDetails={each} />
            ))}
          </VideosListContainer>
        </>
      )

      return (
        <>
          <Header />
          <BodyContainer>
            <FilterSection />
            <ResponsiveContainer data-testid="savedVideos" isDark={isDark}>
              {savedVideosList.length === 0 ? (
                <NoSavedVideosContainer>
                  <NoSavedVideos
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <NoSavesVideosText isDark={isDark}>
                    No saved videos found
                  </NoSavesVideosText>
                  <NoSavedVideosSuggestion isDark={isDark}>
                    Save your videos by clicking a button
                  </NoSavedVideosSuggestion>
                </NoSavedVideosContainer>
              ) : (
                renderVideos()
              )}
            </ResponsiveContainer>
          </BodyContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
