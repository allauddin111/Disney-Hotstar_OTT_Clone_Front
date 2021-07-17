import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewer from './Viewer'
import Movies from './Movies'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import db from '../firebase'

function Details() {

const {id} =useParams();
const [  movie,setMovie ]=useState();
useEffect(() => {
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=>{
        if(doc.exists){
    setMovie(doc.data());
        }else{

        }
    })
}, [])
console.log("movie id",movie);

    return (
        <Container>

         {movie && (
         <>
         <Background>
     <img src={movie.backgroundImg}/>;
     </Background>
     <ImageTitle>
    <img src={movie.titleImg}/>
    </ImageTitle>
     <Controls>
     
     <PlayButton>
     <Link to={`/media/`}>
    <img src="/Images/play-icon-black.png"/>
      </Link>
    <span>PLAY</span>

     </PlayButton>
   
     <TrailerButton>
     <Link to={`/media/`}>
     <img src="/Images/play-icon-white.png"/>
      </Link>
    <span>TRAILER</span>

     </TrailerButton>

      <Add><span>+</span></Add>
     <Group><img src="/Images/group-icon.png"/></Group>
     
     
     </Controls>

     <SubTitle>{movie.subTitle}</SubTitle>
     <Desc>{movie.description}</Desc>
         
         </>
         
         )}
   
        </Container>
    )   
}

export default Details
const Container=styled.div`
min-height: calc(100vh-70px);
padding:0 calc(3.5vw +5px);
position:relative;
`
const Background=styled.div`
  position:fixed;

    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:0.8;
    img{
            height:100%;
            width:100%;
            object-fit:cover;
    }

    `

const ImageTitle=styled.div`
height:30vh;
width:35vw;
min-height:170px;
min-width:200px;
 img{
            height:100%;
            width:100%;
            object-fit:contain;
    }
`

const Controls=styled.div`

display:flex;
align-items:center;
margin-left:10px;
`

const PlayButton=styled.button`

border-radius:4px;
font-size:15px;
padding:0px 24px;
margin-right:22px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
letter-spacing:1.8px;
cursor:pointer;

&:hover{

    background:rgb(198,198,198);
}

`

const TrailerButton=styled(PlayButton)`

background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
`

const Add=styled.button`

height:44px;
width:44px;
display:flex;
align-items:center;
margin-right:16px;
justify-content:center;
border-radius:50%;
border: 3px solid white;
background-color :rgba(0,0,0,0.6);
cursor:pointer;

span{
    font-size:30px;
    color:white;
}

`

const Group=styled(Add)`

background:rgb(0,0,0,0);
`

const SubTitle=styled.div`

color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-left:10px;
margin-top:26px;

`


const Desc=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
margin-left:10px;
color:rgb(249,249,249);

`