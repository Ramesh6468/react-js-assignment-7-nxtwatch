import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../Context/ThemeContext'
import Header from '../header'
import FilterSection from '../FilterSection'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'

import {
  TrendingCard,
  TrendingTitle,
  LinkItem,
  IconContainer,
  Heading,
  VideoList,
} from './styledComponents'

import './index.css'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'inProgress',
}

class Gaming extends Component {
  state = {gamingVideosList: [], apiStatus: initialApiStatus.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: initialApiStatus.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      console.log(updatedData)
      this.setState({
        apiStatus: initialApiStatus.success,
        gamingVideosList: updatedData,
      })
    } else {
      this.setState({apiStatus: initialApiStatus.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  getFailureView = () => <FailureView onClickRetry={this.onClickRetry()} />

  getSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <VideoList>
        {gamingVideosList.map(each => (
          <GamingVideoItem key={each.id} videoDetails={each} />
        ))}
      </VideoList>
    )
  }

  getLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  getApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case initialApiStatus.failure:
        return this.getFailureView()
      case initialApiStatus.success:
        return this.getSuccessView()
      case initialApiStatus.loading:
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
                <TrendingTitle data-testid="gaming" isDark={isDark}>
                  <LinkItem isDark={isDark}>
                    <IconContainer darkMode={isDark}>
                      <SiYoutubegaming className="header-icon" />
                    </IconContainer>
                    <Heading isDark={isDark}>Gaming</Heading>
                  </LinkItem>
                  {this.getApiStatus()}
                </TrendingTitle>
              </TrendingCard>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
