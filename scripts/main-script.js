let interviewList = [];
let rejectedList = [];


let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let jobsCount = document.getElementById("jobs-count");

function calculateCount(){
    total.innerText = jobList.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length; 
    jobsCount.innerText = jobList.length;
}

calculateCount();

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");

function btnStyleToggle(id){
    allBtn.classList.add("bg-white", "text-[#64748B]");
    interviewBtn.classList.add("bg-white", "text-[#64748B]");
    rejectedBtn.classList.add("bg-white", "text-[#64748B]");

    allBtn.classList.remove("bg-blue-500", "text-white");
    interviewBtn.classList.remove("bg-blue-500", "text-white");
    rejectedBtn.classList.remove("bg-blue-500", "text-white");

    document.getElementById(id).classList.remove("bg-white", "text-[#64748B]")
    document.getElementById(id).classList.add("bg-blue-500", "text-white")

}
