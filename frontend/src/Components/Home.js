import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card } from 'antd';


const gridStyle = {
    width: '40%',
    textAlign: 'center',
  };

class Home extends React.Component{
    state={
        products:[],
        user:{}
    }

    componentDidMount(){
        let url = "http://localhost:3000/home"
        axios.get(url,{withCredentials:true})
        .then((res)=>{
            
            this.setState({products:res.data.product})

        })
        .catch((err)=>console.log(err))
    }
    render(){
        const {products} = this.state
        console.log(products)
        if(products.length === 0) return <div>No products</div>
        return(
            <div className="home-container">

                      {products.map((product)=>{
                return(
                    <div key={product._id} >

               <Link to={`detail/${product._id}`}>
               <Card title="Plate">                   
                    <Card.Grid style={gridStyle}>Chef: {product.seller.username}</Card.Grid>
                    {/* <Card.Grid style={gridStyle}></Card.Grid> */}
                    <Card.Grid style={gridStyle}>Type: {product.type}</Card.Grid>
                    <Card.Grid style={gridStyle}>Cuisine: {product.cuisine}</Card.Grid>
                    <p>Are you interested? Click plate for details</p>
                </Card>
                </Link> 
                    </div>
                )
            })}
            </div>
        )
    }
}
export default  Home