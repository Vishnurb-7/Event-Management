const users = require("../model/userModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async (req, res) => {
    console.log(req.body);
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = new users({
        email: req.body.email,
        mobile: req.body.mobile,
        password: hashedPassword,
      });
      await user.save();
      res.json({ status: true });
    } catch (error) {
      console.log(error);
    }
  };
exports.signup = signup;

// const login = async (req, res) => {
//     try { 
//       const user = await user.findOne({ email: req.body.email });
//       !user && res.status(404).json("user not found");
//       const validPassword = await bcrypt.compare(
//         req.body.password,
//         user.password
//       );
//       !validPassword && res.status(400).json("invalid credential");

//       res.status(200).json(user);
//     } catch (err) {
//       console.log(err);
//     }
//   };

// exports.login = login;

const mobileExist = async(req,res)=>{
  users.findOne({ mobile: req.body.mobile }).then(async (response) => {
    console.log('at backend');
            if (response) {
                console.log('response')
                return res.sendStatus(409); //user already exist
            } else {
                return res.sendStatus(200);
            }
        })
}

exports.mobileExist = mobileExist;



   const login= async (req, res) => {
   
        const { email, password } = req.body
        if (!email || !password) return res.status(400).json({ 'message': 'email and password required.' });
        else {
            
            const foundUser = await users.findOne({ email })
            if (!foundUser) return res.sendStatus(401); //unauthorized
            else{

                const match = await bcrypt.compare(password, foundUser.password)
                if (match) { 
                    const accessToken = jwt.sign({ id: foundUser._id, }, process.env.JWT_SECRET, { expiresIn: '7d' });
                    res.status(200).json({ accessToken,name:foundUser.name , email:foundUser.mobile });
                    // const refreshToken = jwt.sign({
                    //     id: foundUser._id,
                    // }, process.env.JWT_SECRET, 
                    //     { expiresIn: '7d' } 
                    // )
                    //saving refreshToken with current user
                    // foundUser.refreshToken = refreshToken;
                    // console.log('refreshToken'+foundUser);
                    // const result = await foundUser.save();
                    // res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: "None", maxAge: 24 * 60 * 60 * 1000 })
                } else {
                    res.sendStatus(401)
                }
            }
        }
    }

    exports.login = login;