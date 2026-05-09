import './BookCard.css'

function BookCard({imgLink, title, text}){
    return (
        <a className="book-card" >
            <img src={imgLink} alt={title} />
            <h3>{title}</h3>
            <p>{text.substring(0,200)}</p>
        </a>
    )
}

export default BookCard;