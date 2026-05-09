
import { useState, useEffect } from "react"
import BookCard from "../BooksCard/BookCard.jsx";
import './BooksGrid.css'

function BooksGrid(){
    const [books, setBooks] = useState([]);

    useEffect(() => {

        const url = 'https://api.freeapi.app/api/v1/public/books?page=1&limit=10&inc=kind%252Cid%252Cetag%252CvolumeInfo&query=tech';
        
        const options = {method: 'GET', headers: {accept: 'application/json'}};

        const fetchBooks = async () => {
            try {
                const response = await fetch(url, options);
                console.log("fetch is successful");
                
                const data = await response.json();

                console.log("data: ");
                console.log(data.data.data);
                setBooks(data.data.data)
                
            } catch (error) {
                console.log("Error: ", error);
                
            }
        }

        fetchBooks();
    }, []);

    return (
        <div className="books-grid">
            {books.map(book => (
                <BookCard  imgLink={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} 
                text={book.volumeInfo.description} key={book.id}/>
            ))}
        </div>
    )
}

export default BooksGrid


