import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'

const Menu = () => {
  const products = [
    {id: 1, title: 'Cappuccino', price: '$9.99', tag: 'Hot', image: product1},
    {id: 2, title: 'Espresso', price: '$5.00', tag: 'Hot', image: product2},
    {id: 3, title: 'Late', price: '$6.50', tag: 'Hot', image: product3},
    {id: 4, title: 'Americano', price: '$4.99', tag: 'Hot', image: product4},
    {id: 5, title: 'Mocha', price: '$15.00', tag: 'Hot', image: product5},
    {id: 6, title: 'Iced Coffee', price: '$8.00', tag: 'Cold', image: product6},
    {id: 7, title: 'Hot Chocolate', price: '$12.00', tag: 'Hot', image: product7},
    {id: 8, title: 'Tea', price: '$6.99', tag: 'Hot', image: product8},
    {id: 9, title: 'Matcha', price: '$16.99', tag: 'Cold', image: product9},
    {id: 10, title: 'Bagels', price: '$5.00', tag: 'Dessert', image: product10},
    {id: 11, title: 'Muffins', price: '$8.99', tag: 'Dessert', image: product11},
    {id: 12, title: 'Croissants', price: '$6.99', tag: 'Dessert', image: product12},
  ]

  return (
    <section id='menu' className='py-20 bg-[#2d2d2d] overflow-hidden'>
      <div className='container mx-auto px-6 md:px-10'>
        <div className='flex flex-col md:flex-row justify-between items-center mb-10'
        data-aos='fade-down' data-aos-duration='1000'>
          <h2 className='text-3xl md:text-4xl font-bold text-white'>
            Our <span className='text-[#e3985a]'>Menu</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {products.map((item, index) => (
            <div key={item.id}
            data-aos='fade-up' data-aos-delay={index * 100} data-aos-duration='800' data-aos-easing='ease-out-cubic'
            className='relative bg-[#fffaf5] rounded-2xl shadow-lg hover:shadow-2xl transition p-5 text-center hover:scale-105 transform duration-300'>
              <span className='absolute top-4 left-4 bg-[#b6723c] text-white text-xs px-3 py-1 rounded-full'>
                {item.tag}
              </span>
              <img src={item.image} alt={item.title} className='w-40 h-40 mx-auto object-contain' />
              <h3 className='text-lg font-semibold text-gray-800 mt-4'>
                {item.title}
              </h3>
              <p className='text-[#b6723c] font-bold text-lg mt-2'>
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu