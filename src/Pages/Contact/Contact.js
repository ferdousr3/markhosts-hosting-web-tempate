import React from "react";
import ContactForm from "../../components/Contacts/ContactForm";
import Contacts from "../../components/Contacts/Contacts";
import PageTitle from "../../components/PageTitle/PageTitle";

const Contact = () => {
  return (
    <>
      {/* main page title */}
      <section className="pt-24 main-bg pb-32">
        <PageTitle
          title="Join Us Now"
          description="Everything you may need for a successful online project."
        />
      </section>
      {/* contact details section */}
      <section className="mt-[-60px] pb-24 ">
        <Contacts />
      </section>
      {/* contact form section */}
      <section className="pt-10 pb-24 ">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
