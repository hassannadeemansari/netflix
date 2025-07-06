'use client'
import { useState } from "react"

export default function Accordion(){
  
     const [isopenacordion , setopenaccor] = useState(false)

     function toggle(){
          setopenaccor(!isopenacordion)
     }

     return (
              <div className="flex flex-col gap-0.5">

               
                  <p onClick={toggle} className="h-20 w-full bg-[#2D2D2D] hover:bg-[#414141] transition-all duration-300 cursor-pointer text-white text-2xl  flex justify-between items-center p-5">
                       <span>What is Netflix?</span>

                      {isopenacordion ? ( 
                       <img src="/cross.png" alt="add" className="h-14 w-auto filter brightness-0 invert" />
                       
                      ):(
                       
                       <img src="/Add.png" alt="add" className="h-12 w-auto filter brightness-0 invert" />
                    
                      )}
                  
                  </p>
               {isopenacordion && (
                  <p className="text-white text-2xl p-7 bg-[#2D2D2D]">
                     Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/>
                       <br/>
                       You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
                  </p>
               )}


               </div>
     )
}