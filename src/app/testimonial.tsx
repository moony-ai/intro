"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4" placeholder="">
            고객님들의 이야기
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
            placeholder=""
          >
            저희와 함께한 고객님들의 경험을 들어보세요. 고객님의 만족이 저희의 가장 큰 성취입니다!
          </Typography>
        </div>
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" placeholder="">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " placeholder="">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
                placeholder=""
              >
                모바일 앱 개발
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500" placeholder="">
                저는 FourNode와 중요한 웹 개발 프로젝트에서 함께 일할 기회가 있었고, 그들의 전문성과 프로페셔널함에 깊이 감명 받았습니다.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5" placeholder="">
                Michael - 기술 관리자
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
                placeholder=""
              >
                마케팅 @ APPLE INC.
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="avatar"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                  placeholder=""
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar2.jpg"
                  alt="avatar"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                  placeholder=""
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="avatar"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                  placeholder=""
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={`/image/avatar${active}.jpg`}
                alt="testimonial image"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
