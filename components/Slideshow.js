import React from "react";

const colors = ["https://res.cloudinary.com/dj3qdir59/image/upload/v1642425782/sample.jpg", "#00C49F", "#FFBB28"];
const delay = 3000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
      <div>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        <a href="/blog"><img className="slide" src="https://res.cloudinary.com/dj3qdir59/image/upload/v1642430904/fixing_bugs_slideshow_ayc65r.png" /></a>
        <img className="slide" src="https://res.cloudinary.com/dj3qdir59/image/upload/v1642431085/career_dev.png" />
        <img id="slide_3" className="slide" src="https://res.cloudinary.com/dj3qdir59/image/upload/v1642431157/travel.png" />
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    </div>
  );
}
 
export default Slideshow;