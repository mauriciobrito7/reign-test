import React, { Suspense } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PUBLIC_URL } from "./constants";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";

const Home = React.lazy(() => import("./pages/Home"));
const Favs = React.lazy(() => import("./pages/Favs"));

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={PUBLIC_URL.home}>
                <Home />
              </Route>
              <Route exact path={PUBLIC_URL.favs}>
                <Favs />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </>
  );
}

export default App;
