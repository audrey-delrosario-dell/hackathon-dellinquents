import { DDSButton } from "@dds/react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "../assets/styles/OfficeStatus.css";
import Table from 'react-bootstrap/Table';

const OfficeStatus = ({ isEditMode }) => {
    // Example initial status (you can replace this with your actual data)
    const [officeStatus, setOfficeStatus] = useState({
        Monday: 'Remote',
        Tuesday: 'In Office',
        Wednesday: 'Remote',
        Thursday: 'In Office',
        Friday: 'Remote',
    });

    const handleUpdateOfficeStatus = (day, newStatus) => {
        setOfficeStatus((prevStatus) => ({
            ...prevStatus,
            [day]: newStatus,
        }));
    };

    return (
        <div>
            <div className="dds__row">
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-4 dds__mb-3">
                    <div className="dds-sb__sample-box">
                        <div className='tags-container'>
                            <h5>Office Status</h5>         
                        </div>
                    </div>
                </div>
                <div className="dds__col--1 dds__col--sm-3 dds__col--md-6 dds__mb-3">
                    <div className="dds-sb__sample-box"> 
                        <Table striped bordered hover className="status-table">
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(officeStatus).map((day) => (
                                    <tr key={day}>
                                        <td style={{ width: '8rem'}}>{day}</td>
                                        <td>
                                            {isEditMode ? (
                                                <select
                                                    value={officeStatus[day]}
                                                    onChange={(e) => handleUpdateOfficeStatus(day, e.target.value)}>
                                                    <option value="Remote">Remote</option>
                                                    <option value="In Office">In Office</option>
                                                </select>
                                            ) : (
                                                officeStatus[day]
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfficeStatus;