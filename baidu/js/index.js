// 从数据库获取百度新闻顶部新闻类别
$(document).ready(function() {
    htmlobj = $.ajax({ //通过ajax获取服务器数据
        url: "http://localhost:3900/", //服务器地址
        dataType: 'jsonp', //完成跨域请求
        data: '',
        jsonp: 'callback',
        success: function(data) { //data为服务器返回的数据
            $("#t01").html(data[0].news_type); //将新闻类型推荐添加到新闻首页导航第一项
            $("#t02").html(data[1].news_type); //将新闻类型百家添加到新闻首页导航第二项
            $("#t03").html(data[2].news_type); //将新闻类型本地添加到新闻首页导航第三项
            $("#t04").html(data[3].news_type); //将新闻类型娱乐添加到新闻首页导航第四项
            $("#t05").html(data[4].news_type); //将新闻类型社会添加到新闻首页导航第五项
            $("#t06").html(data[5].news_type); //将新闻类型军事添加到新闻首页导航第六项
            $("#t07").html(data[6].news_type); //将新闻类型科技添加到新闻首页导航第七项
            $("#t08").html(data[7].news_type); //将新闻类型女人添加到新闻首页导航第八项
            $("#t09").html(data[8].news_type); //将新闻类型生活添加到新闻首页导航第九项
            $("#t10").html(data[9].news_type); //将新闻类型国际添加到新闻首页导航第十项
        }
    });
    //默认百度首页显示推荐类别下的新闻内容
    $.ajax({
        url: "http://localhost:3900/",
        dataType: 'jsonp',
        data: '',
        jsonp: 'callback',
        success: function(data) {
            var types = {};
            var newList = [];
            data.forEach(function(item) { //按新闻类型分组
                var typeItems = types[item.news_type];
                if (!typeItems) {
                    typeItems = [];
                    types[item.news_type] = typeItems;
                    newList.push({
                        type: item.news_type,
                        items: typeItems
                    });
                }
                typeItems.push(item);
            });
            var type1 = newList[0]; //获取新闻类型为推荐下的新闻列表内容
            var type1list = type1.items;
            $("#main").html(""); //清空页面
            for (var i = 0; i < type1list.length; i++) { //建立for循环，创建变量i，获取后台json格式的数据baidunews的长度
                var $oBox = $('<li>').addClass('box').appendTo($("#main")); //将class名为box的li插入到id名为main的ul里
                $('<img>').attr('src', type1list[i].news_img).appendTo($oBox); //将img插入box里，添加src值
                $('<a>').html(type1list[i].news_title).appendTo($oBox); //将a插入box里，添加标题内容
            };
        }
    });
});
//点击首页分类导航时，动态显示相关的新闻内容
$(document).ready(function() {
    $("#t01").click(function() { //点击推荐时，下方显示推荐类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type1 = newList[0];
                var type1list = type1.items;
                $("#main").html("");
                for (var i = 0; i < type1list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type1list[i].news_img).appendTo($oBox);
                    $('<a>').html(type1list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t02").click(function() { //点击百家时，下方显示百家类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type2 = newList[1];
                var type2list = type2.items;
                $("#main").html("");
                for (var i = 0; i < type2list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type2list[i].news_img).appendTo($oBox);
                    $('<a>').html(type2list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t03").click(function() { //点击本地时，下方显示本地类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type3 = newList[2];
                var type3list = type3.items;
                $("#main").html("");
                for (var i = 0; i < type3list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type3list[i].news_img).appendTo($oBox);
                    $('<a>').html(type3list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t04").click(function() { //点击娱乐时，下方显示娱乐类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type4 = newList[3];
                var type4list = type4.items;
                $("#main").html("");
                for (var i = 0; i < type4list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type4list[i].news_img).appendTo($oBox);
                    $('<a>').html(type4list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t05").click(function() { //点击社会时，下方显示社会类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type5 = newList[4];
                var type5list = type5.items;
                $("#main").html("");
                for (var i = 0; i < type5list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type5list[i].news_img).appendTo($oBox);
                    $('<a>').html(type5list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t06").click(function() { //点击军事时，下方显示军事类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type6 = newList[5];
                var type6list = type6.items;
                $("#main").html("");
                for (var i = 0; i < type6list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type6list[i].news_img).appendTo($oBox);
                    $('<a>').html(type6list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t07").click(function() { //点击科技时，下方显示科技类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type7 = newList[6];
                var type7list = type7.items;
                $("#main").html("");
                for (var i = 0; i < type7list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type7list[i].news_img).appendTo($oBox);
                    $('<a>').html(type7list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t08").click(function() { //点击女人时，下方显示女人类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type8 = newList[7];
                var type8list = type8.items;
                $("#main").html("");
                for (var i = 0; i < type8list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type8list[i].news_img).appendTo($oBox);
                    $('<a>').html(type8list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t09").click(function() { //点击生活时，下方显示生活类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type9 = newList[8];
                var type9list = type9.items;
                $("#main").html("");
                for (var i = 0; i < type9list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type9list[i].news_img).appendTo($oBox);
                    $('<a>').html(type9list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
    $("#t10").click(function() { //点击国际时，下方显示国际类别下的新闻内容
        $.ajax({
            url: "http://localhost:3900/",
            dataType: 'jsonp',
            data: '',
            jsonp: 'callback',
            success: function(data) {
                var types = {};
                var newList = [];
                data.forEach(function(item) {
                    var typeItems = types[item.news_type];
                    if (!typeItems) {
                        typeItems = [];
                        types[item.news_type] = typeItems;
                        newList.push({
                            type: item.news_type,
                            items: typeItems
                        });
                    }
                    typeItems.push(item);
                });
                var type10 = newList[9];
                var type10list = type10.items;
                $("#main").html("");
                for (var i = 0; i < type10list.length; i++) {
                    var $oBox = $('<li>').addClass('box').appendTo($("#main"));
                    $('<img>').attr('src', type10list[i].news_img).appendTo($oBox);
                    $('<a>').html(type10list[i].news_title).appendTo($oBox);
                };
            }
        });
    });
});
