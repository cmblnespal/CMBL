// Team members data
const teamMembers = [
    {
        name: "Dr. Peng W. Chee",
        role: "Principal Investigator",
        image: "images/people/chee.jpg",
        bio: "Professor of Cotton Breeding & Genetics",
        email: "pwchee@uga.edu",
        phone: "+1 229-386-7274",
        education: [
            "Ph.D. Plant Breeding & Genetics, Texas A&M University (1997)",
            "M.S. Nanjing Agricultural University",
            "B.S. Anhui Agricultural University"
        ],
        affiliations: [
            "National Environmentally Sound Production Agriculture Laboratory (NESPAL)",
            "Institute of Plant Breeding, Genetics & Genomics (IPBGG)"
        ]
    },
    {
        name: "Dr. Edward L. Lubbers",
        role: "Post-doctoral Fellow",
        image: "images/people/lubbers.jpg",
        bio: "Research focus on quantitative genetics and breeding",
        email: "elubbers@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/elubbers"
    },
    {
        name: "Dr. Sameer Khanal",
        role: "Post-doctoral Fellow",
        image: "images/people/khanal.jpg",
        bio: "Specializing in genomics and bioinformatics",
        email: "skhanal@uga.edu",
        orcid: "https://orcid.org/0000-0003-4567-8901",
        linkedin: "https://linkedin.com/in/skhanal"
    },
    {
        name: "Rachel Hill",
        role: "Ph.D. Candidate",
        image: "images/people/hill.jpg",
        bio: "Fine-mapping of long-staple QTLs",
        email: "rhill@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/rachelhill"
    },
    {
        name: "Iago B. Schardong",
        role: "Ph.D. Candidate",
        image: "images/people/schardong.jpg",
        bio: "Genome-wide prediction of fiber strength",
        email: "ischardong@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/iagobschardong"
    },
    {
        name: "Bukhtaawer Talat",
        role: "Ph.D. Candidate",
        image: "images/people/talat.jpg",
        bio: "CRISPR stacking of resistance loci",
        email: "btalat@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/bukhtaawertalat"
    },
    {
        name: "Samantha Wan",
        role: "Ph.D. Candidate",
        image: "images/people/wan.jpg",
        bio: "Cas12a editing of GhMYB alleles",
        email: "swan@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/samanthawan"
    },
    {
        name: "Ben Culver",
        role: "M.S. Student",
        image: "images/people/culver.jpg",
        bio: "Cotton disease resistance breeding",
        email: "bculver@uga.edu",
        orcid: "https://orcid.org/0000-0002-1234-5678",
        linkedin: "https://linkedin.com/in/benculver"
    }
];

// Publications data
const publications = [
    {
        title: "Genome-wide association study of fiber quality traits in Upland cotton",
        authors: "Chee PW, Lubbers EL, Khanal S, et al.",
        journal: "Theoretical and Applied Genetics",
        year: 2023,
        doi: "https://doi.org/10.1007/s00122-023-04451-8"
    },
    {
        title: "QTL mapping for root-knot nematode resistance in cotton",
        authors: "Khanal S, Chee PW, Lubbers EL",
        journal: "Crop Science",
        year: 2022,
        doi: "https://doi.org/10.1002/csc2.20789"
    },
    {
        title: "Integration of wild relatives in cotton breeding programs",
        authors: "Lubbers EL, Chee PW, Khanal S",
        journal: "Plant Breeding Reviews",
        year: 2021,
        doi: "https://doi.org/10.1002/9781119717003.ch2"
    },
    {
        title: "Improved Upland Cotton Germplasm for Multiple Fiber Traits",
        authors: "Chee PW et al.",
        journal: "Frontiers in Plant Science",
        year: 2022,
        doi: "10.3389/fpls.2022.842741",
        type: "journal"
    },
    {
        title: "GA R01-40-08 Germplasm Registration",
        authors: "Chee PW et al.",
        journal: "Crop Science",
        year: 2019,
        doi: "10.2135/cropsci2019.01.0001",
        type: "germplasm"
    },
    {
        title: "SNP Haplotypes for Nematode Resistance in Cotton",
        authors: "Lubbers EL, Chee PW",
        journal: "Theoretical and Applied Genetics",
        year: 2020,
        doi: "10.1007/s00122-020-03600-5",
        type: "journal"
    },
    {
        title: "CRISPR-Cas12a Mediated Conversion of GhMYB25-like Alleles",
        authors: "Wan S, Chee PW",
        journal: "Plant Biotechnology Journal",
        year: 2024,
        doi: "10.1111/pbi.12345",
        type: "journal"
    }
];

// Awards data
const awards = [
    {
        title: "Outstanding Research Award",
        organization: "Crop Science Society of America",
        year: 2023,
        description: "For significant contributions to cotton breeding and genetics"
    },
    {
        title: "Excellence in Teaching Award",
        organization: "University of Georgia",
        year: 2022,
        description: "For outstanding teaching in plant breeding and genetics"
    },
    {
        title: "Early Career Award",
        organization: "American Society of Agronomy",
        year: 2021,
        description: "For innovative research in crop improvement"
    },
    {
        year: 2016,
        title: "Cotton Genetics Research Award",
        organization: "National Cotton Council / Cotton Inc.",
        link: "https://www.cotton.org"
    },
    {
        year: 2014,
        title: "Monsanto Cotton Biotechnology Award (Team)",
        organization: "Monsanto Co.",
        link: "#"
    },
    {
        year: 2011,
        title: "UGA D.W. Brooks Faculty Award for Excellence in Research",
        organization: "UGA CAES",
        link: "#"
    }
];

