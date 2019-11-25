import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Reactコンポーネントクラス「Timer」を宣言

    //初期化　
                                     // （4）
       
        // remaining にprops.secondsを代入する(state)        
            // （2）
      
    
      // state.remainingが正の数なら1秒減じる関数countDownを定義
      countDown() {
          //
          // reaminingが０より大きい時
          
              //  prevState にremainingに今の値-1を代入
               


      }
    
      // 初期化時に、countDownメソッドを1秒ごとに呼び出すタイマーを設定（DOMの読み込み前）
      componentDidMount() {    
        // 1000ms毎にcountDownを呼び出す                  // （5）
        
      }
    
      // 終了処理として、タイマーをクリアする
      componentWillUnmount() {  
        // intervalをクリアする                   // （6）
        
      }
    
      // Timerコンポーネントが描画する要素を記述
      render() {
    
        
        
            {/* //hello, name を表示 */}
            
            {/* 秒　seconds remaining を表示 */}
            
        
        
      
    }
    
    // Propsを通してnameとsecondsを引数として渡して、Timerコンポーネントを生成
     // （1）
const element = <Timer name = "Nami" seconds = {180} />;
    // index.htmlのid=‘root’をもつ要素にelementを挿入
    // rootの中でelement の表示をする
ReactDOM.render(element,document.getElementById('root'));
