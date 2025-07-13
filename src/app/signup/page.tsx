import Image from "next/image"

export default function Signup(){
    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center ">
            <div className=" absolute inset-0 flex w-screen h-22 bg-blue-100 justify-between items-center p-4 pr-6 self-start ">
                <nav>
                            <img
                              src="/logo1.png"
                              alt="logo"
                              // width={180}
                              // height={180}
                              className="text-red-800 sm:h-26 sm:w-auto h-15 w-auto"
                            />
                </nav>

                <div>
                    <button className="text-md font-bold">Sign In</button>
                </div>
                
                <hr/>

            </div>

            <div className=" max-w-md w-full bg-black align-middle">
                 f
            </div>

         </div>
    )
}