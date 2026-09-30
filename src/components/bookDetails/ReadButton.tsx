"use client";

import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';

const ReadButton = ({ book }:{book: IBook}) => {

    const {readBooks,setReadBooks} =useContext(BooksContext)

    const BooksProvider =useContext(BooksContext)

    console.log(BooksProvider,"booksProvider");

const handleReadBook = () => {
    console.log("read button marse");

setReadBooks([...readBooks,book]);
alert(`u have read "${book.bookName}"`)

};
    return (
        <button className="btn btn-primary px-8" onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;