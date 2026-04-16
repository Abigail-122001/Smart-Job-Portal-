const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Chennai",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600"
  },
  {
    title: "React Developer",
    company: "Amazon",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600"
  },
  {
    title: "UI/UX Designer",
    company: "Microsoft",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
  },
  {
    title: "Web Developer",
    company: "Infosys",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
  }
];

const jobList = document.getElementById("jobList");
const search = document.getElementById("search");

function renderJobs(data){
  jobList.innerHTML = data.map(job => `
    <div class="card">
      <img src="${job.image}" alt="${job.title}">
      <div class="card-content">
        <h3>${job.title}</h3>
        <p>🏢 ${job.company}</p>
        <p>📍 ${job.location}</p>
        <button onclick="alert('Application Submitted!')">Apply Now</button>
      </div>
    </div>
  `).join("");
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(value) ||
    job.company.toLowerCase().includes(value) ||
    job.location.toLowerCase().includes(value)
  );

  renderJobs(filtered);
});

renderJobs(jobs);