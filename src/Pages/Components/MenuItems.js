import PurdueSquare from "../Images/Purdue_Square.jpg"
import ProLegion from "../Images/prolegion_logo.jpeg"
import AssureLogo from "../Images/assuare_logo.jpeg"
const menuItems = [
    { 
        id: "Purdue University", 
        title: "Undergraduate Data Science Researcher", 
        img:PurdueSquare,
        date: "Aug 2024 - Present", 
        content: "- Built a chatbot for Caterpillar, enabling efficient diagnostics of network traffic.\n- Applied R, SQL, and Python for analyzing high-velocity network data.\n- Leveraged CrateDB for seamless data storage and retrieval and Grafana for dynamic visualizations.\n- Engineered the chatbot to provide actionable insights, minimizing downtime and enhancing operations."
    },
    { 
        id: "Pro-Legion", 
        title: "Software Intern", 
        img:ProLegion,
        date: "May 2023 - Oct 2023", 
        content: "- Styled UI/UX for the company's portal, increasing user satisfaction scores by 20% through improved navigation, design consistency, and an intuitive user experience.\n- Developed a responsive skeleton of the website’s landing page using HTML, CSS, and JavaScript, improving cross-device compatibility and overall performance.\n- Collaborated with the design team and stakeholders to align the portal’s aesthetic with company branding for a cohesive and engaging user experience." 
    },
    { 
        id: "Assure Health", 
        title: "Summer Intern", 
        img: AssureLogo,
        date: "May 2022 - Sep 2022", 
        content: "- Designed a patient scheduling system using Node.js, React.js, and AWS, optimizing appointment efficiency.\n- Implemented a real-time error monitoring system with AWS CloudWatch, enhancing error tracking and resolution.\n- Collaborated with a team of 5 to integrate patient data, ensuring 100% compliance with healthcare data regulations." 
    },
];

export default menuItems;