import { ref } from 'vue'

const getProduct = (id) => {
  let product = ref(null)
  let error = ref(null)
  const load = async () => {
    try {
      let response = await fetch('http://localhost:3000/products/' + id)
      if (response.status === 404) {
        throw new Error('Product not found')
      }
      let data = await response.json()
      product.value = data
    } catch (err) {
      error.value = err.message
    }
  }
  return { product, error, load }
}

export default getProduct
