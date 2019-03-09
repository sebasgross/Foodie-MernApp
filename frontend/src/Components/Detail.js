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
        const {user} =this.state
        const url= `http://localhost:3000/detail/${id}`
        axios.post(url, user, {withCredentials: true})
        .then(()=>{
            console.log('jola')
            this.props.history.push('/profile')
        })
        .catch((e)=>console.log(e))
    }

    render(){
        const { product }=this.state
        return(
            <div className="product-container">
            <div className="product-card">
            <img height="200" src={product.picture} alt={product.name} />
                <h2>The plate is called {product.name}</h2>
                <div className="detail-type">
                <p>This is <b>{product.cuisine}</b> cuisine  </p> 
                {"|"}
                <p>Type of Food: {product.type}</p>
                </div>
                <div>
                    <p>ingredients: this is an igredients list. ienrgiern  feofmewor fkw n knefwn kwenfkjnw </p>
                </div>  
                <div className="detail-pickup"> 
                    <div> 
                    <button onClick={this.addRequest}>Pick up</button>
                    <p>Cost: </p>
                    </div>
                    <div> 
                    <button>Delivery</button>
                    <p>Cost: </p>
                    </div>
                </div>         
            </div>

                
            </div>
        )
    }
}
export default Detail