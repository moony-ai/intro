import React from 'react';
import { Navbar, Footer } from "@/components";
import Hero from "./hero";
import InformationSection from "./information-section";
import Testimonial from "./testimonial";
import dynamic from 'next/dynamic';

const PortfolioWithNoSSR = dynamic(() => import('./portfolio'), { ssr: false });

export default function Intro() {
  const portfolioData = {
    projects: [
      {
        "title":"여행사 홈페이지",
        "category":"My Travel Blog for my post-university travels",
        "image":"크몽포트폴리오_1.jpg",
        "url":"https://www.canadianwanderlust.com"
      },
      {
        "title":"레스토랑 홈페이지",
        "category":"(offline now) A fighting gear company I started",
        "image":"크몽포트폴리오_2.jpg",
        "url":"http://www.timbakerdev.com"
      },
      {
        "title":"개인 홈페이지",
        "category":"Website I built for a restaurant I like in Thailand",
        "image":"크몽포트폴리오_3.jpg",
        "url":"http://www.timbakerdev.com/originalthaifood.github.io"
      },
      {
        "title":"개인 포트폴리오",
        "category":"A React based resume website template",
        "image":"크몽포트폴리오_4.jpg",
        "url":"http://www.timbakerdev.com"
      },
      {
        "title":"기업 소개페이지",
        "category":"(MVP Only) A React and Meteor based chat University project.",
        "image":"크몽포트폴리오_5.jpg",
        "url":"http://www.smirkspace.com"
      },
      {
        "title":"비즈니스 홈페이지",
        "category":"My Travel Blog for my post-university travels",
        "image":"크몽포트폴리오_6.jpg",
        "url":"https://www.canadianwanderlust.com"
      },
      {
        "title":"디자인 홈페이지",
        "category":"(offline now) A fighting gear company I started",
        "image":"크몽포트폴리오_7.jpg",
        "url":"http://www.timbakerdev.com"
      },
      {
        "title":"개인 포트폴리오",
        "category":"Website I built for a restaurant I like in Thailand",
        "image":"크몽포트폴리오_8.jpg",
        "url":"http://www.timbakerdev.com/originalthaifood.github.io"
      }
    ],
  };

  return (
    <>
      <Navbar />
      <Hero />
      <InformationSection />
      <PortfolioWithNoSSR data={portfolioData} />
      <Testimonial />
      <Footer />
    </>
  );
}
