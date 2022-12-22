import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(109).keys()];
  console.log(arr);

  const history = useHistory();

  const onClikcDetailA = () => history.push("page1/detailA");

  return (
    <div>
      <h1>Page1detailAページです。</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />
      <button onClick={onClikcDetailA}>DetailA</button>
    </div>
  );
};
