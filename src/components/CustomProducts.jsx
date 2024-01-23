import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'

import data from "../utils/data"


const CustomProducts = () => {
  return (
    <div className="container xl:mt-44  mx-auto max-w-[1400px]">
        <Swiper 
        slidesPerView={4}
        spaceBetween={32}
        loop={true}
        autoplay={{
            dela: 2500,
            disableOnInteraction: false
        }}
        modules={[Autoplay]}
        breakpoints={{
            960: {
                slidesPerView: 4,
                spaceBetween: 32
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            240: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }}
        className="mx-auto"
        >
            {
                data.customProducts.map(({img, name, items}, i) => (
                    <SwiperSlide key={i}>
                        <div className="w-full rounded-3xl relative  overflow-hidden">
                        <img src={img} alt={items} />
                        <div className="absolute bottom-0 flex justify-between w-full p-4">
                            <p className="text-2xl font-medium ">
                                {name}</p>
                            <p>({items} items)</p>
                        </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default CustomProducts