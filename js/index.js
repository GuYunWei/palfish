function init() {
    var type = getUrlParams().type;
    $("header").append(loadNav(type));
    $('.content').append(loadContent(type));
}

function clickNav() {
    var that = $(this);
    var name = that.attr('name');
    var param = {}
    param.type = name;
    param.page = 1;
    var url = 'palfish_index_cn.html?' + $.param(param);
    window.location.href = url;
}
$(function() {
    init();
    $('body').on('tap', '.menu li', clickNav);
})
