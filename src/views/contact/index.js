import React from "react";
import PageHeader from "../../components/atoms/page-header";
import AboutSection from "../../components/about-section";
import hero from "../../assets/img/hero.jpg";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Contact = () => {
  return (
    <>
      <PageHeader content="Contact" />
      <AboutSection
        decoratedContent="Lorem ipsum dolor"
        title="Contact Krasulove"
        img={hero}
      >
        Quisque sit amet augue in justo iaculis convallis. Aenean hendrerit,
        sapien nec interdum tristique, enim elit pretium elit, a molestie ipsum
        orci id sem.
        <p>
          <LocationOnOutlinedIcon fontSize="small" sx={{ mr: "10px" }} /> Za
          Górami za Lasami ul. Zdrowa 1
        </p>
        <p>
          <CallOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
          +48 32 255 52 25
        </p>
        <p>
          <AlternateEmailOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
          <a href="mailto:office@krasulove.pl">office@krasulove.pl</a>
        </p>
      </AboutSection>
    </>
  );
};

export default Contact;
