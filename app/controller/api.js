module.exports = app => {
    return class ApiController extends app.Controller {
        async articleList() {
            const {service} = this;
            this.ctx.body = await service.http.request('/api/articleList?pageNum=1&pageSize=30');
        }

        async baiduSearch() {
            const {service} = this;
            this.ctx.body = await service.http.request('/sugrec?bs=egg-vue-ssr');
        }

        // ....
    };
};
