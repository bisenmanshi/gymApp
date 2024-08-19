import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
const ManageMember = () => {
    const navigate = useNavigate();

    return (
        <div className="text-white flex h-screen">
            <div className="w-64 flex-none">
                <AdminHome />
            </div>
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="flex-grow flex flex-col space-y-4 container mx-auto p-4 text-center mt-20 items-center">
                    <div className="flex space-x-4 gap-10">
                        <div
                            className="card bg-gray-800 p-4 rounded-lg cursor-pointer shadow-lg h-40 w-64 flex items-center justify-center transition-transform transform hover:scale-105"
                            onClick={() => navigate('/take-attendance')}
                        >
                            <h2 className="text-xl font-bold">Take Attendance</h2>
                        </div>
                        <div
                            className="card bg-gray-800 p-4 rounded-lg cursor-pointer shadow-lg h-40 w-64 flex items-center justify-center transition-transform transform hover:scale-105"
                            onClick={() => navigate('/view-attendance')}
                        >
                            <h2 className="text-xl font-bold">View Attendance</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageMember;
export const ViewAttendance = () => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await axios.get('http://localhost:8081/getMember');
            setMembers(response.data.Result);
        } catch (error) {
            console.error('Error fetching members:', error);
            setError('Error fetching members. Please try again.');
        }
    };

    const handleMemberClick = async (member) => {
        setSelectedMember(member);
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:8081/getAttendance/${member.MemberId}`);
            if (response.data && response.data.Result) {
                setAttendanceRecords(response.data.Result);
            } else {
                setAttendanceRecords([]);
                setError('No attendance records found.');
            }
        } catch (error) {
            console.error('Error fetching attendance records:', error);
            setError('Error fetching attendance records. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white flex h-screen">
            <div className="w-64 flex-none">
                <AdminHome />
            </div>
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="container mx-auto p-4 text-white">
                    <h2 className="text-2xl font-bold mb-4">View Attendance</h2>
                    {error && <p className="text-red-600">{error}</p>}
                    {!selectedMember ? (
                        <ul className="bg-gray-800 rounded-lg p-4 shadow-lg">
                            {members.map((member) => (
                                <li
                                    key={member.MemberId}
                                    className="cursor-pointer py-2 px-4 hover:bg-gray-700 rounded"
                                    onClick={() => handleMemberClick(member)}
                                >
                                    {member.FirstName} {member.LastName}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Attendance Records for {selectedMember.FirstName} {selectedMember.LastName}
                            </h3>
                            {loading ? (
                                <p>Loading...</p>
                            ) : attendanceRecords.length > 0 ? (
                                <ul className="space-y-2">
                                    {attendanceRecords.map((record) => (
                                        <li key={record.AttendanceId} className="py-2 px-4 bg-gray-900 rounded">
                                            {record.Date} - {record.Status}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No attendance records found.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export const TakeAttendance = () => {
    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState(null);
    const [attendanceData, setAttendanceData] = useState({ date: '', status: 'Present' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        try {
            const response = await axios.get('http://localhost:8081/getMember');
            setMembers(response.data.Result);
        } catch (error) {
            console.error('Error fetching members:', error);
        }
    };

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const handleAttendanceSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8081/markAttendance', {
                memberId: selectedMember.MemberId,
                date: attendanceData.date,
                status: attendanceData.status,
            });
            setMessage('Attendance marked successfully.');
            setSelectedMember(null);
            setAttendanceData({ date: '', status: 'Present' });
        } catch (error) {
            console.error('Error marking attendance:', error);
            setMessage('Error marking attendance. Please try again.');
        }
    };

    return (
        <div className="text-white flex h-screen">
            <div className="w-64 flex-none">
                <AdminHome />
            </div>
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
                <div className="container mx-auto p-4 text-white">
                    <h2 className="text-2xl font-bold mb-4">Take Attendance</h2>
                    {!selectedMember ? (
                        <ul className="bg-gray-800 rounded-lg p-4 shadow-lg">
                            {members.map((member) => (
                                <li
                                    key={member.MemberId}
                                    className="cursor-pointer py-2 px-4 hover:bg-gray-700 rounded"
                                    onClick={() => handleMemberClick(member)}
                                >
                                    {member.FirstName} {member.LastName}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <form onSubmit={handleAttendanceSubmit} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">
                                Mark Attendance for {selectedMember.FirstName} {selectedMember.LastName}
                            </h3>
                            <div className="mb-2">
                                <label className="block mb-1">Date:</label>
                                <input
                                    type="date"
                                    value={attendanceData.date}
                                    onChange={(e) => setAttendanceData({ ...attendanceData, date: e.target.value })}
                                    className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1">Status:</label>
                                <select
                                    value={attendanceData.status}
                                    onChange={(e) => setAttendanceData({ ...attendanceData, status: e.target.value })}
                                    className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                >
                                    <option value="Present">Present</option>
                                    <option value="Absent">Absent</option>
                                </select>
                            </div>
                            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
                        </form>
                    )}
                    {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                </div>
            </div>
        </div>
    );
};
