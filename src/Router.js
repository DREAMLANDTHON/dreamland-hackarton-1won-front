import MyPage from "./routes/MyPage";
import CateListSnack from "./routes/CateListSnack";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Category from "./routes/Category";
import Login from "./routes/Login";
import styled from "styled-components";
import SetAllergies from "./routes/SetAllergies";
import SetSpecial from "./routes/SetSpecial";
import SetStart from "./routes/SetStart";
import SetFinish from "./routes/SetFinish";
import OCR from "./routes/OCR";
import CateListBread from "./routes/CateListBread";
import CateListNoodles from "./routes/CateListNoodles";
import CateListDrink from "./routes/CateListDrink";
import { useEffect } from "react";
import { useState } from "react";
import * as tmImage from "@teachablemachine/image";

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
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const URL = process.env.REACT_APP_TM_MODEL_URL;
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";
      const model = await tmImage.load(modelURL, metadataURL);
      setModel(model);
    };
    loadModel();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Page>
          <Center>
            <Route exact path="/">
              <Home model={model} />
            </Route>
            <Route exact path="/product/:productId">
              <Product />
            </Route>
            <Route exact path="/Category">
              <Category />
            </Route>
            <Route exact path="/Category/1">
              <CateListSnack />
            </Route>
            <Route exact path="/Category/2">
              <CateListBread />
            </Route>
            <Route exact path="/Category/3">
              <CateListNoodles />
            </Route>
            <Route exact path="/Category/4">
              <CateListDrink />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/MyPage">
              <MyPage />
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
            <Route exact path="/ocr">
              <OCR />
            </Route>
          </Center>
        </Page>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
