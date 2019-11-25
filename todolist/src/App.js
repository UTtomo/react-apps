import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>{
  return<Todo />
}

class Todo extends Component{

  constructor(props){
    super(props);

    // thisの中にこういう数列をこういう初期値で用意しますよ
    this.state ={
      todos: [],
      name: ''
    };
  }

    addTodo = () => {
      const{todos,name}=this.state;
      this.setState({
        todos.concat([{...todos,name}])
      });
    }
    
  

render(){
  const {todos} = this.state;

  return (<div>
      <input type="text"  onInput={this.onInput}/>
      <button onClick={this.addTodo}>登録</button>
      <ul>
        {/* mapでリストに変換 */}
      {todos.map((todo,index) => <li key ={index}> {todo} </li> )}
    </ul>

  </div>);
}
}
export default App;
