/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

const App = () => {
  return <RouterProvider router={router} />;
};

const addJob = async (newJob) => {
  console.log(newJob);
  const res = await fetch('/api/jobs', {
    method: 'POST', header: { 'Content-Type': 'application/json', },
    body: JSON.stringify(newJob),
  });
  return;
};

const deleteJob = async (id) => {
  console.log('delete', id);
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE'
  });
  return;
}

const updateJob = async (job) => {
  console.log(newJob);
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT', header: { 'Content-Type': 'application/json', },
    body: JSON.stringify(newJob),
  });
  return;
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

      //*his handles the main page
      <Route index element={<HomePage />} />z
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='/add-jobs' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
      <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />

      //*This handles error
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

export default App;