(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){},257:function(e,t,a){e.exports=a(594)},262:function(e,t,a){},393:function(e,t){},395:function(e,t){},427:function(e,t){},428:function(e,t){},496:function(e,t){},594:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),o=a.n(l),c=(a(262),a(5)),i=a(6),s=a(8),u=a(7),p=a(9),m=(a(114),a(596)),d=a(156),h=(a(263),a(601)),g=a(255),E=a(4),v=a.n(E),f=a(31),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newUser:{},errors:{}},a.eventHandler=function(e){var t=a.state,n=t.newUser,r=t.errors;n[e.target.name]=e.target.value,r={},n.password!==n.password2&&(r.password="no coinciden"),a.setState({newUser:n,errors:r})},a.sendToServer=function(){var e=a.state.newUser;v.a.post("https://foodie-el-app.herokuapp.com/signup",e).then(function(e){a.props.history.push("/login")}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.newUser,a=e.errors;return t?r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"main-card"},r.a.createElement("div",{className:"login-card"},r.a.createElement("h2",null,"Sign up"),r.a.createElement(d.a,{to:"chef/signup"},"Want to work as a ",r.a.createElement("b",null,"Chef"),"?"),r.a.createElement("div",null,r.a.createElement(f.a,{style:{fontSize:"20px",color:"blue"},className:"icons",type:"facebook"}),r.a.createElement(f.a,{style:{fontSize:"20px"},className:"icons",type:"google"})),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"username",type:"text",placeholder:"Username"}),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"email",type:"text",placeholder:"Email"}),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"password",type:"password",placeholder:"Password"}),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"password2",type:"password",placeholder:"Re-type password"}),r.a.createElement("p",{style:{color:"red"}},a.password)),r.a.createElement("div",{className:"hello-card"},r.a.createElement("p",null,"Awesome to have you on our team!"),r.a.createElement("button",{onClick:this.sendToServer},"Registrarse")))):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{},message:""},a.handleChange=function(e){var t=a.state.auth;t[e.target.name]=e.target.value,a.setState({auth:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.auth;return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"main-card"},r.a.createElement("div",{className:"login-card"},r.a.createElement("h1",null,"Log in"),r.a.createElement("input",{className:"signup-input",onChange:this.handleChange,name:"email",type:"text",placeholder:"email"}),r.a.createElement("input",{className:"signup-input",onChange:this.handleChange,name:"password",type:"password",placeholder:"password"}),r.a.createElement("p",null,"Dont have an account? ",r.a.createElement(d.a,{to:"/signup"},"Click Here"))),r.a.createElement("div",{className:"hello-card"},r.a.createElement("h2",null,"Hello"),r.a.createElement("p",null,"awesome to have you back!"),r.a.createElement("button",{onClick:function(){return e.props.logIn(t)}},"Log in"))))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},product:[],productsRecipes:[],productsChef:[],productsFiltered:[]},a.filterProducts=function(){var e=a.state.productsChef.filter(function(e){return!0===e.bought});a.setState({productsFiltered:e})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://foodie-el-app.herokuapp.com/profile",{withCredentials:!0}).then(function(t){e.setState({user:t.data,product:t.data.products})}),v.a.get("https://foodie-el-app.herokuapp.com/profile/products",{withCredentials:!0}).then(function(t){console.log(t),e.setState({productsChef:t.data.product});var a=e.state.productsChef.filter(function(e){return!1===e.bought});e.setState({productsRecipes:a})}).catch(function(t){console.log(t),e.props.history.push("/login")})}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.product,n=e.productsRecipes,l=e.productsFiltered;return console.log(a),t?t.chef&&0===t.coordinates.length?r.a.createElement("div",{className:"add-address"},r.a.createElement(d.a,{to:"/map/direction"},"Add your address, before posting your food.")):t.chef?r.a.createElement("div",{className:"profile-page"},r.a.createElement("div",{className:"user-card"},r.a.createElement("h2",null,r.a.createElement("b",null,"Chef Profile")),r.a.createElement("h1",null,t.username),r.a.createElement("h4",null,t.email)),r.a.createElement("div",null,r.a.createElement(d.a,{to:"/new/product"}," Post your Product ")),r.a.createElement("hr",null),r.a.createElement("h2",null,"Your Recipes"),r.a.createElement("div",{className:"profile-container"},n.map(function(e){return r.a.createElement(d.a,{to:"edit/".concat(e._id)},r.a.createElement("div",{key:e._id,className:"profile-card"},r.a.createElement("h2",null,e.name),r.a.createElement("img",{height:"100",src:e.picture,alt:""}),r.a.createElement("p",null,e.quantity," plates"),r.a.createElement("p",null," $ ",e.price),r.a.createElement("p",null,"Click to Edit")))})),r.a.createElement("hr",null),r.a.createElement("button",{onClick:this.filterProducts},"Current Orders"),r.a.createElement("div",{className:"profile-container"},l.map(function(e){return r.a.createElement("div",{key:e._id,className:"profile-card2"},r.a.createElement("h2",null,e.name),r.a.createElement("img",{height:"100",src:e.picture,alt:""}),r.a.createElement("p",null,e.quantity,"# order"),r.a.createElement("p",null,"Address: ",e.addressTo),r.a.createElement(d.a,{to:"directions/".concat(e._id)},r.a.createElement("button",null,"Start trip")))}))):t.chef?void 0:r.a.createElement("div",{className:"user-container"},r.a.createElement("h1",null,"Profile"),r.a.createElement("div",null,r.a.createElement("p",null,"Username:",t.username,r.a.createElement("br",null),"Email:",t.email),r.a.createElement(d.a,{to:"/home"},r.a.createElement("p",null,"Hungry? Check todays specialties"))),r.a.createElement("h2",null,"Current orders"),r.a.createElement("div",{className:"profile-container"},a.map(function(e,t){return r.a.createElement(d.a,{key:t,to:"track/".concat(e._id)},r.a.createElement("div",{key:e._id,className:"profile-card"},r.a.createElement("h2",null,e.name),r.a.createElement("img",{height:"100",src:e.picture,alt:""}),r.a.createElement("p",null,"order : ",e.quantity),r.a.createElement("span",null,"Click me to track order")))}))):r.a.createElement("div",null,r.a.createElement("img",{src:"https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551981388/loading-pizzagiphy.gif",alt:"pizza-loader"}))}}]),t}(n.Component),w=a(597),k="https://foodie-el-app.herokuapp.com/new/product",N=w.a.TextArea,j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={product:{},errors:{}},a.handleChange=function(e){var t=a.state.product;t[e.target.name]=e.target.value,a.setState({product:t})},a.sendToServer=function(){var e=a.state.product;v.a.post(k,e,{withCredentials:!0}).then(function(e){a.props.history.push("/new/imageProfile")}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"product-form-container"},r.a.createElement("div",{className:"example-input"},r.a.createElement("h2",null,"Post your recipe"),r.a.createElement(w.a,{onChange:this.handleChange,style:{width:"50%"},size:"default",name:"name",placeholder:"Recipe Name"}),r.a.createElement("select",{onChange:this.handleChange,defaultValue:"Breakfast",name:"type",style:{width:"50%"}},r.a.createElement("option",{value:"Breakfast"},"Choose Type"),r.a.createElement("option",{value:"Breakfast"},"Breakfast"),r.a.createElement("option",{value:"Dessert"},"Dessert"),r.a.createElement("option",{value:"Full Meal"},"Full Meal"),r.a.createElement("option",{value:"Healthy/Diet"},"Healthy/Diet"),r.a.createElement("option",{value:"Munchies"},"Munchies"),r.a.createElement("option",{value:"Vegan"},"Vegan")),r.a.createElement("select",{onChange:this.handleChange,defaultValue:"American",name:"cuisine",style:{width:"50%"}},r.a.createElement("option",{value:"American"},"What type of cuisine"),r.a.createElement("option",{value:"American",selected:!0},"American"),r.a.createElement("option",{value:"Argentinian"},"Argentinian"),r.a.createElement("option",{value:"Burgers"},"Burgers"),r.a.createElement("option",{value:"Chinese"},"Chinese"),r.a.createElement("option",{value:"Cuban"},"Cuban"),r.a.createElement("option",{value:"Italian"},"Italian"),r.a.createElement("option",{value:"Mediterranean"},"Mediterranean"),r.a.createElement("option",{value:"Venezuelan"},"Venezuelan"),r.a.createElement("option",{value:"Mexican"},"Mexican"),r.a.createElement("option",{value:"Pizza"},"Pizza"),r.a.createElement("option",{value:"Sushi"},"Sushi")),r.a.createElement(N,{name:"ingredients",placeholder:"Remember some people are allergic to certain foods, try to write down all your ingredients.",onChange:this.handleChange,rows:4}),r.a.createElement("input",{className:"input-number",onChange:this.handleChange,placeholder:"How many plates did you make?",type:"number",default:1,name:"quantity",min:1,max:10}),r.a.createElement("input",{className:"input-number",onChange:this.handleChange,placeholder:"$ Price",name:"price",type:"number",min:"0.00",max:"10000.00",step:"1"}))),r.a.createElement("button",{className:"button-order",onClick:this.sendToServer},"Add Product"))}}]),t}(r.a.Component),O=a(59),S="https://foodie-el-app.herokuapp.com/new/imageProfile",x=v.a.create({url:S,withCredentials:!0}),z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={privateInfo:{},profilePic:{}},a.handleChange=function(e){a.setState({profilePic:e.target.files[0]})},a.handleSubmit=function(){var e=a.state.privateInfo;a.subeImagen(a.state.profilePic,S).then(function(t){e.picture=t.picture,a.setState({privateInfo:e})}).catch(function(e){return console.log(e)})},a.subeImagen=function(e,t){var n=new FormData;return n.append("picture",e),x.post(t,n,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){a.props.history.push("/profile"),O.info("Product added!")}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-page"},r.a.createElement("div",{className:"image-container"},r.a.createElement("h1",null,"Add Image"),r.a.createElement("input",{type:"file",onChange:this.handleChange}),r.a.createElement("button",{onClick:this.handleSubmit},"Add image")))}}]),t}(r.a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{onChange:this.props.getFilter,className:"search-bar",type:"text",placeholder:"Search for your favorite food"}))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:null,loader:!0,user:{}},a.getFilter=function(e){var t="https://foodie-el-app.herokuapp.com/home/filter?search="+e.target.value;v.a.get(t,{withCredentials:!0}).then(function(e){console.log(e),a.setState({products:e.data})}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.a.get("https://foodie-el-app.herokuapp.com/home",{withCredentials:!0}).then(function(t){e.setState({products:t.data.product,loader:!1})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.user,n=e.productsFiltered,l=e.loader;return console.log(n),t&&a&&!l?r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-menu"},r.a.createElement("h1",null,"Today's Menu"),r.a.createElement("div",{className:"search-bar"},r.a.createElement(A,{products:n,getFilter:this.getFilter}))),r.a.createElement("div",{className:"home-container"},t.map(function(e){return r.a.createElement("div",{key:e._id,className:"home-available"},r.a.createElement(d.a,{to:"detail/".concat(e._id)},r.a.createElement("div",{className:"home-plate"},r.a.createElement("h2",null,"Chef: ",r.a.createElement("b",null,e.seller.username)),r.a.createElement("img",{height:"80",src:e.picture,alt:""}),r.a.createElement("p",null,r.a.createElement("b",null,e.name)),r.a.createElement("p",null,"# ",r.a.createElement("b",null,e.type)),r.a.createElement("p",null,"Exquisite ",r.a.createElement("b",null,e.cuisine)," cuisine"),r.a.createElement("p",null,"Are you interested? Click me for details"))))}))):r.a.createElement("div",{className:"home"},r.a.createElement("img",{className:"icon-pizza",height:"200",src:"https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551981388/loading-pizzagiphy.gif",alt:"pizza-loader"}))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={product:{},userloggued:{}},a.addRequest=function(){var e=a.props.match.params.id,t=a.state.userloggued,n="https://foodie-el-app.herokuapp.com/detail/".concat(e);t.coordinates.length>0?v.a.post(n,t,{withCredentials:!0}).then(function(){a.props.history.push("/profile")}).catch(function(e){console.log(e)}):a.props.history.push("/map/direction")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a="https://foodie-el-app.herokuapp.com/detail/".concat(t);v.a.get(a,{withCredentials:!0}).then(function(t){console.log(t),e.setState({product:t.data.p,id:t.data.p._id,userloggued:t.data.user}),console.log(t.data._id)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.product;return r.a.createElement("div",{className:"detail-page"},r.a.createElement("div",{className:"product-container"},r.a.createElement("img",{height:"240",src:e.picture,alt:e.name}),r.a.createElement("div",{className:"product-card"},r.a.createElement("h2",null,"The plate is called ",e.name),r.a.createElement("div",{className:"detail-type"},r.a.createElement("p",null,"This is ",r.a.createElement("b",null,e.cuisine)," cuisine  "),"|",r.a.createElement("p",null,"Type of Food: ",e.type)),r.a.createElement("div",null,r.a.createElement("p",null,"Following ingredinets were used: ",e.ingredients,r.a.createElement("br",null),"(Be aware of allergies, or eating raw foods.)")),r.a.createElement("div",{className:"detail-pickup"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.addRequest},"Delivery"),r.a.createElement("p",null,"Cost: $",e.price))))))}}]),t}(r.a.Component),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={newUser:{},errors:{}},a.eventHandler=function(e){var t=a.state,n=t.newUser,r=t.errors;n[e.target.name]=e.target.value,r={},n.password!==n.password2&&(r.password="no coinciden"),a.setState({newUser:n,errors:r})},a.sendToServer=function(){var e=a.state.newUser;e.chef=!0;v.a.post("https://foodie-el-app.herokuapp.com/chef/signup",e).then(function(e){a.props.history.push("/login")}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.newUser,a=e.errors;return t?r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"main-card"},r.a.createElement("div",{className:"login-card"},r.a.createElement("h3",null,"Sign up for Chef position"),r.a.createElement("div",null,r.a.createElement(f.a,{style:{fontSize:"20px",color:"blue"},className:"icons",type:"facebook"}),r.a.createElement(f.a,{style:{fontSize:"20px"},className:"icons",type:"google"})),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"username",type:"text",placeholder:"Chef name"}),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"email",type:"text",placeholder:"Email"}),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"password",type:"password",placeholder:"Password"}),r.a.createElement("input",{className:"signup-input",onChange:this.eventHandler,name:"password2",type:"password",placeholder:"Re-type password"}),r.a.createElement("p",{style:{color:"red"}},a.password)),r.a.createElement("div",{className:"hello-card"},r.a.createElement("p",null,"Welcome to our team Chef!"),r.a.createElement("button",{onClick:this.sendToServer},r.a.createElement("i",{height:"40",class:"fas fa-pizza-slice"}),"Registrarse ")))):r.a.createElement("div",null,"Loading...")}}]),t}(n.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.logOut()}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(r.a.Component),B=a(600),D=a(595),H=function(){return r.a.createElement("div",{className:"index-container"},r.a.createElement("div",null,r.a.createElement(D.a,{autoplay:!0},r.a.createElement("div",null,r.a.createElement("img",{className:"carousel",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552063159/friedchicken.jpg",alt:"food-spoons"})),r.a.createElement("div",null,r.a.createElement("img",{className:"carousel",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552062163/beerssharing.jpg",alt:"beer-sharing"})),r.a.createElement("div",null,r.a.createElement("img",{className:"carousel",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552062163/pancakes.jpg",alt:"pancakes"})),r.a.createElement("div",null,r.a.createElement("img",{className:"carousel",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552063575/bbqribs.jpg",alt:"bbqribs"})),r.a.createElement("div",null,r.a.createElement("img",{className:"carousel",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552063428/ajiagua.jpg",alt:"ajipicante"})))),r.a.createElement("div",{className:"section2-container"},r.a.createElement("h2",null,"Let us take care of your food delight"),r.a.createElement("div",{className:"section-2"},r.a.createElement("div",{className:"icons-child"},r.a.createElement("img",{height:"200",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064059/paypal.png",alt:"paypal"})),r.a.createElement("div",{className:"icons-child"},r.a.createElement("img",{height:"100",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064236/chef.png",alt:"chef"}),r.a.createElement("img",{height:"100",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552064286/cook.png",alt:"cook"})),r.a.createElement("div",{className:"icons-child"},r.a.createElement("p",null,"We can assure you encrypted and easy way of paying with PayPal.")),r.a.createElement("div",{className:"icons-child"},r.a.createElement("p",null,"We provide the best expirience of dining at home, by connecting you with the greatest chefs in your vicinity.")))),r.a.createElement("hr",null),r.a.createElement("div",{className:"section3-container"},r.a.createElement("h2",null,"Become a Chef and start selling your food now!"),r.a.createElement(d.a,{to:"/chef/signup"},r.a.createElement("div",{className:"become-chef"},r.a.createElement("h4",null,"Click here to become a chef"),r.a.createElement("img",{height:"250",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552065480/chef_1.png",alt:"become-chef"})))))},I=a(252),L=a.n(I),_=a(43),R=a.n(_);R.a.accessToken="pk.eyJ1Ijoic2ViYXNncm9zcyIsImEiOiJjanMxeGpzdzUwaGo1NDNvODhmN3JiYXAwIn0.6Bk7mxTNH-SvuwrfOSGpdQ";var U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={lng:-85.14556,lat:22.41944,zoom:3,coordinates:[],address:{}},a.sendToServer=function(){var e=a.state,t=e.address,n=e.coordinates;console.log(t);v.a.post("https://foodie-el-app.herokuapp.com/address/user",{address:t,coordinates:n},{withCredentials:!0}).then(function(e){console.log(e),O.info("Sorry, your order didnt get processed"),a.props.history.push("/profile")}).catch(function(e){return console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0;var t=this.state,a=t.lng,n=t.lat,r=t.zoom,l=new L.a({accessToken:R.a.accessToken,countries:"mx"}),o=new R.a.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[a,n],zoom:r});l.on("result",function(t){var a,n;a=t.result.center,n=t.result.place_name,e.setState({address:n,coordinates:a}),(new R.a.Marker).setLngLat(a).addTo(o),console.log(a),console.log(e.state.coordinates)}),o.on("move",function(){var t=o.getCenter(),a=t.lng,n=t.lat;e.setState({lng:a.toFixed(4),lat:n.toFixed(4),zoom:o.getZoom().toFixed(2)})}),o.addControl(l)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mapbox-container"},r.a.createElement("div",{style:{width:"800px",height:"400px"},ref:function(t){return e.mapContainer=t}}),r.a.createElement("button",{onClick:this.sendToServer},"Add Address"))}}]),t}(n.Component),V=w.a.TextArea,G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={product:{},userloggued:{}},a.handleChange=function(e){var t=a.state.product;t[e.target.name]=e.target.value,a.setState({product:t})},a.borrarProduct=function(){var e=a.props.match.params.id,t="https://foodie-el-app.herokuapp.com/delete/".concat(e);v.a.delete(t,{withCredentials:!0}).then(function(e){console.log("deleted")}).catch(function(e){return console.log(e)})},a.sendToServer=function(){var e=a.props.match.params.id,t=a.state.product,n="https://foodie-el-app.herokuapp.com/edit/".concat(e);v.a.post(n,t,{withCredentials:!0}).then(function(){console.log("jola"),a.props.history.push("/profile")}).catch(function(e){console.log(e)})},a.goBack=function(){a.props.history.push("/profile")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a="https://foodie-el-app.herokuapp.com/detail/".concat(t);v.a.get(a,{withCredentials:!0}).then(function(t){console.log(t),e.setState({product:t.data.p,id:t.data.p._id,userloggued:t.data.user}),console.log(t.data._id)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.product;return r.a.createElement("div",null,r.a.createElement("div",{className:"product-form-container"},r.a.createElement("div",{className:"example-input"},r.a.createElement("h2",null,"Edit your recipe"),r.a.createElement(w.a,{onChange:this.handleChange,style:{width:"50%"},size:"default",name:"name",placeholder:e.name}),r.a.createElement("select",{onChange:this.handleChange,defaultValue:"Breakfast",name:"type",style:{width:"50%"}},r.a.createElement("option",{value:"Breakfast"},"Choose Type"),r.a.createElement("option",{value:"Breakfast"},"Breakfast"),r.a.createElement("option",{value:"Dessert"},"Dessert"),r.a.createElement("option",{value:"Full Meal"},"Full Meal"),r.a.createElement("option",{value:"Healthy/Diet"},"Healthy/Diet"),r.a.createElement("option",{value:"Munchies"},"Munchies"),r.a.createElement("option",{value:"Vegan"},"Vegan")),r.a.createElement("select",{onChange:this.handleChange,defaultValue:"American",name:"cuisine",style:{width:"50%"}},r.a.createElement("option",{value:"American"},"What type of cuisine"),r.a.createElement("option",{value:"American",selected:!0},"American"),r.a.createElement("option",{value:"Argentinian"},"Argentinian"),r.a.createElement("option",{value:"Burgers"},"Burgers"),r.a.createElement("option",{value:"Chinese"},"Chinese"),r.a.createElement("option",{value:"Cuban"},"Cuban"),r.a.createElement("option",{value:"Italian"},"Italian"),r.a.createElement("option",{value:"Mediterranean"},"Mediterranean"),r.a.createElement("option",{value:"Venezuelan"},"Venezuelan"),r.a.createElement("option",{value:"Mexican"},"Mexican"),r.a.createElement("option",{value:"Pizza"},"Pizza"),r.a.createElement("option",{value:"Sushi"},"Sushi")),r.a.createElement(V,{name:"ingredients",placeholder:"Remember some people are allergic to certain foods, try to write down all your ingredients.",onChange:this.handleChange,rows:4}),r.a.createElement("input",{className:"input-number",onChange:this.handleChange,placeholder:"Change the # of plates.",type:"number",default:1,name:"quantity",min:1,max:10}),r.a.createElement("input",{className:"input-number",onChange:this.handleChange,placeholder:"$ Price",name:"price",type:"number",min:"0.00",max:"10000.00",step:"1"}))),r.a.createElement("button",{onClick:this.sendToServer},"Edit Product"),r.a.createElement("button",{onClick:this.goBack}," Go back"))}}]),t}(r.a.Component),q=a(253),W=a.n(q);a(586),a(587);_.accessToken="pk.eyJ1Ijoic2ViYXNncm9zcyIsImEiOiJjanMxeGpzdzUwaGo1NDNvODhmN3JiYXAwIn0.6Bk7mxTNH-SvuwrfOSGpdQ";var J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={lng:-85.14556,lat:22.41944,zoom:10,coordinates:[],address:{},product:{},userloggued:{}},a.arrivedHouse=function(){var e=a.props.match.params.id,t=a.state.product,n="https://foodie-el-app.herokuapp.com/directions/".concat(e);v.a.post(n,t,{withCredentials:!0}).then(function(){a.props.history.push("/profile")}).catch(function(e){console.log(e)})},a.inRoute=function(){var e=a.props.match.params.id,t=a.state.product,n="https://foodie-el-app.herokuapp.com/inroute/".concat(e);v.a.post(n,t,{withCredentials:!0}).then(function(){a.props.history.push("/profile")}).catch(function(e){console.log(e)})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a="https://foodie-el-app.herokuapp.com/detail/".concat(t);v.a.get(a,{withCredentials:!0}).then(function(t){e.setState({product:t.data.p,id:t.data.p._id,userloggued:t.data.user})}).catch(function(e){return console.log(e)}),this._isMounted=!0;var n=this.state,r=n.lng,l=n.lat,o=n.zoom,c=new _.Map({container:this.mapContainer,style:"mapbox://styles/mapbox/streets-v9",center:[r,l],zoom:o}),i=new W.a({accessToken:_.accessToken,unit:"metric",profile:"mapbox/cycling"});c.addControl(i,"top-left"),c.on("load",function(){var t=e.state.product,a=t.coordinatesTo,n=t.coordinatesFrom;console.log(a),c._controls[2].actions.setOriginFromCoordinates(a),c._controls[2].actions.setDestinationFromCoordinates(n)}),c.on("move",function(){var t=c.getCenter(),a=t.lng,n=t.lat;e.setState({lng:a.toFixed(4),lat:n.toFixed(4),zoom:c.getZoom().toFixed(5)})})}},{key:"render",value:function(){var e=this,t=this.state.product;return r.a.createElement("div",{className:"mapbox-container"},r.a.createElement("div",{style:{width:"800px",height:"400px"},ref:function(t){return e.mapContainer=t}}),r.a.createElement("div",{className:"going-card"},r.a.createElement("h3",null,r.a.createElement("b",null,"Going to:")),r.a.createElement("h4",null,t.addressTo),r.a.createElement("button",{className:"button-arrived",onClick:this.inRoute},"Start trip"),r.a.createElement("button",{className:"button-arrived",onClick:this.arrivedHouse},"Arrived at destination")))}}]),t}(n.Component),Y=a(254),$=a.n(Y),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement($.a,{env:"sandbox",client:{sandbox:"ASULKeOAjVosCS9QJF-gP-mC4twMRbBiL9rYu4jsOtpZf_5jwL3mXRhhFQtiwKdvKHmfi2O8RtCGAj_g"},currency:"USD",total:1,onError:function(e){console.log("Error!",e)},onSuccess:function(e){console.log("The payment was succeeded!",e)},onCancel:function(e){console.log("The payment was cancelled!",e)}})}}]),t}(r.a.Component),Q=a(598),K=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={product:{},userloggued:{}},a.goBack=function(){a.props.history.push("/profile")},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id,a="https://foodie-el-app.herokuapp.com/detail/".concat(t);v.a.get(a,{withCredentials:!0}).then(function(t){e.setState({product:t.data.p,id:t.data.p._id,userloggued:t.data.user})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state.product;return e.delivered?r.a.createElement("div",{className:"track-page"},r.a.createElement("div",{className:"progress-container"}),r.a.createElement("div",{className:"progress"},r.a.createElement("h2",null,r.a.createElement("b",null,"Your Food has been delivered")),r.a.createElement("p",null,"Hope you enjoy it!"),r.a.createElement(Q.a,{className:"progress-bar",percent:100,status:"active"})),r.a.createElement("div",{className:"product-container"},r.a.createElement("img",{height:"240",src:e.picture,alt:e.name}),r.a.createElement("div",{className:"product-card"},r.a.createElement("h2",null,r.a.createElement("b",null,e.name)),r.a.createElement("div",{className:"detail-type"},r.a.createElement("p",null,"This is ",r.a.createElement("b",null,e.cuisine)," cuisine  "),"|",r.a.createElement("p",null,"Type of Food: ",e.type)),r.a.createElement("div",null,r.a.createElement("p",null,"Following ingredinets were used: ",e.ingredients,r.a.createElement("br",null),"(Be aware of allergies, or eating raw foods.)")),r.a.createElement("div",{className:"detail-pickup"},r.a.createElement("div",null,r.a.createElement("p",null,"Cost: $",e.price))))),r.a.createElement("button",{className:"button-arrived",onClick:this.goBack}," Go back")):e.track&&!e.delivered?r.a.createElement("div",{className:"track-page"},r.a.createElement("div",{className:"progress-container"}),r.a.createElement("div",{className:"progress"},r.a.createElement("h2",null,r.a.createElement("b",null,"Your driver is on his way")),r.a.createElement(Q.a,{className:"progress-bar",percent:50,status:"active"})),r.a.createElement("div",{className:"product-container"},r.a.createElement("img",{height:"240",src:e.picture,alt:e.name}),r.a.createElement("div",{className:"product-card"},r.a.createElement("h2",null,r.a.createElement("b",null,e.name)),r.a.createElement("div",{className:"detail-type"},r.a.createElement("p",null,"This is ",r.a.createElement("b",null,e.cuisine)," cuisine  "),"|",r.a.createElement("p",null,"Type of Food: ",e.type)),r.a.createElement("div",null,r.a.createElement("p",null,"Following ingredinets were used: ",e.ingredients,r.a.createElement("br",null),"(Be aware of allergies, or eating raw foods.)")),r.a.createElement("div",{className:"detail-pickup"},r.a.createElement("div",null,r.a.createElement("p",null,"Cost: $",e.price))))),r.a.createElement("button",{className:"button-arrived",onClick:this.goBack}," Go back")):e.tracked||e.delivered?void 0:r.a.createElement("div",{className:"track-page"},r.a.createElement("div",{className:"progress-container"}),r.a.createElement("div",{className:"progress"},r.a.createElement("h2",null,r.a.createElement("b",null,"Chef is preparing your order")),r.a.createElement(Q.a,{className:"progress-bar",percent:25,status:"active"})),r.a.createElement("div",{className:"product-container"},r.a.createElement("img",{height:"240",src:e.picture,alt:e.name}),r.a.createElement("div",{className:"product-card"},r.a.createElement("h2",null,r.a.createElement("b",null,e.name)),r.a.createElement("div",{className:"detail-type"},r.a.createElement("p",null,"This is ",r.a.createElement("b",null,e.cuisine)," cuisine  "),"|",r.a.createElement("p",null,"Type of Food: ",e.type)),r.a.createElement("div",null,r.a.createElement("p",null,"Following ingredinets were used: ",e.ingredients,r.a.createElement("br",null),"(Be aware of allergies, or eating raw foods.)")),r.a.createElement("div",{className:"detail-pickup"},r.a.createElement("div",null,r.a.createElement("p",null,"Cost: $",e.price))))),r.a.createElement("button",{className:"button-arrived",onClick:this.goBack}," Go back"))}}]),t}(r.a.Component),Z=function(e){var t=e.isLogged,a=e.logIn,n=e.logOut,l=e.user;return r.a.createElement(h.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:H}),r.a.createElement(g.a,{path:"/signup",component:b}),r.a.createElement(g.a,{path:"/chef/signup",component:F}),r.a.createElement(g.a,{path:"/login",render:function(e){return t?r.a.createElement(B.a,{to:"/"}):r.a.createElement(y,Object.assign({},e,{logIn:a}))}}),r.a.createElement(g.a,{path:"/logout",render:function(e){return t?r.a.createElement(P,Object.assign({},e,{logOut:n,user:l})):r.a.createElement(B.a,{to:"/"})}}),r.a.createElement(g.a,{path:"/home",component:T}),r.a.createElement(g.a,{path:"/profile",component:C}),r.a.createElement(g.a,{path:"/new/product",component:j}),r.a.createElement(g.a,{path:"/new/imageProfile",component:z}),r.a.createElement(g.a,{path:"/detail/:id",component:M}),r.a.createElement(g.a,{path:"/track/:id",component:K}),r.a.createElement(g.a,{path:"/map/direction",component:U}),r.a.createElement(g.a,{path:"/edit/:id",component:G}),r.a.createElement(g.a,{path:"/directions/:id",component:J}),r.a.createElement(g.a,{path:"/paypal/auth",component:X}))},ee=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLogged:!1,user:{}},a.componentDidMount=function(){a.checkLogged()},a.logIn=function(e){O.options={positionClass:"toast-bottom-full-width"};v.a.post("https://foodie-el-app.herokuapp.com/login",e,{withCredentials:!0}).then(function(e){a.setState({isLogged:!0,user:e.data})}).catch(function(e){console.log(e),O.error("Email or Password fields incorrect")})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"checkLogged",value:function(){var e=this;v.a.get("https://foodie-el-app.herokuapp.com/private",{withCredentials:!0}).then(function(t){e.setState({isLogged:!0,user:t.data.user}),e.render()}).catch(function(t){e.setState({isLogged:!1}),e.render()})}},{key:"navDraw",value:function(){return this.state.isLogged?r.a.createElement("div",{className:"app-container"},r.a.createElement("nav",{className:"navbar-2"},r.a.createElement(d.a,{to:"/"},r.a.createElement("img",{height:"68",src:"https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551978138/logo.png",alt:"logo"})),r.a.createElement(m.a,{to:"/home"},"Home"),"|",r.a.createElement(m.a,{to:"/profile"},"Profile"),"|",r.a.createElement(m.a,{className:"logout-press",to:"/logout"},"Logout")),"="):r.a.createElement("div",{className:"app-container"},r.a.createElement("nav",{className:"navbar-1"},r.a.createElement(m.a,{to:"/login"},"Log in"),r.a.createElement(d.a,{to:"/"},r.a.createElement("img",{height:"68",src:"https://res.cloudinary.com/dpt8pbi8n/image/upload/v1551978138/logo.png",alt:"logo"})),r.a.createElement(m.a,{to:"/signup"},"Sign up")))}},{key:"logOut",value:function(){var e=this;v.a.get("https://foodie-el-app.herokuapp.com/logout",{withCredentials:!0}).then(function(t){e.setState({isLogged:!1}),e.props.history.push("/")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.isLogged,a=e.user;return r.a.createElement("div",{className:"App"},this.navDraw(),r.a.createElement(Z,{isLogged:t,logOut:this.logOut,logIn:this.logIn,map:this.mapContainer,user:a}),r.a.createElement("div",{className:"footer"},r.a.createElement("h4",null,"Created by:"),r.a.createElement("p",null,"Sebasgross"),r.a.createElement("a",{href:"https://github.com/sebasgross"}," ",r.a.createElement("img",{height:"80",src:"http://res.cloudinary.com/dpt8pbi8n/image/upload/v1552275075/github-logo.png",alt:"github-logo"})," ",r.a.createElement("p",null,"Sebasgross"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(599);a(593);o.a.render(r.a.createElement(function(){return r.a.createElement(te.a,null,r.a.createElement(ee,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[257,1,2]]]);
//# sourceMappingURL=main.9492a293.chunk.js.map