import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Perent extends Component {
    state = {
        proudcts:[
            {name:'toshiba' , price:8000, category:'TV',count:'13' ,onSale:true},
            {name:'oppo' , price:9000, category:'mobile',count:'44' ,onSale:false},
            {name:'nokia' , price:10000, category:'watch',count:'60' ,onSale:true},
            {name:'apple' , price:2500, category:'TV',count:'70' ,onSale:false},
            {name:'LG' , price:5000, category:'tablet',count:'66' ,onSale:false},
            {name:'toshiba' , price:2000, category:'TV',count:'19' ,onSale:true},
            {name:'toshiba' , price:8000, category:'TV',count:'13' ,onSale:true},
            {name:'oppo' , price:9000, category:'mobile',count:'44' ,onSale:false},
            {name:'nokia' , price:10000, category:'watch',count:'60' ,onSale:true},
            {name:'apple' , price:2500, category:'TV',count:'70' ,onSale:false},
            {name:'LG' , price:5000, category:'tablet',count:'66' ,onSale:false},
        ]
    };




    DeleteProduct= (index)=>
    {
// deep copy
 let myProduct =[...this.state.proudcts];
//action 
  myProduct.splice(index , 1)
// setState
 this.setState({proudcts:myProduct})
        console.log(index)
 };

 upDateCountP= (index)=>{
  let update =[...this.state.proudcts]
  update[index].count++
  this.setState({proudcts:update})
 }

 upDateCountM= (index)=>{
  let update =[...this.state.proudcts]
  update[index].count--
  this.setState({proudcts:update})
 }



  render() {
    return <>
    <h1 className='text-center'>Our Proudacts</h1>
    <div className="container py-2">
        <div className="row">
        {this.state.proudcts.map((proudct, index)=> <Child key={index} upDateM={this.upDateCountM} upDate={this.upDateCountP} Index={index} Delete={this.DeleteProduct}  ProudctsInfo= {proudct} />)} 
        </div>
    </div>
    </>
      
    
  }
}
