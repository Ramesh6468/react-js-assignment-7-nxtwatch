import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Filter = styled.div`
  background-color: ${props => (props.isDark ? '#222222' : '#ffffff')};
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  overflow-y: fixed;
  @media screen and (max-width: 576px) {
    display: ${props => (props.showSideBar ? 'flex' : 'none')};
    overflow-y: auto;
    width: 100vw;
    align-items: center;
  }
`

export const IconItem = styled.div`
  background-color: ${props => (props.isDark ? '#222222' : '#ffffff')};
  display: flex;
  align-items: center;
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.active ? (props.isDark ? '#383838' : '#cccccc') : ''};
  color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.active
      ? props.isDark
        ? '#ff0000'
        : 'blue'
      : props.isDark
      ? 'white'
      : 'black'};
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  margin-top: 40px;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`

export const Item = styled.h1`
  font-size: 20px;
  margin-left: 20px;
`

export const Heading = styled.h1`
  font-size: 20px;
`

export const ImageCard = styled.div`
  display: flex;
`

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`

export const Para = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#222222')};
  margin-left: 10px;
`

export const LinkCard = styled(Link)`
  text-decoration: none;
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-left: 0px;
`
