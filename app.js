var restify = require('restify');
var orm = require("orm");
var http = require('http');
var urllib = require('url');
var qs = require('querystring');

function respond(req, res, next) {
    orm.connect("mysql://root:@127.0.0.1/news", function(err, db) { //连接数据库
        if (err) throw err;

        var Newscon = db.define("newscon", { //建立数据库对应的字段
            news_id: { //news-id为主键
                type: 'serial',
                key: true
            },
            news_title: String,
            news_img: String,
            news_content: String,
            news_date: Date,
            news_author: String,
            news_type: String
        });
        //获取添加新闻页面传递给服务器的数据
        var news_title = qs.parse(urllib.parse(req.url).query)['news_title'];
        var news_img = qs.parse(urllib.parse(req.url).query)['news_img'];
        var news_content = qs.parse(urllib.parse(req.url).query)['news_content'];
        var news_date = qs.parse(urllib.parse(req.url).query)['news_date'];
        var news_author = qs.parse(urllib.parse(req.url).query)['news_author'];
        var news_type = qs.parse(urllib.parse(req.url).query)['news_type'];
        //新增新闻
        Newscon.create(
                [{
                    news_title: news_title,
                    news_img: news_img,
                    news_content: news_content,
                    news_date: news_date,
                    news_author: news_author,
                    news_type: news_type
                }],
                function(err, items) {
                    // console.log("insert successfully!")
                    if (err)
                        return console.error('Connection error: ' + err);
                    res.locals.NewsInfo = {
                        'result': "成功插入了"
                    };
                })
            //获取数据库信息并通过json传递给前台
        Newscon.find({}, function(err, news) {
            var params = urllib.parse(req.url, true);
            if (params.query && params.query.callback) {
                var str = params.query.callback + '(' + JSON.stringify(news) + ')';
                res.end(str); //jsonp
            } else {
                res.end(JSON.stringify(news)); //普通的json  
            }
        });

        //删除新闻
        Newscon.find({ news_id: req.params.id }).remove(function(err) {
            // console.log("删了5");
        });
    });
}

//修改新闻
function respondchange(req, res, next) {
    orm.connect("mysql://root:@127.0.0.1/news", function(err, db) { //连接数据库
        if (err) throw err;

        var Newscon = db.define("newscon", { //建立数据库对应的字段
            news_id: { //news-id为主键
                type: 'serial',
                key: true
            },
            news_title: String,
            news_img: String,
            news_content: String,
            news_date: Date,
            news_author: String,
            news_type: String
        });
        //获取添加新闻页面传递给服务器的数据
        var news_title = qs.parse(urllib.parse(req.url).query)['news_title'];
        var news_img = qs.parse(urllib.parse(req.url).query)['news_img'];
        var news_content = qs.parse(urllib.parse(req.url).query)['news_content'];
        var news_date = qs.parse(urllib.parse(req.url).query)['news_date'];
        var news_author = qs.parse(urllib.parse(req.url).query)['news_author'];
        var news_type = qs.parse(urllib.parse(req.url).query)['news_type'];
        
        //通过新闻id修改新闻
        Newscon.find({ news_id: req.params.id }, function(err, news) {
            // console.log(news.length);
            // console.log(news[0].news_title, news[0].news_author);
            news[0].news_title = news_title;
            news[0].news_img = news_img;
            news[0].news_content = news_content;
            news[0].news_date = news_date;
            news[0].news_author = news_author;
            news[0].news_type = news_type;
            news[0].save(function(err) {
                // err.msg = "under-age";
            });
        });
    });
}


var server = restify.createServer();
server.get('/:id', respond);
server.get('/del/:id', respondchange);
server.listen(3900, function() { //服务启动在3900端口
    console.log('%s listening at %s', server.name, server.url);
});
