import React from 'react'
import axios from 'axios'
import { Input, InputNumber } from 'antd';

//imagwen
const url = "http://localhost:3000/new/product"

class Productform extends React.Component{
    state={
        product:{},
        errors:{}
    }

    handleChange = e => {
        let { product } = this.state
        product[e.target.name]=e.target.value
        console.log(product)
        this.setState({product})
        //validate
        // errors = {}
        // if (newUser.password !== newUser.password2) errors.password = "no coinciden"
        // this.setState({ newUser, errors })
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
                
                
                {/* <input onChange={this.handleChange} placeholder="Name" name="name" type="text" /> */}
                <div className="example-input">
                <Input onChange={this.handleChange} style={{width:'25%'}} size="default" name="name" placeholder="large size" />
                <select onChange ={this.handleChange} defaultValue="Breakfast" name="type" style={{width:"50%"}}>
                {/* <Select onChange={this.handleChange} mode="multiple" style={{width:'50%'}} name="type" placeholder="Select Type" > */}
                    <option value="Breakfast">Breakfast</option>
                    <option value="Dessert">Dessert</option>
                    <option value="Full Meal">Full Meal</option>
                    <option value="Healthy/Diet">Healthy/Diet</option>
                    <option value="Munchies">Munchies</option>
                    <option value="Vegan">Vegan</option>
                </select>
                <select onChange ={this.handleChange} defaultValue={"American"} name="cuisine" style={{width:"50%"}}>
                    <option value="American" selected>American</option>
                    <option value="Argentinian">Argentinian</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Cuban">Cuban</option>
                    <option value="Italian">Italian</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Sushi">Sushi</option>
                </select>
                <input onChange={this.handleChange} type="number" default={1} name="quantity" min={1} max={10}   />
                </div>
                
                {/* <input onChange={this.handleChange} placeholder="quantity" name="quantity" type="number" maxLength="10" /> */}

                <button onClick={this.sendToServer}>Add Product</button>
            </div>

        )
    }   
}
export default Productform