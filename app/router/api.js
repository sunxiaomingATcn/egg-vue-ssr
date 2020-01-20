module.exports = app => {
    app.get('/api/articleList',app.controller.api.articleList);
    app.get('/api/baidu_search', app.controller.api.baiduSearch)
};
