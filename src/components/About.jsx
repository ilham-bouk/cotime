import { Coffee, Croissant, Heart } from "lucide-react"
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-[#2d2d2d] py-20 px-4 overflow-hidden">
      <section className="flex items-center justify-center rounded-4xl">
        <div
        className="relative w-full max-w-6xl bg-[#e9c39b] rounded-4xl shadow-2xl flex flex-col lg:flex-row items-center justify-between overflow-hidden p-8 md:p-16"
        data-aos='zoom-in' data-aos-duration='1200' data-aos-easing='ease-out-cubic'>
          <div className="max-w-lg text-center lg:text-left space-y-6 z-10 lg:mr-8">
            <p className="tracking-widest text-[#8b5e34] font-semibold"
            data-aos='fade-down' data-aos-delay='300' data-aos-duration='800'>
              COTIME BEGINNINGS
            </p>
            <div data-aos='fade-right' data-aos-delay='800'>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                The Story Behind <span className="text-[#b6723c]">Every Cup</span>
              </h1>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed"
              data-aos='fade-up' data-aos-delay='700' data-aos-duration='800'>
                Founded in 2015, CoTime began as a dream to create a gathering place where quality coffee meets community warmth. We source our beans from ethical farms across the globe, ensuring every cup supports sustainable practices and delivers exceptional taste.
              </p>
              <p className="leading-relaxed"
              data-aos='fade-up' data-aos-delay='900' data-aos-duration='800'>
                Our master roasters carefully craft each blend to bring out unique flavor profiles, while our talented bakers create fresh pastries daily. At CoTime, we believe coffee is more than a beverage—it's an experience, a moment of connection, and a celebration of craftsmanship.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-3">
              <div className="flex items-center gap-2"
              data-aos='flip-left' data-aos-delay='1000'>
                <Coffee className="w-5 h-5 text-[#8b5e34]" />
                <span className="text-gray-700">Premium Beans</span>
              </div>
              <div className="flex items-center gap-2"
              data-aos='flip-left' data-aos-delay='1200'>
                <Croissant className="w-5 h-5 text-[#8b5e34]" />
                <span className="text-gray-700">Expert Baristas</span>
              </div>
              <div className="flex items-center gap-2"
              data-aos='flip-left' data-aos-delay='1400'>
                <Heart className="w-5 h-5 text-[#8b5e34]" />
                <span className="text-gray-700">Cozy Atmosphere</span>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative transform rotate-2"
              data-aos='fade-left' data-aos-delay='600' data-aos-duration='1000'>
                <img src={about} alt="Coffee"
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover border-4 border-white hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="relative transform -rotate-2 mt-8"
              data-aos='fade-left' data-aos-delay='600' data-aos-duration='1200'>
                <img src={about} alt="Coffee"
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover border-4 border-white hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About