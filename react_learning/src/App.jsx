import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage'
import AddJobs from './pages/AddJobs';
import NotFoundPage from './components/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      //*This handles the main page
      <Route index element={<HomePage />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-jobs' element={<AddJobs />} />

      //*This handles error
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;