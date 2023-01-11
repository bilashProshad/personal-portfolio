import "./Contact.scss";
import Form from "../Form/Form";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import Button from "../Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useState } from "react";
import { useAlert } from "react-alert";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const alert = useAlert();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, phone, message }),
    });

    const data = await response.json();

    if (data.success) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");

      alert.show("Successfully sent your message.", { type: "success" });
    } else {
      alert.show(data.message, { type: "error" });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="top">
          <SectionHeader
            title="Contact"
            description="If you have a project in mind or just want to say hello:"
          />
        </div>

        <div className="bottom">
          <Form className="form" onSubmit={submitHandler}>
            <div>
              <Input
                type="text"
                placeholder="First Name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="Last Name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="number"
                placeholder="Phone No."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <TextArea
              placeholder="Message"
              className="textarea"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit" className="submit-btn">
              Send
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
