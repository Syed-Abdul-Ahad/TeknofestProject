import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-screen max-w-7xl bg-black">
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16  sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-12 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl italic sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-9xl font-bold sm:text-5xl">
                            TEkNOFEST
                            <span className="hidden sm:block text-4xl">Innovation Arena</span>
                            <p className='text-sm font-normal py-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                                omnis voluptatem accusantium nemo perspiciatis delectus atque
                                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                                consequatur! Officiis id consequatur atque doloremque!</p>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Join Now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-2/3 ml-[-150px] mr-10 sm:my-20 sm:pt-1 pt-2 h-full ">
                    <video className='w-full' autoPlay muted loop>
                        <source src="./3431630065-preview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.</video>
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <video className='w-full' autoPlay muted loop>
                    <source src="./vecteezy_technology-stock-animation-background_48868849.mp4" type="video/mp4" />
                    Your browser does not support the video tag.</video>
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}
