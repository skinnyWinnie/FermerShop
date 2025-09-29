import { PageWrapper } from "./layout/PageWrapper/PageWrapper";
import {products} from "./mock"
import './reset.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "./const.js";
import {Info} from './pages/Info/Info.jsx'
import { BuyMenu } from "./pages/BuyMenu/BuyMenu.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index
              element={<Info products={products}/>}
            />
            <Route exact
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<BuyMenu  products={products} />}
            />
            
          </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App