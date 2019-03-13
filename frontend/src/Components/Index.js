import React from 'react'
import { Carousel } from 'antd'
import { Link } from "react-router-dom"


export default function(){
    return(
        <div className="index-container">
        <div>
            <Carousel autoplay>
                <div><img className="carousel" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552063159/friedchicken.jpg" alt="food-spoons" /></div>
                <div><img className="carousel" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552062163/beerssharing.jpg" alt="beer-sharing" /></div>
                <div><img className="carousel" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552062163/pancakes.jpg" alt="pancakes" /></div>
                <div><img className="carousel" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552063575/bbqribs.jpg" alt="bbqribs" /></div>
                <div><img className="carousel" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552063428/ajiagua.jpg" alt="ajipicante" /></div>                
            </Carousel>
        </div>

        <div className="section2-container">
        <h2>Let us take care of your food delight</h2>
        <div className="section-2">
            <div className="icons-child" >
                <img height="200" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064059/paypal.png" alt="paypal" />
            </div>
            <div className="icons-child">
                <img height="100" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064236/chef.png" alt="chef" /> 
                <img height="100" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064286/cook.png" alt="cook" />
            </div>
            <div className="icons-child">
            <p>We can assure you encrypted and easy way of paying with PayPal.</p>

            </div>

            <div className="icons-child"> 
            <p>We provide the best expirience of dining at home, by connecting you with the greatest chefs in your vicinity.</p>
            </div>
            

        </div>
        </div>
        <hr></hr>
        <div className="section3-container">
            <h2>Become a Chef and start selling your food now!</h2>
            <Link to="/chef/signup">
            <div className="become-chef">  
                <h4>Click here to become a chef</h4>
                <img height="250" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552065480/chef_1.png" alt="become-chef" />
            </div>
            </Link>
        </div>
        <div className="footer">
        <h4>Created by:</h4>
        <p>Sebasgross</p>
        <a href="https://github.com/sebasgross"> <img height="80"src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552275075/github-logo.png" alt="github-logo" /> <p>Sebasgross</p></a>
      </div>
        </div>
    )
}