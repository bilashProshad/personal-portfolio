import "./Contact.scss";
import Form from "../Form/Form";
import Input from "../Inputs/Input";
import TextArea from "../Inputs/TextArea";
import ButtonFilled from "../ButtonFilled/ButtonFilled";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useAlert } from "react-alert";
import { useInputValidate } from "../../hooks/useInputValidate";

const Contact = () => {
  const [
    firstName,
    setFirstName,
    firstNameError,
    setFirstNameError,
    isFirstNameTouched,
  ] = useInputValidate();
  const [
    lastName,
    setLastName,
    lastNameError,
    setLastNameError,
    isLastNameTouched,
  ] = useInputValidate();
  const [email, setEmail, emailError, setEmailError, isEmailTouched] =
    useInputValidate();
  const [phone, setPhone, phoneError, setPhoneError, isPhoneTouched] =
    useInputValidate();
  const [message, setMessage, messageError, setMessageError, isMessageTouched] =
    useInputValidate();

  const alert = useAlert();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (firstNameError) {
      setFirstNameError(true);
      return;
    }
    if (lastNameError) {
      setLastNameError(true);
      return;
    }
    if (emailError) {
      setEmailError(true);
      return;
    }
    if (phoneError) {
      setPhoneError(true);
      return;
    }
    if (messageError) {
      setMessageError(true);
      return;
    }

    const response = await fetch(`/contact`, {
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
              <span>
                <Input
                  type="text"
                  placeholder="First Name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={isFirstNameTouched}
                  className={firstNameError ? "error" : ""}
                />
                {firstNameError && (
                  <span className="error-text">
                    *** Please enter your first name
                  </span>
                )}
              </span>
              <span>
                <Input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={isLastNameTouched}
                  className={lastNameError ? "error" : ""}
                />
                {lastNameError && (
                  <span className="error-text">
                    *** Please enter your last name
                  </span>
                )}
              </span>
              <span>
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={isEmailTouched}
                  className={emailError ? "error" : ""}
                />
                {emailError && (
                  <span className="error-text">
                    *** Please enter your email address
                  </span>
                )}
              </span>
              <span>
                <Input
                  type="number"
                  placeholder="Phone No."
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={isPhoneTouched}
                  className={phoneError ? "error" : ""}
                />
                {phoneError && (
                  <span className="error-text">
                    *** Please enter your phone number
                  </span>
                )}
              </span>
            </div>
            <span>
              <TextArea
                placeholder="Message"
                className={`textarea ${messageError ? "error" : ""}`}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onBlur={isMessageTouched}
              />
              {messageError && (
                <span className="error-text">
                  *** Please enter your message
                </span>
              )}
            </span>
            <ButtonFilled type="submit" className="button-filled">
              Send
            </ButtonFilled>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
