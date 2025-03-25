function toggleProfileDetails() {
    let sidebar = document.getElementById("profileSidebar");
    let profileDetails = document.createElement("div");
    profileDetails.id = "profileDetails";
    profileDetails.className = "profile-details bg-white text-black fixed right-0 top-0 h-full w-72 shadow-lg transition-transform transform translate-x-full p-6";
    profileDetails.innerHTML = `
        <span class="close-btn text-xl cursor-pointer absolute top-4 right-4" onclick="closeProfileDetails()">&times;</span>
        <h2 class="text-xl font-bold mb-4">User Profile</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Membership:</strong> Premium User</p>
        <p><strong>Orders:</strong> 12 Completed</p>
    `;

    if (!document.getElementById("profileDetails")) {
        document.body.appendChild(profileDetails);
        setTimeout(() => profileDetails.classList.remove("translate-x-full"), 10);
    }
}

function closeProfileDetails() {
    let profileDetails = document.getElementById("profileDetails");
    if (profileDetails) {
        profileDetails.classList.add("translate-x-full");
        setTimeout(() => profileDetails.remove(), 300);
    }
}
