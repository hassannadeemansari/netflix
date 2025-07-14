import Image from "next/image"

export default function Signup(){
    return(
       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="absolute top-4 right-4">
        <a href="/login" className="text-gray-700 hover:text-gray-900 font-medium">Sign In</a>
      </div>
      <div className="mb-8">
        <Image src="/logo1.png" alt="Netflix Logo" width={200} height={50} />
      </div>
      <div className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
            <span className="text-red-500 text-xl font-bold">✔</span>
          </span>
          <p className="text-gray-600 mt-2">STEP 1 OF 3</p>
          <h2 className="text-2xl font-bold text-gray-900 mt-2">Choose your plan.</h2>
        </div>
        <div className="space-y-4">
          <label className="flex items-start">
            <input type="radio" name="plan" className="form-radio text-red-500 mt-1" defaultChecked />
            <div className="ml-3">
              <p className="text-gray-900">No commitments, cancel anytime.</p>
            </div>
          </label>
          <label className="flex items-start">
            <input type="radio" name="plan" className="form-radio text-red-500 mt-1" />
            <div className="ml-3">
              <p className="text-gray-900">Everything on Netflix for one low price.</p>
            </div>
          </label>
          <label className="flex items-start">
            <input type="radio" name="plan" className="form-radio text-red-500 mt-1" />
            <div className="ml-3">
              <p className="text-gray-900">No ads and no extra fees. Ever.</p>
            </div>
          </label>
        </div>
        <button className="w-full bg-red-600 text-white py-3 mt-6 rounded hover:bg-red-700 transition duration-200">
          Next
        </button>
      </div>
    </div>
 
    )
}