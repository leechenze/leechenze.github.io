(function ($, window, document, undefined) {
    $(function () {
        with(console){
            log("%c JavaScript", " text-shadow: 0 1px 0 #000,0 2px 0 #000,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:18em;font-family:'楷体';color:red;font-weight:bolder;background: radial-gradient(red,orange,yellow,green,blue,indigo,violet);)");
            log("%c 深海两万里  谁人忆红颜  徒手敬岁月", " text-shadow: 0 1px 0 #000,0 2px 0 #000,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:20px;font-family:'楷体';color:red;font-weight:bolder;background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);)");
            log("%c 梦里寻她千百度,百度,百,度,u...", " text-shadow: 0 1px 0 #000,0 2px 0 #000,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:20px;font-family:'楷体';color:red;font-weight:bolder;background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);)");
        }
        window.Cloud = Cloud;
        // 布局高度塌陷问题;
        $wrap.append($('<div></div>').height(110));
        $wrap.prepend($('<div></div>').height(110));

        // 背景音乐循环执行
        Cloud.InterfaceEffect.BGMusic();
        // 背景图循环执行 
        Cloud.InterfaceEffect.BGCavas();
        // 背景canvas效果执行
        Cloud.InterfaceEffect.BGPicture();
        // 动态背景颜色执行
        // Cloud.InterfaceEffect.BDColour();
        
    });


    // 变量集合
    const Cloud = window.Cloud || {},
        {
            random,
            PI,
            cos,
            sin,
            abs,
            ceil,
            floor,
            round
        } = Math;
    let $body = $('body'),
        $wrap = $('div.wrap'),
        $main = $('div.main'),
        $content = $('section.content'),
        $loopPlay = $('.loopPlay'),
        $HelloWorld = $('.HelloWorld'),
        timeNum = 0,
        $audio = $(new Audio()),
        audioSrc = ['./Audio/夜的钢琴曲.ogg',
            './Audio/梦中的婚礼.ogg',
            './Audio/致爱丽丝.ogg',
            './Audio/卡农.ogg'
        ],
        i;
    var empty;

    Cloud.InterfaceEffect = {
        // 背景canvas效果;
        BGCavas: function () {
            
        },
        // 背景音乐;
        BGMusic: function () {
            $audio.get(0).addEventListener('ended', function () {
                i++;
                if (i == 4) i = 0;
                $audio.attr('src', audioSrc[i]);
            }, false);
            for (i in audioSrc) {
                if (i == 4) i = 0;
                $content.append($audio.attr('src', audioSrc[i]));
            }
            $audio.attr('controls', 'controls').attr('autoplay', 'autoplay');
            $audio.css({
                "width": '250px',
                'height': '50px'
            })
        },
        // 背景图循环
        BGPicture: function () {
            setInterval(function () {
                timeNum++;
                if (timeNum == 19) {
                    timeNum = 0;
                } else {
                    $body.append($('<img>').attr('src', './Images/' + timeNum + '.jpg').addClass('loopPlay'));
                    $("img[src='./Images/" + (timeNum - 1) + ".jpg']").remove();
                    $("img[src='./Images/" + 18 + ".jpg']").remove();
                }
            }, 5000);
        },
        // 随机颜色变换
        BDColour: function () {
            let calculateNum = 150,
                timerFirst,
                timerSecond;

            function add() {
                calculateNum++;
                $HelloWorld.css({
                    'box-shadow': '3px 10px 10px ' + floor(random() * 20 + 1) + 'px rgb( ' + floor(random() * 200 + 100) + ',' + floor(random() * 200 + 100) + ' ,' + floor(random() * 200 + 100) + ' )'
                });
                if (calculateNum == 255) {
                    clearInterval(timerFirst);
                    timerSecond = setInterval(sub, 500);
                }
            }

            function sub() {
                calculateNum--;
                $HelloWorld.css({
                    'box-shadow': '3px 10px 10px ' + floor(random() * 20 + 1) + 'px rgb( ' + floor(random() * 200 + 100) + ',' + floor(random() * 200 + 100) + ' ,' + floor(random() * 200 + 100) + ' )'
                });
                if (calculateNum == 150) {
                    clearInterval(timerFirst);
                    timerFirst = setInterval(add, 500);
                }
            }
            timerFirst = setInterval(add, 500);

        }
    }

}(jQuery, window, document));