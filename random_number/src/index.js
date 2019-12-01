import React from 'react'
import ReactDOM from 'react-dom'

// componentとしてRouletteを配置
class Roulette extends React.Component{
    //　初期化
    constructor(props){
        super(props);
        // numberを１,isStartをfalseに設定
        this.state={ number: 1, isStart: false};
        //toggleButton を　イベントハンドラとして拘束　→　clickイベントハンドラとして登録可能に
        this.toggleButton = this.toggleButton.bind(this);
    }
 //乱数を生成し、返す関数shuffleを定義
    shuffle(){
        //　randに１～３０の乱数を格納
        var rand = Math.floor(Math.random() * 30)+1;
        // number に　rand を格納
        this.setState({number: rand});
    }

// 50msごとにshuffle関数を呼ぶ関数　startRoulette関数を定義
    startRoulette(){
        // 50ms ごとにshuffle関数を呼ぶ
        this.interval = setInterval(() => this.shuffle(),50);
    }

// rouletteを止める関数　stopROuletteを定義
    stopRoulette(){
        // intervalをクリア？（停止？）する
        clearInterval(this.interval);
    }

// toggleButton関数の定義
    toggleButton(){
        // isStartがtrueの時
        if(this.state.isStart){
            // stopRouletteを実行
            this.stopRoulette();
        }
        // その他の時
        else{
            // startRouletteを実行
            this.startRoulette();
        }

        //isStartをtrue,false反転させる
        this.setState((prevState)=> ({
            isStart : !prevState.isStart
        }));
    }

    // render関数を定義
    //nuber:{数字}
    //isStartをボタンを押すごとに交互にStop Startに書き換える
    render(){
        return(
            <div>
                <p>number : {this.state.number}</p>
                <button onClick = {this.toggleButton}>
                    {this.state.isStart ? 'Stop':'Start'}
                </button>
            </div>
        );
    }
} 

// Roulette をindex.htmlでrootに割り当てられているところに描画
ReactDOM.render(
    <Roulette />,
    document.getElementById("root")
); 
