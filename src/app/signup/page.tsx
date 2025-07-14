import Image from "next/image"

export default function Signup(){
    return(
       <div>
           
           <div className="w-screen ">
               <nav className="w-full flex justify-between items-center pl-6 pr-12">
                   
                   <img
                     src="/logo1.png"
                     alt="logo"
                     className="h-24 w-auto"
                   />

                   <div>
                       <button className="text-md font-bold">Sign Up</button>
                   </div>

               </nav><hr className="h-0.5 text-gray-200"/>
           </div>

           <div className="w-screen h-screen flex justify-center items-center">
               <div className=" max-w-md w-full flex flex-col items-center gap-5">
                     <div className="flex flex-col items-center gap-1">
                        <span><img src="/circle.png" alt="icon" className="h-12 w-auto" /></span>
                        <p className="text-sm text-gray-300 mt-5">STEP 1 OF 3</p>
                        <p className="text-4xl text-gray-700 ">Choose Your plan.</p>
                     </div>
                     <div className="max-w-90 w-full  p-5 flex flex-col gap-3">
                        <div className="flex text-xl items-end gap-3"><span><img src="tick.png" alt="tick" className="h-10 w-auto" /></span><p>No commitments, cancel anytime.</p></div>
                        <div className="flex text-xl items-center gap-3"><span><img src="tick.png" alt="tick" className="h-10 w-auto" /></span><p>Everything on Netflix for one low price.</p></div>
                        <div className="flex text-xl items-center gap-3"><span><img src="tick.png" alt="tick" className="h-10 w-auto" /></span><p> No ads and no extra fees. Ever.</p></div>
                     </div>
                     <div className="w-full flex justify-center">
                        <button className=" w-[81%] p-6 text-white text-2xl font-bold bg-red-600 rounded-lg text-center">
                            Next
                        </button>
                     </div>
               </div>
           </div>


       </div>
    )
}