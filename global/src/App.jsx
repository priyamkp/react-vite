function App() {
 

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        
        <div className="max-lg:hidden lg:flex bg-blue-600 xl:flex items-center justify-center">
        <div>
          <h2 className='text-white pb-2 font-semibold text-3xl'>Welcome to Globallegals</h2>
          <p className='text-white'>
            Connecting with you the professionals you need, right in<br></br>
            <span>your neighborhood!</span>
        <div className='relative'>
          <div className='static'>
            <img src='/src/assets/USA-caBs7Ss1.png'></img>
          </div>
          <div className='static'>
            
            <img className='absolute top-10 left-44' src='/src/assets/Rectangle3-GNi9v_yE.png' alt='pic 1'></img>
            <img className='absolute bottom-24 left-10' src='/src/assets/Rectangle2--EZyJVx4.png' alt='pic 2'></img>
            <img className='absolute bottom-2 right-14' src='/src/assets/Rectangle4-vBGzRO9Y.png' alt='pic 3'></img>
          </div>
        </div>
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className='flex items-center mt-5 mb-10'>
            <a href="/_">
              <img className='h-12 w-auto' src='/src/assets/GlobalLegals-tsxPKSTD.svg' alt='Global legals'></img>
            </a>
         </div>
          <div>
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Forgot Your Password?
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Enter your registered email address below,and we'll send you a
              link to reset your password
            </p>
          </div>

          <div className="mt-10">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder='name@gmail.com'
                      required
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
              
              </div>
              
              <div className="mt-6 grid grid-rows-1 gap-4">
               
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-blue-100 px-3 py-2 text-sm font-light text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                >
                  
                   <img className='relative h-5 w-5 bottom-10 left-1' src='/src/assets/paperplane.png'></img>
                  
                  <p className="text-sm font-light leading-1">
                  We've just sent a password reset link to your registered email address. 
                  Please check your inbox and follow the instructions to create a new password. 
                  If you don't receive the email within a few minutes, please check your spam folder.
                  </p>
                </a>
                
               


                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  
    </>
  )
}

export default App
