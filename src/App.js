import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar';

//DataBase
import products from './db/data'
import Card from './components/Card';


const App = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [query, setQuery] = useState("")
    
    //-----------input filter------------------
    const handleInputChange = event =>{
        setQuery(event.target.value)
    }

    const filteredItems = products.filter((product) => 
        product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
    );

    //-----------Radio filter------------------
    const handleChange = event =>{
        setSelectedCategory(event.target.value)
    }

    //-----------Button filter------------------
    const handleClick = event =>{
        selectedCategory(event.target.value)
    }

    function filteredData(products, selected, query){
        let filteredProducts = products

        //filtering input items
        if(query){
            filteredProducts = filteredItems
        }

        // selected filter 
        if(selected){
            filteredProducts = filteredProducts.filter(
                ({category, color, company, newPrice,title}) => 
                    category === selected || 
                    color === selected || 
                    company === selected || 
                    newPrice === selected ||
                    title === selected
            )
        }

        return filteredProducts.map(({img, title, star, reviews,prevPrice})=>
            <Card 
                key={Math.random()} 
                img={img}
                title={title}
                star={star}
                reviews={reviews}
                newPrice={newPrice}
                prevPrice={prevPrice}
            />
        )
    }


    return (
        <>
            <Sidebar />
            <Navigation />
            <Recommended />
            <Products />
        </>
    );
};

export default App;