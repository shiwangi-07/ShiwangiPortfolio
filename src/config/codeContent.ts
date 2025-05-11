export const code = {
    welcome: `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to Shiwangi's portfolio!" });
}
`,

    aboutMe: `const superpower = () => "Turning ideas into clean, scalable, and user-friendly web apps.";
console.log(\`My superpower is: \${superpower()}\`);
`,

    skillsTools: `const mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS",
  "shadcn/ui", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Vercel", 
  "Postman", "Windows", "pnpm", "npm", "Socket.io", "REST APIs"
];

const getSkills = () => {
  return mySkills.length
    ? \`Tech stack I work with: \${mySkills.join(", ")} 💡🚀\`
    : "Uh-oh... skills not loaded!";
};

console.log(getSkills());
`,

    contact: `const contactDetails = {
  name: "Shiwangi Singh",
  email: "shiwangi1204@gmail.com",
  location: "Patna, Bihar",
  linkedIn: "linkedin.com/in/shiwangi07",
  github: "github.com/shiwangi-07",
};

function reachOut() {
  console.log(\`Let's connect! 📬 Email: \${contactDetails.email}, LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`,

    experience: `const internships = [
  {
    role: "Web Developer Intern",
    company: "Roomzy",
    duration: "May 2024 – Aug 2024",
    highlights: [
      "Developed landing and course detail pages using Next.js",
      "Implemented UI components with Radix UI and Motion",
      "Integrated Nodemailer to handle email communication from frontend"
    ]
  }
];

internships.forEach((exp) => {
  console.log(\`💼 \${exp.role} @ \${exp.company} (\${exp.duration})\`);
  exp.highlights.forEach(item => console.log("🔹", item));
});
`,

    projects: `const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
};

console.log("Project Field:", projectField);
`,

    educationJourney: `const education = {
  institute: "IIIT Bhagalpur",
  degree: "B.Tech in Electronics and Communication Engineering",
  duration: "2022 – 2026",
  cgpa: 7.98,
};

console.log("🎓 Studying at", education.institute);
console.log("📘 CGPA:", education.cgpa, "| Duration:", education.duration);
`,

    achievementsPor: `const achievements = [
  "Specialist on Codeforces | Top 1% in Div. 2 Educational Round 165",
  "Knight on Leetcode | Top 0.02% in Weekly Contest 429",
  "5-Star on CodeChef | Top 0.01% in Starters 167 Div 1"
];

const por = [
  "AZ Chapter Lead IIIT-BH Chapter: Mentored 100+ students",
  "Club Lead at PyC IIIT-BH: Organized contests with 200+ participants"
];

console.log("🏆 Achievements:");
achievements.forEach(a => console.log("⭐", a));

console.log("🧑‍🏫 Positions of Responsibility:");
por.forEach(p => console.log("📌", p));
`,
};
