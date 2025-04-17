import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/jobs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Job not found');
        return res.json();
      })
      .then(data => setJob(data))
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <div className="container mx-auto p-4 text-red-500">{error}</div>;
  if (!job) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{job.title}</h2>
      <div className="bg-white p-6 rounded shadow">
        <img src="https://via.placeholder.com/150" alt="Company Logo" className="w-16 h-16 mb-4" />
        <p className="text-gray-700"><strong>Company:</strong> {job.company}</p>
        <p className="text-gray-700"><strong>Location:</strong> {job.location}</p>
        <p className="text-gray-700"><strong>Type:</strong> {job.type}</p>
        <p className="text-gray-700"><strong>Description:</strong> {job.description}</p>
        <p className="text-gray-500 text-sm mt-4">Posted on: {new Date(job.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default JobDetails;