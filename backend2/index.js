const express =require('express');
const mysql =require('mysql')
const cors =require('cors')
const cookieParser =require('cookie-parser')
const jwt =require('jsonwebtoken')
const app =express()
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cron = require('node-cron');

app.use(cors())
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

const db =mysql.createConnection({
    host:"localhost",
    user: 'root',
    password:'',
    database: 'mansidb2'
})
db.connect(function(err) {
    if(err) {
        console.log("Error in Connection");
    }else {
        console.log("DB Connected Successfully");
    }
})
app.get('/',(req,res)=>{
    return res.json("backend side");
})
//CRUD operation for enquiry table
// app.post('/addEnquiry', (req, res) => {
//     const { EnquiryId,FirstName,LastName, contact, email, age, gender } = req.body;
  
//     const sql = 'INSERT INTO enquiry (EnquiryId,FirstName,LastName, contact, email, age, gender) VALUES (?,?,?, ?, ?, ?, ?)';
//     const values = [EnquiryId,FirstName,LastName, contact, email, age, gender];
  
//     db.query(sql, values, (err) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ error: 'An error occurred while creating the enquiry.' });
//       }
  
//       return res.status(200).json({ message: 'Enquiry added successfully.' });
//     });
//   });
//   app.get('/getEnquiry/:id',(req,res)=>{
//       const id=req.params.id;
//       const sql="SELECT*FROM enquiry WHERE EnquiryId=?";
//       db.query(sql,[id],(err,result)=>{
//         if(err) return res.json({Error:"Get enquiry error in sql"});
//         return res.json({Status:"Success",Result:result})
//       })
//   })
//   app.get('/getEnquiry',(req,res)=>{
//      const sql="SELECT*FROM enquiry";
//      db.query(sql,(err,result)=>{
//         if(err) return res.json({Error:"Get enquiry error in sql"});
//         return res.json({Status:"Success",Result:result})
//      })
//   }) 
//   app.put('/updateEnquiry/:id',(req,res)=>{
//     const id=req.params.id;
//     const {FirstName,LastName,contact,email,age,gender}=req.body;
//     const sql="UPDATE enquiry SET FirstName=?,LastName=?,contact=?,email=?,age=?,gender=? WHERE EnquiryId=?";
//     const params =[FirstName,LastName,contact,email,age,gender,id];
//     db.query(sql,params,(err,result)=>{
//         if(err){
//             console.log(err);
//             return res.json({Error:"Update enquiry error in Sql"});
//         }
//         return res.json({Status:"Success",Result:result});
//     });
//   });
//   app.delete('/deleteEnquiry/:id',(req,res)=>{
//     const id=req.params.id;
//     const sql='Delete FROM enquiry WHERE EnquiryId=?';
//     db.query(sql,[id],(err)=>{
//         if(err) return res.json({Error:"Update enquiry error in sql"});
//         return res.json({Status:"Success"})
//     })
//   })

app.post('/addEnquiry', (req, res) => {
  const { EnquiryId, FirstName, LastName, contact, email, age, gender,status = 'Pending' } = req.body;
  const assigned_to = 'default_staff'; // Implement logic to automatically assign staff
  const sql = 'INSERT INTO enquiry (EnquiryId, FirstName, LastName, contact, email, age, gender, Status, assigned_to) VALUES (?,?,?,?,?,?,?,?,?)';
  const values = [EnquiryId, FirstName, LastName, contact, email, age, gender,status, assigned_to];

  db.query(sql, values, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'An error occurred while creating the enquiry.' });
    }
    return res.status(200).json({ message: 'Enquiry added successfully.' });
  });
});

app.get('/getEnquiry/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM enquiry WHERE EnquiryId = ?";
  db.query(sql, [id], (err, result) => {
      if (err) return res.json({ Error: "Get enquiry error in SQL" });
      return res.json({ Status: "Success", Result: result });
  });
});

// app.get('/getEnquiry', (req, res) => {
//   const { search } = req.query;
//   let sql = "SELECT * FROM enquiry";
//   let params = [];

