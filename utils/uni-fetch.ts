import { createUniFetch } from 'uni-app-fetch';
// Typescript 相关
//导入
import responseData from './response/respon';

declare module 'vue' {
	interface ComponentCustomProperties {
		fetch: typeof uniFetch;
	}
}


const uniFetch = createUniFetch<responseData>({
	loading: { title: '疯狂加载中' },
	baseURL: "https://slwl-api.itheima.net",
	intercept: {
		// 请求拦截器
		request(options) {
			return options;
		},
		// 响应拦截器
		response(result) {
			return result;
		}
	}
});
// 模块导出
export default uniFetch;
