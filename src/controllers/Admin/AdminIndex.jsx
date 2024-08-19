
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faDumbbell, faClipboardList, faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';
import AdminHome from './AdminHome';
import EditEnquiry from './EditEnquiry';
import EditEquipment from './EditEquipment';
import EditPlan from './EditPlan';
import EditMember from './EditMember';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import adminlogo from '../../img/services/service-icon-2.png'
const AdminIndex = () => {
  const [counts, setCounts] = useState({
    equipment: 0,
    plan: 0,
    enquiry: 0,
    member: 0,
  });
  const [selectedCard, setSelectedCard] = useState(null);
  

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [equipmentRes, planRes, enquiryRes, memberRes] = await Promise.all([
          axios.get('http://localhost:8081/equipmentCount'),
          axios.get('http://localhost:8081/planCount'),
          axios.get('http://localhost:8081/enquiryCount'),
          axios.get('http://localhost:8081/memberCount'),
        ]);

        setCounts({
          equipment: equipmentRes.data.count,
          plan: planRes.data.count,
          enquiry: enquiryRes.data.count,
          member: memberRes.data.count,
        });
      } catch (error) {
        console.error('Error fetching counts', error);
      }
    };

    fetchCounts();
    const interval = setInterval(fetchCounts, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
     
    <div className="flex  h-screen">
     
      <div className="w-64 bg-gray-800 text-white">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar/>
      
      <div className="flex-1 ml-60 p-6 mt-20"> {/* Adjust ml-64 based on the sidebar width */}
        <div className="flex items-center justify-evenly">
          {selectedCard === null ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-full mr-40">
              <Card
                title="Equipment"
                count={counts.equipment}
                icon={faDumbbell}
                onClick={() => handleCardClick('equipment')}
                link="/adminIndex/editequipment"
              />
              <Card
                title="Plan"
                count={counts.plan}
                icon={faClipboardList}
                onClick={() => handleCardClick('plan')}
                link="/adminIndex/editplan"
              />
              <Card
                title="Enquiry"
                count={counts.enquiry}
                icon={faEnvelope}
                onClick={() => handleCardClick('enquiry')}
                link="/adminIndex/editenquiry"
              />
              <Card
                title="Member"
                count={counts.member}
                icon={faUsers}
                onClick={() => handleCardClick('member')}
                link="/adminIndex/editmember"
              />
            </div>
          ) : (
            <div className="p-4">
              <button
                onClick={() => setSelectedCard(null)}
                className="text-white bg-cyan-800 py-2 px-4 rounded-lg border border-slate-700 mb-4"
              >
                Back
              </button>
              {selectedCard === 'enquiry' && <EditEnquiry />}
              {selectedCard === 'equipment' && <EditEquipment />}
              {selectedCard === 'plan' && <EditPlan />}
              {selectedCard === 'member' && <EditMember />}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

const Card = ({ title,link, count, icon, onClick }) => (
  <Link to={link} className="block">
  <div
    className="bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer transition-transform transform hover:scale-105 w-full h-40 flex flex-col items-center justify-center max-w-xs"
    onClick={onClick}
  >
    <FontAwesomeIcon icon={icon} className="text-4xl text-white mb-4" />
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    <p className="mt-2 text-4xl text-white">{count}</p>
  </div>
  </Link>
);

export default AdminIndex;
