import Button from "./Button";
import styles from "../css/ServiceAndQuey.module.css";
import { useState, useRef } from "react";

const SevicesAndQery = () => {
  const [query, setQuery] = useState({
    nameis: localStorage.getItem("name"),
    emailis: localStorage.getItem("email"),
    textis: localStorage.getItem("text"),
  });
  setItemFromLS();
  getItemFromLS();

  function getItemFromLS() {
    localStorage.getItem("name");
    localStorage.getItem("email");
    localStorage.getItem("text");
  }

  function setItemFromLS() {
    localStorage.setItem("name", query.nameis);
    localStorage.setItem("email", query.emailis);
    localStorage.setItem("text", query.textis);
  }

  let nameRef = useRef();
  let emailRef = useRef();
  let textRef = useRef();

  const handleSubmit = () => {
    let inputNameValue = nameRef.current.value;
    let inputEmailValue = emailRef.current.value;
    let inputTextValue = textRef.current.value;

    let details = {
      nameis: inputNameValue,
      emailis: inputEmailValue,
      textis: inputTextValue,
    };
    setQuery(details);
    getItemFromLS();
  };

  return (
    <>
      <section>
        <div className={styles.ServiceANdQuey}>
          <div className={styles.top_buttons}>
            <Button text={"VIA SUPPORT CHAT"} img={"ic_outline-message.png"} />
            <Button text2={"VIA CALL"} img3={"Vector.png"} />
          </div>
          <div className={styles.third_button}>
            <Button text3={"VIA EMAIL"} img={"ic_outline-message.png"} />
          </div>

          <div className={styles.inputs}>
            <label htmlFor="name">Name</label>
            <input
              required
              ref={nameRef}
              placeholder="Enter Name"
              type="text"
            ></input>

            <label htmlFor="text">E-Mail</label>
            <input
              required
              ref={emailRef}
              placeholder="Enter E-mail"
              type="email"
            ></input>

            <label htmlFor="text">Text</label>
            <input
              required
              ref={textRef}
              placeholder="Enter Query"
              type="text"
            ></input>
          </div>

          <div className={styles.submit_btn}>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className={styles.right_image}>
          <img src="Service.svg" alt="" />
        </div>
      </section>
      <p>Name is: {query.nameis}</p>
      <p>Email is: {query.emailis}</p>
      <p>Text is: {query.textis}</p>
    </>
  );
};

export default SevicesAndQery;
