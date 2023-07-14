import Header from '../header'
import FilterSection from '../FilterSection'
import ThemeContext from '../../Context/ThemeContext'

import {
  BodyContainer,
  ResponsiveContainer,
  NotFoundImage,
  Tag,
  Heading,
  NotFoundContainer,
} from './styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const image = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Header />
          <BodyContainer>
            <FilterSection />
            <ResponsiveContainer isDark={isDark}>
              <NotFoundContainer>
                <NotFoundImage src={image} alt="not found" />
                <Heading isDark={isDark}>Page Not Found</Heading>
                <Tag isDark={isDark}>
                  we are sorry, the page you requested could not be found.
                </Tag>
              </NotFoundContainer>
            </ResponsiveContainer>
          </BodyContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
