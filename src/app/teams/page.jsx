"use client";
import React from "react";
import { getData } from "./data";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res.results);
    });
  }, []);

  console.log(data);
  return (
    <div>
      <section className="py-8">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-full">
            <h3 className="text-gray-800 text-3 font-semibold sm:text-4xl">
              Meet our team of Engineers, designers, and product managers.
            </h3>
            <p className="text-gray-600 mt-2 font-medium">
              Our team is a dynamic and collaborative group of individuals, each
              bringing unique skills and expertise to the table. Together, we
              form a cohesive unit driven by a shared passion for excellence and
              innovation
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {data.map((item, idx) => (
                <li key={idx}>
                  <div className="w-full h-60 sm:h-52 md:h-56">
                    <Image
                      alt="Avatar Teams"
                      src={item.picture.large}
                      className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg text-gray-700 font-semibold">
                      {" "}
                      {item.name.title}.{item.name.first} {item.name.last}
                    </h4>
                    <p className="text-gray-600 mt-2">
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
    </div>
  );
}
