import './App.css'
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";

function Jobs() {
    const Jobs = [
        {
            'id': 1,
            'title': 'Data Analyst',
            'location': 'Bengaluru, India',
            'salary': 'Rs. 10,00,000'
        },
        {
            'id': 2,
            'title': 'Data Scientist',
            'location': 'Delhi, India',
            'salary': 'Rs. 15,00,000'
        },
        {
            'id': 3,
            'title': 'Frontend Engineer',
            'location': 'remote'
        },
        {
            'id': 4,
            'title': 'Backend Developer',
            'location': 'LA, USA',
            'salary': 'Rs. 10,00,000'
        },
        {
            'id': 5,
            'title': 'Data Engineer',
            'location': 'San Francisco, USA',
            'salary': 'Rs. 15,00,000'
        },
        {
            'id': 6,
            'title': 'Product Manager',
            'location': 'San Francisco, USA',
            'salary': 'Rs. 15,00,000'
        },
        {
            'id': 1,
            'title': 'Data Analyst',
            'location': 'Bengaluru, India',
            'salary': 'Rs. 10,00,000'
        },
        {
            'id': 2,
            'title': 'Data Scientist',
            'location': 'Delhi, India',
            'salary': 'Rs. 15,00,000'
        },
        {
            'id': 3,
            'title': 'Frontend Engineer',
            'location': 'remote'
        },
        {
            'id': 4,
            'title': 'Backend Developer',
            'location': 'LA, USA',
            'salary': 'Rs. 10,00,000'
        },
        {
            'id': 5,
            'title': 'Data Engineer',
            'location': 'San Francisco, USA',
            'salary': 'Rs. 15,00,000'
        },
        {
            'id': 6,
            'title': 'Product Manager',
            'location': 'San Francisco, USA',
            'salary': 'Rs. 15,00,000'
        }
    ]

    const jobComponent = Jobs.map(job => <JobCard key={job.id} title={job.title} location={job.location} salary={job.salary} />)

    return (
        <>
            <Header />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className='Job-card-parent'>
                    {jobComponent}
                </div>
            </div>
            <Footer/>
        </>
    )

}

function JobCard({ title, location, salary }) {


    return (
        <>
            <div className='Job-card'>
                <h1>{title}</h1>
                <p>{location}</p>
                <h2>{salary}</h2>
                <Link to={'/apply'}><button className='btn'>Know More</button></Link>
            </div>

        </>
    )
}

export default Jobs