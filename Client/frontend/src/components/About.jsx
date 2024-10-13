import React from "react";

export default function About() {
  return (
    <div className="py-24 bg-black">
      <div className="container m-auto p  x-6 text-white md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="./360_F_628937716_NfgrnCyNKcOyADNxFFMpwswwLybHgG85.jpg"
              alt="image"
            />
          </div>
          <div className=" md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-blue-400 font-bold md:text-4xl">
              Teknofest Pakistan is an Event oraginzed by Jamiat Islami
            </h2>
            <p className="mt-6 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-white">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
