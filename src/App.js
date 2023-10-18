import React from 'react';
import './App.css';
import Router from "./Routes/Index";
import Loader from './Components/Loader/Loader';
import { useSelector } from 'react-redux';
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from './Pages/ErrorPage';

function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <ErrorPage error={error.message} />
    </div>
  );
}

function App() {
  const loader = useSelector((state) => state.loaderReducer)

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <div className="App">
          {loader && <Loader />}
          <Router />
        </div>
      </ErrorBoundary>
    </>
  );
}

export default App;
