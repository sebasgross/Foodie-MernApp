import React from 'react'

import axios from 'axios'
import { Input } from 'antd';

const { TextArea } = Input

// const {id} = this.state.product
class Edit extends React.Component{
    state={
        product:{},
        userloggued: {}
    }

    componentDidMount(){
        let { id } = this.props.match.params
        const url= `https://foodie-el-app.herokuapp.com/detail/${id}`

        axios.get(url, {withCredentials:true})
        .then((product)=>{
            console.log(product)
            this.setState({product:product.data.p,id:product.data.p._id, userloggued: product.data.user })
            console.log(product.data._id)

        })
        .catch(err=>console.log(err))
    }
    handleChange = e => {
        let { product } = this.state
        product[e.target.name]=e.target.value
        
        this.setState({product})
        //validate
        // errors = {}
        // if (newUser.password !== newUser.password2) errors.password = "no coinciden"
        // this.setState({ newUser, errors })
    }

      borrarProduct = () =>{
        let { id } = this.props.match.params    
        const url4 = `https://foodie-el-app.herokuapp.com/delete/${id}` 
          
    axios.delete(url4,{withCredentials:true})
    .then(res=>{
      console.log("deleted")
    })
    .catch((e)=>console.log(e))
  }
     sendToServer = ()=>{
        // // let { id } = this.state
        // const url= `https://foodie-el-app.herokuapp.com/detail/` + id
        let { id } = this.props.match.params
        const {product} =this.state
        const url= `https://foodie-el-app.herokuapp.com/edit/${id}`
        
            axios.post(url, product, {withCredentials: true})
            .then(()=>{
                console.log('jola')
                this.props.history.push('/profile')
            })
            .catch((e)=>{
            console.log(e)
            })  
    }
    goBack = () =>{
        this.props.history.push('/profile')
    }
    render(){
        const { product } = this.state
        return(
            <div>
            <div className="product-form-container">
                
                
                {/* <input onChange={this.handleChange} placeholder="Name" name="name" type="text" /> */}
                <div className="example-input">
                <h2>Edit your recipe</h2>
                <Input onChange={this.handleChange} style={{width:'50%'}} size="default" name="name" placeholder={product.name} />
                
                <select onChange ={this.handleChange} defaultValue="Breakfast" name="type" style={{width:"50%"}}>
                {/* <Select onChange={this.handleChange} mode="multiple" style={{width:'50%'}} name="type" placeholder="Select Type" > */}
                <option value="Breakfast">Choose Type</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Full Meal">Full Meal</option>
                    <option value="Healthy/Diet">Healthy/Diet</option>
                    <option value="Munchies">Munchies</option>
                    <option value="Vegan">Vegan</option>
                </select>
                <select onChange={this.handleChange} defaultValue={"American"} name="cuisine" style={{width:"50%"}}>
                    <option value="American">What type of cuisine</option>
                    <option value="American" selected>American</option>
                    <option value="Argentinian">Argentinian</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Cuban">Cuban</option>
                    <option value="Italian">Italian</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Venezuelan">Venezuelan</option>

                    <option value="Mexican">Mexican</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Sushi">Sushi</option>
                </select>
                <TextArea name="ingredients" placeholder="Remember some people are allergic to certain foods, try to write down all your ingredients." onChange={this.handleChange} rows={4} />
                <input className="input-number" onChange={this.handleChange} placeholder="Change the # of plates." type="number" default={1} name="quantity" min={1} max={10}   />
                <input className="input-number" onChange={this.handleChange} placeholder="$ Price" name="price" type="number" min="0.00" max="10000.00" step="1" />
                </div>
                
                {/* <input onChange={this.handleChange} placeholder="quantity" name="quantity" type="number" maxLength="10" /> */}

            </div>
            <button onClick={this.sendToServer}>Edit Product</button>
            {/* <button onClick={this.borrarProduct}>Delete Product</button> */}
             <button onClick={this.goBack}> Go back</button>
            
            </div>
        )
    }
}
export default Edit