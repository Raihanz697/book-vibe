import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/books.type";

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
          Explore Our Collection
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
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 ">
        {booksData.slice(0,9). map((book:IBook,ind:number) => {
            return <BookCard key={ind} book={book} />}
        )}
      </div>
    </section>
  );
};

export default Books;