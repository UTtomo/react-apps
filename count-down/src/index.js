import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Reactコンポーネントクラス「Timer」を宣言
class Timer extends React.Component {
//初期化　
  constructor(props) {                                  // （4）
    super(props); 
    // remaining にprops.secondsを代入する        
    this.state = {remaining : this.props.seconds};      // （2）
  }

  // state.remainingが正の数なら1秒減じる関数
  countDown() {
      //
      // state.reaminingが０より大きい時
      if(this.state.remaining > 0) {
          //  prevState にremainingに今の値-1を代入
            this.setState((prevState) => ({
                  remaining : prevState.remaining - 1       // （3）
            }));      
       }
  }

  // 初期化時に、countDownメソッドを1秒ごとに呼び出すタイマーを設定（DOMの読み込み前）
  componentDidMount() {    
    // 1000ms毎にcountDownを呼び出す                  // （5）
    this.interval = setInterval(() => this.countDown(), 1000);
  }

  // 終了処理として、タイマーをクリアする
  componentWillUnmount() {  
    // intervalをクリアする                   // （6）
    clearInterval(this.interval);
  }

  // Timerコンポーネントが描画する要素を記述
  render() {
    return (
      <div>
          {/*  */}
        <h1>Hello, {this.props.name}!</h1>
        <h2>{this.state.remaining} seconds remaining.</h2>
      </div>
    );
  }
}

// Propsを通してnameとsecondsを渡して、Timerコンポーネントを生成
const element = <Timer name="Filange" seconds={180} />;   // （1）

// index.htmlのid=‘root’をもつ要素にelementを挿入
// rootの中でelement の表示をする
ReactDOM.render(
  element,
  document.getElementById('root')
);