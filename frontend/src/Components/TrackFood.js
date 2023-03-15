import React from 'react'
import axios from 'axios'
import { Progress } from 'antd'

// const {id} = this.state.product
class TrackFood extends React.Component{
    state={
        product:{},
        userloggued: {}
    }

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `https://foodie-backend.herokuapp.com/detail/${id}`
        
        axios.get(url, {withCredentials:true})
        .then((product)=>{
            this.setState({product:product.data.p,id:product.data.p._id, userloggued: product.data.user })  
        })
        .catch(err=>console.log(err))
    }
    goBack = () =>{
        this.props.history.push('/profile')
    }
    

    render(){
        const { product }=this.state
        if(product.delivered){
            return(
                <div className="track-page">
                <div className="progress-container">
            
            </div>
            <div className="progress">
                <h2><b>Your Food has been delivered</b></h2>
            <p>Hope you enjoy it!</p>
               
            <Progress className="progress-bar" percent={100} status="active" />
            </div>

            <div className="product-container">
            <img height="240" src={product.picture} alt={product.name} />
            <div className="product-card">
                <h2><b>{product.name}</b></h2>
                {/* <p>Cooked by: {product.seller.username}</p> */}
                <div className="detail-type">
                <p>This is <b>{product.cuisine}</b> cuisine  </p> 
                {"|"}
                <p>Type of Food: {product.type}</p>
                </div>
                <div>
                    <p>Following ingredinets were used: {product.ingredients}<br></br>(Be aware of allergies, or eating raw foods.)</p>
                </div>  
                <div className="detail-pickup"> 
                    <div> 
                 
                    <p>Cost: ${product.price}</p>
                  
                    </div>
                </div>         
            </div>

                
            </div>
            <button className="button-arrived" onClick={this.goBack}> Go back</button>
            </div>
            )
        }
        if(product.track && !product.delivered){
        return(

            <div className="track-page">
            <div className="progress-container">
        
        </div>
        <div className="progress">
        <h2><b>Your driver is on his way</b></h2>

        <Progress className="progress-bar" percent={50} status="active" />
        </div>

        <div className="product-container">
        <img height="240" src={product.picture} alt={product.name} />
        <div className="product-card">
            <h2><b>{product.name}</b></h2>
            {/* <p>Cooked by: {product.seller.username}</p> */}
            <div className="detail-type">
            <p>This is <b>{product.cuisine}</b> cuisine  </p> 
            {"|"}
            <p>Type of Food: {product.type}</p>
            </div>
            <div>
                <p>Following ingredinets were used: {product.ingredients}<br></br>(Be aware of allergies, or eating raw foods.)</p>
            </div>  
            <div className="detail-pickup"> 
                <div> 
             
                <p>Cost: ${product.price}</p>
              
                </div>
            </div>         
        </div>

            
        </div>
        <button className="button-arrived" onClick={this.goBack}> Go back</button>
        </div>
        )
    }
    if(!product.tracked && !product.delivered){
        return(
            <div className="track-page">
            <div className="progress-container">
        
        </div>
        <div className="progress">
            <h2><b>Chef is preparing your order</b></h2>
           
        <Progress className="progress-bar" percent={25} status="active" />
        </div>

        <div className="product-container">
        <img height="240" src={product.picture} alt={product.name} />
        <div className="product-card">
            <h2><b>{product.name}</b></h2>
            {/* <p>Cooked by: {product.seller.username}</p> */}
            <div className="detail-type">
            <p>This is <b>{product.cuisine}</b> cuisine  </p> 
            {"|"}
            <p>Type of Food: {product.type}</p>
            </div>
            <div>
                <p>Following ingredinets were used: {product.ingredients}<br></br>(Be aware of allergies, or eating raw foods.)</p>
            </div>  
            <div className="detail-pickup"> 
                <div> 
             
                <p>Cost: ${product.price}</p>
              
                </div>
            </div>         
        </div>

            
        </div>
        <button className="button-arrived" onClick={this.goBack}> Go back</button>
        </div>

        )
    }
    }
}
export default TrackFood