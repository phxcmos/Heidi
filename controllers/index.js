
module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: '凤凰城华人社区生活平台'
        });
    }
};