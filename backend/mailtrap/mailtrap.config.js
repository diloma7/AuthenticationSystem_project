import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN =
  process.env.MAILTRAP_API_KEY || "95158f24de8f6d195b08dae4992cb2a5";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "Mailtrap@demomailtrap.co",
  name: "Mailtrap Test",
};

// const recipients = [
//   {
//     email: "dilomaouattara7@gmail.com",
//   },
// ];

// client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
