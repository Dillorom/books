import React, { Component } from 'react';
const API_URL = process.env.REACT_APP_API_URL;

class Books extends Component {
    state = {
        books: []
    }
     componentDidMount() {
        fetch(`${API_URL}/books.json`)
        // We get the API response and receive data in JSON format...
        .then(response => response.json())
        // ...then we update the users state
        .then(data =>
        this.setState({
            books: data,
        })
        )
        // Catch any errors we hit and update the app
        .catch(error => this.setState({ error }));
        console.log(this.state.books)
    }

    render() {
        const books = this.state.books.map((book) => {
            return (
                <div>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <img src={book.img_url} alt={book.title}/>
                </div>
            )
        });
    
        return(
            <div>
                {books}
            </div>
        )
    }
};
export default Books;