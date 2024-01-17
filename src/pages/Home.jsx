import { images } from "../utils"

const Home = () => {
  return (
    <section className="relative ">
            {/* background image */}
            <div  className="bg-heroBg3 h-full  bg-no-repeat bg-contain  bg-right absolute -top-1 bottom-0 left-0 right-0" />
        <div className="h-[110vh] relative  container mx-auto">
           {/* text & image */}
            <div className="flex xl:items-center justify-between w-full h-full ">
                {/* text */}
                <div className=" flex flex-col items-start  gap-y-2  justify-start max-w-xl">
                    <p className="text-xl text-[#989898] font-normal">
                        Design Your T-shirt</p>
                    <h1 className="h1">
                        We Print Anything
                         You Want</h1>
                         <p className="text-gray-400 text-base ">
                         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas. Vestibulum tortor quam, feugiat
                         </p>
                </div>

                {/* image */}

                   <div className="absolute -right-[15rem] bottom-0 max-w-5xl">
                   <img src={images.HeroShirt} alt="shirt" className=" " />
              
                   </div>
            </div>
        </div>
    </section>
  )
}

export default Home