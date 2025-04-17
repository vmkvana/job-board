import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Available Jobs</h2>
      <Link to="/add-job" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Add New Job
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map(job => (
          <Link to={`/job/${job._id}`} key={job._id} className="bg-white p-4 rounded shadow hover:shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Company Logo" className="w-16 h-16 mb-2" />
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-600">{job.location}</p>
            <p className="text-gray-600">{job.type}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;