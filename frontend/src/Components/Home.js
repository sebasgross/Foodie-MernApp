import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import FilterableProduct from './FilterableProduct'

import SearchBar from './SearchBar'


class Home extends React.Component{
    state={
        products:null,
        loader:true,

        // productsBackup:[],
        user:{}
    }

    componentWillMount(){
        let url = "https://foodie-el-app.herokuapp.com/home"
        axios.get(url,{withCredentials:true})
        .then((res)=>{          
            this.setState({products:res.data.product, loader:false})

        })
        .catch((err)=>console.log(err))
    
    }

    getFilter = e => { 
        
        let url2 = "https://foodie-el-app.herokuapp.com/home/filter?search=" + e.target.value
        axios.get(url2,{withCredentials:true})
        .then((res)=>{
            this.setState({products:res.data})
        })
        .catch((err)=>console.log(err))
    }

    

    render(){
        const {products,user,productsFiltered, loader} = this.state
        console.log(productsFiltered)
        if(!products || !user || loader) return <div className="home"><img className="icon-pizza" height="200"src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551981388/loading-pizzagiphy.gif" alt="pizza-loader" /></div>
        return(
            <div className="home">
            <div className="home-menu">
            <h1>Today's Menu</h1>

            <div className="search-bar">
                <SearchBar products={productsFiltered} getFilter={this.getFilter} />
            </div>
            </div>
                <div className="home-container"> 
                      {products.map((product)=>{
                return(

                    <div key={product._id} className="home-available" >
               <Link to={`detail/${product._id}`}>
               <div className="home-plate">    
                                    
                    <h2>Chef: <b>{product.seller.username}</b></h2>
                    <img height="80"src={product.picture} alt=""/>
                    <p><b>{product.name}</b></p>
                    <p># <b>{product.type}</b></p>
                    <p>Exquisite <b>{product.cuisine}</b> cuisine</p>
                    <p>Are you interested? Click me for details</p>
                </div>
                </Link> 
                    </div>

                )
            })}


            </div>
            </div>
        )
    }
}
export default  Home