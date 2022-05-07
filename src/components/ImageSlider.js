import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        buttom: true,
      };
    return (
        
            <Carosel {...settings}>
                <Wrap>
                    <a>
                        <img src="/images/slider-badging.jpg" alt="badging" />
                    </a>    
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-badag.jpg" alt="badging" />
                    </a>    
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scale.jpg" alt="badging" />
                    </a>    
                </Wrap>
                <Wrap>
                    <a>
                        <img src="/images/slider-scales.jpg" alt="badging" />
                    </a>    
                </Wrap>
            </Carosel>
        
    );
};


const Carosel = styled(Slider)`
    margin-top: 20px;
    /* padding: 20px; */

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;

        &:hover {
            opacity: 1;
            transition: opasity 0.2s ease os;
        }
    }
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button:before {
        color: white;
    }
    .slick-list{
        overflow: initial;
    }
    /* .slick-prev {
        left: -75px;
    }
    .slick-next {
        right: -75px;
    } */
`;

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
        border-radius: 4px;
    }

img {
      width: 100%;
      height: 100%;
    }
`;

export default ImageSlider;