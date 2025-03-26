import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

const JobDetail = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`https://nighwanapi.azurewebsites.net/api/Job/GetJobById/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJobDetail(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p className="error">{error}</p>;

  if (!jobDetail) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{jobDetail.designationName} | Career Opportunities | Nighwan Technology Pvt. Ltd.</title>
        <meta name="description" content={`Join Nighwan Technology as a ${jobDetail.designationName}. ${jobDetail.jobDescription?.substring(0, 150)}...`} />
        <meta name="keywords" content={`${jobDetail.designationName}, job opening, career opportunity, ${jobDetail.department}, software development jobs, IT careers, Nighwan Technology careers`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{jobDetail.designationName}</h2>
        <div style={{ marginBottom: '20px' }}>
          <h3>Department</h3>
          <p>{jobDetail.department}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Location</h3>
          <p>{jobDetail.location}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Experience Required</h3>
          <p>{jobDetail.experienceRequired}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Job Description</h3>
          <p>{jobDetail.jobDescription}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Required Skills</h3>
          <p>{jobDetail.requiredSkills}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Qualifications</h3>
          <p>{jobDetail.qualifications}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Responsibilities</h3>
          <p>{jobDetail.responsibilities}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Benefits</h3>
          <p>{jobDetail.benefits}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Salary Range</h3>
          <p>{jobDetail.salaryRange}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Employment Type</h3>
          <p>{jobDetail.employmentType}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Posted Date</h3>
          <p>{new Date(jobDetail.postedDate).toLocaleDateString()}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Application Deadline</h3>
          <p>{new Date(jobDetail.applicationDeadline).toLocaleDateString()}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Contact Information</h3>
          <p>{jobDetail.contactInformation}</p>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <h3>Additional Information</h3>
          <p>{jobDetail.additionalInformation}</p>
        </div>
      </div>
    </>
  );
};

const renderSection = (title, content, number) => (
  <div style={sectionStyle}>
    <h2 style={titleStyle}>
      <span style={circleStyle}>{number}</span> {title}
    </h2>
    <p style={textStyle}>{content || 'Not provided'}</p>
  </div>
);

const buttonStyle = {
  backgroundColor: '#f4c089',
  border: 'none',
  padding: '10px 15px',
  cursor: 'pointer',
  borderRadius: '5px',
  fontSize: '14px',
};

const sectionStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  borderRadius: '10px',
  marginBottom: '15px',
  backgroundColor: '#fff',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
};

const circleStyle = {
  display: 'inline-block',
  width: '25px',
  height: '25px',
  lineHeight: '25px',
  borderRadius: '50%',
  backgroundColor: 'rgb(255, 124, 32)',
  color: 'white',
  textAlign: 'center',
  fontWeight: 'bold',
  marginRight: '10px',
};

const textStyle = {
  fontSize: '16px',
  color: '#555',
  marginTop: '10px',
};

export default JobDetail;
