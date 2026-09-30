import React from "react";

import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Explore All Books
        </p>

        <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
          Featured Books
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-slate-500">
          Discover timeless classics and captivating stories for your next
          reading adventure.
        </p>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book:IBook,ind:number) => {
            return <BookCard key={ind} book={book} />}
        )}
      </div>
    </section>
  );
};

export default Books;