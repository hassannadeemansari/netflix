import Image from "next/image"

export default function netflix(){
  return (
    <div className="bg-black">

        <div className="relative w-screen h-screen">

          {/* background image */}
              <div
                className="absolute inset-0 mx-auto  bg-no-repeat"
                style = {{
                  background : "url('/hero-image.jpg')",
                  backgroundSize : "cover",
                  // backgroundRepeat : "no-repeat",
                  // filter : "brightness(30%)"
                }} 
              >
              </div>

              
              {/* overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>


              {/* header */}
             <div
               className=" w-full h-12 z-50 bg-black/50 backdrop-md"
                style={{ boxShadow: "0 12px 20px -5px rgba(0, 0, 0, 0.7)" }}
>

                  <div className="absolute inset-0 flex justify-center">
                      <div className="w-[85%] h-20 flex items-center justify-between">
                        
                         
                         <div>
                            <Image
                              src="/logo1.png"
                              alt="logo"
                              width={180}
                              height={180}
                              className="text-red-800"
                            />
                          </div>

                         <div className="relative right-10"><button className="w-[92px] h-8 bg-red-600 text-white font-bold rounded-sm text-sm">Sign Out</button></div>
                      </div>
                  </div></div>



              <div className="absolute inset-0 font-extrabold text-white text-5xl flex justify-center items-center">
                  <div className="flex flex-col gap-6 mt-32">
                        <div className="text-center flex flex-col gap-4">
                          <p>Unlimited movies, TV</p>
                          <p>shows, and More</p>
                        </div>
     
                        <div className="text-center"><p className="text-xl">Starts at Rs 250. Cancel anytime.</p></div>
     
                        <div className="text-center"><button className="w-[250px] h-14 bg-red-600 text-2xl font-bold rounded-md"> Finish Sing-Up  </button></div>

                  </div>
              </div> 

        </div>


          <div>
             <div className="relative w-full h-[70px]  shadow-[#101839]  overflow-hidden z-10 flex items-center bg-gradient-to-l from-[#501630] via-[#DF0E21] to-[#4B142D] justify-center rounded-t-[50%_100%] border-t-[8px] border-transparent before:content-[''] before:absolute before:inset-0 before:-mt-1 before:z-[-1] before:rounded-t-[50%_100%] before:bg-[linear-gradient(to_right,black,black,#101839,black,black_84%)]"></div>
          </div>


        <div>
          
        </div>
        <br/>
        <br/>
        <br/>


        <div className="flex justify-center flex-col items-center ">

          <h1 className="w-[82%] text-white text-2xl font-bold self-st">More Reasons to Join</h1>

              <div className="w-[82%] h-80 bg-yellow-400 flex items-center justify-center gap-5">
                    
                    <div className="w-[25%] h-60 bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col gap-12">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end"><Image src="/comp.svg" alt="1" width={66} height={66}/></div>
                    </div>
                    
                    <div className="w-[24%] h-60 bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col gap-12">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end"><Image src="/arrow.svg" alt="1" width={66} height={66}/></div>
                    </div>
                    
                    
                    <div className="w-[24%] h-60 bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col gap-12">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end"><Image src="/scope.svg" alt="1" width={66} height={66}/></div>
                    </div>
                    
                    
                    <div className="w-[24%] h-60 bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col gap-12">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end"><Image src="/msg.svg" alt="1" width={66} height={66}/></div>
                    </div>
              
              </div>
        </div>

        

    </div>
  )
};