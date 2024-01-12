//商品分类
import { http } from '@/http/http'
import type { Result } from './type'
export const ClassFiyApi = () => {
  return http({
    url: '/category/top',
    method: 'GET',
  })
}
