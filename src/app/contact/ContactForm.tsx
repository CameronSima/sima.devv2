"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formState, setFormState] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const isValid = form.name && form.email && form.message;

  const submit = () => {
    if (!isValid) return;
    setFormState({ ...formState, loading: true });
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 200) {
          setFormState({ ...formState, success: true });
          setForm({ name: "", email: "", message: "" });
        } else {
          setFormState({ ...formState, error: res.statusText as any });
        }
      })
      .finally(() => setFormState({ ...formState, loading: false }));
  };

  return (
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
        <div className="items-stretch flex flex-col pb-2 max-md:max-w-full max-md:mt-10">
          <div className="text-black text-5xl font-bold leading-[58px] whitespace-nowrap mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Contact
          </div>
          <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
            {formState.success
              ? "Message sent!"
              : "Have a question or want to work together? Send me a message!"}
          </div>{" "}
        </div>
      </div>{" "}
      <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
        <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
          <div className="self-stretch text-black text-base leading-6 whitespace-nowrap max-md:max-w-full">
            Name
          </div>{" "}
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch self-stretch border bg-white justify-center mt-2 p-3 border-solid border-black max-md:max-w-full"
          />
          <div className="self-stretch text-black text-base leading-6 whitespace-nowrap mt-6 max-md:max-w-full">
            Email
          </div>{" "}
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch self-stretch border bg-white justify-center mt-2 p-3 border-solid border-black max-md:max-w-full"
          />
          <div className="self-stretch text-black text-base leading-6 whitespace-nowrap mt-6 max-md:max-w-full">
            Message
          </div>{" "}
          <input
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch self-stretch border bg-white mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10"
          />
          <button
            onClick={submit}
            disabled={!isValid}
            className={`text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border ${
              isValid ? "bg-black" : "bg-gray-600"
            } mt-6 px-7 py-3 border-solid border-black self-start max-md:px-5`}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