//     if (search) {
//         sql += " WHERE FirstName LIKE ? OR LastName LIKE ? OR contact LIKE ? OR email LIKE ?";
//         const searchQuery = `%${search}%`;
//         params = [searchQuery, searchQuery, searchQuery, searchQuery];
//     }
//   db.query(sql, (err, result) => {
//       if (err) return res.json({ Error: "Get enquiry error in SQL" });
//       return res.json({ Status: "Success", Result: result });
//   });
// });

app.get('/getEnquiry', (req, res) => {
  const { page = 1, limit = 10, search, status } = req.query;
  let sql = 'SELECT * FROM enquiry WHERE 1=1';

  if (search) {
      sql += ` AND (FirstName LIKE '%${search}%' OR LastName LIKE '%${search}%' OR Email LIKE '%${search}%')`;
  }

  if (status) {
      sql += ` AND Status = '${status}'`;
  }

  sql += ` LIMIT ${(page - 1) * limit}, ${limit}`;

  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error fetching enquiries:', err);
          return res.status(500).json({ error: 'An error occurred while fetching enquiries.' });
      }
      return res.status(200).json({ status: 'Success', result });
  });
});


app.put('/updateEnquiry/:id', (req, res) => {
  const id = req.params.id;
  const { FirstName, LastName, contact, email, age, gender,status, follow_up_date} = req.body;
  const sql = "UPDATE enquiry SET FirstName = ?, LastName = ?, contact = ?, email = ?, age = ?, gender = ?, status = ?,follow_up_date = ? WHERE EnquiryId = ?";
  const params = [FirstName, LastName, contact, email, age, gender,status, follow_up_date, id];
  db.query(sql, params, (err, result) => {
      if (err) {
          console.log(err);
          return res.json({ Error: "Update enquiry error in SQL" });
      }
      return res.json({ Status: "Success", Result: result });
  });
});

// app.put('/updateEnquiryStatus/:id', (req, res) => {
//   const id = req.params.id;
//   const { status } = req.body;
//   const sql = "UPDATE enquiry SET Status = ? WHERE EnquiryId = ?";
//   db.query(sql, [status, id], (err, result) => {
//       if (err) {
//           console.error('Error updating enquiry status:', err);
//           return res.status(500).json({ error: 'An error occurred while updating enquiry status.' });
//       }
//       return res.status(200).json({ status: 'Success', message: 'Enquiry status updated successfully.' });
//   });
// });

app.put('/updateEnquiryStatus/:id', (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const sql = "UPDATE enquiry SET status = ? WHERE EnquiryId = ?";
  db.query(sql, [status, id], (err, result) => {
      if (err) {
          console.error('Error updating enquiry status:', err);
          return res.status(500).json({ error: 'An error occurred while updating enquiry status.' });
      }
      if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Enquiry not found.' });
      }
      return res.status(200).json({ status: 'Success', message: 'Enquiry status updated successfully.' });
  });
});


app.delete('/deleteEnquiry/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM enquiry WHERE EnquiryId = ?';
  db.query(sql, [id], (err) => {
      if (err) return res.json({ Error: "Delete enquiry error in SQL" });
      return res.json({ Status: "Success" });
  });
});


  //CRUD Operation for Plan table
