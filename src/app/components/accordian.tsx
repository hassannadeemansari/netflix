export default function Accordion(){
     return (
              <div className="flex flex-col gap-0.5">

               
                  <p className="h-20 w-full bg-[#2D2D2D] hover:bg-[#414141] transition-all duration-300 cursor-pointer text-white text-2xl  flex justify-between items-center p-5">
                       <span>What is Netflix?</span>
                       <img src="/Add.png" alt="add" className="h-9 w-auto filter brightness-0 invert" />
                       {/* <img src="/cross.png" alt="add" className="h-12 w-auto filter brightness-0 invert" /> */}
                  </p>

                  <p className="text-white text-2xl bg-[#2D2D2D]">
                     Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!

                  </p>


               </div>
     )
}