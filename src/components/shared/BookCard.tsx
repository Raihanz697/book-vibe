import { IBook } from '@/types/books.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface IBookcardProps{
    book : IBook;
}
const BookCard = ({book} :IBookcardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-slate-100">
              <Image
                src={book.image}
                alt={book.bookName}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                {book.category}
              </span>

              {/* Rating */}
              <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold shadow-sm backdrop-blur">
                <span className="text-yellow-500">★</span>
                {book.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-600">
                {book.bookName}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                by {book.author}
              </p>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Book Information */}
              <div className="my-5 grid grid-cols-2 gap-3 border-y border-slate-100 py-4">
                <div>
                  <p className="text-xs text-slate-400">Pages</p>
                  <p className="mt-1 font-semibold text-slate-700">
                    {book.totalPages}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-400">Published</p>
                  <p className="mt-1 font-semibold text-slate-700">
                    {book.yearOfPublishing}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Publisher</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {book.publisher}
                  </p>
                </div>

                <Link href={`/books/${book.bookId}`} 
                 className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                  View Details
                
                </Link>
              </div>
            </div>
          </div>
    );
};

export default BookCard;