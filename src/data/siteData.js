export const personalInfo = {
  name: "Md Tasnim Farhan Fatin",
  role: "Researcher · Builder · Lifelong Learner",
  tagline:
    "Tagline.",
  bio: "Bio.",
  email: "tasnimfatin@outlook.com",
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/#" },
    { label: "GitHub", href: "https://github.com/fatin-farhan" },
    { label: "LinkedIn", href: "https://bd.linkedin.com/in/md-tasnim-farhan-fatin-12041b280" },
    { label: "CV", href: "https://drive.google.com/file/d/10zr6JBfXT-00Vo4kamdGPLKkt8U9brao/view?usp=sharing" },
  ],
  highlights: [
    "Research focus on your field or long-term interests",
    "Experience across academia, industry, or independent work",
    "Interested in collaboration, writing, and open knowledge",
  ],
};

export const research = {
  intro:
    "My research centers on a few core questions: how we build better systems, how people use them, and how we evaluate what matters.",
  themes: [
    {
      title: "Research Theme One",
      description:
        "Describe a major line of inquiry here. Summarize the core problem, why it matters, and the methods you use.",
    },
    {
      title: "Research Theme Two",
      description:
        "Use this section for another area of focus, such as applied work, interdisciplinary collaborations, or long-term projects.",
    },
    {
      title: "Research Theme Three",
      description:
        "Add a third theme for breadth: theory, experiments, systems, policy, design, or any other dimension of your research.",
    },
  ],
  publications: [
    {
      title: "Paper Title or Preprint Name",
      venue: "Conference / Journal / Year",
      summary:
        "A one- or two-line description of the contribution and why it matters.",
      href: "#",
    },
    {
      title: "Another Project or Publication",
      venue: "Workshop / Lab / Year",
      summary:
        "A concise summary that makes the work approachable for a broad audience.",
      href: "#",
    },
    {
      title: "Ongoing Research Project",
      venue: "In progress",
      summary:
        "Briefly describe what you are currently exploring and what questions remain open.",
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