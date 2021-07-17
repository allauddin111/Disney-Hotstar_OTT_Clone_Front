import React from 'react'
import styled from 'styled-components'

function Viewer() {
    return (
        <Container>
            <Wrap>
            <img src='/Images/viewers-disney.png'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/viewers-pixar.png'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/viewers-marvel.png'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/viewers-starwars.png'/>
            
            </Wrap>
            <Wrap>
            <img src='/Images/viewers-national.png'/>
            
            </Wrap>
        </Container>
    )
}

export default Viewer

const Container=styled.div`
    margin-top:30px;
    display:grid;
    grid-gap: 25px;
    grid-template-columns:repeat(5,minmax(0,1fr));


`;


const Wrap=styled.div`
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