import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetail = () => {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(`https://hrmsapi.leanxpert.in/api/JobPostDetail/${id}`);
        const data = await response.json();
        setJobDetail(data);
      } catch (err) {
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>{jobDetail?.designationName}</h1>
      {renderSection('Overview', jobDetail?.overView, 1)}
      {renderSection('Job Description', jobDetail?.jobDescription, 2)}
      {renderSection('Responsibilities', jobDetail?.responsibilities, 3)}
      {renderSection('Required Skills', jobDetail?.requiredSkills, 4)}
      {renderSection('Benefits', jobDetail?.benefits, 5)}
    </div>
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
