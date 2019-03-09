import React, { Component } from 'react'
import axios from 'axios'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl' //npm i mapbox-gl o yarn add mapbox-gl

import '../App.css'


mapboxgl.accessToken = "pk.eyJ1Ijoic2ViYXNncm9zcyIsImEiOiJjanMxeGpzdzUwaGo1NDNvODhmN3JiYXAwIn0.6Bk7mxTNH-SvuwrfOSGpdQ"

class MapBox extends Component {
  
    state = {
      lng: -85.14556,
      lat: 22.41944,
      zoom: 3,
    newUser:{}
      

    }
  
    componentDidMount() {
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

    // geocoder.on('result', (e) => {
    // //   const {resLng,resLat} = this.state

    //     this.setState({resLng:e.result.center[0],resLat:e.result.center[1]})
    //     console.log(resLng)


    // })

    geocoder.on('result',(res) =>{
    document.getElementById('lng').value = res.result.center[0]
    document.getElementById('lat').value = res.result.center[1]
})
      new mapboxgl.Marker()
        .setLngLat([-85.14556,22.41944])
            .addTo(map);
  

      map.on('move', () => {
        //   console.log(map)
        const { lng, lat } = map.getCenter()
  
        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        })
      })
      
    map.addControl(geocoder)

    }

    eventHandler=(e)=>{
        let {newUser} = this.state
        newUser[e.target.name] = e.target.value
        this.setState({newUser})
    }
   sendToServer=()=>{
        let {newUser} = this.state
        let url = "http://localhost:3000/address/user"
        axios.post(url,newUser,{withCredentials:true})
        .then(user=>{
            console.log(user)
            this.props.history.push('/profile')
        })
        .catch(e=>console.log(e))
        
    }

    /*
    el id no sirve, entonces la funcion de geocode no va a leer el vlaue de los inputs
    buscar REF en React paraa arreglar probelam
    */ 
    render() {
      const {newUser} = this.state
      console.log(newUser)
        // if(!resCenter) return <div>...loading</div>
      return (
   

          <div>
        <div style={{ width: '800px', height: '400px' }} ref={e => (this.mapContainer = e)}/>

        <input onChange={this.eventHandler} type="text" name="lng" hidden={false} id="lng"  />
        <input onChange={this.eventHandler} type="text" name="lat" hidden={false} id="lat" />
        <button onClick={this.sendToServer}>Clcikkk</button>
        </div>
      )
    }
  }
  
  
  export default MapBox