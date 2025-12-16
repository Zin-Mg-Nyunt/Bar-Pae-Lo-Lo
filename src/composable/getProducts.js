import { db } from '@/firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import { ref } from 'vue'

const getProducts = () => {
  let products = ref([])
  let error = ref(null)
  const load = async () => {
    try {
      let res = await getDocs(collection(db, 'products'))
      products.value = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })
    } catch (err) {
      error.value = err.code
    }
  }
  return { products, error, load }
}

export default getProducts
