"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "웹 개발 전문가 인증 - 웹 개발 연구소",
    date: "2016",
    children:
      "이 종합적인 프로그램은 HTML5, CSS3, JavaScript, 반응형 디자인, 서버 사이드 스크립팅 및 웹 보안을 포함합니다.",
  },
  {
    icon: AcademicCapIcon,
    title: "반응형 웹 디자인 인증 - FreeCodeCamp",
    date: "2015",
    children:
      "이 인증은 다양한 화면 크기와 장치에 맞게 웹사이트를 디자인하고 개발할 수 있는 능력을 입증합니다.",
  },
  {
    icon: AcademicCapIcon,
    title: "자바스크립트 개발자 인증 - 코드 아카데미",
    date: "2014",
    children:
      "이 인증은 자바스크립트 프로그래밍의 고급 숙련도를 입증하며, ES6 기능 및 실용적인 응용을 포함합니다.",
  },
  {
    icon: AcademicCapIcon,
    title: "컴퓨터 과학 학사 - XYZ 대학교",
    date: "2014-2016",
    children:
      "관련 과목: 데이터 구조, 알고리즘, 웹 개발, 소프트웨어 공학, 데이터베이스 관리.",
  },
];


const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "프리랜서 웹 개발자",
    date: "2023 - 현재",
    children:
      "제 작업의 핵심은 실제 웹 개발이었습니다. 프로젝트의 사양에 따라 코드를 작성하고 레이아웃을 디자인하며 기능을 만들었습니다.",
  },
  {
    icon: BriefcaseIcon,
    title: "기술 팀 리더",
    date: "2021 - 2023",
    children:
      "고도로 숙련된 기술 전문가 팀을 감독하고 지도함으로써 강력한 리더십을 제공했습니다.",
  },
  {
    icon: BriefcaseIcon,
    title: "시니어 웹 개발자",
    date: "2017 - 2021",
    children:
      "웹 서비스를 위한 자동화된 테스트 프레임워크를 개편하여 디버깅 및 문제 해결 시간을 눈에 띄게 90% 감소시켰습니다.",
  },
  {
    icon: BriefcaseIcon,
    title: "주니어 웹 개발자",
    date: "2015 - 2017",
    children:
      "다양한 산업 분야의 클라이언트를 위해 10개 이상의 반응형 웹사이트를 개발했습니다.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "프론트엔드 프레임워크",
    date: "기술적 기술",
    children:
      "React, Angular, Vue.js와 같은 프론트엔드 프레임워크를 활용하여 동적이고 반응형 웹 애플리케이션을 개발하는 데 능숙합니다. 사용자 경험에 중점을 둡니다.",
  },
  {
    icon: FireIcon,
    title: "세부 사항에 대한 주의",
    date: "소프트 기술",
    children:
      "코드 품질, 사용자 인터페이스 디자인 및 테스팅에 있어 세심한 주의를 기울여 오류 없고 사용자 친화적인 웹 애플리케이션을 보장합니다.",
  },
  {
    icon: FireIcon,
    title: "반응형 웹 디자인",
    date: "기술적 기술",
    children:
      "CSS Grid, Flexbox 및 미디어 쿼리를 사용하여 반응형 레이아웃을 만드는 데 숙련되어 있습니다. 웹사이트가 다양한 화면 크기와 장치에 맞게 원활하게 적응합니다.",
  },
  {
    icon: FireIcon,
    title: "시간 관리",
    date: "소프트 기술",
    children:
      "프로젝트 마감 기한을 맞추고, 작업을 효과적으로 우선 순위를 정하며, 동시에 여러 프로젝트를 처리할 수 있는 우수한 시간 관리 기술을 갖추고 있습니다.",
  },
];


export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold" placeholder="">
              교육 및 자격증
            </Typography>
            <Typography variant="lead" className="!text-gray-500" placeholder="">
              저희 팀의 교육 이력을 확인해보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold" placeholder="">
              경험
            </Typography>
            <Typography variant="lead" className="!text-gray-500" placeholder="">
              저희 팀의 개발 경험을 살펴보세요.
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
              저희 팀의 기술적 및 인간적 기술을 확인해보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default InformationSection;
