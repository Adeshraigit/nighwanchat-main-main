import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css';
import '../../assets/css/responsive.css';

const CareerArea = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://hrmsapi.leanxpert.in/api/JobPost');
        const data = await response.json();
        const filteredJobs = data.filter(job => job.isActive);
        setJobListings(filteredJobs);
      } catch (err) {
        setError('Failed to fetch job listings');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobListings.length / jobsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="career-area" style={{ paddingTop: '0' }} >
      <div className="custom-container">
        <div className="career-body d-flex">
          <div className="career-left">
            <h5 className="section-subtitle">OPENING IN OUR COMPANY</h5>
            <h1 className="section-title">
              Job openings
              <br />
              and career
              <br />
              opportunities
            </h1>
          </div>

          <div className="career-lists">
            {loading && <p>Loading job listings...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && jobListings.length === 0 && <p>No job openings available.</p>}
            {!loading &&
              !error &&
              currentJobs.map((job) => (
                <Link key={job.jobPostId} to={`/job/${job.jobPostId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="career-box">
                    <span className="location">{job.jobLocationName}</span>
                    <h2>
                      {job.designationName} - <span>{job.departmentName}</span>
                    </h2>
                    <p>Minimum Experience: {job.minimumExperience}</p>
                    <div className="career-time">
                      <span>
                        <i className="las la-clock"></i> {job.jobtypeName}
                      </span>
                      <span>
                        <i className="las la-dollar-sign"></i> {job.salaryAmount}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            {!loading && !error && jobListings.length > jobsPerPage && (
              <div className="pagination" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <button 
                  onClick={prevPage} 
                  disabled={currentPage === 1} 
                  style={{ 
                    backgroundColor: 'rgb(255, 124, 32)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 20px', 
                    cursor: currentPage === 1 ? 'not-allowed' : 'pointer', 
                    opacity: currentPage === 1 ? 0.5 : 1,
                    borderRadius: '5px',
                    fontSize: '16px',
                    transition: '0.3s',
                    width: '100px',
                    textAlign: 'center'
                  }}
                >
                  Previous
                </button>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={nextPage} 
                  disabled={currentPage === totalPages} 
                  style={{ 
                    backgroundColor: 'rgb(255, 124, 32)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 20px', 
                    cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', 
                    opacity: currentPage === totalPages ? 0.5 : 1,
                    borderRadius: '5px',
                    fontSize: '16px',
                    transition: '0.3s',
                    width: '100px',
                    textAlign: 'center'
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerArea;
