let jobList = [
  {
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    status: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions.",
  },
  {
    company: "TechFlow Solutions",
    position: "Frontend Architect",
    location: "New York, NY",
    type: "Contract",
    salary: "$150,000 - $190,000",
    status: "NOT APPLIED",
    description:
      "Lead the frontend team in migrating a legacy codebase to Next.js and Tailwind CSS.",
  },
  {
    company: "GreenRoot Systems",
    position: "Junior Web Developer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    status: "NOT APPLIED",
    description:
      "Maintain and update internal dashboards. Great mentorship opportunities for early-career devs.",
  },
  {
    company: "CyberGuard AI",
    position: "Security Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$160,000 - $210,000",
    status: "NOT APPLIED",
    description:
      "Implement zero-trust security protocols and monitor AI-driven threat detection systems.",
  },
  {
    company: "Pixel Perfect UI",
    position: "Product Designer",
    location: "San Francisco",
    type: "Hybrid",
    salary: "$120,000 - $155,000",
    status: "NOT APPLIED",
    description:
      "Translate complex user requirements into elegant, high-fidelity Figma designs.",
  },
  {
    company: "DataDrive",
    position: "Backend Engineer",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    status: "NOT APPLIED",
    description:
      "Design scalable RESTful APIs and optimize PostgreSQL database queries for high traffic.",
  },
  {
    company: "StreamLine Games",
    position: "Unity Developer",
    location: "London, UK",
    type: "Remote",
    salary: "£60,000 - £85,000",
    status: "NOT APPLIED",
    description:
      "Develop engaging mobile gaming experiences using Unity and C#.",
  },
  {
    company: "SwiftShip Logistics",
    position: "Full Stack Engineer",
    location: "Berlin, DE",
    type: "Full-time",
    salary: "€75,000 - €95,000",
    status: "NOT APPLIED",
    description:
      "Build real-time tracking systems using Node.js, React, and WebSockets.",
  },
];

let allCards = document.getElementById("all-cards");


function renderAll() {
  allCards.innerHTML = "";

  for (let job of jobList) {
    let div = document.createElement("div");
    div.className = "card p-3.5 bg-white flex justify-between";
    div.innerHTML = `
    <div class="space-y-4">
              <div>
                <h2 class="company-name text-2xl font-medium">
                  ${job.company}
                </h2>
                <p class="position text-[18px] text-[#64748B]">${job.position}</p>
              </div>
              <p class="flex items-center gap-1 text-[#64748B]">
                <span class="location">${job.location}</span> • <span class="type">${job.type}</span> •
                <span class="salary">${job.salary}</span>
              </p>
              <div>
                <p class="status   bg-gray-200 inline-block p-2 rounded-lg font-medium">${job.status}</p>
                <p class="description">
                  ${job.description}
                </p>
              </div>
              <div class="flex gap-2.5">
                <button class="interview-btns px-4 py-2 rounded-lg border  border-green-400 text-green-400 cursor-pointer hover:bg-green-400 hover:text-white ">INTERVIEW</button>
                <button class="rejected-btns px-4 py-2 rounded-lg border  border-red-400 text-red-400 cursor-pointer hover:bg-red-400 hover:text-white"
                >REJECTED</button>
              </div>
            </div>
            <div>
              <button class="cursor-pointer">
                <img src="images/del-btn.png" alt="" />
              </button>
            </div>
    `;
    allCards.appendChild(div);
  }
}

renderAll()
