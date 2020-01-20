module.exports = app => {
    return class ApiController extends app.Controller {
        async wxConfig() {
            const {ctx, service} = this;
            const page = ctx.query.page;
            this.ctx.body = await service.http.request('/api/config?page=' + page);
        }
        // ....
    };
};
