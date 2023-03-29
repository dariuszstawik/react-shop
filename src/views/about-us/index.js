import React from "react";
import AboutSection from "../../components/about-section";
import PageHeader from "../../components/atoms/page-header";
import home1 from "../../assets/img/Home1.jpg";
import about1 from "../../assets/img/about1.jpg";
import References from "../../components/references-section";

const AboutUs = () => {
  return (
    <>
      <PageHeader content="About us" />
      <AboutSection
        decoratedContent="Lorem ipsum dolor"
        title="Vivamus convallis"
        img={home1}
      >
        Quisque sit amet augue in justo iaculis convallis. Aenean hendrerit,
        sapien nec interdum tristique, enim elit pretium elit, a molestie ipsum
        orci id sem. Nam ex metus, pellentesque vel sodales in, suscipit tempor
        mauris. Sed pretium ex lacus, in tempus augue commodo quis. Vivamus et
        nisl turpis. Integer et odio ut elit finibus sagittis porttitor sed ex.
        Curabitur at arcu at felis lacinia molestie ut in nulla. Nam vulputate
        vel mauris in eleifend. Donec est neque, efficitur ac pellentesque
        lobortis, placerat in nibh. Vivamus tristique in purus id imperdiet.
        Fusce enim mauris, semper eget sem in, consectetur condimentum lorem.
        Vestibulum ultricies augue sed nisl mattis congue. Duis nec consectetur
        tellus.
      </AboutSection>
      <References />
      <AboutSection
        decoratedContent="In eget iaculis orci"
        title="Maecenas scelerisque"
        img={about1}
        isReverse
      >
        Maecenas scelerisque consectetur magna, eu maximus purus faucibus at.
        Donec quis orci id mi semper accumsan. Duis pulvinar dignissim nunc vel
        auctor. Donec gravida augue at facilisis faucibus. Nam imperdiet vel dui
        at pulvinar. Nunc blandit condimentum fermentum. Aliquam id sollicitudin
        odio. Vivamus efficitur turpis aliquet magna tristique eleifend. Integer
        euismod maximus urna, id imperdiet odio. Curabitur ut lobortis ex, et
        accumsan nibh. Proin euismod feugiat ex at sodales. Morbi vel volutpat
        massa. Donec pellentesque dictum nulla ut volutpat. Vivamus eu risus vel
        mi feugiat tristique.
      </AboutSection>
    </>
  );
};

export default AboutUs;
