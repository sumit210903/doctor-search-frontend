
// ====== Navbar Toggle ======
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }
});

// ====== Password Visibility Toggle ======
document.querySelectorAll(".toggle-password").forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
      button.textContent = "Hide";
    } else {
      input.type = "password";
      button.textContent = "Show";
    }
  });
});

// ====== Simple Form Validation ======
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", (e) => {
    const requiredFields = form.querySelectorAll("[required]");
    let isValid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add("error");
        isValid = false;
      } else {
        field.classList.remove("error");
      }
    });
    if (!isValid) e.preventDefault();
  });
});

// ====== Auto-dismiss Alert Messages ======
setTimeout(() => {
  document.querySelectorAll(".alert").forEach(alert => alert.remove());
}, 3000);

// ====== Scroll-to-Top Button ======
const scrollBtn = document.querySelector(".scroll-to-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ====== Appointment Filtering (search by name or specialty) ======
const filterInput = document.getElementById("appointmentFilter");
if (filterInput) {
  filterInput.addEventListener("keyup", function () {
    const filter = filterInput.value.toLowerCase();
    document.querySelectorAll(".appointment-row").forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(filter) ? "" : "none";
    });
  });
}

// ====== Admin Dashboard Table Interactivity ======
document.querySelectorAll(".delete-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this appointment?")) {
      btn.closest("tr").remove();
    }
  });
});

const exportBtn = document.getElementById("exportExcel");
if (exportBtn) {
  exportBtn.addEventListener("click", () => {
    window.location.href = "export-excel.php";
  });
}
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Get the edit button by its class
  const editButton = document.querySelector(".edit-button");

  // Add click event to redirect to edit profile page
  if (editButton) {
    editButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      window.location.href = "edit-profile.html"; // Change to your target page
    });
  }
});
function bookAppointment(appointmentData) {
  fetch("http://localhost:3000/api/appointments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointmentData),
  })
    .then(response => response.json())
    .then(data => {
      alert("Appointment booked!");
      window.location.href = "thankyou.html";
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Booking failed.");
    });
}
// Example: Fetch all doctors
function fetchDoctors() {
  fetch("http://localhost:3000/api/doctors")
    .then(response => response.json())
    .then(data => {
      console.log("Doctors:", data);
      // Redirect or render doctor list dynamically
      window.location.href = "search-doctors.html";
    })
    .catch(error => {
      console.error("Error fetching doctors:", error);
      alert("Unable to load doctors.");
    });
}


