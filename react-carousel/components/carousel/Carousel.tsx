
import { useEffect, useRef, useState } from "react";
import {
    Slide,
    SlideShow,
    SlideShowSlider,
    SlideShowButtonContainer,
    SlideShowButton,
    SlideShowContainer
} from "./Carousel.styles";

export type CarouselProps = {
    children: JSX.Element[];
    timeDelay?: number;
};

const Carousel: React.FC<CarouselProps> = ({ children, timeDelay }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<any>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    const delay = timeDelay || 2500;

    const activeSlide = children.map((slide, index) => (
        <Slide key={index}>
            {slide}
        </Slide>
    ));

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((previousSlide) =>
                    previousSlide === children.length - 1 ? 0 : previousSlide + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <SlideShowContainer>
            <SlideShow>
                <SlideShowSlider currentSlide={index}>
                    {activeSlide}
                </SlideShowSlider>
            </SlideShow>
            <SlideShowButtonContainer>
                {children.map((_, indx) => (
                    <SlideShowButton active={indx === index} onClick={() => {
                        setIndex(indx);
                    }} key={indx} />
                ))}
            </SlideShowButtonContainer>
        </SlideShowContainer>
    );
};

export default Carousel;