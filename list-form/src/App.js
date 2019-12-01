import {
  BrowserRouter,
  Route
} from "react-router-dom";

// 自作の画面
import HomePage from "./home";
import MyPage1 from "./mypage1";
import MyPage2 from "./mypage2";

const App = () => (
  <BrowserRouter>
    {/* BrowserRouter直下に置けるコンポーネントは1つだけ */}
    <div>
      {/* RouteはBrowserRouter以下ならばどこの階層に置いてもよい */}
      <Route exact path="/" component={HomePage} /> {/*（1）*/}
      <Route path="/mypage/1" component={MyPage1} />
      <Route path="/mypage/2" component={MyPage2} />
    </div>
  </BrowserRouter>
);