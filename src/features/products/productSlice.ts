import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Product } from "../../app/api"


export interface ProductsState {
  products: {
    [id: string]: Product
  }
}

const initialState: ProductsState = {
  products: {
    "123": {
      id: "123",
      name: 'Fake Product',
      price: 100,
      description: 'This is a fake product',
      imageURL: 'https://picsum.photos/200',
      imageAlt: 'Fake Product',
      imageCredit: 'Fake Product',

    }
  }
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    receivedProducts(state, action: PayloadAction<Product[]>) {
      const products = action.payload
      products.forEach(product => {
        state.products[product.id] = product
      })
    }
  }
})

export const { receivedProducts } = productsSlice.actions
export default productsSlice.reducer
