import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import {selectMovies} from '../feature/movie/movieSlice'
import {useSelector} from 'react-redux'


function Movies() {

const movies=useSelector(selectMovies);
console.log("This is movie:",movies);
    return (
        <Container>
            <center><h4>Recommended For You</h4></center>
            <Content>
            { movies &&
            movies.map((movie)=>(
                 <Wrap key={movie.id}>
            <Link to={`/details/${movie.id}`}>
            <img src={movie.cardImg}/>
            </Link>
            
            </Wrap>
            ))
            
            }
             {/* <Wrap>
            <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            <Wrap>
           <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            
            <Wrap>
            <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            <Wrap>
           <img src='/Images/thesimasons.jpg'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/thesimasons.jpg'/>
            
            </Wrap> */}
            </Content>
        </Container>
    )
}

export default Movies

const Container=styled.div`


`;
const Content=styled.div`
 margin-top:30px;
    display:grid;
    grid-gap: 25px;
    grid-template-columns:repeat(4,minmax(0,1fr));

`;
const Wrap=styled.div`
overflow:hidden;
border-radius:10px;
border: 3px solid rgba(249,249,249,0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
cursor:pointer;
img{
    
    height:100%;
    width:100%;
    object-fit:cover;
}

&:hover{
    box-shadow:rgb(0 0 0 / 80%) 0px 26px 30px -10px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
      border-color:rgba(249,249,249,0.8);
}
`;