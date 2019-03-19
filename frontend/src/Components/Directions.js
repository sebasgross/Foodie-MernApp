import React, { Component } from 'react'
import axios from 'axios'
import * as mapboxgl from 'mapbox-gl' //npm i mapbox-gl o yarn add mapbox-gl

import '../App.css'

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

import 'mapbox-gl/dist/mapbox-gl.css' // Updating node module will keep css up to date.
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css' // Updating node module will keep css up to date.





mapboxgl.accessToken = "pk.eyJ1Ijoic2ViYXNncm9zcyIsImEiOiJjanMxeGpzdzUwaGo1NDNvODhmN3JiYXAwIn0.6Bk7mxTNH-SvuwrfOSGpdQ"

class Direction extends Component {
  

    state = {
      lng: -85.14556,
      lat: 22.41944,
      zoom: 10,
    coordinates:[],
    address:{},
    product:{},
    userloggued:{}

      
    }
  
    componentDidMount() {

        let { id } = this.props.match.params
        const url= `https://foodie-el-app.herokuapp.com/detail/${id}`

        axios.get(url, {withCredentials:true})
        .then((product)=>{
            
            this.setState({product:product.data.p,id:product.data.p._id, userloggued: product.data.user })

        })
        .catch(err=>console.log(err))

      this._isMounted = true
      const { lng, lat, zoom } = this.state

      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [lng, lat],
        zoom: zoom
      })
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
      });

      map.addControl(directions, 'top-left');

map.on("load",()=>{
    const {coordinatesTo,coordinatesFrom} = this.state.product
    map._controls[2].actions.setOriginFromCoordinates(coordinatesTo)
    map._controls[2].actions.setDestinationFromCoordinates(coordinatesFrom)
})



      map.on('move', () => {
        
        const { lng, lat } = map.getCenter()
  
        this.setState({
          lng: lng.toFixed(4),
          lat: lat.toFixed(4),
          zoom: map.getZoom().toFixed(5)
        })
      })

    }
    arrivedHouse = ()=>{

        let { id } = this.props.match.params
        const {product} =this.state
        const url= `https://foodie-el-app.herokuapp.com/directions/${id}`
            axios.post(url, product, {withCredentials: true})
            .then(()=>{             
                this.props.history.push('/profile')
            })
            .catch((e)=>{
            console.log(e)
            })
    }
    inRoute = ()=>{

      let { id } = this.props.match.params
      const {product} =this.state
      const url= `https://foodie-el-app.herokuapp.com/inroute/${id}`
          axios.post(url, product, {withCredentials: true})
          .then(()=>{
              this.props.history.push('/profile')
          })
          .catch((e)=>{
          console.log(e)
          })
  }
   

    render() {
        const { product } = this.state
        

      return (

          <div className="mapbox-container">

        <div style={{ width: '800px', height: '400px' }} ref={e => (this.mapContainer = e)}/>
        <div className="going-card">   
            <h3><b>Going to:</b></h3>
            <h4>{product.addressTo}</h4>
            <button className="button-arrived" onClick={this.inRoute}>Start trip</button>
            <button className="button-arrived" onClick={this.arrivedHouse}>Arrived at destination</button>
        </div>

        </div>
      )
    }
  }
  
  
  export default Direction

