function loadNav(type){
	var on = 'on';
	var home = '',podcast='',live='';
	switch (type) {
        case 'podcast':podcast=on;break;
        case 'live':live=on;break;
    	case 'home':home=on;break;
        default:home=on;break;
    }
	var html = ''+
        	'<img src="images/logo.png" alt="">'+
            '<nav>'+
                '<div class="homepage '+home+'"><a href="./index.html?type=home">Homepage</a></div>'+
                '<div class="live '+live+'"><a href="./index.html?type=live">Live</a></div>'+
                '<div class="podcasts '+podcast+'"><a href="./index.html?type=podcast">Podcasts</a></div>'+
            '</nav>';
    return html;
}

function loadContent(type){
    switch (type) {
        case 'podcast':{
            var html = ''+
            '<div class="podItem clearfix">' +
                '<div class="podMusic">' +
                    '<div class="controls stop"></div>' +
                '</div>' +
                '<div class="podContent">' +
                    '<div class="avatar"><img src="images/123.jpg""></img></div>' +
                    '<div class="title">women&apos;s self defense</div>' +
                    '<div class="body">Hi all!How are we? I hope you all have a good time with your vacation!</div>' +
                '</div>' +
                '<div class="podInfo">' +
                    '<div class="time">5-23 18:15</div>' +
                    '<div class="comments">15</div>' +
                    '<div class="listeners">220</div>' +
                '</div>' +
            '</div>' +
            '<div class="podItem clearfix">' +
                '<div class="podMusic">' +
                    '<div class="controls play"></div>' +
                '</div>' +
                '<div class="podContent">' +
                    '<div class="avatar"><img src="images/123.jpg""></img></div>' +
                    '<div class="title">飞机乘务员广播词</div>' +
                    '<div class="body">Good morning Ladies and Gentlemen:Welcome Air Ch Airlines flight CA1576 Welcome Air Ch Airlines flight CA1576</div>' +
                '</div>' +
                '<div class="podInfo">' +
                    '<div class="time">6分钟前</div>' +
                    '<div class="comments">30</div>' +
                    '<div class="listeners">150</div>' +
                '</div>' +
            '</div>';
            break;
        };
        case 'live':{
            var html = ''+
                '<div class="liveItem">' +
                    '<img class="liveImage" src="images/liveBack.jpg"/>' +
                    '<div class="liveTip living">18:30 开播</div>' +
                    '<div class="enrolls">20人报名</div>' +
                    '<div class="subtitle">Alice教你说出正宗的英式英语Alice教你说出正宗的英式英语</div>' +
                    '<div class="hostInfo">' +
                        '<div class="hostAvatar"><img src="images/123.jpg"></img></div>'+
                        '<div class="hostName">Jem&reg;</div>'+
                        '<div class="extra">' +
                            '<div class="time">30分钟</div><span>&nbsp;|&nbsp;</span>'+
                            '<div class="price">￥5.0</div>'+
                        '</div>'+
                    '</div>' +
                '</div>' +
                '<div class="liveItem">' +
                    '<img class="liveImage" src="images/liveBack.jpg"/>' +
                    '<div class="liveTip living">18:30 开播</div>' +
                    '<div class="enrolls">20人报名</div>' +
                    '<div class="subtitle">Alice教你说出正宗的英式英语Alice教你说出正宗的英式英语</div>' +
                    '<div class="hostInfo">' +
                        '<div class="hostAvatar"><img src="images/123.jpg"></img></div>'+
                        '<div class="hostName">Jem&reg;</div>'+
                        '<div class="extra">' +
                            '<div class="time">30分钟</div><span>&nbsp;|&nbsp;</span>'+
                            '<div class="price">￥5.0</div>'+
                        '</div>'+
                    '</div>' +
                '</div>';
            break;
        };
        default:
        case 'home':{
            $(".content").css({"background":"url(images/bg1.jpg) no-repeat","background-size":"cover"});
            var html = ''+
            '<div class="home">' +
                '<img src="images/home.png"/>' +
            '</div>' +
            '<div class="palfish">' +
                '<img src="images/palfish.png"/>' +
            '</div>' +
            '<div class="message">' +
                '<img src="images/message.png"/>' +
            '</div>' +
            '<div class="download1">' +
                '<img src="images/download1.png"/>' +
            '</div>' +
            '<div class="download2">' +
                '<img src="images/download2.png"/>' +
            '</div>' +
            '<div class="contact">联系我们：<span>bd@ipalfish.com</span></div>';
            break;
        };
    }
    return html;
}