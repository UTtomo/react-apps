import React, {Component} from 'react';
//リアクトをインポート

const App = () =>{
  //AppにCounter の中身を入れて、index.jsに返す
  return <Counter />
}

//Component としてCounterを定義
class Counter extends Component{　// react が用意しているComponent から　Count をクラスとして引き継ぐ

// 
  constructor(props)  //状態として持っておく、初期化
  {
    //親コンストラクタを呼び出す
    super(props);
    //初期値としてvaluを0にする
    this.state = {
      value : 0
    }
  }

  //onIncrement を定義
  onIncrement = () =>{
    //setStateでstateの値を更新。valueを今の値+1にする
    this.setState({value : this.state.value + 1});
  }

 //onDecrement を定義
  onDecrement = () => {
     //setStateでstateの値を更新。valueを今の値-1にする
    this.setState({value : this.state.value - 1});
  }



//書き込む
 render(){
   return(
     <div>
       {/* カウント値：で更新 */}
       <div>
         カウント値：{this.state.value}
       </div>
       <div>
         <button type="button" onClick={this.onIncrement}>+</button>
         <button type="button" onClick={this.onDecrement}>-</button>
         
        </div>
        </div>
        );
 }
}
export default App;