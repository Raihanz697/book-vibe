import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'
import Image from 'next/image';
const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-amber-50 px-8 py-10 md:px-12 md:py-14 shadow-lg">

    {/* Left Content */}
    <div className="space-y-6">
      <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        Discover Your Next Read
      </span>

      <h2 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
        Books to freshen
        <br />
        up your{" "}
        <span className="text-emerald-600">bookshelf</span>
      </h2>

      <p className="max-w-md text-base leading-7 text-slate-500">
        Explore inspiring stories, timeless classics, and exciting new reads
        to make your bookshelf a little more interesting.
      </p>

      <button className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-lg">
        View the List →
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={bannerImg}
          alt="Books Banner"
          className="h-auto w-full max-w-lg object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </div>

  </div>
</section>
    );
};


export default Banner;