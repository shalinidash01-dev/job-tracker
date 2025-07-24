import { useState, useEffect } from 'react';
import Header from './components/Header';
import JobForm from './components/JobForm';
import JobCard from './components/JobCard';

function App() {
  const [jobList, setJobList] = useState([]);

  // Load jobs from localStorage when app starts
  useEffect(() => {
    const savedJobs = localStorage.getItem('jobList');
    if (savedJobs) {
      setJobList(JSON.parse(savedJobs));
    }
  }, []);

  // Save jobs to localStorage whenever jobList changes
  useEffect(() => {
    localStorage.setItem('jobList', JSON.stringify(jobList));
  }, [jobList]);

  const handleAddJob = (job) => {
    setJobList([job, ...jobList]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="p-4 max-w-6xl mx-auto">
        <JobForm onAdd={handleAddJob} />
        <h2 className="text-xl font-semibold mb-4">All Applications</h2>
        {jobList.map((job, idx) => (
          <JobCard
            key={idx}
            company={job.company}
            role={job.role}
            status={job.status}
            date={job.date}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
