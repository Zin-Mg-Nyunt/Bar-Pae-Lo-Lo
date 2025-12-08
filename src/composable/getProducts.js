import { ref } from 'vue'

const getProducts = () => {
  let products = ref([])
  let error = ref(null)
  const load = async () => {
    try {
      let response = await fetch('http://localhost:3000/products')
      if (response.status === 404) {
        throw new Error('Not found url')
      }
      let datas = await response.json()
      products.value = datas
    } catch (err) {
      error.value = err
    }
  }
  return { products, error, load }
}

export default getProducts
