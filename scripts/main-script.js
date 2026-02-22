let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let jobsCount = document.getElementById("jobs-count");

let currentStatus = "all";

function calculateCount() {
  total.innerText = jobList.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
  jobsCount.innerText = jobList.length;
}

calculateCount();

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");

function btnStyleToggle(id) {
  allBtn.classList.add("bg-white", "text-[#64748B]");
  interviewBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedBtn.classList.add("bg-white", "text-[#64748B]");

  allBtn.classList.remove("bg-blue-500", "text-white");
  interviewBtn.classList.remove("bg-blue-500", "text-white");
  rejectedBtn.classList.remove("bg-blue-500", "text-white");

  currentStatus = id;

  document.getElementById(id).classList.remove("bg-white", "text-[#64748B]");
  document.getElementById(id).classList.add("bg-blue-500", "text-white");

  if (id == "all-btn") {
    allCards.classList.remove("hidden");
    filteredSection.classList.add("hidden");
    renderAll();
  } 
  else if (id == "interview-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  }

  else if (id == "rejected-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}

const mainElement = document.querySelector("main");

mainElement.addEventListener("click", function (event) {
  const parentNode = event.target.parentNode.parentNode;

  if (event.target.classList.contains("interview-btns")) {
    const company = parentNode.querySelector(".company-name").innerText;
    const jobDetails = jobList.find((item) => item.company == company);
    jobDetails.status = "INTERVIEW";
    const existingItem = interviewList.find((item) => item.company == company);

    if (!existingItem) {
      interviewList.push(jobDetails);

      console.log(interviewList);
    }

    rejectedList = rejectedList.filter((item) => item.company != company);

    if (currentStatus == "rejected-btn") {
      renderRejected();
    }

    calculateCount();
    renderAll();
  } else if (event.target.classList.contains("rejected-btns")) {
    const company = parentNode.querySelector(".company-name").innerText;
    
    const jobDetails = jobList.find((item) => item.company == company);
    console.log(jobDetails.status)
    jobDetails.status = "REJECTED";
    console.log(jobDetails.status)

    let statusStyle = parentNode.querySelector(".status");
    console.log(statusStyle);
    statusStyle.classList.remove("bg-gray-200");
    statusStyle.classList.add("bg-green-400", "text-white");

    const existingItem = rejectedList.find((item) => item.company == company);

    if (!existingItem) {
      rejectedList.push(jobDetails);

      console.log(rejectedList);
    }

    interviewList = interviewList.filter((item) => item.company != company);

    if (currentStatus == "interview-btn") {
      renderInterview();
    }

    calculateCount();
    renderAll();
  }
});

let filteredSection = document.getElementById("filtered-section");
console.log(filteredSection);

function renderInterview() {
  filteredSection.innerHTML = "";

  if (interviewList.length == 0) {
    let div = document.createElement("div");
    div.className =
      "card p-3.5 bg-white flex flex-col items-center justify-between gap-3";
    div.innerHTML = `
                  <div>
                      <img src="../images/jobs.png" alt="">
                  </div>
                  <h3 class="font-semibold text-2xl">
                      No jobs available
                  </h3>
                  <p class="text-[#64748B]">
                      Check back soon for new job opportunities
                  </p>
      `;
    filteredSection.appendChild(div);
  } else {
    for (let job of interviewList) {
      let bgColor = "";
      if (job.status == "NOT APPLIED") {
        bgColor = "bg-gray-200";
      } else if (job.status == "INTERVIEW") {
        bgColor = "bg-green-400 text-white";
      } else if (job.status == "REJECTED") {
        bgColor = "bg-red-400 text-white";
      }

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
                <p class="status ${bgColor} inline-block p-2 rounded-lg font-medium">${job.status}</p>
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
      filteredSection.appendChild(div);
    }
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";

  if (rejectedList.length == 0) {
    let div = document.createElement("div");
    div.className =
      "card p-3.5 bg-white flex flex-col items-center justify-between gap-3";
    div.innerHTML = `
                  <div>
                      <img src="../images/jobs.png" alt="">
                  </div>
                  <h3 class="font-semibold text-2xl">
                      No jobs available
                  </h3>
                  <p class="text-[#64748B]">
                      Check back soon for new job opportunities
                  </p>
      `;
    filteredSection.appendChild(div);
  } else {
    for (let job of rejectedList) {
      let bgColor = "";
      if (job.status == "NOT APPLIED") {
        bgColor = "bg-gray-200";
      } else if (job.status == "INTERVIEW") {
        bgColor = "bg-green-400 text-white";
      } else if (job.status == "REJECTED") {
        bgColor = "bg-red-400 text-white";
      }

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
                <p class="status ${bgColor} inline-block p-2 rounded-lg font-medium">${job.status}</p>
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
      filteredSection.appendChild(div);
    }
  }
}