//   app.post('/addPlan',(req,res)=>{
//     const {PlanId,PlanName,amount,duration}=req.body;
//     const sql='INSERT INTO plan (PlanId,PlanName,amount,duration) VALUES (?,?,?,?)';
//     const values=[PlanId,PlanName,amount,duration];
//     db.query(sql,values,(err)=>{
//         if(err){
//             console.log(err);
//             return res.status(500).json({error:'An error occured while creating the enquiry'});
//         }
//         return res.status(200).json({messafe:'Plan added successfully'});
//     });
//   });
//   app.get('/getPlan/:id',(req,res)=>{
//     const id=req.params.id;
//     const sql="SELECT *FROM plan where PlanId =?";
//     db.query(sql,[id],(err,result)=>{
//       if(err) return res.json({Error:"Get plan error in sql"});
//       return res.json({Status: "Success",Result:result})
//     })
//   })
//   app.put('/updatePlan/:id', (req, res) => {
//     const id = req.params.id;
//     const { PlanName, amount, duration } = req.body;
//     const sql = "UPDATE plan SET PlanName = ?, amount = ?, duration = ? WHERE PlanId = ?";
//     const params = [PlanName, amount, duration, id];
//     db.query(sql, params, (err, result) => {
//       if (err) {
//         console.log(err);
//         return res.json({ Error: "Update plan error in SQL" });
//       }
//       return res.json({ Status: "Success" });
//     });
//   });

// app.get('/getPlan', (req, res) => {
//     const sql = "Select * FROM Plan";
//     db.query(sql, (err, result) => {
//         if(err) return res.json({Error: "Get enquiry error in sql"});
//         return res.json({Status: "Success", Result: result})
//     })
// })

// app.delete('/deletePlan/:id', (req, res) => {
//     const id = req.params.id;
//     const sql = "Delete FROM plan WHERE PlanId = ?";
//     db.query(sql, [id], (err, result) => {
//         if(err) return res.json({Error: "Update plan error in sql"});
//         return res.json({Status: "Success"})
//     })
// })
app.post('/addPlan', (req, res) => {
  const { PlanName, amount, duration, AccessLevel, SpecialPromotions } = req.body;

  const sql = 'INSERT INTO plan (PlanName, amount, duration, AccessLevel, SpecialPromotions) VALUES (?, ?, ?, ?, ?)';
  const values = [PlanName, amount, duration, AccessLevel, SpecialPromotions];

  db.query(sql, values, (err) => {
      if (err) {
          console.error('Error adding plan:', err);
          return res.status(500).json({ error: 'An error occurred while adding plan.' });
      }
      return res.status(200).json({ message: 'Plan added successfully.' });
  });
});

// Endpoint to update plan
app.put('/updatePlan/:id', (req, res) => {
  const id = req.params.id;
  const { PlanName, amount, duration, AccessLevel, SpecialPromotions } = req.body;

  const sql = 'UPDATE plan SET PlanName = ?, amount = ?, duration = ?, AccessLevel = ?, SpecialPromotions = ? WHERE PlanId = ?';
  const values = [PlanName, amount, duration, AccessLevel, SpecialPromotions, id];

  db.query(sql, values, (err) => {
      if (err) {
          console.error('Error updating plan:', err);
          return res.status(500).json({ error: 'An error occurred while updating plan.' });
      }
      return res.status(200).json({ message: 'Plan updated successfully.' });
  });
});

// Endpoint to delete plan
app.delete('/deletePlan/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'DELETE FROM plan WHERE PlanId = ?';
  db.query(sql, [id], (err) => {
      if (err) {
          console.error('Error deleting plan:', err);
          return res.status(500).json({ error: 'An error occurred while deleting plan.' });
      }
      return res.status(200).json({ message: 'Plan deleted successfully.' });
  });
});

// Endpoint to get plan by ID
app.get('/getPlan/:id', (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM plan WHERE PlanId = ?';
  db.query(sql, [id], (err, result) => {
      if (err) {
          console.error('Error getting plan:', err);
          return res.status(500).json({ error: 'An error occurred while getting plan.' });
      }
      return res.status(200).json({ plan: result[0] });
  });
});

// Endpoint to get all plans
app.get('/getPlan', (req, res) => {
  const sql = 'SELECT * FROM plan';

  db.query(sql, (err, result) => {
      if (err) {
          console.error('Error getting plan list:', err);
          return res.status(500).json({ error: 'An error occurred while getting plan list.' });
      }
      return res.status(200).json({ planList: result });
  });
});



// Endpoint to track plan performance

