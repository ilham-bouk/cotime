import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Categories from "./components/Categories"
import About from './components/About'
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100
    }, []);
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <Menu />
      <Categories />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App