import React, { useEffect, useState } from 'react'

const Container = () => {


    const [bookName, setBookName] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [showFavourites, setShowFavourites] = useState(false)
    const [showReadBooks, setShowReadBooks] = useState(false)
    const [showNotReadBooks, setShowNotReadBooks] = useState(false)
    const [allBooks, setAllBooks] = useState(() => {
        return JSON.parse(localStorage.getItem("allBooks")) || [];
    });



    useEffect(() => {
        localStorage.setItem("allBooks", JSON.stringify(allBooks));
    }, [allBooks]);

    const addBooks = () => {
        if (!bookName || !authorName || !year || !genre) {
            alert("Please Fill The Details First")
            return
        }

        const bookDetails = {
            BookId: Date.now(),
            Name: bookName,
            Author: authorName,
            Year: year,
            Genre: genre,
            isRead: false,
            isFavourite: false,
            isEditing: false
        }
        setAllBooks([...allBooks, bookDetails])

        setBookName("")
        setAuthorName("")
        setYear("")
        setGenre("")
    }

    const bookDelete = (id) => {
        let confirmed = confirm("Are You Sure")
        if (confirmed) {
            setAllBooks(allBooks.filter(book => book.BookId !== id))

        } else {
            return
        }
    }

    const bookEdit = (id) => {
        let confirmed = confirm("Are You Sure?")
        if (!confirmed) return

        const booktoEdit = allBooks.find(book => book.BookId === id)
        if (!booktoEdit) return

        const newBookName = prompt("Enter New Book's Name" + bookName) || booktoEdit.Name
        const newAuthorName = prompt("Enter New Author's Name" + authorName) || booktoEdit.Author
        const newYear = prompt("Enter New Year" + year) || booktoEdit.Year
        const newGenre = prompt("Enter New Genre" + genre) || booktoEdit.Genre


        setAllBooks(prevBook =>
            prevBook.map(book =>
                book.BookId === id
                    ? {
                        ...book,
                        Name: newBookName,
                        Author: newAuthorName,
                        Year: newYear,
                        Genre: newGenre
                    }
                    : book
            )
        )
    }

    const readBook = (id) => {
        let confirmed = confirm("Are You Sure?")
        if (!confirmed) return

        const booktoRead = allBooks.find(book => book.BookId === id)
        if (!booktoRead) return

        setAllBooks(prevBook =>
            prevBook.map(book =>
                book.BookId === id
                    ? {
                        ...book,
                        isRead: !book.isRead
                    }
                    : book
            )
        )
    }

    const favouriteBooks = (id) => {
        let confirmed = confirm("Are You Sure?")
        if (!confirmed) return

        const bookforFav = allBooks.map(book => book.BookId === id)
        if (!bookforFav) return

        setAllBooks(prevBook =>
            prevBook.map(book =>
                book.BookId === id ?
                    {
                        ...book,
                        isFavourite: !book.isFavourite
                    }
                    : book

            )
        )
    }

    const filteredBooks = allBooks.filter(book => {
        if (showFavourites && !book.isFavourite) return false;
        if (showReadBooks && !book.isRead) return false;
        if (showNotReadBooks && book.isRead) return false;

        return true;
    });


    return (
        <div className='container flex flex-col justify-center items-center w-[40vw] max-w-6xl min-w-[320px] mx-auto bg-black rounded-lg shadow-lg p-5 mt-[10%] lg:w-[50vw] md:w-[70vw] sm:w-[85vw] xs:w-[95vw]'>

            <div className="heading">
                <h1 className='text-4xl text-white animate-bounce text-center'>
                    Book Library App
                </h1>
            </div>

            <div className="formGroup flex flex-col gap-3 mt-4 w-full max-w-lg">
                <div>
                    <label htmlFor="inputBook" className='cursor-pointer text-[20px] text-white'>
                        Book:
                    </label>
                    <br />
                    <input
                        type="text"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}
                        name=""
                        id="inputBook"
                        className='px-5 py-2 w-full max-w-[460px] mt-2 rounded-lg shadow-lg'
                        placeholder='Enter Book Name' />
                </div>
                <div>
                    <label htmlFor="inputAuthor" className='cursor-pointer text-[20px] text-white'>
                        Author:
                    </label>
                    <br />
                    <input
                        type="text"
                        name=""
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        id="inputAuthor"
                        className='px-5 py-2 w-full max-w-[460px] mt-2 rounded-lg shadow-lg'
                        placeholder="Enter Author's Name" />
                </div>
                <div>
                    <label htmlFor="inputGenre" className='cursor-pointer text-[20px] text-white'>
                        Genre:
                    </label>
                    <br />
                    <input
                        type="text"
                        name=""
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        id="inputGenre"
                        className='px-5 py-2 w-full max-w-[460px] mt-2 rounded-lg shadow-lg'
                        placeholder="Enter Genre" />
                </div>
                <div>
                    <label htmlFor="inputYear" className='cursor-pointer text-[20px] text-white'>
                        Year:
                    </label>
                    <br />
                    <input
                        type="number"
                        name=""
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        id="inputYear"
                        className='px-5 py-2 w-full max-w-[460px] mt-2 rounded-lg shadow-lg'
                        placeholder="Enter Publication Year" />
                </div>
            </div>
            <div className="buttons flex flex-row gap-2 items-center justify-center flex-wrap mt-5 ml-[-20px]">
                <button onClick={addBooks}
                    type="button" className='px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md active:bg-blue-800 transition-all duration-300 text-xs font-medium'>
                    Add Books
                </button>
                <button
                    onClick={() => setShowReadBooks(!showReadBooks)}
                    type="button" className='px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md active:bg-green-800 transition-all duration-300 text-xs font-medium'>
                    {showReadBooks ? "Show All Books" : "Show Read Books"}
                </button>
                <button
                    onClick={() => setShowNotReadBooks(!showNotReadBooks)}
                    type="button" className='px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md active:bg-green-800 transition-all duration-300 text-xs font-medium'>
                    {showNotReadBooks ? "show All Books" : "Show Not Read Books"}
                </button>
                <button
                    onClick={() => setShowFavourites(!showFavourites)}
                    type="button" className='px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow-md active:bg-purple-800 transition-all duration-300 text-xs font-medium'>
                    {showFavourites ? "Show All" : "Favourites"}
                </button>

            </div>

            <div className="details mt-8 w-full overflow-x-auto">
                <div className="min-w-full bg-gray-900 rounded-lg shadow-2xl border border-gray-700">
                    <table className='w-full text-white border-collapse'>
                        <thead className='bg-gradient-to-r from-gray-800 to-gray-700'>
                            <tr>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider border-b border-gray-600'>Book</th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider border-b border-gray-600'>Author</th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider border-b border-gray-600'>Year</th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider border-b border-gray-600'>Genre</th>
                                <th className='px-6 py-4 text-center text-sm font-semibold text-gray-200 uppercase tracking-wider border-b border-gray-600'>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {filteredBooks.map((book) => {
                                const textColor = book.isRead ? "text-green-400" : "text-white";
                                const subTextColor = book.isRead ? "text-green-300" : "text-gray-300";

                                const readBtnText = book.isRead ? "Not Read" : "Read"
                                const favBtnText = book.isFavourite ? "Remove From Favourites" : "Add To Favourites"

                                return (
                                    <tr
                                        key={book.BookId}
                                        className="hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <td
                                            className={`px-6 py-4 whitespace-nowrap text-sm font-medium border-r border-gray-700 ${textColor}`}
                                        >
                                            {book.Name}
                                        </td>
                                        <td
                                            className={`px-6 py-4 whitespace-nowrap text-sm border-r border-gray-700 ${subTextColor}`}
                                        >
                                            {book.Author}
                                        </td>
                                        <td
                                            className={`px-6 py-4 whitespace-nowrap text-sm border-r border-gray-700 ${subTextColor}`}
                                        >
                                            {book.Year}
                                        </td>
                                        <td
                                            className={`px-6 py-4 whitespace-nowrap text-sm border-r border-gray-700 ${subTextColor}`}
                                        >
                                            {book.Genre}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                            <div className="buttons flex flex-row gap-2 items-center justify-center flex-wrap">
                                                <button
                                                    onClick={() => bookEdit(book.BookId)}
                                                    type="button"
                                                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-md active:bg-blue-800 transition-all duration-300 text-xs font-medium"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => readBook(book.BookId)}
                                                    type="button"
                                                    className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-md shadow-md active:bg-green-800 transition-all duration-300 text-xs font-medium"
                                                >
                                                    {readBtnText}
                                                </button>
                                                <button
                                                    onClick={() => bookDelete(book.BookId)}
                                                    type="button"
                                                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md active:bg-red-800 transition-all duration-300 text-xs font-medium"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    onClick={() => favouriteBooks(book.BookId)}
                                                    type="button"
                                                    className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-md active:bg-red-800 transition-all duration-300 text-xs font-medium"
                                                >
                                                    {favBtnText}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    )
}

export default Container