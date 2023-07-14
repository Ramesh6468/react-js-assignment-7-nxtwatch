import styled from 'styled-components'

export const BodyContainer = styled.div`
  display: flex;
`

export const ResponsiveContainer = styled.div`
  width: 85%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f1f1')};
  overflow: auto;
  height: 90vh;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const SavedVideosContentContainer = styled.div`
  min-height: 100px;
  width: 88%;
  padding: 25px;
  margin-top: 50px;
`

export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 80vh;
  margin-top: 0px;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
`
export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const NoSavedVideos = styled.img`
  width: 50%;
`
export const NoSavesVideosText = styled.h1`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const NoSavedVideosSuggestion = styled.p`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  margin: 25px;
`

export const LinkItem = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
  margin-right: 10px;

  font-size: 25px;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  color: ${props => (!props.isDark ? 'black' : '#ffffff')};
  height: 90px;
  padding: 20px;
`
export const Heading = styled.h1`
  color: ${props => (!props.isDark ? '#0f0f0f' : '#f9f9f9')};
  font-size: 40px;
`