app.post('/addEquipment', (req, res) => {
  const { EquipmentId, EquipmentName, price, unit, date, description } = req.body;
  const sql = 'INSERT INTO equipment (EquipmentId, EquipmentName, price, unit, date, description) VALUES (?,?,?,?,?,?)';
  const values = [EquipmentId, EquipmentName, price, unit, date, description];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: 'An error occurred while creating the equipment.' });
      }
      return res.status(200).json({ message: 'Equipment added successfully.' });
  });
});

app.put('/updateBookingStatus/:bookingId', (req, res) => {
  const bookingId = req.params.bookingId;
  const { status } = req.body;

  const updateBookingStatusSql = "UPDATE equipment_bookings SET status = ? WHERE BookingId = ?";
  db.query(updateBookingStatusSql, [status, bookingId], (err, result) => {
    if (err) {
      console.error('Error updating booking status:', err);
      return res.json({ Error: "Update booking status error in SQL", Details: err.message });
    }
    if (result.affectedRows === 0) {
      return res.json({ Error: "No booking found with the provided ID" });
    }

    // If status is "completed", increase the equipment unit
    if (status === "completed") {
      const getEquipmentIdSql = "SELECT EquipmentId FROM equipment_bookings WHERE BookingId = ?";
      db.query(getEquipmentIdSql, [bookingId], (err, result) => {
        if (err) {
          console.error('Error fetching equipment ID:', err);
          return res.json({ Error: "Fetch equipment ID error in SQL", Details: err.message });
        }
        const equipmentId = result[0].EquipmentId;
        const increaseEquipmentUnitSql = "UPDATE equipment SET unit = unit + 1 WHERE EquipmentId = ?";
        db.query(increaseEquipmentUnitSql, [equipmentId], (err, result) => {
          if (err) {
            console.error('Error increasing equipment unit:', err);
            return res.json({ Error: "Increase equipment unit error in SQL", Details: err.message });
          }
          return res.json({ Status: "Success" });
        });
      });
    } else {
      return res.json({ Status: "Success" });
    }
  });
});


app.get('/getEquipment/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM equipment WHERE EquipmentId = ?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.json({ Error: "Get equipment error in SQL" });
    
    if (result.length > 0) {
      const equipment = result[0];
      const sql2 = 'SELECT COUNT(*) AS bookedUnits FROM equipment_bookings WHERE EquipmentId = ? AND Status = "Booked"';
      db.query(sql2, [id], (err, result2) => {
        if (err) return res.json({ Error: "Get booked units error in SQL" });

        const bookedUnits = result2[0].bookedUnits || 0;
        const availableUnits = equipment.unit - bookedUnits;
        return res.json({ Status: "Success", Equipment: equipment, AvailableUnits: availableUnits });
      });
    } else {
      return res.json({ Status: "Success", Equipment: null, AvailableUnits: 0 });
    }
  });
});



app.put('/updateEquipment/:id', (req, res) => {
  const id = req.params.id;
  const { EquipmentName, price, unit, date, description } = req.body;
  const sql = "UPDATE equipment SET EquipmentName = ?, price = ?, unit = ?, date = ?, description = ? WHERE EquipmentId = ?";
  const params = [EquipmentName, price, unit, date, description, id];
  db.query(sql, params, (err, result) => {
      if (err) {
          console.log(err);
          return res.json({ Error: "Update equipment error in SQL" });
      }
      return res.json({ Status: "Success" });
  });
});

app.put('/updateEquipmentUnits/:id', (req, res) => {
  const id = req.params.id;
  const { units } = req.body;
  const sql = "UPDATE equipment SET unit = ? WHERE EquipmentId = ?";
  db.query(sql, [units, id], (err, result) => {
    if (err) {
      console.error('Error updating equipment units:', err);
      return res.status(500).json({ Error: "Error updating equipment units" });
    }

    // Recalculate availability status after updating units
    updateEquipmentAvailability(id, res);
  });
});



