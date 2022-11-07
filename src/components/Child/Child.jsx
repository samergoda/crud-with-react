import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let { name, price, category, count, onSale } = this.props.ProudctsInfo
    return <>


      <div className="col-md-3">
        <div className="border m-2 p-2 position-relative">
          <h5>name: {name}</h5>
          <h5>price: {price}</h5>
          <h5>category: {category}</h5>
          <div className="d-flex align-items-center  justify-content-center">
            <button onClick={()=> this.props.upDateM(this.props.Index)} className='btn btn-danger m-2' >-</button>
          {count}
          <button onClick={()=> this.props.upDate(this.props.Index)} className='btn btn-success m-2'>+</button>
          </div>
          <h5> </h5>
          {onSale == true ? <h6 className='bg-danger position-absolute top-0 end-0 p-1 text-white' >onSale{onSale}</h6> : ''}
          <button onClick={()=> this.props.Delete(this.props.Index)} className='btn btn-outline-danger w-100' >Delete</button>

        </div>
      </div>
   

    </>


  }
}
