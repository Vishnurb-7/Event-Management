
const signup = async (req, res) => {
    console.log(req.body);
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = new User({
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

const login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(404).json("user not found");
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      !validPassword && res.status(400).json("invalid credential");

      res.status(200).json(user);
    } catch (err) {
      console.log(err);
    }
  };
exports.login = login;