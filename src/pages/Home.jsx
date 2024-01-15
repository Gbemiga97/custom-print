import { images } from "../utils"

const Home = () => {
  return (
    <section className="relative ">
            {/* background image */}
            <div  className="bg-heroBg3 h-full  bg-no-repeat bg-contain  bg-right absolute -top-1 bottom-0 left-0 right-0" />
        <div className="h-[110vh] relative  container mx-auto">
           {/* text & image */}
            <div className="flex items-center justify-center h-full ">
                {/* text */}
                <div className=" flex flex-col items-start  justify-start">
                    <p className="text-xl text-gray-500">
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

                   <div className="">
                   <img src={images.HeroShirt} alt="shirt" className="" />
              
                   </div>
            </div>
        </div>
    </section>
  )
}

export default Home