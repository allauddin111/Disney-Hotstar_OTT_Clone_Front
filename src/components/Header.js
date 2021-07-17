import React,{useEffect} from 'react'
import styled from 'styled-components'
import { auth,provider } from "../firebase";
import { useHistory } from "react-router-dom";
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../feature/user/userSlice"
import { useSelector,useDispatch } from "react-redux";

function Header() {
    const history=useHistory();
const dispatch=useDispatch();
const userName = useSelector(selectUserName);
const userPhot = useSelector(selectUserPhoto);

useEffect(() => {
    auth.onAuthStateChanged(async(user)=>{
        if(user){
            dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                history.push('/')
        }
    })
}, [])

const signIn=()=>{

        auth.signInWithPopup(provider)
        .then((result)=>{
            let user=result.user;
                dispatch(setUserLogin({
                    name:user.displayName,
                    email:user.email,
                    photo:user.photoURL
                }))
                history.push('/')
        })
}

const signOut=()=>{
auth.signOut()
.then(()=>{

    dispatch(setSignOut());
    history.push("/Login")
})

}


    return (
  
        <Nav>
            <Logo src="/images/logo.svg"/>
            {userName && 
            <>
             <NavMenu>
            
            <a>
            <img src="/images/home-icon.svg"/>
            <span>HOME</span>
            </a>
            <a>
            <img src="/images/search-icon.svg"/>
            <span>SEARCH</span>
            </a>
            <a>
            <img src="/images/watchlist-icon.svg"/>
            <span>WATCHLIST</span>
            </a>
            <a>
            <img src="/images/original-icon.svg"/>
            <span>ORIGINALS</span>
            </a>
            <a>
            <img src="/images/movie-icon.svg"/>
            <span>MOVIES</span>
            </a>
            <a>
            <img src="/images/series-icon.svg"/>
            <span>SERIES</span>
            </a>
            
            </NavMenu>
            <UserImg onClick={signOut} src="/images/avatar.jpg"/></>
}
 {!userName && (
            
            <Login onClick={signIn}>LOGIN</Login>)
}
         

           
            
           
        </Nav>
     
       
    )
}


const Nav = styled.nav`
  background: #090b13;
height:70px;
display:flex;


`;
const Logo = styled.img`
width:80px;

padding:0 36px;//
`;
const NavMenu = styled.div`

display:flex;
flex:1;
   align-items:center;
   margin-left:25px;
   cursor:pointer;
a{
    display:flex;
    padding :0 12px;
    cursor:pointer;
 
  
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42;
        position:relative;

        &:after{
            content:"";
            
            background:white;
            height:2px;
            position:absolute;
         
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
            transform:scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);  
            opacity:1;
        }
    }
}

`;
const UserImg=styled.img`
height:48px;
width:48px;
border-radius:50%;
cursor:pointer;
margin-top:15px;
margin-right:20px;

`;

const Login=styled.div`
border:1px solid #f9f9f9;
border-radius:4px;
height:12px;
padding:14px 16px;
margin-top:15px;
margin-left:1000px;
border-radius:4px;
letter-spacing:1.5px;
justify-content:center;
background:rgba(0,0,0.6);


cursor:pointer;

&:hover{

    background:#f9f9f9;
    color:#000;
    border-color:transparent
}

`
export default Header

