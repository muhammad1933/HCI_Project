document.addEventListener("DOMContentLoaded", function () {
    // News content
    const newsContent = [
        {
            title: "Sports Day 2024",
            date: "2024-10-10",
            description: "Join us for our annual Sports Day event! There will be competitions, activities, and fun for the whole family."
        },
        {
            title: "New Facilities Opening",
            date: "2024-07-25",
            description: "We are excited to announce the opening of new sports facilities at our center."
        },
        {
            title: "Cross-Country 2024",
            date: "2024-11-10",
            description: "Registration is now open for the Cross-Country 2024. Register and participate in this exciting event."
        },
        {
            title: "Government Communique 2024",
            date: "2024-07-25",
            description: "In case of Cyclone Warning Class 2 or warning of Torrential Rainfall or related directive from the NATIONAL EMERGENCY OPERATIONS COMMAND (NEOC). All sports infrastructure and other recreational centres will be closed, until further notice."
        },
    ];

    const newsContainer = document.getElementById("news-content");

    if (newsContainer) {
        newsContent.forEach(news => {
            const newsItem = document.createElement("div");
            newsItem.className = "list-group-item";
            newsItem.innerHTML = `<h5>${news.title}</h5><small>${news.date}</small><p>${news.description}</p>`;
            newsContainer.appendChild(newsItem);
        });
    } else {
        console.error("News container not found");
    }
});