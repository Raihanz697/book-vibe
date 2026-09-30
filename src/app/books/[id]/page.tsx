

import ReadButton from '@/components/bookDetails/ReadButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getBooks = async () => {
    const response = await fetch("http://localhost:3000/booksData.json");
    const data = await response.json();
    return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find((book: IBook) => String(book.bookId) == String(id)) as IBook;
    console.log(book, 'book');
    return (
    <div className="container mx-auto px-4">
        <div className="card lg:card-side overflow-hidden bg-base-100 shadow-xl border border-base-200">
            
            {/* Book Image */}
            <figure className="lg:w-2/5 bg-base-200 p-6">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={500}
                    height={300}
                    className="w-full max-w-[350px] rounded-xl object-cover shadow-lg"
                />
            </figure>

            {/* Book Details */}
            <div className="card-body lg:w-3/5 p-6 lg:p-10">
                
                {/* Category */}
                <div className="flex items-center gap-2">
                    <span className="badge badge-primary badge-outline">
                        {book.category}
                    </span>

                    <span className="text-sm text-base-content/50">
                        {book.yearOfPublishing}
                    </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold mt-2">
                    {book.bookName}
                </h2>

                {/* Author */}
                <p className="text-base-content/60">
                    By <span className="font-semibold text-base-content">
                        {book.author}
                    </span>
                </p>

                {/* Rating + Pages */}
                <div className="flex flex-wrap items-center gap-3 mt-4">
                    
                    <div className="flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2">
                        <span className="text-warning text-lg">★</span>
                        <span className="font-semibold">
                            {book.rating}
                        </span>
                    </div>

                    <div className="rounded-full bg-base-200 px-4 py-2 text-sm">
                        {book.totalPages} Pages
                    </div>

                    <div className="rounded-full bg-base-200 px-4 py-2 text-sm">
                        Published {book.yearOfPublishing}
                    </div>

                </div>

                {/* Review */}
                <div className="mt-5">
                    <h3 className="font-semibold text-lg mb-2">
                        About this book
                    </h3>

                    <p className="leading-7 text-base-content/70">
                        {book.review}
                    </p>
                </div>

                {/* Tags */}
                <div className="mt-5">
                    <h3 className="font-semibold mb-2">
                        Tags
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="badge badge-primary badge-soft"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Publisher */}
                <div className="grid grid-cols-2 gap-4 mt-6 border-t border-base-200 pt-5">
                    <div>
                        <p className="text-sm text-base-content/50">
                            Publisher
                        </p>
                        <p className="font-semibold">
                            {book.publisher}
                        </p>
                    </div>

                    <div>
                        <p className="text-sm text-base-content/50">
                            Published
                        </p>
                        <p className="font-semibold">
                            {book.yearOfPublishing}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <div className="card-actions mt-6">
                    <ReadButton book={book} />
                    <button className="btn btn-outline">
                        Wishlist
                    </button>
                </div>

            </div>
        </div>
    </div>
);
};

export default BookDetailsPage;