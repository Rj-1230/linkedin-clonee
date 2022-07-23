import styled from "styled-components";
import React from "react";
import {connect} from 'react-redux';
import { signInAPI } from "../actions";
import {Navigate} from "react-router-dom";
//Arrow function named Login with argument props
const Login = (props) => {
    return (
        <Container>
            {
                props.user &&
                <Navigate to="/home" />
            }
            <Nav>
                <a href="/">
                    <img src="./images/login-logo.svg" />

                </a>
                <div>
                    <Join>
                        Join now
                    </Join>
                    <SignIn>
                        Sign in
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1> Welcome to your professional community</h1>
                    <img src="./images/login-hero.svg"/>
                </Hero>
                <Form>
                    <Google onClick={ () => {
                        props.signIn()
                        }
                        }>
                        <img src="./images/google.svg" />
                        Sign in with Google
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding :0px;  
`;

// This is how we can use styled components
const Nav = styled.nav`
    max-width:1128px;
    margin:auto;
    padding: 12px 0 16px;
    display:flex;
    align-items:center;
    position:relative;
    justify-content:space-between;
    flex-wrap:nowrap;

    // We are styling the navbar whatever is written within backticks is its CSS
    // justify-content:space-between; the space bwtween linked in icona and Join now is duw to this
    // flex-wrap:nowrap;these all components are on same line due to this


    &>a{
        width:135px;
        height:34px;

        @media(max-width:768px){
            padding:0 5px;
        }
    }



`;


const Join = styled.a`
font-size:16px;
text-decoration : none;
color:rgba(0,0,0,0.6);
margin-right:12px;
border-radius:40%;
height: min-content;
    min-height: 48px;
    border-radius: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;

&:hover{
    background-color:rgba(0,0,0,0.08);
    color:rgba(0,0,0,0.9);
    cursor:pointer;
}

@media (max-width:768px){
    font-size:16px;
    padding:8px 12px;
}
`;


const SignIn = styled.a`
box-shadow:inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius:24px;
transition-duration:167ms;
font-size:16px;
font-weight:600;
line-height:40px;
padding: 10px 24px; 
text-align:center;
background-color:rgba(0,0,0,0);

&:hover{
    background-color:rgba(112,181,249,0.15);
    color:#0a66c2;
    text-decoration:none;
    cursor:pointer;
}
@media (max-width:768px){
    font-size:16px;
    padding:8px 12px;
}
`;


const Section = styled.section`
display:flex;
align-content:start;
min-height:700px;
padding-bottom:138px;
padding-top:40px;
padding:60px 0;
position:relative;
flex-wrap:wrap;
width:100%;
max-width:1128px;
align-items:center;
margin:auto;

@media(max-width:768px) {
    margin:auto;
    min-height:0px;
    display:flex;
    align-items:center;
}
`;

const Hero= styled.div`
width:100%;
h1{
    padding-bottom:0;
    width:55%;
    font-size: 56px;
    font-weight: 200;
    color:#8f5849;
    line-height:70px;

    @media(max-width:768px){
        text-align:center;
        font-size:20px;
        width:100%;
        line-height:2;
    }
}

img{
    /* z-index:-1; */
    width:700px;
    height:670px;
    position:absolute;
    top:0px;
    right:-200px;
    @media(max-width:768px){
        top:230px;
        width:100vw;
        position:initial;
        height:initial;
    }
}
`;

const Form = styled.div`
display:flex;
align-items:center;
margin-top:100px;
width:408px;
@media(max-width:768px){
    margin-top:20px;
    margin-left:55px;
    width:70%;
    display:flex;
    align-items:center;
}
`;

const Google= styled.button`
    display:flex;
    justify-content:center;
    background-color:#fff;
    align-items:center;
    height:56px;
    width:100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 /60%), inset 0 0 0 2px rgb(0 0 0 /0%)
    inset 0 0 0 1px rgb(0 0 0 /0%);
    vertical-align:middle;
    z-index:0;
    transition-duration: 167ms;
    font-size:20px;
    color:rgba(0,0,0,0.6);

    &:hover{
        background-color:rgba(207,207,207,0.25);
        color:rgba(0,0,0,0.75);
        cursor: pointer;
    }

    img{
        padding:20px;
    }

    @media(max-width:768px){
    font-size:18px;
}

    `;

const mapStateToProps = (state) =>{
    return{
        user: state.userState.user,
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signIn: () => dispatch(signInAPI()),
    }
    
    // this signIn is connected with our built function signInAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Redux is sort of a global store