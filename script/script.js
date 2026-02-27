let jobsContainer = document.getElementById('jobs-container');
let emptySection = document.getElementById('empty-section');

let totalElements = document.getElementById('total');
let interviewElements = document.getElementById('interview');
let rejectedElements = document.getElementById('rejected');
let totalJobsElements = document.getElementById("total-jobs");

let allBtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectedBtn = document.getElementById('rejected-btn');

let jobs = [];
let currentFilter = "all";

function findingAllJobs() {
  jobs = [];

  for (let card of jobsContainer.children) {
    let job = {
      element: card,
      statusBtn: card.querySelector('.status-btn'),
      status: "not-applied",
    };

    addEvents(job);
    jobs.push(job);
  }
}

function addEvents(job) {
  const card = job.element;

  card.querySelector('.interview-btn').addEventListener('click', function() {
    job.status = 'interview';
    job.statusBtn.innerText = 'APPLIED';
    job.statusBtn.style.color = '#10B981';
    job.statusBtn.style.border = '2px solid #10B981';
    job.statusBtn.style.backgroundColor = '#ffffff';
    job.statusBtn.style.fontWeight = '600';

    updateCounters();
    filterAllJobs(currentFilter);
  });

  card.querySelector('.reject-btn').addEventListener('click', function() {
    job.status = 'rejected';
    job.statusBtn.innerText = 'REJECTED';
    job.statusBtn.style.color = '#EF4444';
    job.statusBtn.style.border = '2px solid #EF4444';
    job.statusBtn.style.backgroundColor = '#ffffff';
    job.statusBtn.style.fontWeight = '600';

    updateCounters();
    filterAllJobs(currentFilter);
  });

  card.querySelector('.delete').addEventListener('click', function() {
    jobsContainer.removeChild(card);
    jobs = jobs.filter(function(jobs) {
      return jobs !== job;
    });

    updateCounters();
    filterAllJobs(currentFilter);
  });
}

function updateCounters() {
  let total = jobs.length;
  let interviewCount = 0;
  let rejectedCount = 0;

  for (let job of jobs) {
    if (job.status === 'interview'){
       interviewCount++;
    }
    if (job.status === 'rejected'){
      rejectedCount++;
    }
  }

  totalElements.innerText = total;
  interviewElements.innerText = interviewCount;
  rejectedElements.innerText = rejectedCount;
}

function checkEmpty(visibleCount) {
  if (visibleCount === 0) {
    emptySection.classList.remove('hidden');
  } 
  else {
    emptySection.classList.add('hidden');
  }
}

function resetBtnColor() {
  let buttons = [allBtn, interviewBtn, rejectedBtn];

  for (let btn of buttons) {
    btn.classList.remove('bg-[#3B82F6]', 'text-white');
    btn.classList.add('bg-white', 'border-[1px]', 'border-gray-200', 'text-[#64748B]');
  }
}

function filterAllJobs(filter) {
  currentFilter = filter;
  resetBtnColor();

  let visibleCount = 0;

  if (filter === 'all') {
    allBtn.classList.remove('bg-white','text-[#64748B]','border-[1px]','border-gray-200');
    allBtn.classList.add('bg-[#3B82F6]', 'text-white');

    for (let job of jobs) {
      job.element.style.display = 'block';
      visibleCount++;
    }
  }

  if (filter === 'interview') {
    interviewBtn.classList.remove('bg-white','text-[#64748B]','border-[1px]','border-gray-200');
    interviewBtn.classList.add('bg-[#3B82F6]', 'text-white');

    for (let job of jobs) {
      if (job.status === 'interview') {
        job.element.style.display = 'block';
        visibleCount++;
      } 
      else {
        job.element.style.display = 'none';
      }
    }
  }

  if (filter === 'rejected') {
    rejectedBtn.classList.remove('bg-white','text-[#64748B]','border-[1px]','border-gray-200');
    rejectedBtn.classList.add('bg-[#3B82F6]', 'text-white');

    for (let job of jobs) {
      if (job.status === 'rejected') {
        job.element.style.display = 'block';
        visibleCount++;
      } 
      else {
        job.element.style.display = 'none';
      }
    }
  }

  totalJobsElements.innerText = visibleCount + " Jobs";

  checkEmpty(visibleCount);
}

allBtn.addEventListener('click', function () { filterAllJobs('all'); });
interviewBtn.addEventListener('click', function () { filterAllJobs('interview'); });
rejectedBtn.addEventListener('click', function () { filterAllJobs('rejected'); });

findingAllJobs();
updateCounters();
filterAllJobs('all');