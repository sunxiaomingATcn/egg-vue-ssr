module.exports = app => {
    app.get('/api/articleList',app.controller.api.articleList);
};
