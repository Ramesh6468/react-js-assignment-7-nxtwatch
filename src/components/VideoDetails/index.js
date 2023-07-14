import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../header'
import FilterSection from '../FilterSection'
import FailureView from '../FailureView'
import ThemeContext from '../../Context/ThemeContext'

import {
  BodyContainer,
  ResponsiveContainer,
  LoaderContainer,
  VideoContainer,
  CardContainer,
  Profile,
  Card,
  Heading,
  Name,
  DetailsContainer,
  Details,
  Button,
  Description,
  ButtonsCountContainer,
  DescriptionContainer,
  ButtonName,
  ButtonsContainer,
  ViewCount,
} from './styledComponents'

const initialApiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'inProgress',
}

class VideoDetails extends Component {
  state = {
    apiStatus: initialApiStatus.initial,
    videoData: {},
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: initialApiStatus.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }

      this.setState({
        videoData: updatedData,
        apiStatus: initialApiStatus.success,
      })
    } else {
      this.setState({apiStatus: initialApiStatus.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState({liked: true, disliked: false})
  }

  onClickDislike = () => {
    this.setState({disliked: true, liked: false})
  }

  getLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  getFailureView = () => <FailureView onClickRetry={this.onClickRetry} />

  getSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark, onClickSaveVideo, savedVideosList} = value
        const {videoData, liked, disliked} = this.state
        const {
          videoUrl,
          publishedAt,
          title,
          viewCount,
          description,
          id,
          subscriberCount,
        } = videoData
        const getVideo = savedVideosList.find(each => each.id === id)
        let saved = true
        if (getVideo === undefined) {
          saved = false
        }
        const {name, profileImageUrl} = videoData
        console.log(profileImageUrl)
        const likeClass = liked ? 'clicked' : ''
        const disLikeClass = disliked ? 'clicked' : ''
        const savedClass = saved ? 'clicked' : ''
        const isSavedText = saved ? 'Saved' : 'Save'
        const onVideoSave = () => {
          onClickSaveVideo(videoData)
        }
        return (
          <>
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls width="95%" height="45vw" />
              <DescriptionContainer>
                <Heading>{title}</Heading>
                <ButtonsCountContainer>
                  <DetailsContainer>
                    <Details>{viewCount} Views</Details>
                    <Details>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </Details>
                  </DetailsContainer>
                  <ButtonsContainer>
                    <Button type="button" onClick={this.onClickLike}>
                      <AiOutlineLike className={`icon ${likeClass}`} />
                      <ButtonName clicked={liked}>Like</ButtonName>
                    </Button>
                    <Button type="button" onClick={this.onClickDislike}>
                      <AiOutlineDislike className={`icon ${disLikeClass}`} />
                      <ButtonName clicked={disliked}>Dislike</ButtonName>
                    </Button>
                    <Button type="button" onClick={onVideoSave}>
                      <BiListPlus className={`icon ${savedClass}`} />
                      <ButtonName clicked={saved}>{isSavedText}</ButtonName>
                    </Button>
                  </ButtonsContainer>
                </ButtonsCountContainer>
                <div>
                  <hr />
                </div>

                <CardContainer>
                  <Profile src={profileImageUrl} alt="name" />
                  <Card>
                    <Name>{name}</Name>
                    <ViewCount>{subscriberCount}</ViewCount>
                    <Description isDark={isDark}>{description}</Description>
                  </Card>
                </CardContainer>
              </DescriptionContainer>
            </VideoContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderViews = () => {
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
              <BodyContainer>
                <FilterSection />
                <ResponsiveContainer
                  data-testid="videoItemDetails"
                  isDark={isDark}
                >
                  {this.renderViews(isDark)}
                </ResponsiveContainer>
              </BodyContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
