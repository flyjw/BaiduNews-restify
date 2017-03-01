//后台首页新闻信息显示
$(document).ready(function() {
    $.ajax({ //通过ajax获取服务器数据
        url: "http://localhost:3900/", //服务器地址
        dataType: 'jsonp',
        data: '',
        jsonp: 'callback',
        success: function(data) { //data为接收到的数据
            //console.log(data);
            for (var i = 0; i < data.length; i++) { //建立for循环，创建变量i，获取后台json格式的数据baidunews的长度
                var $oTr = $('<tr>').addClass('baidunewslist').appendTo($("#main")); //新建class名为baidunewslist的tr标签到id为main的内容里面
                var $oTd1 = $('<td>').addClass('newsid').appendTo($oTr); //新建class名为newsid的td标签到oTr里面
                // var $oInput = $('<input>').appendTo($oTd1).text(data[i].news_id).attr('type', 'checkbox'); //新建input标签到oTd1里面并设置属性
                var $oSpan = $('<span>').appendTo($oTd1).text(data[i].news_id); //新建span标签插入到oTd1里并将id值传进去
                var $oTd2 = $('<td>').addClass('newstype').appendTo($oTr).html(data[i].news_type); //新建td标签插入到oTr里并将news_type值传进去
                var $oTd3 = $('<td>').addClass('newstitle').appendTo($oTr).html(data[i].news_title); //新建td标签插入到oTr里并将news_title值传进去
                var $oTd4 = $('<td>').addClass('newsauthor').appendTo($oTr).html(data[i].news_author); //新建td标签插入到oTr里并将news_author值传进去
                var $oTd5 = $('<td>').addClass('newstime').appendTo($oTr).html(data[i].news_date); //新建td标签插入到oTr里并将news_date值传进去
                var $oTd7 = $('<td>').addClass('newsimg').appendTo($oTr).html(data[i].news_img).css("display", "none");
                var $oTd8 = $('<td>').addClass('newscontent').appendTo($oTr).html(data[i].news_content).css("display", "none");
                var $oTd6 = $('<td>').addClass('newscontrol').appendTo($oTr);
                var $oA1 = $('<a>').addClass('changenews').appendTo($oTd6).html("修改");
                var $oA2 = $('<a>').addClass('delnews').appendTo($oTd6).html("删除"); //插入删除a标签
            };
            //删除新闻
            $('.delnews').click(function() {
                var id = $(this).parent().siblings().children('span').text();
                console.log(id);
                $.ajax({
                    url: 'http://127.0.0.1:3900/' + id,
                    type: 'post',
                    dataType: "jsonp",
                    data: '',
                    success: function(data) {
                        //$(".edit").text(data['result']);
                        alert("成功删除，请刷新列表！");
                    },
                    error: function(data) {
                        alert("删除失败");
                    }
                });
            });
            //修改新闻
            $('.changenews').click(function() {
                $("#changecon form").css("display", "block");
                var newsidC = $(this).parent().siblings().children('span').text();
                $("#news_id").text(newsidC);
                var newstitleC = $(this).parent().siblings(".newstitle").html();
                $("#news_title").val(newstitleC);
                var newstimeC = $(this).parent().siblings(".newstime").html();
                $("#news_date").val(newstimeC);
                var newsimgC = $(this).parent().siblings(".newsimg").html();
                $("#news_img").val(newsimgC);
                var newstypeC = $(this).parent().siblings(".newstype").html();
                $("#news_type").val(newstypeC);
                var newscontentC = $(this).parent().siblings(".newscontent").html();
                $("#news_content").val(newscontentC);
                var newsauthorC = $(this).parent().siblings(".newsauthor").html();
                $("#news_author").val(newsauthorC);
                $("#update").click(function() {
                    var newsID = $("#news_id").text();
                    var newsTitleAdd = $("#news_title").val();
                    var newsImgAdd = $("#news_img").val();
                    var addTimeAdd = $("#news_date").val();
                    var addTypeAdd = $("#news_type").val();
                    var newsContentAdd = $("#news_content").val();
                    var newsAuthorAdd = $("#news_author").val();
                    //console.log(newsID);
                    $.ajax({
                        url: 'http://127.0.0.1:3900/del/' + newsID,
                        type: 'post',
                        dataType: "jsonp",
                        data: {
                            "news_title": newsTitleAdd,
                            "news_img": newsImgAdd,
                            "news_date": addTimeAdd,
                            "news_author": newsAuthorAdd,
                            "news_content": newsContentAdd,
                            "news_type": addTypeAdd
                        },
                        success: function(data) {
                            //$(".edit").text(data['result']);
                            alert("成功");
                            getMsg();
                        },
                        error: function(data) {
                            alert("失败");
                        }
                    });
                });
            });
        },
    });
});

//添加新闻
$(document).ready(function() {
    $("#addnews").click(function() {
        var newsTitleAdd = $("#news_title").val();
        var newImgAdd = $("#news_img").val();
        var addTimeAdd = $("#news_date").val();
        var addTypeAdd = $("#news_type").val();
        var newsContentAdd = $("#news_content").val();
        var newsAuthorAdd = $("#news_author").val();

        $.ajax({
            url: 'http://127.0.0.1:3900/',
            type: 'post',
            dataType: "jsonp",
            data: {
                "news_title": newsTitleAdd,
                "news_img": newImgAdd,
                "news_content": newsContentAdd,
                "news_date": addTimeAdd,
                "news_author": newsAuthorAdd,
                "news_type": addTypeAdd
            },
            success: function(data) {
                //$(".edit").text(data['result']);
                alert("成功");
                getMsg();
            },
            error: function(data) {
                alert("失败");
            }
        });
    });
});
