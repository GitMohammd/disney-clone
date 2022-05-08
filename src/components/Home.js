import React, { useEffect } from 'react';
import styled from "styled-components";
import Header from './Header';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Viewers from './Viewers';
import Tranding from './Tranding';
import { useDispatch, useSelector} from 'react-redux';
import db from '../firebase';
import {setMovies} from '../features/users/userSlice';
import { selectUserName } from '../features/users/userSlice';




const Home = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisney = [];
    let originals = [];
    let tranding = [];

    useEffect(() =>{
        
    })
    return (
            <Container>
                <Header />
               <ImageSlider />
               <Viewers />
               <Recommends />
               <NewDisney />
               <Originals />
               <Tranding />
            </Container>
    );
};

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
    }
`;

export default Home;