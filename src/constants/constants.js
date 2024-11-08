import {
    AI,
    backend,
    creator,
    pythonDev,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    docker,
    mindX,
    VIoT,
    smartcar,
    snakegame,
    doorbell,
    ubuntu,
    python,
    nestjs,
    opencv,
    php,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: pythonDev,
    },
    {
      title: "A.I/IoT Student",
      icon: AI,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "NestJS",
      icon: nestjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Ubuntu",
      icon: ubuntu,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "opencv",
      icon: opencv,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "PHP",
      icon: php
    }
  ];

  const experiences = [
    {
      title: "Robotics Teaching Assistant/ Teacher",
      company_name: "MindX",
      icon: mindX,
      iconBg: "#383E56",
      date: "March 2024 - October 2024",
      points: [
        "In charge of Teaching children and Teens coding robotic using Python",
        "Collaborating mentors to deliver and support Students in class.",
        "In charge of conducting trial classes for children wants to try out Robotics."
      ],
    },
    {
      title: "IoT Engineer/Developer Intern",
      company_name: "VIoT Technology JSC.",
      icon: VIoT,
      iconBg: "#383E56",
      date: "June 2024 – Nov 2024",
      points: [
        "Configured, supported, and resolved issues related to LoRaWAN sensors, gateways, and server operations, enhancing system reliability.",
        "Developed backend application servers to provide seamless access to sensor data, with a focus on maintaining coding standards and efficiency."
      ],
    },
  ];

  const projects = [
    {
      name: "Smart Car OpenCV",
      description:
        "A car using OpenCV module for camera tracking, also adding obstacle detection.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "pink-text-gradient",
        },
      ],
      image: smartcar,
      source_code_link: "https://github.com/Travis-Houston/Akathon2023-Opencv-smart-car.git",
    },
    {
      name: "OpenCV Snake Game",
      description:
        "A snake game that utilize OpenCV and CVzone module to track hand movement as snake.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "CVZone",
          color: "pink-text-gradient",
        },
      ],
      image: snakegame,
      source_code_link: "https://github.com/Travis-Houston/OpenCV-Snake-Game.git",
    },
    {
      name: "openCV Doorbell Camera",
      description:
        "A simple doorbell camera utilizes openCV and servo to Lock/Unlock doors.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Raspberry Pi",
          color: "pink-text-gradient",
        },
      ],
      image: doorbell,
      source_code_link: "https://github.com/Travis-Houston/OpenCV-Doorbell-Camera.git",
    },
  ];
  
  export { services, technologies, experiences, projects };