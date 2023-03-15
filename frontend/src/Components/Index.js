import React from 'react'
import { Link } from "react-router-dom"

export default function(){
    return(
        <div className="index-container">
        <div className='over-fold-container'>
            <div className='over-fold-image-container'>
                <img height="500" alt="graphic" src="https://res.cloudinary.com/dpt8pbi8n/image/upload/v1678839173/36.-Bakery.png"/>
            </div>
            <div className='over-fold-text-container'>
                <h1>Hungry? We can take care of that.</h1>
                <p>We source for the best chefs around your area so you can order affordbale, healthy, yummy, food right to your door.</p>
                <Link to='/home'><button class="button-6" role="button">CHECK OUR RECIPES</button></Link>
            </div>
        </div>

        <div className="section2-container">
        <h2>Let us take care of your food delight</h2>
        <div className="section-2">
            <div className="icons-child">
                <img height="200" className="icons-image" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064059/paypal.png" alt="paypal" />
                <p>We can assure you encrypted and easy way of paying with PayPal.</p>

            </div>
            <div className="icons-child"> 
                <img height="200" className="icons-image" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064236/chef.png" alt="chef" /> 
                <img height="200" className="icons-image" src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064286/cook.png" alt="cook" />
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
        <a href="https://github.com/sebasgross"> <img height="40"src="http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552275075/github-logo.png" alt="github-logo" /> <p>Sebasgross</p></a>
      </div>
        </div>
    )
}