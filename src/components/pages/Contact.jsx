import { useState } from "react";
import Heading from "../Heading";
import Input from "../Input";

const Contact = () => {
  const [values, setValues] = useState({
    userName: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setValues((prev) => {
      return { ...prev, [name]: e.target.value ? true : false };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Done!!!");
  };

  return (
    <section className="py-6">
      <div className="container">
        <Heading title="contact section" bgWhite />

        <form
          className="w-full max-w-2xl m-auto flex flex-col gap-12"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="userName"
            placeholder="Username"
            label="Username"
            value={values.userName}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            label="Email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            label="Password"
            value={values.password}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            label="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full h-14 flex items-center justify-center bg-greenColor text-white capitalize text-base font-bold rounded-md"
          >
            send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
