import ThemeContext from '../../Context/ThemeContext'
import {
  FailureViewCard,
  FailureImgCard,
  ErrorMsg2,
  Para3,
  Button,
} from './styledComponents'

const FailureView = props => {
  const {onClickRetry} = props
  const onClickRetryButton = () => {
    onClickRetry()
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const failureImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewCard>
            <FailureImgCard src={failureImg} alt="failure view" />
            <ErrorMsg2>Oops! Something Went Wrong</ErrorMsg2>
            <Para3>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </Para3>
            <Button type="button" onClick={onClickRetryButton}>
              Retry
            </Button>
          </FailureViewCard>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureView
