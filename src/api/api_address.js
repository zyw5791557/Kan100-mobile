import axios from 'axios';
export default{
	install(Vue,options)
	{
		Vue.prototype.getApi = function (api,method,data) {
			const api_port = {
				// 获取追番表信息
				animeTimeline: '/mock/timeline.json',
			}
			return axios({
				method: method,
				url: api_port[api],
				data: data
			});
		}
	}
}