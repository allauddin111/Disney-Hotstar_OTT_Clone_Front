import React from 'react'
import styled from 'styled-components'
import ReactHlsPlayer from 'react-hls-player';



function MediaPlayer() {
    return (
        <Container>
        <ReactHlsPlayer src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        autoPlay={true}
    controls={true}
    width="100%"
    ></ReactHlsPlayer>
    <Desc>Grahan</Desc>
    <SubTitle>2021 • 1 Season • Science Fiction, Action-Adventure, BuddyIn </SubTitle>
     <Desc>1984 Bokaro, desperate for his late father’s job, Rishi meets union leader Chunnu. In 2016 Ranchi, City SP Amrita Singh is caught in red tape trying to solve a reporter's murder.</Desc>
    
    </Container>
      );
}

export default MediaPlayer


const Container = styled.main`
    padding: 0 calc(3.5vw + 5px);
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    position: relative;
    &:before {
        background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`


const SubTitle=styled.div`

color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-left:25px;
margin-top:26px;

`


const Desc=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
margin-left:25px;
color:rgb(249,249,249);

`