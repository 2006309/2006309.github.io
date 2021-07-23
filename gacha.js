function 一回まわす(){
    var rare決定1=Math.random() * 100;
    console.log(rare決定1);

    var rare決定2=Math.floor(rare決定1);
    console.log(rare決定2);

    if(rare決定2 < 5){
        var rare="[SSR]";
        var 抽選結果=rare決定2 % 2;
        console.log(抽選結果);
        var result = ['焼肉','SUSHI'];
        console.log(result[抽選結果]);
        var 説明　= ['人のお金で食べたいですね。','日本のSUSHIは世界一。'];
    }else if(rare決定2 < 30){
        var rare="[SR]";
        var 抽選結果=rare決定2 % 5;
        console.log(抽選結果);
        var result = ['海鮮丼','ピザ','天丼','ざるそば','トンカツ'];
        console.log(result[抽選結果]);
        var 説明 = ['お茶漬けにしても美味しい。','今日のラッキーピザはマルゲリータ。','私の推しはかき揚げ。','シンプルで美味しい。','揚げたてサクサク。'];

    }else{
        var rare="[R]";
        var 抽選結果=rare決定2 % 10;
        console.log(抽選結果);
        var result = ['のり弁','ラーメン','おにぎり','オムライス','しょうが焼き定食','ビックマック','かけうどん','ミートソースパスタ','カルボナーラ','カレーライス'];
        console.log(result[抽選結果]);
        var 説明 = ['','','','','','','','','',''];
        //Rの時にはメッセージを出力しないようにしたかったんですが　
        //var 説明 = ['']; だとunfが出てしまい対処方法がこれ（29行目）以外わかりませんでした
    }

    document.getElementById("a").innerHTML = ("あなたの今日のご飯は");
    document.getElementById("rareout").innerHTML = rare;
    document.getElementById("resuout").innerHTML = result[抽選結果];
    document.getElementById("desu").innerHTML = ("です。");
    document.getElementById("img").src=result[抽選結果]+'.jpeg';
    document.getElementById("come").innerHTML = 説明[抽選結果];

    
}