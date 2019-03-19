import React from 'react'
import axios from 'axios'
import { Input } from 'antd';

//imagwen
const url = "https://foodie-el-app.herokuapp.com/new/product"
const { TextArea } = Input
class Productform extends React.Component{
    state={
        product:{},
        errors:{}
    }

    handleChange = e => {
        let { product } = this.state
        product[e.target.name]=e.target.value
        
        this.setState({product})
    }

    sendToServer = () => {
        let { product } = this.state
        
        axios.post(url, product, { withCredentials:true })
            .then(res => {
                // console.log(res.data)
                this.props.history.push('/new/imageProfile')
            })
            .catch(e => console.log(e))
    }
    render(){
        return(
            <div>
            <div className="product-form-container">
                
                
                {/* <input onChange={this.handleChange} placeholder="Name" name="name" type="text" /> */}
                <div className="example-input">
                <h2>Post your recipe</h2>
                <Input onChange={this.handleChange} style={{width:'50%'}} size="default" name="name" placeholder="Recipe Name" />
                
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
                <input className="input-number" onChange={this.handleChange} placeholder="How many plates did you make?" type="number" default={1} name="quantity" min={1} max={10}   />
                <input className="input-number" onChange={this.handleChange} placeholder="$ Price" name="price" type="number" min="0.00" max="10000.00" step="1" />
                </div>
                
                {/* <input onChange={this.handleChange} placeholder="quantity" name="quantity" type="number" maxLength="10" /> */}

            </div>
            <button className="button-order" onClick={this.sendToServer}>Add Product</button>
            </div>
        )
    }   
}
export default Productform