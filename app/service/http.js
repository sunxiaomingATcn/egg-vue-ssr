/**
 * service.base.request
 */
module.exports = app => {
    return class HttpService extends app.Service {
        async request(url = "", params = {}) {
            const {env, httpProxy} = this.app.config;
            if(!httpProxy || !httpProxy[env]){
                const err = new Error("There is no agent configuration for this environment:" + env)
                console.error(err)
                return err;
            }else{
                const {data} = await this.ctx.curl(httpProxy[env] + url, params);
                return data;
            }
        }
    }
}
