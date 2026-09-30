import { FaGithub, FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";

export const personalInfo = {
  name: "Md Tasnim Farhan Fatin",
  nickname: "Fatin",
  email: "tasnimfatin@outlook.com",
  cv: "https://drive.google.com/file/d/1MmPmmLlLeHLk6kUg6Q0n9yFD9hRMt8-C/view?usp=sharing",
links: [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=aK1rqM8AAAAJ", icon: SiGooglescholar },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Md-Tasnim-Farhan-Fatin", icon: FaResearchgate },
  { label: "GitHub", href: "https://github.com/fatin-farhan", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-tasnim-farhan-fatin-12041b280/", icon: FaLinkedin },
],
  background: "I am a computer science Ph.D. student at Washington State University (WSU).\
   I am a Research Assistant at the Cyber-Physical Systems Security Research Laboratory (CPS2RL), WSU.\
    My research interests include cyber-physical systems and machine learning.",
};

export const research = {
  themes: [
    {
      title: "Collaborative System",
      description:
        "Many IoT devices remain idle while DNN workloads on a single device can cause long execution times and missed deadlines.\
        Can we use idle IoT devices to distribute workloads while maintaining high utilization and predictable execution times?"
    },
    {
      title: "Autonomous Driving System",
      description:
        "Autonomous vehicles perform perception, planning and control under real-time constraints.\
         Adding reasoning models can improve decisions but may increase execution time.\
         Can we add reasoning capabilities without affecting timing predictability and safety?"},
    {
      title: "Trustworthy and Resilient System",
      description:
        "AI is increasingly used in scientific facilities, but failures or incorrect outputs can affect experiments and results.\
         Can we design trustworthy and resilient AI systems that maintain reliable operation and experimental integrity?",
    },
  ],
  publications: [
    {
      title: "Work-in-Progress: Real-Time Deep Neural Inference on Resource-Constrained Edge Devices",
      venue: "RTSS BP 2025",
      summary:
        "This work studies deadline-aware distributed DNN inference with an asynchronous execution semantics: \
        a device proceeds as soon as its required partial outputs are available, without global synchronization. \
        We develop a time-aware optimization model that minimizes response time subject to deadline constraints.",
      href: "https://ieeexplore.ieee.org/document/11315086/",
    },
    {
      title: "Deep Neural Inference in Real-Time Systems: A Survey",
      venue: "In progress",
      summary:
        "We review papers published between 2006 and 2026 and organize them into a unified taxonomy spanning three categories: time-aware, resource-aware, and assurance-aware techniques. We further identify several open research issues and outline potential directions to guide the future development of learning-enabled real-time systems.",
      href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6744459",
    },
    {
      title: "Time-Aware Intent Prediction for Autonomous Vehicles using Adaptive Scheduling",
      venue: "In progress",
      summary:
        "We propose an adaptive scheduling framework that incorporates deadline-aware strategies to prioritize object level intent prediction tasks based on their time-to-collision (TTC).",
      href: "#",
    },
  ],
};

export const project = {
  publications: [
    {
      title: "IoT-based Smart Plant Waterer System (2023)",
      description: "Implemented a real-time monitoring system for video, temperature, humidity and rain updates.\
       Maintained a database for tracking records.",
      techniques:"IoT, PCB Design, Prototype Simulation, Full-Stack Web Development, Live Streaming",
      href: "https://drive.google.com/file/d/1rs31bMyBvEHhiCscYW7xsxoOtSpWha2q/view",
    },
    {
      title: "Bangla Sign Language Detection (2022)",
      description: "Built a hand glove with flex sensors to translate sign language into electrical signals.\
       Translated the signals into Bangla text using neural networks.",
      techniques:"Embedded Systems, Signal Processing, Deep Learning",
      href: "https://drive.google.com/file/d/1Bje8q-uVJ4qb6taLapWolqTH5CDG4d6i/view",
    }, 
    {
      title: "4-Bit Arithmetic Logic Unit of a CPU in Bread Board (2022)",
      description: "Built a hardware prototype of a 4-bit Arithmetic Logic Unit (ALU) on a breadboard using ICs.\
       The circuit handled basic logical and arithmetic operations and output on a 7-segment display.",
      techniques:"Logic Gates, Multiplexers, Arithmetic Logic Circuits",
      href: "https://drive.google.com/file/d/1w_j5QRGRB_1Q19EVlMj_MeKY8p9vgND9/view",
    },
    {
      title: "Electricity Load Forecasting and Disaggregation (2021)",
      description: "Explored different neural network models for real-time non-intrusive load monitoring (NILM).\
       The effectiveness of each model was compared using metrics such as MSE, MAE, RE and F1 Score.",
      techniques:"Time-Series Analysis, Deep Learning",
      href: "https://drive.google.com/file/d/1z68jv703eNN_WPG7G2dhfnePOG5ZtTLN/view",
    },
  ],
};
