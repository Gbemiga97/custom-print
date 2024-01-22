import { Link } from "react-router-dom"
import { Button, Divider } from "../components"
import { images } from "../utils"
import data from "../utils/data"


const Hero = () => {
  return (
    <section>
          {/* background image */}
          <div  className="bg-heroBg3 h-full bg-no-repeat bg-contain  bg-right absolute -top-[21rem] md:-top-[29rem]  xl:-top-1 bottom-0 left-0 right-0 ml-2  md:ml-36 xl:ml-0"  />
        <div className="h-[110vh] relative  container mx-auto pt-32">
           {/* text & image */}
            <div className="flex flex-col-reverse justify-center md:flex-row xl:items-center md:pt-24 xl:pt-0  md:justify-between w-full h-full ">
                {/* text */}
                <div className=" flex flex-col items-start  gap-y-2 md:pt-0 xl:pt-24  justify-start max-w-md  xl:max-w-xl mt-24 md:mt-0">
                    <p className="text-xl text-[#989898] font-normal">
                        Design Your T-shirt</p>
                    <h1 className="h1">
                        We Print Anything
                         You Want</h1>
                         <Divider />
                         <p className="text-gray-400 text-base mb-10  max-w-80 xl:max-w-none  ">
                         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas. Vestibulum tortor quam, feugiat
                         </p>

                         <Button text='Read More' className='btn-secondary hover:btn-primary' />

                         {/* socials */}
                         <div className="flex gap-x-4 capitalize text-xl mt-32 font-medium">
                          {
                            data.socials.map(({name, link}, i) => (
                             <div key={i} className="flex items-center justify-center gap-x-2">
                               <Link to={link} key={i} className="hover:line-through decoration-primary  transition-all ">
                              {name}
                              </Link>
                              <div className="w-1.5 h-0.5 bg-black" />
                             </div>
                            ))
                          }
                         </div>
                </div>

                {/* image */}

                   <div className="absolute md:-right-[12rem] xl:-right-[15rem] top-14 md:top-18 xl:top-20  max-w-[43rem] xl:max-w-5xl">
                   <img src={images.HeroShirt} alt="shirt" className="" />
                   </div>
            </div>
        </div>
    </section>
  )
}

export default Hero