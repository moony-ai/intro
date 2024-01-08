"use client";

import { IconButton, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="blue-gray" placeholder="ForNerd">
            ForNerd
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
            placeholder=""
          >
            ForNerd에 오신 것을 환영합니다! 저희는 투명성, 소비자 맞춤형 디자인, 빠른 개발, 그리고 합리적인 가격을 중시하는 웹 개발 팀입니다. 여기서 저희의 전문성과 혁신적인 프로젝트들을 만나보세요.
          </Typography>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase" placeholder="">
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton variant="text" color="gray" placeholder="">
              <i className="fa-brands fa-facebook text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray" placeholder="">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton variant="text" color="gray" placeholder="">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
