import React from 'react'
import axios from 'axios'


// const {id} = this.state.product
class Detail extends React.Component{
    state={
        product:{},
        userloggued: {}
    }

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `http://localhost:3000/detail/${id}`
        
        axios.get(url, {withCredentials:true})
        .then((product)=>{
            console.log(product)
            this.setState({product:product.data.p,id:product.data.p._id, userloggued: product.data.user })
            console.log(product.data._id)

        })
        .catch(err=>console.log(err))
    }
     addRequest = ()=>{
        // // let { id } = this.state
        // const url= `http://localhost:3000/detail/` + id
        let { id } = this.props.match.params
        const {userloggued} =this.state
        const url= `http://localhost:3000/detail/${id}`
        if(userloggued.coordinates.length > 0){
            axios.post(url, userloggued, {withCredentials: true})
            .then(()=>{
                
                this.props.history.push('/profile')
            })
            .catch((e)=>{
            console.log(e)
            })
        }else{
            this.props.history.push('/map/direction')
        }
        
    }

    render(){
        const { product }=this.state
        return(

            <div className="detail-page">
            <div className="product-container">
            <img height="240" src={product.picture} alt={product.name} />
            <div className="product-card">
                <h2>The plate is called {product.name}</h2>
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
                    <button onClick={this.addRequest}>Delivery</button>
                    <p>Cost: ${product.price}</p>
                    {/* <p>{product.seller}</p> */}
                    </div>

                </div>         
            </div>

                
            </div>
            </div>
        )
    }
}
export default Detail