import React from 'react'
import axios from 'axios'
import * as toastr from 'toastr';
const url = "http://localhost:3000/new/imageProfile" 
const serviceUpload  = axios.create({url, withCredentials: true})


class  AddImage extends React.Component{
    state={
        privateInfo:{},
        profilePic:{}
    }
    handleChange = (e) => {
        this.setState({profilePic: e.target.files[0]})
    }
    handleSubmit = () => {
        const { privateInfo } = this.state
        this.subeImagen(this.state.profilePic, url)
            .then(res => {
                privateInfo.picture = res.picture
                this.setState({ privateInfo })

            })
            .catch((e)=>alert(e))
    }


    subeImagen = (file, url) => {
        const formData = new FormData()
        formData.append('picture', file)
        return serviceUpload.post(url, formData, {headers: {
            'Content-Type': 'multipart/form-data',
          },})
          .then( (res) => {
            this.props.history.push('/profile')
            toastr.info("Product added!")
          })
          .catch( e => console.log(e))
        }
        render(){
            let {profilePic} = this.state
            console.log(profilePic)

            return(
                <div>
                    <input type="file" onChange={this.handleChange}/>    
                    <button onClick={this.handleSubmit}>Add image</button>          
                </div>
            )
        
        }
}

export default  AddImage
