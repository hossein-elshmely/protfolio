import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Lishahadati LMS",
      github_link: "",
      live_link: "http://lishahadati.com/",
    },
    {
      img: project2,
      name: "CO-MSA",
      github_link: "",
      live_link: "http://co-msa.com/",
    },
    {
      img: project3,
      name: "DrBEE",
      github_link: "",
      live_link: "https://drbee.net/",
    },
    {
      img: project4,
      name: "BANANA LB",
      github_link:
        "",
      live_link: "https://banana-lb.com/",
    },
    {
      img: project5,
      name: "Phone Store Template",
      github_link: "https://github.com/hossein-elshmely/html-css-phone-store",
      live_link: "https://hossein-elshmely.github.io/html-css-phone-store/",
    },
    {
      img: project6,
      name: "html-css responsive Template",
      github_link: "https://github.com/hossein-elshmely/Resposive-html-css-page",
      live_link: "https://hossein-elshmely.github.io/Resposive-html-css-page/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" 
          className="lg:h-[30em] h-0 lg:absolute bottom-0 -right-30 object-cover"
          
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
