
import Msg from "../model/messageSchema.js";

// sending message------------------------

export const contactUs= async (req, res) => {
  const { name, email, phone, message, date } = req.body;

  try {
    if (!name || !email || !phone || !message) {
      console.log("fill all data");
      return res.status(422).json({ error: "Please fill all data" });
    }
    const usermsg = await new Msg(req.body);
    usermsg.save();
    console.log("send Successfully");
    res.status(201).json({ message: "Message send successfully" });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
};
