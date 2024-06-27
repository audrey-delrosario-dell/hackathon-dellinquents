import { DDSButton } from "@dds/react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "../assets/styles/OfficeStatus.css";
import Table from 'react-bootstrap/Table';

    

const OfficeStatus = ({ isEditMode }) => {

    // Example initial status (you can replace this with your actual data)
    const [officeStatus, setOfficeStatus] = useState({
        Monday: { status: 'Remote' },
        Tuesday: { status: 'In Office', startTime: '09:00', endTime: '17:00' },
        Wednesday: { status: 'Remote' },
        Thursday: { status: 'In Office', startTime: '09:00', endTime: '17:00' },
        Friday: { status: 'Remote' },
    });

    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('17:30');

    const handleUpdateOfficeStatus = (day, newStatus, newStartTime, newEndTime) => {
        setOfficeStatus((prevStatus) => ({
            ...prevStatus,
            [day]: {
                status: newStatus,
                startTime: newStatus === 'In Office' ? newStartTime : undefined,
                endTime: newStatus === 'In Office' ? newEndTime : undefined,
            },
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
                                            <td style={{ width: '8rem' }}>{day}</td>
                                            <td>
                                                {isEditMode ? (
                                                    <div>
                                                        <select
                                                            value={officeStatus[day].status}
                                                            onChange={(e) =>
                                                                handleUpdateOfficeStatus(
                                                                    day,
                                                                    e.target.value,
                                                                    officeStatus[day].startTime,
                                                                    officeStatus[day].endTime
                                                                )
                                                            }
                                                        >
                                                            <option value="Remote">Remote</option>
                                                            <option value="In Office">In Office</option>
                                                        </select>
                                                        {officeStatus[day].status === 'In Office' && (
                                                            <div>
                                                                <label>Start Time:</label>
                                                                <input
                                                                    type="time"
                                                                    value={officeStatus[day].startTime}
                                                                    onChange={(e) =>
                                                                        handleUpdateOfficeStatus(
                                                                            day,
                                                                            officeStatus[day].status,
                                                                            e.target.value,
                                                                            officeStatus[day].endTime
                                                                        )
                                                                    }
                                                                />
                                                                <label>End Time:</label>
                                                                <input
                                                                    type="time"
                                                                    value={officeStatus[day].endTime}
                                                                    onChange={(e) =>
                                                                        handleUpdateOfficeStatus(
                                                                            day,
                                                                            officeStatus[day].status,
                                                                            officeStatus[day].startTime,
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    // Display as text when not in edit mode
                                                    officeStatus[day].status === 'In Office' ? (
                                                        `In office from ${officeStatus[day].startTime} to ${officeStatus[day].endTime}`
                                                    ) : (
                                                        officeStatus[day].status
                                                    )
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