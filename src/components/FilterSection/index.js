import {withRouter} from 'react-router-dom'
import {
  AiFillHome,
  AiOutlineHome,
  AiOutlineFire,
  AiFillFire,
} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../Context/ThemeContext'
import {
  Filter,
  IconItem,
  ItemContainer,
  Contact,
  Item,
  Heading,
  ImageCard,
  Logo,
  Para,
  LinkCard,
} from './styledcomponents'
import './index.css'

const FilterSection = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, onChangeActiveWindow, showSideBar} = value
      console.log(isDark)
      console.log(props)

      const onChangeWindow = event => {
        onChangeActiveWindow(event.target.id)
      }
      console.log(props)
      const {location} = props
      console.log(location)
      const {pathname} = location
      const pageLink = pathname

      return (
        <>
          <Filter isDark={isDark} showSideBar={showSideBar}>
            <ItemContainer>
              <LinkCard to="/" onClick={onChangeWindow}>
                {isDark ? (
                  <IconItem isDark={isDark} active={pageLink === '/'}>
                    <AiFillHome className="icon" />
                    <Item>Home</Item>
                  </IconItem>
                ) : (
                  <IconItem isDark={isDark} active={pageLink === '/'}>
                    <AiOutlineHome className="icon" />
                    <Item>Home</Item>
                  </IconItem>
                )}
              </LinkCard>
              <LinkCard to="/trending" onClick={onChangeWindow}>
                {isDark ? (
                  <IconItem isDark={isDark} active={pageLink === '/trending'}>
                    <AiFillFire className="icon" />
                    <Item>Trending</Item>
                  </IconItem>
                ) : (
                  <IconItem isDark={isDark} active={pageLink === '/trending'}>
                    <AiOutlineFire className="icon" />
                    <Item>Trending</Item>
                  </IconItem>
                )}
              </LinkCard>
              <LinkCard to="/gaming" onClick={onChangeWindow}>
                {isDark ? (
                  <IconItem isDark={isDark} active={pageLink === '/gaming'}>
                    <SiYoutubegaming className="icon" />
                    <Item>Gaming</Item>
                  </IconItem>
                ) : (
                  <IconItem isDark={isDark} active={pageLink === '/gaming'}>
                    <SiYoutubegaming className="icon" />
                    <Item>Gaming</Item>
                  </IconItem>
                )}
              </LinkCard>
              <LinkCard to="/saved-videos" onClick={onChangeWindow}>
                {isDark ? (
                  <IconItem
                    isDark={isDark}
                    active={pageLink === '/saved-videos'}
                  >
                    <BiListPlus className="icon" />
                    <Item>Saved Videos</Item>
                  </IconItem>
                ) : (
                  <IconItem
                    isDark={isDark}
                    active={pageLink === '/saved-videos'}
                  >
                    <BiListPlus className="icon" />
                    <Item>Saved Videos</Item>
                  </IconItem>
                )}
              </LinkCard>
            </ItemContainer>

            <Contact>
              <Heading>CONTACT US</Heading>
              <ImageCard>
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Logo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImageCard>
              <Para isDark={isDark}>
                Enjoy! Now to see your channels and recommendations
              </Para>
            </Contact>
          </Filter>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(FilterSection)
