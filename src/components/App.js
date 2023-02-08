import React from 'react';
import axios from 'axios'
import Searchinput from './Searchinput'
import Imagelist from './Imagelist'

class App extends React.Component{
    
    state ={ images: [] }
    
    onSearchSubmit = async (entry) => {
        const response = await axios.get(`https://pixabay.com/api/?key=33459439-d4710cf91085425a589972622&q=${entry}&image_type=photo`)
        this.setState({images:response.data.hits})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'30px'}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit} />
            <Imagelist images={this.state.images}/>
        </div>
        )
    }
}
export default App