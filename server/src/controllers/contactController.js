import Contact from "../models/Contact.js";

export async function sendContact(req, res, next) {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "name, email and message are required" });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message received!", id: contact._id });
  } catch (err) {
    next(err);
  }
}
