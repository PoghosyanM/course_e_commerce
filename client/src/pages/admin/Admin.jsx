import React from 'react'
import axios from 'axios'
import './admin.scss'

class Admin extends React.Component {
  state = {
    formData: {
      category: 'hats',
      name: '',
      price: '',
      imageUrl: '',
    },
  }

  updateFormData = (event) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value,
      },
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    const { name, price, imageUrl, category } = this.state.formData
    axios
      .post('/addItem', {
        name,
        price,
        imageUrl,
        category,
      })
      .then((response) => {
        this.props.updateShopData(response.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  render() {
    const { name, price, imageUrl, category } = this.state.formData
    const { formData } = this.state
    console.log(formData)
    const submitButtonState =
      name.trim() && price.trim() && imageUrl.trim() && category.trim()
    return (
      <div className="admin-content">
        <form onSubmit={this.submitForm} className="add-shop-item">
          <select
            value={category}
            name="category"
            onChange={this.updateFormData}
          >
            <option value="hats">Hats</option>
            <option value="sneakers">Sneakers</option>
            <option value="jackets">Jackets</option>
            <option value="womens">Women</option>
            <option value="mens">Men</option>
          </select>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.updateFormData}
          />
          <input
            type="number"
            name="price"
            value={price}
            placeholder="Price"
            onChange={this.updateFormData}
          />
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            placeholder="Image URL"
            onChange={this.updateFormData}
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
}

export default Admin
