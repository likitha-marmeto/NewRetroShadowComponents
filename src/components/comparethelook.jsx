import React, { useRef, useState, useEffect } from 'react';

const ImageCompare = ({ leftImage, rightImage, title, description }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Initialize container width and reset offset on resize
    const updateBounds = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setContainerWidth(width);
        setOffsetX(0); // reset to center on resize
      }
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  const startDrag = (event) => {
    setIsDragging(true);
    setOffsetX(getOffsetX(event));
  };

  const endDrag = () => setIsDragging(false);

  const handleDrag = (event) => {
    if (!isDragging || !containerRef.current) return;
    const x = getOffsetX(event);
    const minOffset = -containerWidth / 2 ;
    const maxOffset = containerWidth / 2 ;

    // Update offset within allowed range
    setOffsetX(Math.max(minOffset, Math.min(x, maxOffset)));
  };

  const getOffsetX = (event) => {
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const clientX = event.clientX || event.touches[0].clientX;
    return clientX - rect.left - containerWidth / 2; // center at start
  };

  return (
    <section className="bg-[#f9f7f6] py-10 px-5 md:px-20 lg:px-30">
      <div className="mx-auto text-center mb-8">
        <h2 className="text-3xl">
          <b>Compare</b> the look
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto flex items-center justify-center h-[413px] md:h-[530px]"
        onMouseMove={handleDrag}
        onTouchMove={handleDrag}
        onMouseUp={endDrag}
        onTouchEnd={endDrag}
        onMouseLeave={endDrag}
      >
        {/* Left Image (adjustable width to reveal the right image) */}
        <div
          className="absolute top-0 left-0 h-full w-full overflow-hidden"
        >
          <img
            src={leftImage}
            alt="Left"
            className="object-cover w-full h-full"
          />

          <img
          src={rightImage}
          alt="Right"
          className="object-cover w-full h-full absolute top-0 left-0"
          style={{ clipPath: `inset(0 ${containerWidth / 2 - offsetX}px 0 0)` }}
        />
        </div>

        {/* Right Image (behind left image) */}
        {/* <img
          src={rightImage}
          alt="Right"
          className="object-cover w-full h-full absolute top-0 left-0"
        /> */}

        {/* Draggable Slider Button */}
        <button
          className="comparison__button w-8 h-14 absolute bg-white rounded-full border-0 cursor-pointer z-50 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
          style={{ left: `calc(50% + ${offsetX}px)`, top: '50%' }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
          aria-label="comparison button"
        >
          <span className="absolute top-[-14px] left-1/2 transform -translate-x-1/2 w-[2px]  h-[250px] md:h-[310px]  -z-10 bg-white"></span>
          <span className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-[2px] h-[250px] md:h-[310px] -z-10 bg-white"></span>
          <svg
            width="15"
            height="23"
            viewBox="0 0 15 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <line x1="0.5" y1="0" x2="0.5" y2="23" stroke="black" />
            <line x1="7.5" y1="0" x2="7.5" y2="23" stroke="black" />
            <line x1="14.5" y1="0" x2="14.5" y2="23" stroke="black" />
          </svg>
        </button>
      </div>

      <div className="mx-auto text-center justify-center my-6">
        <p className="text-[12px] md:text-[14px] font-body tracking-wide">{description}</p>
      </div>
    </section>
  );
};

export default ImageCompare;
