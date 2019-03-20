import React, { Component } from 'react'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl' //npm i mapbox-gl o yarn add mapbox-gl
import * as toastr from 'toastr';

import '../App.css'


mapboxgl.accessToken = "pk.eyJ1Ijoic2ViYXNncm9zcyIsImEiOiJjanMxeGpzdzUwaGo1NDNvODhmN3JiYXAwIn0.6Bk7mxTNH-SvuwrfOSGpdQ"

class MapBox extends Component {
  

    state = {
      lng: -85.14556,
      lat: 22.41944,
      zoom: 4,
    coordinates:[],
    address:{}

      
    }
  
    componentDidMount() {

      this._isMounted = true
      const { lng, lat, zoom } = this.state
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        countries: 'mx',
      })
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom: zoom
      })

    geocoder.on('result',(res) =>{
      // const { newCords} = this.state
    let coordinates = []
    let address = {}
      coordinates = res.result.center
      address = res.result.place_name
     
    this.setState({address,coordinates})
  
    
})

  

      map.on('move', () => {
        
        const { lng, lat } = map.getCenter()
  
        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        })
      })


      
    map.addControl(geocoder)

    }

   sendToServer=()=>{
     
        let {address, coordinates} = this.state
        let url = "https://foodie-el-app.herokuapp.com/address/user"
        axios.post(url,{address, coordinates},{withCredentials:true})
        .then(user=>{
            toastr.info("Address added")
            this.props.history.push('/profile')
        })
        .catch(e=>console.log(e))
        
    }

    /*
    el id no sirve, entonces la funcion de geocode no va a leer el vlaue de los inputs
    buscar REF en React paraa arreglar probelam
    */ 
    render() {
      return (

          <div className="mapbox-container">
        <div style={{ width: '800px', height: '400px' }} ref={e => (this.mapContainer = e)}/>

        <button onClick={this.sendToServer}>Add Address</button>
        <p className="p-only"> Currently only working for Mexico</p>

        </div>
      )
    }
  }
  
  
  export default MapBox