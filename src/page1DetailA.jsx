import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const OnClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <button onClick={OnClickBack}>戻る</button>
    </div>
  );
};
