import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Product from './routes/Product';
import Category from './routes/Category';
import CateList from './routes/CateList';
import Login from './routes/Login';
import styled from 'styled-components';
// import Header from './components/Header';
import SetAllergies from './routes/SetAllergies';
import SetSpecial from './routes/SetSpecial';
import SetStart from './routes/SetStart';
import SetFinish from './routes/SetFinish';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
`;

const Center = styled.div`
  min-width: 390px;
  height: 100vh;
  background-color: white;
`;

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/product/:productId">
              <Product />
            </Route>
            <Route exact path="/Category">
              <Category />
            </Route>
            <Route exact path="/Category/:categoryId">
              <CateList />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/set">
              <SetStart />
            </Route>
            <Route exact path="/set/setAllergies">
              <SetAllergies />
            </Route>
            <Route exact path="/set/setSpecial">
              <SetSpecial />
            </Route>
            <Route exact path="/set/setFinish">
              <SetFinish />
            </Route>
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
