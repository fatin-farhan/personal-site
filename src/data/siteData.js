import { FaGithub, FaLinkedin, FaResearchgate } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";

export const personalInfo = {
  name: "Md Tasnim Farhan Fatin",
  nickname: "Fatin",
  email: "tasnimfatin@outlook.com",
  cv: "https://drive.google.com/file/d/10zr6JBfXT-00Vo4kamdGPLKkt8U9brao/view?usp=drive_link",
links: [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?hl=en&user=aK1rqM8AAAAJ", icon: SiGooglescholar },
  { label: "ResearchGate", href: "https://www.researchgate.net/profile/Md-Tasnim-Farhan-Fatin", icon: FaResearchgate },
  { label: "GitHub", href: "https://github.com/fatin-farhan", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/md-tasnim-farhan-fatin-12041b280/", icon: FaLinkedin },
],
  background: "I am a computer science Ph.D. student at Washington State University (WSU). I am a Research Assistant at the Cyber-Physical Systems Security Research Laboratory (CPS2RL), WSU. My research interests include cyber-physical systems and machine learning.",
};

export const research = {
  themes: [
    {
      title: "Collaborative System",
      description:
        "The use of IoT in everyday life leads unutilized of the resources around. Executing DNN in one IoT device may increase WCET of the system. Distributing the workload among unitilized decives can reduce the WCET as well as increase the utilization.",
    },
    {
      title: "Autonomous Driving",
      description:
        "Autonomous Driving need to perform sensing, control task. Adding a reasoning layer increases the execution time and reduce the safety.",
    },
    {
      title: "TinyML",
      description:
        "Microcontrollers have limited compute resource and not able to perform the heavy DNN operations. Often powerful models are quantized or pruned to run in a resource constrained setup. Can we execute a full DNN model in a low power MCU.",
    },
  ],
  publications: [
    {
      title: "Work-in-Progress: Real-Time Deep Neural Inference on Resource-Constrained Edge Devices",
      venue: "RTSS BP 2025",
      summary:
        "Distributed Inference",
      href: "https://ieeexplore.ieee.org/document/11315086/",
    },
    {
      title: "Deep Neural Inference in Real-Time Systems: A Survey",
      venue: "In progress",
      summary:
        "Review of existing papers",
      href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6744459",
    },
    {
      title: "Distributed DNN",
      venue: "In progress",
      summary:
        "Workload partitioning",
      href: "#",
    },
  ],
};

export const project = {
  publications: [
    {
      title: "IoT-based Smart Plant Waterer System (2023)",
      description: "Implemented a real-time monitoring system for video, temperature, humidity and rain updates. Maintained a database for tracking records.",
      techniques:"Arduino, ESP32-CAM, Javascript, PHP",
      href: "https://drive.google.com/file/d/1rs31bMyBvEHhiCscYW7xsxoOtSpWha2q/view",
    },
    {
      title: "Bangla Sign Language Detection (2022)",
      description: "Built a hand glove with flex sensors to translate sign language into electrical signals. Translated the signals into Bangla text using neural networks.",
      techniques:"Arduino, Python",
      href: "https://drive.google.com/file/d/1Bje8q-uVJ4qb6taLapWolqTH5CDG4d6i/view",
    },
    {
      title: "4-Bit Arithmetic Logic Unit of a CPU in Bread Board (2022)",
      description: "Built a hardware prototype of a 4-bit Arithmetic Logic Unit (ALU) on a breadboard using ICs. The circuit handled basic logical and arithmetic operations and output on a 7-segment display.",
      techniques:"Logic Gates, Multiplexers",
      href: "https://drive.google.com/file/d/1w_j5QRGRB_1Q19EVlMj_MeKY8p9vgND9/view",
    },
    {
      title: "Electricity Load Forecasting and Disaggregation (2021)",
      description: "Explored different neural network models for real-time non-intrusive load monitoring (NILM). The effectiveness of each model was compared using metrics such as MSE, MAE, RE, and F1 Score.",
      techniques:"Python",
      href: "https://drive.google.com/file/d/1z68jv703eNN_WPG7G2dhfnePOG5ZtTLN/view",
    },
  ],
};