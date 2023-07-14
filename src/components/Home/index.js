import {Component} from 'react'
import Cookies from 'js-cookie'

import {GrClose} from 'react-icons/gr'
import {BiSearchAlt2} from 'react-icons/bi'
import Loader from 'react-loader-spinner'

import Header from '../header'
import FilterSection from '../FilterSection'
import FailureView from '../FailureView'
import VideoItem from '../VideoItem'
import ThemeContext from '../../Context/ThemeContext'

import {
  BgContainer,
  HomeCard,
  HomeContainer,
  BannerHeading,
  BannerContainer,
  CloseButton,
  BannerLogo,
  BannerButton,
  Button,
  InputBox,
  LoaderContainer,
  VideosContainer,
  FailureCard,
  FailureImage,
  ErrMsg,
  Para,
  RetryButton,
} from './styledComponents'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'inProgress',
}

class Home extends Component {
  state = {
    searchInput: '',
    videosList: [],
    apiStatus: initialApiStatus.initial,
    bannerView: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: initialApiStatus.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  closeBannerClicked = () => {
    this.setState({bannerView: false})
  }

  getLoadingSection = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  getFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  getNoVideos = () => (
    <FailureCard>
      <FailureImage
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <ErrMsg>No Search results found</ErrMsg>
      <Para>Try different key words or remove search filter</Para>
      <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
    </FailureCard>
  )

  getSuccessView = isDark => {
    const {videosList} = this.state
    return (
      <>
        {videosList.length === 0 ? (
          this.getNoVideos()
        ) : (
          <VideosContainer isDark={isDark}>
            {videosList.map(each => (
              <VideoItem key={each.id} videoDetails={each} />
            ))}
          </VideosContainer>
        )}
      </>
    )
  }

  getBannerView = () => {
    const {bannerView} = this.state
    return (
      <BannerContainer show={bannerView} data-testid="banner">
        <CloseButton data-testid="close" onClick={this.closeBannerClicked}>
          <GrClose />
        </CloseButton>
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerHeading>Buy Nxt Watch Premium</BannerHeading>
        <BannerButton>GET IT NOW</BannerButton>
      </BannerContainer>
    )
  }

  getApiStatus = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case initialApiStatus.failure:
        return this.getFailureView(isDark)

      case initialApiStatus.success:
        return this.getSuccessView(isDark)

      case initialApiStatus.inProgress:
        return this.getLoadingSection(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const {searchInput, bannerView} = this.state
          return (
            <BgContainer>
              <Header />
              <HomeCard>
                <FilterSection />
                <HomeContainer data-testid="home" isDark={isDark}>
                  {bannerView && this.getBannerView()}
                  <InputBox
                    id="search"
                    type="search"
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.onChangeSearchInput}
                  />
                  <Button
                    type="button"
                    data-testid="searchButton"
                    onClick={this.onClickSearchButton}
                  >
                    <BiSearchAlt2 />
                  </Button>
                  {this.getApiStatus(isDark)}
                </HomeContainer>
              </HomeCard>
            </BgContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
