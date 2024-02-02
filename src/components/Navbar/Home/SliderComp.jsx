import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
   // dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
          <div className='!flex items-center bg-gray-100 px-4'>
            <div>
              <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
              <div className='text-lg my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate at similique. Aliquid, ipsa voluptatum.</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-[450px] h-[450px]' src="./images/img1.png" alt="" />
          </div>

          <div className='!flex items-center bg-gray-100 px-4'>
            <div>
              <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
              <div className='text-lg my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate at similique. Aliquid, ipsa voluptatum.</div>
              <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img className='w-[450px] h-[450px]'  src="./images/img2.jpg" alt="" />
          </div>
          
        </Slider>
    </div>
  )
}

export default SliderComp