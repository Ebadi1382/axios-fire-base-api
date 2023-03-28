import axios from '../../axios'
import React, { useEffect, useRef, useState } from 'react'
import ProductForm from '../ProductForm/ProductForm'
import ProductList from '../ProductList/ProductList'
import Search from '../Search/Search'
import "./Product.css"

const Product = () => {

  const [formTitle, setFormTitle] = useState("")
  const [formNum, setFormNum] = useState("")
  const [search, setSearch] = useState("")
  const [product, setProduct] = useState([])
  const [errorProduct, setErrorProduct] = useState(false)

  const detailFormTitleHandler = (e)=> {
    setFormTitle(e.target.value)
  }
  const detailFormNumHandler = (e)=> {
    setFormNum(e.target.value)
  }
  const inputRef = useRef()
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search===inputRef.current.value) {
        const query = search.length===0 ? "":`?orderBy="productName"&equalTo="${search}"`
      axios.get("product.json" + query).then(Response=> {
        const newProduct=[]
        for (const item in Response.data) {
          newProduct.push({
            productName:Response.data[item].productName,
            number:Response.data[item].number+"x"
          })
        }
        setProduct(newProduct)
      }).catch(error=> {
        setErrorProduct(true)
      })
      }
    }, 1000);
    return () => {
      clearTimeout(timer)
    }
  }, [search])
  const addListHandler=(e)=> {
    e.preventDefault()
    const data={
      productName:formTitle,
      number:formNum
    }
    axios.post("product.json",data).then(Response=> {
      setProduct(last=> {
        return [
          ...last,
          {
            productName:formTitle,
            number:formNum+"x"
          }
        ]
      })
    }
    )
  }
  const searchInputHandler = (e)=> {
    setSearch(e.target.value)
  }
  return (
    <div className="app">
        <div className="product-box">
        <ProductForm addListHandler={addListHandler} formTitle={formTitle} formNum={formNum} detailFormTitleHandler={detailFormTitleHandler} detailFormNumHandler={detailFormNumHandler}/>
        </div>
        <section className="search-box">
        <Search searchInputHandler={searchInputHandler} search={search} inputRef={inputRef} />
        </section>
        <section className="product-section">
          <ProductList product={product} errorProduct={errorProduct} />
        </section>
    </div>
  )
}

export default Product