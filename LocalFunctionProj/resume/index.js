module.exports = function(context, req) {
    jsonData = {
        "basics": {
          "name": "Steven Michaud",
          "label": "Software Developer",
          "picture": "",
          "email": "michaudsr@gmail.com",
          "website": "https://michaudsr.github.io/",
          "summary": "Motivated Software Engineer with experience in developing full stack applications, as well as code testing and debugging.",
          "location": {
            "address": "Metro Atlanta",
            "city": "Atlanta",
            "countryCode": "GA",
            "region": "Georgia"
          },
          "profiles": [{
            "network": "Gmail",
            "username": "michaudsr",
            "url": "michaudsr@gmail.com"
          },
          {
            "network": "Linkedin",
            "username": "Steven Michaud",
            "url": "https://www.linkedin.com/in/steven-michaud/"
          },
          {
            "network": "GitHub",
            "username": "Michaudsr",
            "url": "https://github.com/Michaudsr"
          }]
        },
        "work": [{
          "company": "Pratt Industries",
          "position": "Machine Operator",
          "startDate": "September 2014",
          "endDate": "December 2021",
          "summary": "Monitoring machines, equipment, and processes. Moving products and materials with cranes. Cutting product to specific size ordered. Performing test on finished product, labeling and prepping product to be shipped. Installing paper machine clothing, and performing housekeeping duties.",
        }],
        "education": [{
          "institution": "Georgia State University",
          "area": "Computer Science",
          "studyType": "Current",
          "startDate": "May 2021",
          "endDate": "Current",
        }],
        "awards": [{
          "title": "Comptia ITF+",
          "date": "12-23-2021",
          "awarder": "Comptia",
        }
      ],
        "skills": [
          {
            "name": "Python",
            "level": "Beginner",
            "keywords": [
              "Django"
            ]
          },
          {
            "name": "JavaScript",
            "level": "Beginner",
            "keywords": [
              "Node.js/Express",
              "React"
            ]
          },
          {
            "name": "C#",
            "level": "Beginner",
            "keywords": [
              ".NET"
            ]
          },
          {
            "name": "SQL",
            "level": "Beginner",
            "keywords": [
              "Postgres"
            ]
          },
          {
            "name": "NoSQL",
            "level": "Beginner",
            "keywords": [
              "MongoDB"
            ]
          },
          {
            "name": "HTML",
            "level": "Intermediate",
            "keywords": [
              "Front-End"
            ]
          },
          {
            "name": "CSS",
            "level": "Intermediate",
            "keywords": [
              "Materialize",
              "Bootstrap"
            ]
          },
          {
            "name": "MicroSoft Office",
            "level": "Intermediate",
            "keywords": [
              "Word",
              "Excel",
              "Powerpoint"
            ]
          }
        ],
        "interests": [{
          "name": "DevOps",
          "keywords": [
            "Cloud Engineering",
            "Networking",
            "Azure",
            "Docker",
            "Terraform"
          ]
        }]
      }

    context.res = {
       body: JSON.stringify(jsonData, null, 2)
    };
    context.done();
};