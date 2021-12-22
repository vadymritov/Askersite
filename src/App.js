import './App.scss';
import { Route, Routes} from "react-router-dom";
import Layout from "./components/hoc/Layout/Layout";
import Home from "./container/Home/Home";
import './App.scss';
import Login from "./container/Login/Login";

const App = () => {
  return (
    <Layout>
      <Routes>

        {/* Log in Routes start*/}
        <Route path={"/"} element={<Home />}/>
        <Route path="/log-in" element={<Login />}/>
        {/*<Route exact path={"/"} component={LayoutTwo}/>*/}
        {/*<Route path={"/LogIn"} component={LayoutTwo}/>*/}
        {/*<Route path={"/ForgotPassword"} component={LayoutTwo}/>*/}
        {/*<Route*/}
        {/*    path={"/ForgotPassOtpVerify"}*/}
        {/*    component={LayoutTwo}*/}
        {/*/>*/}
        {/*<Route path={"/ResetPassword"} component={LayoutTwo}/>*/}
        {/*/!* Log in route end *!/*/}

        {/*/!* SignUp routes start*!/*/}
        {/*<Route path={"/SignUp"} component={LayoutTwo}/>*/}
        {/*<Route path={"/VerifyOtp"} component={LayoutTwo}/>*/}
        {/*<Route path={"/VerifyEmail"} component={LayoutTwo}/>*/}
        {/*/!* SignUp routes end *!/*/}

        {/*/!* other Routes Start *!/*/}
        {/*/!* Home Tab*!/*/}
        {/*<Route path={"/HomeCreateQuestion"} component={LayoutTwo}/>*/}
        {/*<Route path={"/HomeStatic"} component={LayoutTwo}/>*/}

        {/*/!* Ask Tab *!/*/}
        {/*<Route path={"/Asker"} component={LayoutTwo}/>*/}
        {/*<Route path={"/Create_asker"} component={LayoutTwo}/>*/}
        {/*<Route path={"/AskerQuestionList"} component={LayoutTwo}/>*/}
        {/*<Route path={"/PublishQuestion"} component={LayoutTwo}/>*/}
        {/*<Route path={"/ShareAsker"} component={LayoutTwo}/>*/}
        {/*<Route path={"/ViewAnswer"} component={LayoutTwo}/>*/}
        {/*<Route path={"/AskerOption"} component={LayoutTwo}/>*/}
        {/*<Route path={"/EditAsker"} component={LayoutTwo}/>*/}
        {/*<Route path={"/ViewAsker"} component={LayoutTwo}/>*/}
        {/*<Route path={"/WatchAnswer"} component={LayoutTwo}/>*/}
        {/*<Route path={"/Askersetting"} component={LayoutTwo}/>*/}

        {/*/!* Asker Search Tab *!/*/}
        {/*<Route path={"/Search"} component={LayoutTwo}/>*/}
        {/*<Route path={"/SatrtAnswer"} component={LayoutTwo}/>*/}
        {/*<Route path={"/GetReady"} component={LayoutTwo}/>*/}
        {/*<Route path={"/RecordAnswer"} component={LayoutTwo}/>*/}
        {/*<Route path={"/SubmitAnswer"} component={LayoutTwo}/>*/}
        {/* other Routes End */}
      </Routes>
    </Layout>
  );
}

export default App;
