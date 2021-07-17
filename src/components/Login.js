import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
        <Container>
          <CTA>
          <CTALogoone src="/images/cta-logo-one.svg"/>
          <SignUp>Get All These</SignUp>
          <Description>Hotstar is a brand of subscription video on-demand streaming services operated by Disney Media and Entertainment Distribution, a division of The Walt Disney Company</Description>
          <CTALogotwo src="/images/cta-logo-two.png"/>
          </CTA>
          
        </Container>
    )
}

export default Login

const Container = styled.main`
    padding: 0 calc(3.5vw + 5.5px);
    min-height: calc(100vh);
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


const CTA=styled.div`

max-width: 650px;

margin-left:250px;
padding:80px 40px;
width:  70%;
display:flex;
flex-direction:Column;


`

const CTALogoone=styled.img`


`
const CTALogotwo=styled.img`


`
const SignUp=styled.div`

width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer;
transition:all 250ms;
letter-spacing:;
margin-top:8px;
margin-bottom:12px;


&:hover{
background:#0483ee
}
`


const Description=styled.p`

font-size:11px;
letter-spacing:1.5;
text-align:center;
line-height:1.5;


`