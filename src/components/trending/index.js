import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiOutlineFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import Header from '../header'
import FilterSection from '../FilterSection'
import FailureView from '../FailureView'
import SavedVideoItem from '../savedVideoItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  TrendingCard,
  ResponsiveContainer,
  LoaderContainer,
  VideosListContainer,
  IconContainer,
  Heading,
  LinkItem,
} from './styledComponents'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'inProgress',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: initialApiStatus.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: initialApiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: initialApiStatus.success,
      })
    } else {
      this.setState({apiStatus: initialApiStatus.failure})
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  getLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  getFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  getSuccessView = () => {
    const {videosList} = this.state
    return (
      <VideosListContainer>
        {videosList.map(each => (
          <SavedVideoItem key={each.id} videoDetails={each} />
        ))}
      </VideosListContainer>
    )
  }

  getApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case initialApiStatus.failure:
        return this.getFailureView()

      case initialApiStatus.success:
        return this.getSuccessView()

      case initialApiStatus.inProgress:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <TrendingCard>
                <FilterSection />
                <ResponsiveContainer data-testid="trending" isDark={isDark}>
                  <LinkItem isDark={isDark}>
                    <IconContainer darkMode={isDark}>
                      <HiOutlineFire className="header-icon" />
                    </IconContainer>
                    <Heading isDark={isDark}>Trending</Heading>
                  </LinkItem>
                  {this.getApiStatus()}
                </ResponsiveContainer>
              </TrendingCard>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
