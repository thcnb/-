import uniFetch from '../utils/uni-fetch'

import {Ilogin} from './type/LoginType'
//登录接口
export const loginApi = (data:Ilogin)=>{
	return uniFetch({
		url:"/driver/login/account",
		method:"POST",
		data,
	})
}