import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import Team from "../pages/dashboard/Team";
import Invoices from '../pages/dashboard/Invoices';
import Contacts from '../pages/dashboard/Contacts';
import Bar from '../pages/dashboard/Bar'
import Form from '../pages/dashboard/Form';
import Pie from '../pages/dashboard/Pie';
import FAQ from '../pages/dashboard/FAQ'
import Calender from '../pages/dashboard/Calender';
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
      <Route path='/calender' element={<Calender/>}/>
    </Routes>
  )
}

export default Approute;