app.get('/getEquipment', (req, res) => {
  const sql = "SELECT * FROM equipment";
  db.query(sql, async (err, result) => {
    if (err) return res.json({ Error: "Get equipment error in SQL" });

    const equipmentRows = result;
    const equipmentWithAvailability = await Promise.all(equipmentRows.map(eq => new Promise((resolve, reject) => {
      const sql2 = 'SELECT COUNT(*) AS bookedUnits FROM equipment_bookings WHERE EquipmentId = ? AND Status = "Booked"';
      db.query(sql2, [eq.EquipmentId], (err, result2) => {
        if (err) {
          reject(err);
          return;
        }
        
        const bookedUnits = result2[0].bookedUnits || 0;
        const availableUnits = eq.unit - bookedUnits;
        resolve({ ...eq, availableUnits });
      });
    })));

    return res.json({ Status: "Success", Equipment: equipmentWithAvailability });
  });
});


app.delete('/deleteEquipment/:id', (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM equipment WHERE EquipmentId = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      return res.json({ Error: "Delete equipment error in SQL", Details: err.message });
    }
    if (result.affectedRows === 0) {
      return res.json({ Error: "No equipment found with the provided ID" });
    }
    return res.json({ Status: "Success" });
  });
});


app.post('/api/equipment/book', (req, res) => {
  const { equipmentId, memberId, bookingDate, startTime, endTime } = req.body;
  const sql = 'INSERT INTO equipment_bookings (EquipmentId, MemberId, BookingDate, StartTime, EndTime, Status) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [equipmentId, memberId, bookingDate, startTime, endTime, 'Booked'];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error booking equipment:', err);
      return res.status(500).json({ message: 'Error booking equipment' });
    }

    // Update equipment availability status
    updateEquipmentAvailability(equipmentId, res);
  });
});

// Route to check availability of equipment and update status
app.get('/api/equipment/checkAvailability', (req, res) => {
  updateAllEquipmentAvailability(res);
});


function updateEquipmentAvailability(equipmentId, res = null) {
  const sql = 'SELECT COUNT(*) AS bookedUnits FROM equipment_bookings WHERE EquipmentId = ? AND Status = "Booked"';
  db.query(sql, [equipmentId], (err, result) => {
    if (err) {
      console.error('Error fetching equipment bookings:', err);
      if (res) return res.status(500).json({ Error: "Error fetching equipment bookings" });
      return;
    }

    const bookedUnits = result[0].bookedUnits || 0;
    const sql2 = 'SELECT unit FROM equipment WHERE EquipmentId = ?';
    db.query(sql2, [equipmentId], (err, result2) => {
      if (err) {
        console.error('Error fetching equipment:', err);
        if (res) return res.status(500).json({ Error: "Error fetching equipment" });
        return;
      }

      const totalUnits = result2[0].unit;
      const availableUnits = totalUnits - bookedUnits;
      const availabilityStatus = availableUnits <= 0 ? 'Unavailable' : 'Available';

      db.query('UPDATE equipment SET AvailabilityStatus = ? WHERE EquipmentId = ?', [availabilityStatus, equipmentId], (err, result) => {
        if (err) {
          console.error('Error updating equipment availability:', err);
          if (res) return res.status(500).json({ Error: "Error updating equipment availability" });
          return;
        }
       
        if (res) res.status(200).json({ Status: "Success", AvailableUnits: availableUnits });
      });
    });
  });
}

// Function to update all equipment availability
function updateAllEquipmentAvailability(res) {
  const sql = "SELECT * FROM equipment";
  db.query(sql, async (err, result) => {
    if (err) {
      console.error('Error fetching equipment:', err);
      return res.status(500).json({ Error: "Get equipment error in SQL" });
    }

    const equipmentRows = result;
    const updatePromises = equipmentRows.map(eq => new Promise((resolve, reject) => {
      updateEquipmentAvailability(eq.EquipmentId, { status: () => {}, json: () => {}, end: resolve });
    }));

    Promise.all(updatePromises)
      .then(() => {
        res.status(200).json({ Status: "Success" });
      })
      .catch(error => {
        console.error('Error updating equipment availability:', error);
        res.status(500).json({ Error: "Error updating equipment availability" });
      });
  });
}
cron.schedule('* * * * *', () => {
  const sql = "SELECT * FROM equipment_bookings WHERE Status = 'Booked' AND EndTime < NOW()";
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching expired bookings:', err);
      return;
    }

    result.forEach(booking => {
      const equipmentId = booking.EquipmentId;
      db.query('UPDATE equipment_bookings SET Status = ? WHERE BookingId = ?', ['Completed', booking.BookingId], (err, result) => {
        if (err) {
          console.error('Error updating booking status:', err);
          return;
        }
        updateEquipmentAvailability(equipmentId);
      });
    });
  });
});

app.post('/addMember', (req, res) => {
  const { MemberId, FirstName, LastName, email, PlanId, edate, jdate, gender, age, contact, inamount } = req.body;

  const sql = 'INSERT INTO member (MemberId, FirstName, LastName, email, PlanId, edate, jdate, gender, age, contact, inamount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [MemberId, FirstName, LastName, email, PlanId, edate, jdate, gender, age, contact, inamount];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: 'An error occurred while creating the member.' });
      }

      return res.status(200).json({ message: 'Member added successfully.' });
  });
});

app.get('/getMember/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM Member WHERE MemberId = ?';
  db.query(sql, [id], (err, result) => {
      if (err) return res.json({ Error: 'Get member error in sql' });
      return res.json({ Status: 'Success', Result: result });
  });
});

app.put('/updateMember/:id', (req, res) => {
  const id = req.params.id;
  const { FirstName, LastName, PlanId, contact, email, age, gender, jdate, edate, inamount } = req.body;
  const sql = 'UPDATE member SET FirstName = ?, LastName = ?, PlanId = ?, contact = ?, email = ?, age = ?, gender = ?, jdate = ?, edate = ?, inamount = ? WHERE MemberId = ?';
  const params = [FirstName, LastName, PlanId, contact, email, age, gender, jdate, edate, inamount, id];
  db.query(sql, params, (err, result) => {
      if (err) {
          console.log(err);
          return res.json({ Error: 'Update member error in SQL' });
      }
      return res.json({ Status: 'Success' });
  });
});

app.get('/getMember', (req, res) => {
  const sql = 'SELECT * FROM Member';
  db.query(sql, (err, result) => {
      if (err) return res.json({ Error: 'Get member error in sql' });
      return res.json({ Status: 'Success', Result: result });
  });
});

app.delete('/deleteMember/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM member WHERE MemberId = ?';
  db.query(sql, [id], (err, result) => {
      if (err) return res.json({ Error: 'Update member error in sql' });
      return res.json({ Status: 'Success' });
  });
});

// Attendance Endpoints
app.post('/addAttendance', (req, res) => {
  const { MemberId, Date, Status } = req.body;

  const sql = 'INSERT INTO attendance (MemberId, Date, Status) VALUES (?, ?, ?)';
  const values = [MemberId, Date, Status];
  db.query(sql, values, (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: 'An error occurred while adding the attendance record.' });
      }

      return res.status(200).json({ message: 'Attendance record added successfully.' });
  });
});

app.get('/getAttendance/:MemberId', (req, res) => {
  const memberId = req.params.MemberId;

  const sql = 'SELECT * FROM attendance WHERE MemberId = ?';
  db.query(sql, [memberId], (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: 'An error occurred while fetching attendance records.' });
      }

      return res.status(200).json({ Status: 'Success', Result: result });
  });
});

// app.get('/getAttendance/:MemberId', async (req, res) => {
//   try {
//       const { MemberId } = req.params;
//       const [results] = await db.query('SELECT * FROM attendance WHERE MemberId = ?', [MemberId]);
      
//       if (!results.length) {
//           return res.status(404).json({ message: 'No attendance records found' });
//       }

//       res.json({ attendanceRecords: results });
//   } catch (error) {
//       console.error('Error fetching attendance records:', error);
//       res.status(500).json({ error: 'Error fetching attendance records' });
//   }
// });


app.get('/getAllAttendance', (req, res) => {
  const sql = 'SELECT * FROM attendance';
  db.query(sql, (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: 'An error occurred while fetching attendance records.' });
      }

      return res.status(200).json({ Status: 'Success', Result: result });
  });
});

app.post('/markAttendance', (req, res) => {
  const { memberId, date, status } = req.body;
  const sql = 'INSERT INTO attendance (MemberId, Date, Status) VALUES (?, ?, ?)';
  db.query(sql, [memberId, date, status], (err, result) => {
      if (err) {
          console.log(err);
          return res.status(500).json({ error: 'An error occurred while marking attendance.' });
      }
      return res.status(200).json({ message: 'Attendance marked successfully.' });
  });
});

// End Member Details ...

app.get('/enquiryCount', (req, res) => {
  const sql = "SELECT COUNT(EnquiryId) AS count FROM enquiry";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Error: 'Error in running query' });
    return res.json(result[0]); // Send the first (and only) item in the result array
  });
});

app.get('/equipmentCount', (req, res) => {
  const sql = "SELECT COUNT(EquipmentId) AS count FROM equipment";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Error: 'Error in running query' });
    return res.json(result[0]); // Send the first (and only) item in the result array
  });
});

app.get('/memberCount', (req, res) => {
  const sql = "SELECT COUNT(MemberId) AS count FROM member";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Error: 'Error in running query' });
    return res.json(result[0]); // Send the first (and only) item in the result array
  });
});

app.get('/planCount', (req, res) => {
  const sql = "SELECT COUNT(PlanId) AS count FROM plan";
  db.query(sql, (err, result) => {
    if (err) return res.json({ Error: 'Error in running query' });
    return res.json(result[0]); // Send the first (and only) item in the result array
  });
});
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token) {
      return res.json({Error: "You are no Authenticate"});
  } else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
          if(err) return res.json({Error: "Token wrong"});
          req.role = decoded.role;
          req.id = decoded.id;
          next();
      })
  }
}

app.get('/dashboard', verifyUser, (req, res) => {
const sql = "SELECT * FROM Users";
db.query(sql, (err, result) => {
  if (err) {
    return res.status(500).json({ Error: "Error retrieving users from the database" });
  }
  const { role, id } = req;
  return res.json({ Status: "Success", Result: result, role, id });
});
});
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], (err, result) => {
      if (err) {
          console.log(err);
          res.send({ Status: 'Error', Error: 'Error in running query' });
      } else if (result.length === 0) {
          res.send({ Status: 'Error', Error: 'Invalid login credentials' });
      } else {
          const id = result[0].id;
          const token = jwt.sign({role: "admin"}, "jwt-secret-key", {expiresIn: '1d'});
          res.cookie('token', token);
          res.send({ Status: 'Success', Data: result });
      }
  });
});
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'bisenmanshi94@gmail.com',
    pass: 'izyd daql zuat dikl'
  }
});

// Endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
  const { FirstName,LastName, email, mobile_no, message } = req.body;

  const query = 'INSERT INTO contacts (FirstName,LastName, email, mobile_no, message) VALUES (?,?, ?, ?, ?)';
  db.query(query, [FirstName,LastName, email, mobile_no, message], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    let mailOptions = {
      from: `${email}`,
      to: 'bisenmanshi94@gmail.com',
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:\n\nFirstName: ${FirstName}\nLastName: ${LastName}\nEmail: ${email}\nMobile: ${mobile_no}\nMessage: ${message}`,
      html: `<p>You have a new contact form submission:</p><p><strong>FirstName:</strong> ${FirstName}</p><p><strong>LastName:</strong> ${LastName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mobile:</strong> ${mobile_no}</p><p><strong>Message:</strong> ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error);
      }
      res.status(200).send({ message: 'Contact form data saved and email sent successfully!' });
    });
  });
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  return res.json({Status: "Success"});
})
app.listen(8081,()=>{
    console.log("listening")
})
