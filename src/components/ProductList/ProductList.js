// import axios from '../../axios'
import React from 'react'
import "./ProductList.css"

const ProductList = ({product,errorProduct}) => {
  return (
    <div>
        {errorProduct?<p style={{textAlign:"center"}}>Connection Faild Please refresh Page</p>:<ul className="mt-5 ul-list-product">
        {product.map((item,index)=> {
            return(
            <li className="list-style-product" key={index}>
                <span>{item.productName}</span>
                <span>{item.number}</span>
            </li>
            )
        })}
        </ul>}
    </div>
  )
}

export default ProductList