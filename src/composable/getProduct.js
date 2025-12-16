import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import { ref } from 'vue'

const getProduct = (id) => {
  let product = ref(null)
  let error = ref(null)
  const load = async () => {
    try {
      const res = await getDoc(doc(db, 'products', id))
      product.value = { id: res.id, ...res.data() }
    } catch (err) {
      error.value = err.code
    }
  }
  return { product, error, load }
}

export default getProduct
