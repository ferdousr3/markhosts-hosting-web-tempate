import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const data = {
  social: [
    {
      id: "1",
      name: "facebook",
      icon: <FaFacebookF />,
      link: "www.facebook.com",
    },
    {
      id: "2",
      name: "Instagram",
      icon: <FaInstagram />,
      link: "www.instagram.com",
    },
    {
      id: "3",
      name: "Linkedin",
      icon: <FaLinkedinIn />,
      link: "www.linkedin.com",
    },
    {
      id: "4",
      name: "Twitter",
      icon: <FaTwitter />,
      link: "www.twitter.com",
    },
  ],
  features: [
    {
      id: "1",
      icon: "ggg",
      name: "UNIQUE HPANEL",
      description: "Good platform for website location.",
    },
    {
      id: "2",
      icon: "ggg",
      name: "EXCEPTIONAL SPEED",
      description: "Great for functional and advanced platforms.",
    },
    {
      id: "3",
      icon: "ggg",
      name: "WORDPRESS OPTIMIZED",
      description: "Perfect for small to medium websites.",
    },
  ],
  homePrice: [
    {
      id: "1",
      name: "Single Shared Hosting",
      price: "1.45",
      renewPrice: "2.15",
      featureOne: "1 Website",
      featureTwo: "1 Email Account",
      featureThree: "100 GB Bandwidth",
      featureFour: "1X Processing Power & Memory",
    },
    {
      id: "2",
      name: "Premium Shared Hosting",
      price: "2.15",
      renewPrice: "3.49",
      featureOne: "10 Website",
      featureTwo: "3 Email Account",
      featureThree: "800 GB Bandwidth",
      featureFour: "1PRO Memory account",
    },
    {
      id: "3",
      name: "Business Shared Hosting",
      price: "3.45",
      renewPrice: "7.95",
      featureOne: "20 Website",
      featureTwo: "20 Email Account",
      featureThree: "5 TB Bandwidth",
      featureFour: "20X Processing Power & Memory",
    },
  ],
  plans: [
    {
      id: "1",
      name: "Single",
      websites: "1",
      accounts: "1",
      domain: "None",
      backups: "None",
      price: "3.45",
    },
    {
      id: "2",
      name: "Premium",
      websites: "2",
      accounts: "6",
      domain: "None",
      backups: "None",
      price: "4.45",
    },
    {
      id: "3",
      name: "Business",
      websites: "5",
      accounts: "10",
      domain: "1 .com",
      backups: "Weekly",
      price: "6.45",
    },
  ],
};

export default data;



