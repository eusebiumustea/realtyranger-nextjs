"use client";
import { memo, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
interface GalleryProps {
  images: string[];
}
export const Gallery = memo(({ images }: GalleryProps) => {
  const sliderRef = useRef<Slider>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // This code runs only on the client side
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="w-full flex flex-col">
      <Slider
        beforeChange={(_, next) => setSlideIndex(next)}
        ref={sliderRef}
        initialSlide={0}
        infinite={false}
        slidesToShow={1}
        variableWidth={screenSize.width > 1200}
        centerMode={screenSize.width > 1200}
        dotsClass="!w-full !flex flex-row md:justify-center !overflow-x-scroll"
        dots
        customPaging={(i) => (
          <img
            onClick={() => sliderRef.current?.slickGoTo(i)}
            className={`max-w-[150px] max-h-[65px] p-2  transition-all select-none cursor-pointer ${
              slideIndex === i && "brightness-50"
            }`}
            src={images[i]}
          />
        )}
        className="overflow-hidden"
      >
        {images.map((image, i, arr) => (
          <div key={i} className="!w-[100%] !flex justify-center items-center">
            <img
              className={`w-[1062px] h-auto max-h-[655px] object-cover ${
                i < arr.length - 1 && "lg:mr-3"
              }`}
              src={image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});
