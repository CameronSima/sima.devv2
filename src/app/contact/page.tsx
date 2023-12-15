import Footer from "@/components/footer";
import Header from "@/components/header";
import * as React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <ContactForm />
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
