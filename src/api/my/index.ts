//登录
import { http } from '@/http/http'
import type { loginType } from './type'
export const loginApi = (data: loginType) => {
  return http({
    url: '/login',
    method: 'POST',
    data,
  })
}
//模拟快捷登录
export type EmptyObject = {
  /**
   * 不传加密信息时，模拟的手机号必传
   */
  phoneNumber: string
}

export const shortcutApi = (data: EmptyObject) => {
  return http({
    url: '/login/wxMin/simple',
    method: 'POST',
    data,
  })
}
