import React, { useState } from 'react'
import './admin.scss'
import { connect } from 'react-redux'
import { setShopData } from '../../redux/shopReducer'

const Admin = ({ setShopData }) => {
  const [formData, setFormData] = useState({
    category: 'hats',
    name: '',
    price: '',
    imageUrl: '',
  })

  const updateFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const submitForm = async (event) => {
    event.preventDefault()
    setShopData(formData)
    setFormData({
      category: 'hats',
      name: '',
      price: '',
      imageUrl: '',
    })
  }

  const { name, price, imageUrl, category } = formData
  const submitButtonState =
    name.trim() && price.trim() && imageUrl.trim() && category.trim()
  return (
    <div className="admin-content">
      <form onSubmit={submitForm} className="add-shop-item">
        <select value={category} name="category" onChange={updateFormData}>
          <option value="hats">Hats</option>
          <option value="sneakers">Sneakers</option>
          <option value="jackets">Jackets</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
        </select>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={updateFormData}
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Price"
          onChange={updateFormData}
        />
        <input
          type="text"
          name="imageUrl"
          value={imageUrl}
          placeholder="Image URL"
          onChange={updateFormData}
        />
        <button
          disabled={!submitButtonState}
          className="submit-button"
          type="submit"
        >
          Add Item
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setShopData: ({ name, price, imageUrl, category }) =>
    dispatch(setShopData({ name, price, imageUrl, category })),
})

export default connect(null, mapDispatchToProps)(Admin)
