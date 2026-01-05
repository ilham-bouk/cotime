import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const Testimonial = () => {

  const [currIndex, setCurrIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi perferendis quia excepturi numquam. Autem ratione, blanditiis exercitationem velit ea quam iure enim, facere culpa hic incidunt, nobis voluptatum. Qui."
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi perferendis quia excepturi numquam."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi perferendis quia excepturi numquam. Autem ratione, blanditiis exercitationem velit ea quam iure enim."
    }
  ];

  const nextSlide = () => {
    setCurrIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currTestimonial = testimonials[currIndex];

  return (
    <section id="testimonial"
    className="w-full bg-white py-16 px-4 md:px-8 flex justify-center overflow-hidden">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12"
        data-aos='fade-down' data-aos-duration='1000'>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            What <span className="text-[#b6723c]">Clients</span> Say
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto"
        data-aos='zoom-in' data-aos-duration='1200' data-aos-easing='ease-out-cubic'>
          <div className="bg-white">
            <div className="p-8 md:p-12">
              {/* <Quote size={80} color="#d1d5dc" /> */}
              <div className="flex items-center gap-10">
                <button onClick={prevSlide}
                className="shrink-0 w-10 h-10 rounded-full bg-[#2d2d2d] text-white hover:bg-[#444] transition-all duration-300 shadow-lg hover:shadow-xl hidden sm:flex items-center justify-center cursor-pointer"
                aria-label="Previous testimonial"
                data-aos='fade-right' data-aos-duration='800'>
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex-1 text-center">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6"
                  data-aos='fade-up' data-aos-duration='800'>
                    "{currTestimonial.text}"
                  </p>
                  <h3 className="text-xl font-bold text-gray-900"
                  data-aos='fade-up' data-aos-duration='700'>
                    {currTestimonial.name}
                  </h3>
                </div>

                <button onClick={nextSlide}
                className="shrink-0 w-10 h-10 rounded-full bg-[#2d2d2d] text-white hover:bg-[#444] transition-all duration-300 shadow-lg hover:shadow-xl hidden sm:flex items-center justify-center cursor-pointer"
                aria-label="Next testimonial"
                data-aos='fade-left' data-aos-duration='800'>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="px-8 py-6 flex items-center justify-center"
            data-aos='fade-up' data-aos-duration='700'>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button key={index} onClick={() => setCurrIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                      index === currIndex
                        ? 'bg-[#b6723c] w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial