import React from "react";
import Image from "next/image";
import Idcard from "../../aset/idcard.jpg";
import Spanduk from "../../aset/spanduk.jpg";
import Emoney from "../../aset/emoney.jpg";
import Kaos from "../../aset/baju.jpg";
import Mug from "../../aset/mug.jpg";
import Undangan from "../../aset/undangan.jpg";
import Gantungan from "../../aset/gantungan.jpg";
import Kipas from "../../aset/Kipas.png";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  const posts = [
    {
      title: "Mug",
      desc: "Komponen penting dalam dunia bisnis, sehingga wajib untuk memiliki kartu nama. Pakai kartu nama dalam memperkenalkan diri pada rekan bisnis anda!",
      img: Mug,
    },
    {
      title: "Undangan",
      desc: "Buat spanduk untuk backdrop event, sign dari nama toko, atau untuk kebutuhan lainnya. Pilih bahan yang kamu butuhkan dan order langsung!",
      img: Undangan,
    },
    {
      title: "Gantungan",
      desc: "Mau punya kartu e-money dengan gambar yang kamu suka? Gampang! Langsung saja buat di Rembo Printing!",
      img: Gantungan,
    },
    {
      title: "Kipas",
      desc: "Ingin membuat kaos dengan custom print untuk event atau ingin mencetak gambar yang anda sukai di t-shirt? Rembo Printing menyediakan solusi untuk anda!",
      img: Kipas,
    },
    {
      title: "SPANDUK",
      desc: "Buat spanduk untuk backdrop event, sign dari nama toko, atau untuk kebutuhan lainnya. Pilih bahan yang kamu butuhkan dan order langsung!",
      img: Spanduk,
    },
    {
      title: "E-MONEY",
      desc: "Mau punya kartu e-money dengan gambar yang kamu suka? Gampang! Langsung saja buat di Rembo Printing!",
      img: Emoney,
    },
    {
      title: "KAOS",
      desc: "Ingin membuat kaos dengan custom print untuk event atau ingin mencetak gambar yang anda sukai di t-shirt? Rembo Printing menyediakan solusi untuk anda!",
      img: Kaos,
    },
    {
      title: "ID Card",
      desc: "Komponen penting dalam dunia bisnis, sehingga wajib untuk memiliki kartu nama. Pakai kartu nama dalam memperkenalkan diri pada rekan bisnis anda!",
      img: Idcard,
    },
  ];

  return (
    <>
      <section className="mt-8 mx-auto px-4 max-w-screen-xl md:px-8 py-8">
        <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Our Product
        </h1>
        <p className="mt-3 text-gray-500">
          The quality we provide to you is always number one
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((items, key) => (
            <article
              className="hover:bg-indigo-600 max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
              key={key}
            >
              <a href={items.href}>
                {/* <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-screen-full h-50 rounded-t-md"
                /> */}
                <Image
                  src={items.img}
                  className="w-screen-full h-50 rounded-t-md"
                  alt={items.title}
                />

                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-900">{items.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
