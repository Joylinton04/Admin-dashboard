import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Team from "../pages/team/Team";
import Invoices from '../pages/invoices/Invoices';
import Contacts from '../pages/contact/Contacts';
import Bar from '../pages/bar/Bar'
import Form from '../pages/form/Form';
import Pie from '../pages/dashboard/Pie';
import FAQ from '../pages/faq/FAQ'
import Calendar from '../pages/calendar/Calendar';
import Geography from '../pages/dashboard/Geography';


const Approute = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/invoices' element={<Invoices/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/bar' element={<Bar/>}/>
      <Route path='/Pie' element={<Pie/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/geography' element={<Geography/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
    </Routes>
  )
}

export default Approute;