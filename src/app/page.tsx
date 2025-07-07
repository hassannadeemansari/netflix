import Image from "next/image"
import Accordion from "./components/accordian"

export default function netflix(){
  return (
    <div className="bg-black">

        <div className="relative w-screen sm:h-screen h-[65vh]">

          {/* background image */}
              <div
                className="absolute inset-0 mx-auto  bg-no-repeat "
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
               className=" relative w-full h-12 z-50 bg-black/50 backdrop-sm"
                style={{ boxShadow: "0 12px 20px -5px rgba(0, 0, 0, 0.7)" }}
>

                  <div className="absolute inset-0 flex justify-center">
                      <div className="sm:w-[85%] w-[94%] h-20 flex items-center justify-between">
                        
                         
                         <div>
                            <img
                              src="/logo1.png"
                              alt="logo"
                              // width={180}
                              // height={180}
                              className="text-red-800 sm:h-26 sm:w-auto h-15 w-auto"
                            />
                          </div>

                         <div className="relative sm:right-10 right-3"><button className="w-[92px] h-8 bg-red-600 text-white font-bold rounded-sm text-sm">Sign Out</button></div>
                      </div>
                  </div></div>



              <div className="absolute inset-0 font-extrabold text-white sm:text-5xl text-[31px] flex justify-center items-center">
                  <div className="flex flex-col sm:gap-6 gap-3 mt-32">
                        <div className="text-center flex flex-col gap-2">
                          <p>Unlimited movies, TV</p>
                          <p>shows, and More</p>
                        </div>
     
                        <div className="text-center"><p className="sm:text-xl text-lg sm:font-bold font-normal">Starts at Rs 250. Cancel anytime.</p></div>
     
                        <div className="text-center"><button className="w-[250px] h-14 bg-red-600 text-2xl font-bold rounded-md"> Finish Sing-Up  </button></div>

                  </div>
              </div> 

        </div>


          <div>
             <div className="relative w-full h-[70px]   overflow-hidden z-10 flex items-center bg-gradient-to-l from-[#501630] via-[#DF0E21] to-[#4B142D] justify-center rounded-t-[50%_100%] border-t-[5px] border-transparent before:content-[''] before:absolute before:inset-0 before:-mt-1 before:z-[-1] before:rounded-t-[50%_100%] before:bg-[linear-gradient(to_right,black,black,#101839,black,black_96%)]"></div>
          </div>


        <div>
          
        </div>
        <br/>
        <br/>
        <br/>


        <div className="flex justify-center flex-col items-center ">

          <h1 className="xl:w-[82%] w-[92%] text-white text-2xl font-bold self-st mb-2">More Reasons to Join</h1>

              <div className="xl:w-[82%] w-[88%] h-auto grid xl:grid-cols-4 xl:grid-rows-1 sm:grid-cols-1 sm:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 sm:gap-5 gap-2">
                    
                    <div className="w-full xl:h-70 h-53  bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col sm:gap-8 xl:gap-16 2xl:gap-18 gap-5">
                        <div className="flex flex-col gap-3 sm:mt-2">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end "><Image src="/comp.svg" alt="1" width={66} height={66}/></div>
                    </div>
                    
                    <div className="w-full xl:h-70 h-53  bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col sm:gap-8 xl:gap-16 2xl:gap-18 gap-5">
                        <div className="flex flex-col gap-3 sm:mt-2">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end "><Image src="/arrow.svg" alt="1" width={66} height={66}/></div>
                    </div>
                    
                    
                    <div className="w-full xl:h-70 h-53  bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col sm:gap-8 xl:gap-16 2xl:gap-18 gap-5">
                        <div className="flex flex-col gap-3 sm:mt-2">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end "><Image src="/scope.svg" alt="1" width={66} height={66}/></div>
                    </div>
                    
                    
                    <div className="w-full xl:h-70 h-53  bg-gradient-to-br from-[#1A2144] via-[#1E172D] to-[#210E18] rounded-2xl p-4 flex flex-col sm:gap-8 xl:gap-16 2xl:gap-18 gap-5">
                        <div className="flex flex-col gap-3 sm:mt-2">
                            <p className="text-white text-2xl font-bold">Enjoy on your TV</p>
                            <p className="text-gray-400 text-sm font-semibold">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                        </div>
                        <div className="self-end "><Image src="/msg.svg" alt="1" width={66} height={66}/></div>
                    </div>
              
              </div>
        </div>




         <div className="flex justify-center flex-col items-center mx-auto mt-14 gap-5"> 
             <div className="sm:w-[82%] w-[88%] h-auto flex flex-col gap-2 ">
                  <span className="font-bold text-xl text-white">frequently Asked Question</span>
                      <Accordion />
         
             </div>

             <button className="w-[250px] h-14 self-start  sm:ml-[9%] ml-[7%] mt-13 text-white  bg-red-600 text-2xl font-bold rounded-sm "> Finish Sing-Up  </button>    
         </div>



    {/* footer */}
          <div className="sm:w-[80%] w-[92%] sm:h-[80vh] h-auto    text-[#AFAFAF] flex md:flex-row flex-col justify-evenly md:items-center p-8">
             
                <div className="flex flex-col gap-6 underline">
                     <span>Questions? Contact Us.</span>
                        <ul className="flex flex-col gap-3 underline">
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                        </ul>
                     <span></span>
                     <span>Netflix Pakistan</span>
                </div>
             
                <div className="">
                    <ul className="flex flex-col gap-3 underline">
                       <li>Help Center </li>
                       <li>Jobs</li>
                       <li>Cookie Preferences</li>
                       <li>Legal Notice</li>
                    </ul>
                </div>
             
                <div className="">
                     <ul className="flex flex-col gap-3 underline">
                       <li>Account</li>
                       <li>Way To Watch</li>
                       <li>Corporate Information</li>
                       <li>Only On Netflix</li>
                    </ul>
                </div>
             
                <div className="">
                     <ul className="flex flex-col gap-3 underline">
                       <li>Media Center</li>
                       <li>Term of Use</li>
                       <li>Contact Us</li>
                    </ul>
                </div>
          
          </div>




        

    </div>
  )
};



