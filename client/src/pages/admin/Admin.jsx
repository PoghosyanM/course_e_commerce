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

  submitForm = async (event) => {
    event.preventDefault()
    const { name, price, imageUrl, category } = this.state.formData
    try {
      const response = await axios.post('/addItem', {
        name,
        price,
        imageUrl,
        category,
      })
      this.props.updateShopData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { name, price, imageUrl, category } = this.state.formData
    const { formData } = this.state
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
            <option value="women">Women</option>
            <option value="men">Men</option>
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
