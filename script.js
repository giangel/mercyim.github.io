document.addEventListener('DOMContentLoaded', (event) => {
    // Counter Animation
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter .value');
                let maxDuration = 0; // Variable to track the longest count duration
                const countersData = [];

                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-value');
                    const duration = target / 1000; // Duration based on increment speed
                    if (duration > maxDuration) maxDuration = duration; // Set the longest duration
                    countersData.push({ counter, target, duration });
                });

                // Start all counters simultaneously but sync their end time
                countersData.forEach(({ counter, target }) => {
                    let count = 0;
                    const increment = target / (maxDuration * 1.5); // Adjust increment for uniform end time
                    const updateCount = () => {
                        if (count < target) {
                            count = Math.min(count + increment, target);
                            counter.innerText = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    requestAnimationFrame(updateCount);
                });

                // Only trigger once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('#counterSection').forEach(counterSection => {
        counterObserver.observe(counterSection);
    });

    // Home page header button click handlers
    const buttons = [
        { id: "button1", url: "about.html" },
        { id: "button2", url: "outpatientClinic.html" },
        { id: "button3", url: "medicalMission.html" },
        { id: "button4", url: "guestHouse.html" },
        { id: "button5", url: "mobileClinic.html" },
        { id: "button0", url: "villageOfHope.html" },
        { id: "button7", url: "telemedicine.html" },
        { id: "button8", url: "medicalClinic.html" }
    ];

    buttons.forEach(btn => {
        const button = document.getElementById(btn.id);
        if (button) {
            button.addEventListener("click", function () {
                window.location.href = btn.url;
            });
        }
    });

    // Activities click handler
    const activities = document.querySelectorAll('.activity');
    activities.forEach(activity => {
        activity.addEventListener('click', function () {
            const activityId = this.getAttribute('data-id');
            
            switch (activityId) {
                case 'community-outreach':
                    window.location.href = 'communityOutreach.html';
                    break;
                case 'youth-empowerment':
                    window.location.href = 'youth.html';
                    break;
                case 'children-sport':
                    window.location.href = 'children.html';
                    break;
                case 'community-development':
                    window.location.href = 'communityDevelopment.html';
                    break;
                default:
                    window.location.href = `activity.html?id=${activityId}`;
            }
        });
    });

    

    // Animation for activities and services when in viewport
    const services = document.querySelectorAll('.service');

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateElements(elements) {
        elements.forEach(element => {
            if (isInViewport(element) && !element.classList.contains('animate')) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', function () {
        animateElements(activities);
        animateElements(services);
    });

    // Initialize the map
    var map = L.map('map').setView([7.6755, 5.2353], 12); // Osi-Ekiti coordinates

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adding markers for villages (example for one village, you'll need to add more for all villages)
    L.marker([7.6755, 5.2353]).addTo(map)
        .bindPopup('Igbole - 1.8km from Osi-Ekiti');

    // Add more markers for other villages here, for example:
    // L.marker([Lat, Lng]).addTo(map).bindPopup('Village Name - Distance');
});

document.addEventListener('DOMContentLoaded', () => {
    function animateCounter(el, target) {
        let count = 0;
        const increment = Math.ceil(target / 200); // Smooth count up
        const updateCount = () => {
            if (count < target) {
                count += increment;
                if (count > target) {
                    count = target;
                }
                el.textContent = count;
                requestAnimationFrame(updateCount);
            }
        };
        updateCount();
    }

    const counterEl = document.getElementById('counter');
    if (counterEl) {
        animateCounter(counterEl, parseInt(counterEl.getAttribute('data-target'), 10));
    }
});

function submitVolunteer() {
   /* const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (fullName && phoneNumber) {
        alert('Thank you for volunteering! We will contact you soon.');
        // Here you would typically send this data to a server, but since we can't execute code:
        console.log('Volunteer submitted:', { fullName, phoneNumber });
    } else {
        alert('Please fill in all fields.');
    }
        */

    // Construct the mailto link
    let mailtoLink = "mailto:giangel@gmail.com" +
                     "?subject=Volunteer Application" +
                     "&body=Please enter your full name and phone number below%0A%0AName:%0APhone Number:";

    // Open the default email client with the pre-filled information
    window.location.href = mailtoLink;
}