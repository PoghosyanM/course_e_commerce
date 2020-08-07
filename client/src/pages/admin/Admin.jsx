import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setShopData } from '../../redux/shopReducer'
import {
  StyledInput,
  StyledSelect,
  SubmitButton,
  AddItemForm,
  AdminContent,
} from './elements'

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
    <AdminContent>
      <AddItemForm onSubmit={submitForm}>
        <StyledSelect
          value={category}
          name="category"
          onChange={updateFormData}
          isGreen
        >
          <option value="hats">Hats</option>
          <option value="sneakers">Sneakers</option>
          <option value="jackets">Jackets</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
        </StyledSelect>
        <StyledInput
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          onChange={updateFormData}
        />
        <StyledInput
          type="number"
          name="price"
          value={price}
          placeholder="Price"
          onChange={updateFormData}
        />
        <StyledInput
          type="text"
          name="imageUrl"
          value={imageUrl}
          placeholder="Image URL"
          onChange={updateFormData}
        />
        <SubmitButton
          disabled={!submitButtonState}
          className="submit-button"
          type="submit"
          href=""
        >
          Add Item
        </SubmitButton>
      </AddItemForm>
    </AdminContent>
  )
}

const mapDispatchToProps = (dispatch) => ({
  setShopData: ({ name, price, imageUrl, category }) =>
    dispatch(setShopData({ name, price, imageUrl, category })),
})

export default connect(null, mapDispatchToProps)(Admin)
