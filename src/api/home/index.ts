import { http } from '@/http/http'
import type { bannerType, guessLike, Hot } from './type'
//轮播图
export const bannerApi = (data: bannerType) => {
  return http({
    url: '/home/banner',
    method: 'GET',
    data,
  })
}
//商品分类
export const mutliApi = () => {
  return http({
    url: '/home/category/mutli',
    method: 'GET',
  })
}

//热门推荐
export const recommendApi = () => {
  return http({
    url: '/home/hot/mutli',
    method: 'GET',
  })
}
//新鲜好物
export const StuffApi = () => {
  return http({
    url: '/home/new',
    method: 'GET',
  })
}
//猜你喜欢
export const guessLikeApi = (data: guessLike) => {
  return http({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
}
//特惠推荐
export const HotListApi = (url: string, data: Hot) => {
  return http({
    url,
    method: 'GET',
    data,
  })
}
//商品详情
export const detailApi = (id: string) => {
  return http({
    url: '/goods',
    method: 'GET',
    data: id,
  })
}
