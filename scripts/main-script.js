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

const mainElement = document.querySelector("main");

mainElement.addEventListener('click', function(event){
    const parentNode = event.target.parentNode.parentNode;

    if(event.target.classList.contains("interview-btns")){
        const company = parentNode.querySelector(".company-name").innerText;
        const jobDetails = jobList.find(item => item.company == company);
        jobDetails.status = "INTERVIEW";
        const existingItem = interviewList.find(item => item.company == company)

        if(!existingItem){
            interviewList.push(jobDetails);
            
            console.log(interviewList)
        }

        rejectedList = rejectedList.filter(item => item.company != company);

        calculateCount();
        renderAll()
    }

    else if(event.target.classList.contains("rejected-btns")){
        const company = parentNode.querySelector(".company-name").innerText;
        const jobDetails = jobList.find(item => item.company == company);
        jobDetails.status = "REJECTED";
        const existingItem = rejectedList.find(item => item.company == company)

        if(!existingItem){
            rejectedList.push(jobDetails);
            
            console.log(rejectedList)
        }

        interviewList = interviewList.filter(item => item.company != company)

        calculateCount()
        renderAll()
    }
})
