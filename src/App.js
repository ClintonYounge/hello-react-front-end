import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Greeting from './components/Greeting';
import { fetchGreetings } from './redux/greetings/greetingSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (

    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>

  );
};

export default App;
