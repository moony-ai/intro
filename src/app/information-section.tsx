"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import React from 'react';
import InfoCard from "@/components/info-card";
import '../../public/css/skill.css';

const PROJECTS = [
  {
  icon: AcademicCapIcon,
  title: "WEPO - Android Application",
  date: "6개월",
  children:
  "콩고민주 공화국의 중고거래 플랫폼. 주요 기능으로는 제품 업로드 및 검색, 제품 가격 통계, 메신져, 위치 기반 verification 등이 있습니다.",
  },
  {
  icon: AcademicCapIcon,
  title: "Travel Gen AI - Web Application",
  date: "1개월",
  children:
  "생성형 AI를 통해 여행상품을 등록할 수 있는 웹사이트. 주요 기능으로는 게시물 업로드 및 검색, 게시물 자동생성 (Gen AI) 기능 등이 있습니다.",
  },
  {
  icon: AcademicCapIcon,
  title: "Jobvis - Web Application",
  date: "3개월",
  children:
  "Chat Bot을 활용한 일정관리 서비스. 주요기능으로는 챗봇 기능, 일정 확인 및 일정 예약 기능 등이 있습니다.",
  },
  {
  icon: AcademicCapIcon,
  title: "Carrot news AI - Web Application",
  date: "1개월",
  children:
  "Gen AI를 활용한 당근뉴스 자동 생성 서비스. 주요기능으로는 뉴스 게시물 자동 생성 등이 있습니다.",
  },
  ];

const EXPERIENCE = [
  {
  icon: BriefcaseIcon,
  title: "농협중앙회 회계사",
  date: "2020.11 - 현재",
  children:
  "보증업체 컨설팅 수행과 스마트팜기업보증 적정성 평가 모델 개발 등의 업무를 담당했습니다.",
  },
  {
  icon: BriefcaseIcon,
  title: "국토안전관리원 위촉 1급",
  date: "2017.07 - 2018.04",
  children:
  "재무성과 및 KPI 관리와 재무제표 작성 및 외부 감사 대응 등의 업무를 진행하였습니다.",
  },
  {
  icon: BriefcaseIcon,
  title: "중소벤처기업진흥공단 사원/팀원",
  date: "2015.10 - 2017.04",
  children:
  "조기경보모델 개발 및 고도화, 사고채권 상각 및 매각진행 등의 업무를 수행했습니다.",
  },
  {
  icon: BriefcaseIcon,
  title: "Accenture",
  date: "2021.08 - 2023.11",
  children:
  "Facebook 프로젝트에 참여하여 콘텐츠 최적화 및 품질 보증 프로세스 개선 등의 업무를 수행했습니다.",
  },
  ];
  

const SKILLS = [
  {
    "name":"Python",
    "level":"95%"
  },
  {
    "name":"VueJs",
    "level":"55%"
  },
  {
    "name":"ReactJs",
    "level":"70%"
  },
  {
    "name":"NextJs",
    "level":"80%"
  },
  {
    "name":"CSS",
    "level":"80%"
  },
  {
    "name":"Nodejs",
    "level":"70%"
  },
  {
    "name":"JAVA",
    "level":"80%"
  }
];

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function InformationSection() {

  const skillsList = SKILLS.map((skill) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skill.name.toLowerCase();
    const width = skill.level;

    return (
      <li key={skill.name} style={{ position: 'relative', marginBottom: '60px' }}>
        <span style={{ width, backgroundColor, display: 'inline-block', height: '42px' }} className={className}></span>
        <em style={{ position: 'relative', top: '-36px' }}>{skill.name}</em>
      </li>
    );
  });


  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold" placeholder="">
              프로젝트
            </Typography>
            <Typography variant="lead" className="!text-gray-500" placeholder="">
              저희 팀의 프로젝트 이력을 확인해보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {PROJECTS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold" placeholder="">
              경력
            </Typography>
            <Typography variant="lead" className="!text-gray-500" placeholder="">
              저희 팀의 다양한 경력을 살펴보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold" placeholder="">
              기술
            </Typography>
            <Typography variant="lead" className="!text-gray-500" placeholder="">
              저희 팀이 가지고 있는 기술을 확인해보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
          <div className="nine columns main-col">
              <div className="bars">
                <ul className="skills">{skillsList}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default InformationSection;
