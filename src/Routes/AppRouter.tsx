import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing'
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SingUp';
import ViewMovies from '../Pages/ViewMovies';
import Details from '../Pages/Details';
import Promotion from '../Pages/Promotion';
import BookTicket from '../Pages/BookTicket';
import Transaction from '../Pages/Transaction';
import Success from '../component/Success/Success';
import MyTickets from '../Pages/MyTickets';


const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/viewmovies" element={<ViewMovies/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/promotion" element={<Promotion/>} />
        <Route path="/book" element={ <BookTicket /> }/>
        <Route path="/book/transaction" element={ <Transaction /> }/>
        <Route path="/book/success" element={ <Success/> }/>
        <Route path="/myticket" element={ <MyTickets/> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;