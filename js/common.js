// // ツイートボタン

// function twitText() {
// 	var s, url;
// 	s = "JSからツイートしてみてるよ！ %23SUNABACO %23すなぷろ14th";
// 	url = document.location.href;
	
// 	if (s != "") {
// 		if (s.length > 140) {
// 			//文字数制限
// 			alert("テキストが140字を超えています");
// 		} else {
// 			//投稿画面を開く
// 			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
// 			window.open(url,"_blank","width=600,height=300");
// 		}
// 	}
// }


// // ここまでツイートボタン

// console.log("1991-3-31");


// var fruit = "りんご";

// console.log(fruit);

// fruit = "いちご";
// // フルーツジュースを作るよ
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースの出来上がり〜🍹");

// fruit = "みかん"
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースの出来上がり〜🍹");


// function fruitJuice(fruit,count){//fruitを引数に渡した
//     console.log(fruit+count+"の皮をむいて");
//     console.log(fruit+count+"をざく切りにして");
//     console.log(fruit+count+"をミキサーにかけて");
//     console.log(fruit+count+"ジュースの出来上がり〜🍹");
// }

// fruitJuice("りんご",2);
// fruitJuice("ばなな",3);
// fruitJuice("マンゴー",1);


// var students = ["けいこさん","ゆっこさん","みやぎさん"]

// console.log(students);

// console.log(students[0]);

// var teacher= {"hiru":"suzuka","yoru":"aki"}

// console.log(teacher["yoru"]);



// var fruit = "りんご";
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかけて");
// console.log(fruit+"ジュースの出来上がり〜🍹");


// function fruitJuice2(fruit,count){
//     console.log(fruit+count+"個の皮をむいて");
//     console.log(fruit+count+"個をざく切りにして");
//     console.log(fruit+count+"個をミキサーにかけて");
//     console.log(fruit+count+"個ジュースの出来上がり〜🍹");
// }


// fruitJuice2("キウイ",2);
// fruitJuice2("れもん",3);

// // 新しくtotalという名前の関数を作ってみましょう！
// // total関数では、２つの数字を引数として
// // 受け取れるようにしてください（引数名はaとb）

// // 関数の中で
// // ２つの数字を足し算する処理を書いてください。

// function total(a,b){
//     var ab = a+b;
//     return ab
// }

// console.log(total(2,3));


// var a = "1";
// var b = 1;

// console.log(a===b);
// // 厳密等価演算子


// // if (true){
// //     dふぁlksdjf；ぁksdjfl；あksj
// // }

// // もし(ここの式の結果がtrueなら){
// //     このプログラムを実行
// // }
// var menkyo = 0;
// var money=1000;

// if(menkyo==1){
//     console.log("車の運転していいよ");
// }else if(money>550){
//     console.log("バスで帰っていいよ");
// }else if(money>550){
//     console.log("バスで帰っていいよ");
// }else{
//     console.log("歩いて帰ってね");
// }


// var time = 10;
// var getup = 12;

// if(time<getup){
//     console.log("遅刻です");
// } else if (time==getup){
//     console.log("ギリギリセーフ");
// } else{
//     console.log("よくがんばりました！");
// }



// // for(初期値;条件式;増減式){
// //     繰り返し実行したい処理
// // }

// // for(var i=1;i<11;i++){
// //     console.log("リンゴジュース🥤"+i+"杯目");
// // }

// // 100回目から
// // 1回目までコンソールに出力する繰り返し文を書いてね
// // console.log(i+"回目");

// for(var i=100;i>0;i--){
//     console.log(i+"回目");
// }

// // var text_h1 = document.getElementById("text");
// // console.log(text_h1);
// // console.log(text_h1.textContent);

// // text_h1.textContent = "やっふーーーーーーい";


// var btn_node = document.getElementById("btn");
// btn_node.addEventListener("click",changeText);

// // addEventListener("どんな時",どんな関数);



// function changeText(){
//     var text_h1 =document.getElementById("text");
//     text_h1.textContent = "押したなーーー👊😠";
// }


// ここからはjQueryの講義

$(function(){ //jQuery のお約束

    // $("#text").text("やっほーーーーーーー");

    $("#btn").on("click",function(){
        // $("#text").text("やっほーーーーーーー");
        // $("header").css("color","red");
        // $("#gallery img").attr("src","./img/スクリーンショット 2021-11-26 16.49.47.png");
        // $("a").attr("href","https://sunabaco.com");
        // $("header").toggle();
        // $("body").addClass("red");
        // $("body").removeClass("blue");
        // $("body").toggleClass("blue");
    })

        

}) //jQuery のお約束


$("#box").on("click",function(){
    $("どこの").なにを("どうする");
    $("どこの").なにを("どうする");
    $("どこの").なにを("どうする");
})

// $("セレクタ").on("イベント",function(){
//     実行したい処理
// })

// $("どこの").なにを("どうする")






