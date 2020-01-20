module.exports = app => {
    return class ApiController extends app.Controller {
        async articleList() {
            const {ctx, service} = this;
            this.ctx.body = await service.http.request('/api/articleList?pageNum=1&pageSize=30');
        }
        // ....
    };
};
