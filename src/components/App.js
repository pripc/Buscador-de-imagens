import React from 'react';
import axios from 'axios'
import Searchinput from './Searchinput'

class App extends React.Component{
onSearchSubmit = (entry) => {
    console.log(entry)
    axios.get(`https://pixabay.com/api/?key=33459439-d4710cf91085425a589972622&q=${entry}&image_type=photo`)
}

    render(){
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit} />
        </div>
        )
    }
}

export default App