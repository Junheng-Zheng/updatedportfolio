const Load = ({ pageLoaded }) => {
  return (
    <>
      {pageLoaded && (
        <div
          className={`h-screen w-screen absolute top-0 left-0 overflow-hidden flex justify-center items-center ${
            pageLoaded ? "animatebackground" : ""
          }`}
        >
          <div
            className={`overflow-hidden z-200 text-center ${
              pageLoaded ? "animate" : ""
            }`}
          >
            <h1
              className={`px-10 opacity-0 text-[85px] font-bold ${
                pageLoaded ? "animatetext" : ""
              }`}
            >
              JUN
            </h1>
          </div>

          <div
            className={`absolute translate-x-1/2 translate-y-1/2 top-1/2 left-1/2 ${
              pageLoaded ? "rotateanimation" : ""
            }`}
          >
            {/* Circle elements */}
            {[
              "animatecircle",
              "animatetopleft",
              "animatetopright",
              "animatetopcenter",
              "animatebottomleft",
              "animatebottomright",
              "animatebottomcenter",
              "animatecenter",
              "animatecenterleft",
              "animatecenterright",
            ].map((anim, i) => (
              <div
                key={i}
                className={`circle-element w-[25px] h-[25px] rounded-full ${
                  i === 0 ? "bg-white" : "bg-black"
                } absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                  pageLoaded ? anim : ""
                }`}
              ></div>
            ))}

            {/* Squares */}
            <div
              className={`w-[90px] h-[90px] rounded-2xl bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                pageLoaded ? "animateshowsquare" : ""
              }`}
            ></div>
            <div
              className={`w-[90px] h-[90px] rounded-2xl bg-black absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                pageLoaded ? "animatefill" : ""
              }`}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Load;
