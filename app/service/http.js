/**
 * service.base.request
 */
module.exports = app => {
    return class BaseService extends app.Service {
        async request(url = "", params = {}) {
            const {env, httpProxy} = this.app.config;
            (!httpProxy || !httpProxy[env]) && console.log(new Error("There is no agent configuration for this environment:" + env));
            const {data} = await this.ctx.curl(httpProxy[env] + url, params);
            return data;
        }
    }
}
