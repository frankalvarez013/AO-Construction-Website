const VideoSection = () => {
  return (
    <section id="about" className="pt-12 -mt-12 snap-start">
      <div className="max-h-full bg-dark-grey1 text-white flex flex-col lg:flex-col-reverse ">
        {' '}
        <div className="flex flex-col gap-10 w-full justify-center items-center py-16 px-10 lg:flex-row-reverse lg:p-0 lg:items-start">
          <div className="flex flex-col justify-center lg:basis-4/5">
            {/* Add the video element with controls */}
            <video
              controls
              className="w-full lg:h-[600px] object-cover"
              id="video"
            >
              {/* Specify the video source */}
              <source src={'/buildingVid.mp4'} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex text-black" id="video-subtitle">
              <h3 className="bg-orangeJ flex-grow p-3 font-semibold lg:py-5">
                <strong className=" font-bold text-3xl">
                  Call for a Quote
                </strong>{' '}
                <br /> (346) 234 - 6973
              </h3>
              <div className="flex flex-grow justify-center items-center bg-white px-3">
                <button className="border-black border-4 px-3 py-1 font-semibold hover:text-orangeJ hover:border-orangeJ">
                  ONLINE ESTIMATE FORM
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start lg:basis-1/5 m-7 lg:justify-around lg:h-[634px]">
            <h2 className="font-bold text-5xl" id="video-title">
              We've Been Building For Over 10 Years
            </h2>
            <p className="font-light" id="video-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien,
              dignissim tristique tellus sed faucibus nullam. Tincidunt mauris
              ut quam sed mauris proin feugiat. Scelerisque lorem posuere
              iaculis nunc amet phasellus.
            </p>
            <button
              className="border-orangeJ border-2 px-12 py-2 text-orangeJ font-normal hover:bg-orangeJ hover:text-black"
              id="video-button"
            >
              About Us
            </button>
          </div>
        </div>
        <div className="flex font-bold" id="video-posttitle">
          <div className="flex flex-col flex-grow items-end bg-orangeJ text-black p-5 lg:flex-grow-[2]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl">12</h2>
              <h5 className="text-sm">Years Established</h5>
            </div>
          </div>
          <div className="flex flex-col flex-grow items-end p-5 lg:items-center">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl">250</h2>
              <h5 className="text-sm">Completed Projects</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default VideoSection
