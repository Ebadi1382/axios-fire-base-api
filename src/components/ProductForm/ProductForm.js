import React from 'react'
import Card from '../Ui/Card/Card'
import "./ProductForm.css"

const ProductForm = ({formTitle,formNum,detailFormTitleHandler,detailFormNumHandler,addListHandler}) => {
  return (
    <section>
        <Card>
        <form className="form-main">
            <div className="name-input">
            <label htmlFor="name-input" >عنوان</label>
            <input type="text" id="name-input" onChange={detailFormTitleHandler} value={formTitle} />
            </div>
            <div className="border-form"></div>
            <div className="num-input">
            <label htmlFor="num-input" >تعداد</label>
            <input type="number" id="num-input" onChange={detailFormNumHandler} value={formNum} />
            </div>
            <div className="border-form"></div>
            <div>
            <button onClick={addListHandler} className="btn btn-info p-2 btn-form">افزودن</button>
            </div>
        </form>
        </Card>
    </section>
  )
}

export default ProductForm