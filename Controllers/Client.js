const client = require("../Models/Client");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    try {
      const { email, password} = req.body;
      const existingClient = await client.findOne({ email });
      if (existingClient) {
        return res.status(400).send({ msg: "Email already exists!" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newClient = new client(req.body);
      newClient.password = hashedPassword;
      await newClient.save();
      const token = jwt.sign({ _id: newClient._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
      res.status(200).send({ msg: "User registered successfully!", newClient, token });
    } catch (error) {
      res.status(500).send({ msg: "Error on register", error });
    }
  };

  exports.signIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const foundClient = await client.find({ email });
      if (!foundClient[0]) {
        return res.status(400).send({ msg: "Email or password invalid!" });
      } else {
        const checkedPassword = await bcrypt.compare(password, foundClient[0].password);
        if (!checkedPassword) {
          return res.status(400).send({ msg: "Email or password invalid!" });
        } else {
          const token = jwt.sign({ _id: foundClient[0]._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
          return res.status(200).send({ msg: "signIn successfully", foundClient, token });
        }
      }
    } catch (error) {
      res.status(500).send({ msg: "Error on signIn", error});
    }
  };

  exports.deleteClient = async (req, res) => {
    try {
      const { _id } = req.params;
      await client.deleteOne({ _id });
      res.status(200).send({ msg: "User deleted successfully!" });
    } catch (error) {
      res.status(500).send({ msg: "Error deleting user", error });
    }
  };
  
  exports.resetPassword = async (req, res) => {
    try {
      const { _id } = req.params;
      const { newPassword } = req.body;
      if (!newPassword) {
        return res.status(400).send({ msg: "New password is required!" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      await client.updateOne({ _id }, { $set: { password: hashedPassword }});
      res.status(200).send({ msg: "Password updated successfully!" });
    } catch (error) {
      res.status(500).send({ msg: "Error on updating password", error });
    }
  };

  exports.resetUserName = async (req, res) => {
    try {
      const { _id } = req.params;
      const { userName } = req.body;
      if (!userName) {
        return res.status(400).send({ msg: "New userName is required!" });
      }
      await client.updateOne({ _id }, { $set: { userName: userName }});
      res.status(200).send({ msg: "userName updated successfully!" });
    } catch (error) {
      res.status(500).send({ msg: "Error on updating userName", error });
    }
  };