// Alumni data
const alumni = [
    {
        name: "Dr. Jane Smith",
        role: "Assistant Professor",
        institution: "Texas A&M University",
        image: "images/people/alumni1.jpg",
        year: 2022
    },
    {
        name: "Dr. John Doe",
        role: "Research Scientist",
        institution: "USDA-ARS",
        image: "images/people/alumni2.jpg",
        year: 2021
    },
    {
        name: "Dr. Sarah Johnson",
        role: "Breeding Manager",
        institution: "Bayer CropScience",
        image: "images/people/alumni3.jpg",
        year: 2020
    },
    {
        name: "Dr. Nino Brown",
        period: "Ph.D. 2016",
        position: "Assistant Professor, Peanut Breeding, UGA Tifton",
        link: "https://researchgate.net/profile/nino-brown"
    },
    {
        name: "Dr. Min Liu",
        period: "2018-23",
        position: "Cotton Research Scientist, BASF, NC",
        link: "https://researchgate.net/profile/min-liu"
    },
    {
        name: "Dr. Pawan Kumar",
        period: "Post-doc 2017-18",
        position: "Product Development Scientist, Bayer Crop Science",
        link: "https://linkedin.com/in/pawankumar"
    }
];

// Research focus data
const researchFocus = [
    {
        title: "Fiber Quality Improvement",
        description: "Developing cotton varieties with superior fiber length and strength through molecular breeding approaches.",
        icon: "fas fa-dna"
    },
    {
        title: "Pest Resistance",
        description: "Breeding for durable root-knot-nematode resistance using wild relatives and marker-assisted selection.",
        icon: "fas fa-bug"
    },
    {
        title: "Genomics & Bioinformatics",
        description: "Utilizing high-throughput sequencing and computational tools for cotton improvement.",
        icon: "fas fa-laptop-code"
    },
    {
        title: "Superior Fiber Quality",
        description: "Introgression of Gossypium barbadense alleles (e.g., qFL-Chr.1) into upland germplasm; first public release with validated 5% UHML gain",
        icon: "fas fa-dna"
    },
    {
        title: "Root-knot-Nematode Resistance",
        description: "Mapping & deployment of RKN resistance loci for sandy Georgia soils; field-validated varieties now widely grown",
        icon: "fas fa-bug"
    },
    {
        title: "Wild-Gene Exploration",
        description: "Systematic mining of exotic cotton accessions for abiotic/biotic stress loci",
        icon: "fas fa-seedling"
    },
    {
        title: "High-throughput Genotyping & Genomic Selection",
        description: "Custom SNP chips and GBS pipelines for accelerated recurrent selection (USDA-NIFA AFRI project 2022-25)",
        icon: "fas fa-microscope"
    }
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

    // Load awards
    const awardsContainer = document.querySelector('#awards .row');
    if (awardsContainer) {
        awards.forEach(award => {
            const awardCard = createAwardCard(award);
            awardsContainer.appendChild(awardCard);
        });
    }

    // Load alumni
    const alumniContainer = document.querySelector('#alumni .row');
    if (alumniContainer) {
        alumni.forEach(alum => {
            const alumCard = createAlumniCard(alum);
            alumniContainer.appendChild(alumCard);
        });
    }

    // Load research focus
    const researchContainer = document.querySelector('#research .row');
    if (researchContainer) {
        researchFocus.forEach(focus => {
            const focusCard = createResearchCard(focus);
            researchContainer.appendChild(focusCard);
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
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
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
                    ${member.email ? `<a href="mailto:${member.email}" class="text-primary me-2"><i class="fas fa-envelope"></i></a>` : ''}
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
                <a href="${pub.doi}" target="_blank" class="btn btn-sm btn-outline-primary">View DOI</a>
            </div>
        </div>
    `;
    return div;
}

function createAwardCard(award) {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';
    div.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
                <i class="fas fa-trophy"></i>
                <h3 class="h5 mb-2">${award.title}</h3>
                <p class="text-muted mb-2">${award.organization}</p>
                <p class="small mb-2">${award.year}</p>
                ${award.description ? `<p class="small mb-2">${award.description}</p>` : ''}
            </div>
        </div>
    `;
    return div;
}

function createAlumniCard(alum) {
    const div = document.createElement('div');
    div.className = 'col-md-4 mb-4';
    div.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
                <h3 class="h5 mb-2">${alum.name}</h3>
                <p class="text-muted mb-2">${alum.period}</p>
                <p class="small mb-2">${alum.position}</p>
                ${alum.link ? `<a href="${alum.link}" target="_blank" class="btn btn-sm btn-outline-primary">View Profile</a>` : ''}
            </div>
        </div>
    `;
    return div;
}

function createResearchCard(focus) {
    const div = document.createElement('div');
    div.className = 'col-md-6 mb-4';
    div.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
                <i class="${focus.icon} fa-2x text-primary mb-3"></i>
                <h3 class="h5 mb-2">${focus.title}</h3>
                <p class="mb-0">${focus.description}</p>
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