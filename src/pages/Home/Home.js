import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Form,
  TextBox,
  Textarea,
  Select,
  Checkbox,
} from "../../components/Form";

function Home() {
  const { register, errors, handleSubmit, setValue } = useForm();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState({
    name: "Tom",
    surname: "",
    age: 35,
  });

  useEffect(() => {
    setValue("first_name", "Ola");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handlePenguin = (data) => console.log(data);

  // with dependencies
  // useEffect(() => {
  //   console.log('componentDidUpdate');

  //   return () => {
  //     // clearIntervals, clear WS
  //     // removeListener
  //   };
  // }, [user]);

  // // with no dependencies
  useEffect(() => {
    return () => {
    };
  }, []);

  //   const handleChange = (event) => {
  //     console.log("Hej!", event.target.value);
  //     setUser({ ...user, name: event.target.value });
  //   };
  return (
    <div>
      <h1>Hello from Home, {user.name}</h1>
      <Form onSubmit={handleSubmit(handlePenguin)}>
        <div>
          <TextBox
            name="first_name"
            label="First name"
            ref={register({
              required: "To pole jest wymagane",
              maxLength: {
                value: 10,
                message: "Maksymalna długość znaków wynosi 10.",
              },
            })}
            errors={errors}
          />
        </div>
        <div>
          <Textarea
            label="Your bio information"
            name="bio"
            ref={register({
              required: "To pole jest wymagane",
              maxLength: {
                value: 200,
                message: "Maksymalna długość znaków wynosi 10.",
              },
            })}
            errors={errors}
          />
        </div>
        <div>
          <Select
            name="services"
            items={[
              { value: 2, label: "Two" },
              { value: 3, label: "Three" },
            ]}
            ref={register}
          />
        </div>
        <div>
          <Checkbox
            name="terms"
            elemName="terms"
            label="I agree"
            ref={register({
              required: "Wymagany",
            })}
          />
          {errors.terms && <span>{errors.terms.message}</span>}
        </div>
        <input type="submit" value="Send" />
      </Form>
    </div>
  );
}

export default Home;
