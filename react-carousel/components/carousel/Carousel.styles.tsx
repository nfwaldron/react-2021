import styled, { css } from "styled-components";

export const SlideShowContainer = styled.div`
    display: grid;
    position: relative;
`;

export const SlideShow = styled.div`
    overflow: hidden;
    width: 100%;
`;

export const Slide = styled.div`
    display: inline-block;
    white-space: normal;
    height: 100%;
    width: 100%;
    border-radius: 40px;
`;

export interface SlideShowSliderProps {
    currentSlide: number;
}

export const SlideShowSlider = styled.div<SlideShowSliderProps>`
    white-space: nowrap;
    transition: ease 1000ms;
    ${props => props.currentSlide &&
        css`
        transform: translate3d(-${props.currentSlide * 100}%, 0, 0);
    `};
`;

export interface SlideShowButtonProps {
    active?: boolean;
}

export const SlideShowButtonContainer = styled.div`
    display: flex;
    position: absolute;
    top: 85%;
    left: 50%;
    justify-content: center;
    text-align: center;
`;

export const SlideShowButton = styled.div<SlideShowButtonProps>`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    cursor: pointer;
    margin: 15px 7px 0px;
    background-color: ${props => props.active ? 'red' : 'black'};
`;