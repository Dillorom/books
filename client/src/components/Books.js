import React, { Component } from 'react';

class Books extends Component {
    state = {
        books: []
    }
    componentDidMount(){
        console.log("Books component mounted")
    }
    render(){
        return(
            <div>
                <p>All Books component</p>
            </div>
        )
    }
}
export default Books;