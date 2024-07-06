import Image from 'next/image'
import Lotti from './lotti'
import animationData from "@/lottie/dev.json"
import Lottie from 'react-lottie-player'


function Languages() {


    return (
        <div className='min-h-screen bg-gray-800'>
            <div className='flex justify-center w-full '>
                <Lottie animationData={animationData} className='w-96 ' play loop={true} />
                <Lotti />

                <Lottie animationData={animationData} className='w-96 ' play loop={true} />
            </div>
            <div className='w-fit flex flex-col my-5 mx-auto  font-semibold '>

                <p className='text-indigo-600 mx-auto text-7xl '>The Best Software Developer </p>
                <p className=" text-7xl text-white my-2  text-end ">Blog to Read</p>
            </div>
            <div className='flex flex-wrap justify-center gap-6 p-5 '>

                <div className='w-[400px] border border-gray-700 rounded-b-md'>
                    <Image width={200} height={200} alt='php' src="/images/1.jpg" className='w-full h-[250px]   transition-all hover:scale-105 cursor-pointer' />
                    <div>
                        <p className='p-2 text-xl text-white font-semibold mt-2'>PHP: Hypertext Preprocessor</p>
                        <p className='p-2 text-gray-500 text-start'>
                            PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group
                        </p>
                    </div>
                    <div className=' w-full h-fit  self-end mt-6'>
                        <a href="#" class="inline-flex items-center px-3 py-2 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='w-[400px] border border-gray-700 rounded-b-md'>
                    <Image width={200} height={200} alt='design' src="/images/2.jpg" className=' w-full h-[250px] transition-all hover:scale-105 cursor-pointer' />
                    <div>
                        <p className='text-xl text-white font-semibold mt-2 p-2'>
                            What is Java and why is it used?
                        </p>
                        <p className='p-2 text-gray-500 text-start'>
                            Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.
                        </p>
                    </div>
                    <div className='w-full h-fit  '>
                        <a href="#" class="inline-flex items-center px-3 py-2 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='w-[400px] border border-gray-700 rounded-b-md'>
                    <Image width={200} height={200} alt='javascript' src="/images/3.jpg" className='overflow-hidden w-full h-[250px]  transition-all hover:scale-105 cursor-pointer' />
                    <div>
                        <p className='text-xl text-white font-semibold mt-2 p-2'>
                            The Modern JavaScript
                        </p>
                        <p className='p-2 text-gray-500 text-start'>
                            Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.
                        </p>
                    </div>
                    <div className='w-full h-fit  '>
                        <a href="#" class="inline-flex items-center px-3 py-2 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className='w-[400px] border border-gray-700 text-wrap rounded-b-md overflow-hidden'>
                    <Image width={200} height={200} alt='django' src="/images/4.jpg" className='w-full h-[250px]  transition-all hover:scale-105 cursor-pointer' />
                    <div>
                        <p className='text-xl text-white font-semibold mt-2 p-2'>
                        Django: The web framework for perfectionists
                        </p>

                        <p className='p-2 text-gray-500 text-start'>
                            Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself. It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.
                        </p>
                    </div>
                    <div className='w-full h-fit  '>
                        <a href="#" class="inline-flex items-center px-3 py-2 m-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>

            </div>
        </div>

    )
}

export default Languages