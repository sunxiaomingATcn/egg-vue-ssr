module.exports = app => {
    app.get('/api/wxconfig',app.controller.api.wxConfig);
};
