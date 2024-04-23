import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`)
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) {
        console.log('Error fetching Data', error)
      } finally {
        setLoading(false);
      }
    }

    //! dont forget to fucking call your functions
    fetchJob();
  }, [])


  return loading ? <Spinner loading={loading} /> : (<h1>{job.title}</h1>)
}


export default JobPage
