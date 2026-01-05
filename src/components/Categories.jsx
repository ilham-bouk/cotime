import category1 from '../assets/product8.png'
import category2 from '../assets/product11.png'
import category3 from '../assets/category3.png'
import category4 from '../assets/product6.png'
import category5 from '../assets/product12.png'

const Categories = () => {
  const category = [
    {
      id: 1,
      name: 'Tea & More',
      count: '3',
      color: 'bg-[#fce7f3]',
      textColor: 'text-[#b91c1c]',
      colSpan: 'row-span-1',
      image: category1
    },
    {
      id: 2,
      name: 'Pastries',
      count: '2',
      color: 'bg-[#fde68a]',
      textColor: 'text-[#92400e]',
      colSpan: 'row-span-2',
      image: category2
    },
    {
      id: 3,
      name: 'Coffee',
      count: '5',
      color: 'bg-[#fde68a]',
      textColor: 'text-[#92400e]',
      colSpan: 'row-span-1',
      image: category3,
      big: true
    },
    {
      id: 4,
      name: 'Iced Drinks',
      count: '1',
      color: 'bg-[#fecaca]',
      textColor: 'text-[#7f1d1d]',
      colSpan: 'row-span-1',
      image: category4
    },
    {
      id: 5,
      name: 'Bagels',
      count: '1',
      color: 'bg-[#d1fae5]',
      textColor: 'text-[#064e3b]',
      colSpan: 'row-span-1',
      image: category5
    },
  ]

  return (
    <section id='categories' className='py-20 bg-[#fffaf5] overflow-hidden scroll-m-14'>
      <div className="container mx-auto px-6 md:px-10">
        <div className='flex justify-between items-center mb-10'
        data-aos='fade-down' data-aos-duration='1000' data-aos-easing='ease-out-cubic'>
          <h2 className='text-2xl md:text-4xl font-bold text-gray-900'>
            Popular <span className='text-[#b6723c]'>Categories</span>
          </h2>
        </div>

        <div className='grid lg:grid-cols-3 gap-6 auto-rows-auto'>
          {/* Left */}
          <div className='flex flex-col gap-6 md:flex-row lg:flex-col'>
            {category.slice(0, 2).map((cat, index) => (
              <div key={cat.id}
              className={`${cat.color} ${cat.textColor} md:w-1/2 lg:w-full rounded-2xl p-6 shadow-md hover:shadow-xl transition relative flex flex-col group hover:scale-105 justify-between transform duration-300`}
              data-aos='fade-right' data-aos-delay={index * 200} data-aos-duration='800' data-aos-easing='ease-out-cubic'>
                <div className='z-10 relative'>
                  <p
                  className='text-xl font-bold opacity-80 w-10 h-10 flex items-center justify-center rounded-full bg-[#e9c39b]'
                  data-aos='zoom-in' data-aos-delay={index * 200 + 300} data-aos-duration='500'>
                    {cat.count}
                  </p>
                  <p className='text-sm opacity-80 font-bold'>
                    Products
                  </p>
                  <h3 className='text-xl font-bold mt-1'>
                    {cat.name}
                  </h3>
                </div>

                <img src={cat.image} alt={cat.name}
                className='absolute -right-2.5 -bottom-6 w-44 h-44 object-cover opacity-95 transition-transform duration-300 group-hover:scale-110'
                data-aos='fade-right' data-aos-delay={index * 200 + 400} data-aos-duration='600'/>
              </div>
            ))}
          </div>

          {/* Middle */}
          <div className='flex flex-col'>
            <div
            className={`${category[2].color} ${category[2].textColor} rounded-3xl p-10 md:p-12 h-full flex flex-col items-start justify-center shadow-lg hover:shadow-2xl transition relative overflow-hidden group hover:scale-105 transform duration-300`}
            data-aos='zoom-in' data-aos-delay='400' data-aos-duration='1000' data-aos-easing='ease-out-cubic'>
              <p
              className='text-xl font-bold opacity-80 w-10 h-10 flex items-center justify-center rounded-full bg-[#e9c39b]'
              data-aos='bounce-in' data-aos-delay='800' data-aos-duration='700'>
                {category[2].count}
              </p>
              <p className='text-sm opacity-80 font-bold mt-2'>
                Products
              </p>
              <h3
              data-aos='fade-down' data-aos-delay='600' data-aos-duration='800'
              className='text-2xl md:text-4xl font-bold mt-2'>
                {category[2].name}
              </h3>

              <img src={category[2].image} alt={category[2].name}
              className='absolute -right-8 bottom-0 w-50 h-50 md:w-80 md:h-80 object-contain opacity-95 transition-transform duration-300 group-hover:scale-110'
              data-aos='fade-left' data-aos-delay='1000' data-aos-duration='900'/>
            </div>
          </div>

          {/* Right */}
          <div className='flex flex-col gap-6 md:flex-row lg:flex-col'>
            {category.slice(3, 5).map((cat, index) => (
              <div key={cat.id}
              className={`${cat.color} ${cat.textColor} md:w-1/2 lg:w-full rounded-2xl p-6 shadow-md hover:shadow-xl transition relative flex flex-col group hover:scale-105 justify-between transform duration-300`}
              data-aos='fade-left' data-aos-delay={index * 200} data-aos-duration='800' data-aos-easing='ease-out-cubic'>
                <div className='z-10 relative'>
                  <p
                  className='text-xl font-bold opacity-80 w-10 h-10 flex items-center justify-center rounded-full bg-[#e9c39b]'
                  data-aos='zoom-in' data-aos-delay={index * 200 + 300} data-aos-duration='500'>
                    {cat.count}
                  </p>
                  <p className='text-sm opacity-80 font-bold'>
                    Products
                  </p>
                  <h3 className='text-xl font-bold mt-1'>
                    {cat.name}
                  </h3>
                </div>

                <img src={cat.image} alt={cat.name}
                className='absolute -right-2.5 -bottom-6 w-44 h-44 object-cover opacity-95 transition-transform duration-300 group-hover:scale-110'
                data-aos='fade-right' data-aos-delay={index * 200 + 400} data-aos-duration='600'/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories