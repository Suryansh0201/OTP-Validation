const dotenv = require('dotenv');
dotenv.config();
const messagebird = require('messagebird')(process.env.KEY);

class UserController{

    //Send OTP to user
    static uservalidation = async (req,res) =>{
        const {mobilenumber} = req.body;
        const newMobileNumber = "+91"+mobilenumber;
        var params = {
            template: 'Your validation OTP is %token',
            timeout: 60
          };
          
          messagebird.verify.create(newMobileNumber, params, (err, response)=> {
            if (err) {
              console.log("OTP Send Error: ",err);
              res.status(200).send({"status": "failed", "message": 'Unable to Send OTP'})
            }else{
            console.log("OTP Send Response:", response);
            res.status(200).send({"status": "success", "message": "OTP Send successfully", "id": response.id});
            }
          });
    };
    
    //VERIFY OTP

    static verifyOTP = async(req,res)=>{
       const{id, otpcode} = req.body

       messagebird.verify.verify(id, otpcode, (err, response)=> {
        if (err) {
          return console.log("OTP verification Error", err);
          res.status(200).send({"status": "failed", "message": 'Invalid OTP'})
        }
        console.log("OTP Verification Response:", response);
        res.status(200).send({"status": "success", "message": "validation Success"});
      });
    }
}
module.exports = UserController