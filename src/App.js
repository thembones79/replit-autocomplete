import React, { useEffect } from "react";
import { connect } from "react-redux";

import AutoComplete from "./components/AutoComplete";
import { getData } from "./actions";

const App = (props) => {
  const { isLoading, getData, error, data } = props;
  if (error) {
    return <div>{error.message}</div>;
  }

  const usernames = data.map((user) => user.username);

  useEffect(() => {
    getData("https://jsonplaceholder.typicode.com/users");
  }, []);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="app">
      <AutoComplete suggestions={usernames} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isLoading, data, error } = state.getDataReducer;
  return {
    isLoading,
    error,
    data,
  };
};

export default connect(mapStateToProps, {
  getData,
})(App);
