import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Product from './routes/Product';
import Category from './routes/Category';
import CateList from './routes/CateList';
import Login from './routes/Login';
import styled from 'styled-components';
// import SetAllergies from './routes/SetAllergies';
// import SetSpecial from './routes/SetSpecial';

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
`;

const Center = styled.div`
  min-width: 500px;
  height: 100vh;
  background-color: lightpink;
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
            <Route exact path="/:productId">
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
            {/* <Route exact path="/Login/setAllergies">
          <SetAllergies />
        </Route>
        <Route exact path="/Login/setSpecial">
          <SetSpecial />
        </Route> */}
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
