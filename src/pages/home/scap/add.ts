import { subType, active, bottom, Hot } from './scap.vue'

export const add = (item: any, index: number) => {
  console.log(item.id)
  subType.value = item.id
  active.value = index
  bottom.value = []
  Hot(item.id)
}
