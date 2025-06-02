// Team members data
const teamMembers = [
    {
        name: "Dr. Peng W. Chee",
        role: "Principal Investigator",
        image: "images/people/chee.jpg",
        bio: "Professor and Cotton Breeder",
        email: "pchee@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/pengchee"
    },
    // Add more team members here
];

// Publications data
const publications = [
    {
        title: "Recent advances in cotton molecular breeding",
        authors: "Chee, P.W., et al.",
        journal: "Crop Science",
        year: 2023,
        doi: "10.1002/csc2.12345"
    },
    // Add more publications here
];

// News data
const newsItems = [
    {
        title: "New Research Grant Awarded",
        date: "January 15, 2024",
        summary: "Our lab has been awarded a new grant to study cotton molecular breeding techniques.",
        link: "#"
    },
    // Add more news items here
];

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Load team members
    const teamContainer = document.querySelector('#people .row');
    if (teamContainer) {
        teamMembers.forEach(member => {
            const memberCard = createTeamMemberCard(member);
            teamContainer.appendChild(memberCard);
        });
    }

    // Load publications
    const publicationsContainer = document.querySelector('#publications .row');
    if (publicationsContainer) {
        publications.forEach(pub => {
            const pubCard = createPublicationCard(pub);
            publicationsContainer.appendChild(pubCard);
        });
    }

    // Load news
    const newsContainer = document.querySelector('#news .row');
    if (newsContainer) {
        newsItems.forEach(news => {
            const newsCard = createNewsCard(news);
            newsContainer.appendChild(newsCard);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Helper functions to create cards
function createTeamMemberCard(member) {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';
    div.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <img src="${member.image}" class="card-img-top" alt="${member.name}">
            <div class="card-body text-center">
                <h3 class="h5 mb-1">${member.name}</h3>
                <p class="text-muted mb-2">${member.role}</p>
                <p class="small mb-3">${member.bio}</p>
                <div class="social-links">
                    ${member.orcid ? `<a href="${member.orcid}" target="_blank" class="text-primary me-2"><i class="fab fa-orcid"></i></a>` : ''}
                    ${member.linkedin ? `<a href="${member.linkedin}" target="_blank" class="text-primary"><i class="fab fa-linkedin-in"></i></a>` : ''}
                </div>
            </div>
        </div>
    `;
    return div;
}

function createPublicationCard(pub) {
    const div = document.createElement('div');
    div.className = 'col-md-6 mb-4';
    div.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
                <h3 class="h5 mb-2">${pub.title}</h3>
                <p class="text-muted mb-2">${pub.authors}</p>
                <p class="small mb-2">${pub.journal}, ${pub.year}</p>
                <a href="https://doi.org/${pub.doi}" target="_blank" class="btn btn-sm btn-outline-primary">View Paper</a>
            </div>
        </div>
    `;
    return div;
}

function createNewsCard(news) {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';
    div.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
                <p class="text-muted small mb-2">${news.date}</p>
                <h3 class="h5 mb-2">${news.title}</h3>
                <p class="mb-3">${news.summary}</p>
                <a href="${news.link}" class="btn btn-sm btn-outline-primary">Read More</a>
            </div>
        </div>
    `;
    return div;
} 