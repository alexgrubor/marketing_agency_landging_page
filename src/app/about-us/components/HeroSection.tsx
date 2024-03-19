const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" autoPlay muted loop>
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute w-full h-full bg-black opacity-60"></div>
    </div>
    <div className="video-content space-y-2 z-10">
      <h1 className="font-bold text-6xl text-secondBg">YOUR BRAND</h1>
      <h3 className="font-light text-3xl">IS OUR JOB</h3>
      
    </div>
  </section>
  )
}
export default HeroSection