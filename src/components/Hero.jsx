import heroImg from '../assets/hero-illustration.png'

const Hero = () => {
  return (
    <section id='hero'
    className="min-h-screen flex items-center justify-center bg-[#2d2d2d] pt-20 px-4 md:px-8 overflow-hidden">
      <div
      data-aos='zoom-in' data-aos-duration='1500'
      className="relative w-full max-w-6xl bg-[#e9c39b] rounded-4xl shadow-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden px-8 md:px-16 md:h-[580px]">
        <div className="max-w-lg md:w-3/5 text-center md:text-left space-y-6 z-10">
          <p
          data-aos='fade-down' data-aos-delay='300' data-aos-easing='ease-out-cubic'
          className="md:mt-0 mt-4 tracking-widest text-[#8b5e34] font-semibold">
            COFFEE SHOP
          </p>
          <div data-aos='fade-right' data-aos-delay='500'>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Artisan Coffee with{" "}
              <span
              data-aos='fade-right' data-aos-delay='700'
              className="text-[#b6723c] block md:inline">
                Exceptional Taste
              </span>
            </h1>
          </div>
          <p data-aos='fade-up' data-aos-delay='900' className="text-gray-600">
            Experience the perfect blend of artisan coffee and homemade pastries. Every cup tells a story, crafted with passion using the finest beans from sustainable farms.
          </p>
          <div data-aos='flip-up' data-aos-delay='1100'>
            <button className="bg-[#2d2d2d] text-white px-8 py-3 rounded-full hover:bg-[#444] transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer">
              <a href="https://maps.google.com/">Visit Us</a>
            </button>
          </div>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <div className="relative"
          data-aos='fade-left' data-aos-delay='700' data-aos-duration='1500' data-aos-easing='ease-out-cubic'>
            <img src={heroImg} alt="Coffee image" className="w-[350px] md:h-[740px] object-contain drop-shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero