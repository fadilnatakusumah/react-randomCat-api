import React from 'react';
import CardList from './Components/CardList';
import Searchbox from './Components/Searchbox';
import Scroll from './Components/Scroll';
import * as catsData from './Cats';
import './App.css';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            cats: [],
            filteredCats: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json()
        ).then(res => {
            this.setState({cats: res})
        })
    }

    onSearch = (event) => {
        this.setState({filteredCats: event.target.value});
        // console.log(this.state.filteredCats)
    }

    
    render() {
        const filteredSearch = this.state.cats.filter(filtered => {
            return filtered.name.toLowerCase().includes(this.state.filteredCats.toLowerCase()); 
        });
        // console.log(filteredSearch)\
           if(this.state.cats.length === 0){
               return <h1 className="tc">Still loading...</h1>
           }else{
               return (
                    <div className="tc">
                    <h1>Cats Picture</h1>
                        <Searchbox searchChange = {this.onSearch}></Searchbox>
                        <Scroll>
                            <CardList cats={filteredSearch}></CardList>
                        </Scroll>
                    </div> 
                )  
           }
    }
}

export default App;