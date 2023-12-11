"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getData } from "../teams/data";
export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.results);
    });
  }, []);
  return (
    <>
      <div className="py-5">
        <div className="max-w-screen-xl mx-auto px-4 text-left md:px-8">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-3">
            History
          </h3>
          <span className=" text-indigo-600 text-lg font-semibold">
            SleeplessNight At Glance
          </span>
          <p className="text-gray-600 text-justify mb-3">
            We always implement strict quality control process since the
            selection of raw materials to ensure only the highest quality
            products are produced.
          </p>

          <span className=" text-indigo-600 text-lg font-semibold">
            Vision & Mission
          </span>
          <p className="text-gray-600 text-justify mb-3">
            To be leading digital printing company in its chosen market segment
            & Optimizing our potential to enhance the value for us
          </p>

          <span className=" text-indigo-600 text-lg font-semibold">
            PT. SleeplessNight
          </span>
          <p className="text-gray-600 text-justify">
            Welcome to SleeplessNight, a full-service production company based
            in Jakarta. We specialize in video production and video animation.
            Since 2009 we have been working with clients to bring their ideas to
            life. Our team of talented and creative professionals is dedicated
            to delivering top-quality work that meets the needs and exceeds the
            expectations of our clients.From concept development to final
            execution, we handle every aspect of the production process. We are
            committed to delivering exceptional results on time and on budget.
          </p>
        </div>
      </div>
      <section className="py-5">
        <h3 className="text-indigo-600 max-w-screen-xl mx-auto font-semibold mb-2 px-5 md:px-8">
          Teams
        </h3>
        <div className="max-w-screen-xl mx-auto px-4 text-left md:px-8">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Meet our team
          </h3>
          <p className="text-gray-600 mt-3 text-justify">
            lLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {data.map((item, idx) => (
                <li key={idx}>
                  <div className="w-24 h-24 mx-auto">
                    <Image
                      alt="Avata About"
                      src={item.picture.large}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="mt-1 text-center">
                    <h4 className="text-gray-700 font-semibold sm:text-lg">
                      {item.name.title}. {item.name.first} {item.name.last}
                    </h4>
                    <p className="text-gray-700">
                      {item.location.timezone.description}
                    </p>
                    <p className="text-indigo-600">{item.email}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
