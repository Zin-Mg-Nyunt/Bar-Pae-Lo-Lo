import { computed, ref } from 'vue'

const getCategories = (products) => {
  let categories = ref([])
  products.forEach((p) => {
    categories.value.push(p.category)
  })

  // uniqueCategories
  let uniqueCategories = computed(() => {
    // [['phone',{...}],['phone',{...}],['clothes',{...}]] => {phone => {...},clothes => {...}} => [{...},{...}] => {...},{...} => [{...},{...}]
    return [...new Map(categories.value.map((c) => [c.slug, c])).values()]
  })
  return { uniqueCategories }
}
export default getCategories
