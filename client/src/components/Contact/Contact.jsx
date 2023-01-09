import "./Contact.scss";
import Form from "../Form/Form";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="top">
          <h2>Contact</h2>
          <p>If you have a project in mind or just want to say hello: </p>
        </div>

        <div className="bottom">
          <Form className="form">
            <div>
              <Input type="text" placeholder="First Name" required />
              <Input type="text" placeholder="Last Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="number" placeholder="Phone No." required />
            </div>
            <TextArea placeholder="Message" className="textarea" required />
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
