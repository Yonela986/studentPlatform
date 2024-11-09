// careers.js
const careersData = [
    { title: "Software Engineer", description: "Design and develop software applications.", skillsRequired: "Programming, Problem-solving", averageSalary: "$100,000", educationalPath: "Bachelor's Degree in Computer Science" },
    { title: "Doctor", description: "Diagnose and treat illnesses.", skillsRequired: "Medical Knowledge, Communication", averageSalary: "$200,000", educationalPath: "Doctor of Medicine (M.D.)" },
    { title: "Teacher", description: "Teach students in various subjects.", skillsRequired: "Communication, Patience", averageSalary: "$50,000", educationalPath: "Bachelor's Degree in Education" }
];

// Render career information dynamically
const careersContainer = document.getElementById('careersContainer');

careersData.forEach(career => {
    const careerDiv = document.createElement('div');
    careerDiv.classList.add('career');
    careerDiv.innerHTML = `
        <h3>${career.title}</h3>
        <p>${career.description}</p>
        <p><strong>Skills Required:</strong> ${career.skillsRequired}</p>
        <p><strong>Average Salary:</strong> ${career.averageSalary}</p>
        <p><strong>Educational Path:</strong> ${career.educationalPath}</p>
    `;
    careersContainer.appendChild(careerDiv);
});
