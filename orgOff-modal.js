/* ------------------------------------------------------------------
   Officers modal
   Clicking an org card (CETS, SocITech, SAHM, ABESS, EPAFPT, SEEC)
   opens a panel: org logo on the left, officers on the right in a
   horizontally swipeable strip.

   TO ADD YOUR REAL OFFICERS:
   Just edit the "officers" array for each org key below.
   Each officer needs: name, role, img (path to their photo).
   You can add as many officers as you want — the strip scrolls.
------------------------------------------------------------------ */

const orgData = {
  cets: {
    name: "CETS",
    subtitle: "Council of Engineering and Technology Students",
    logo: "images/cetsLogotrans.png",
    officers: [
      { name: "Bliss Montanez", role: "President", img: "images/Officers/CETS/bliss.jpg" },
      { name: "Jhon Rey Lacurda Vincente", role: "Vice President", img: "images/Officers/CETS/jhonray.jpg" },
      { name: "Officer Name", role: "Secretary", img: "images/cetsLogo.png" },
      { name: "Officer Name", role: "Treasurer", img: "images/cetsLogo.png" }
    ]
  },
  bsit: {
    name: "SocITech",
    subtitle: "Society of Information Technologists",
    logo: "images/bsitLogo.png",
    officers: [
      { name: "Officer Name", role: "President", img: "images/bsitLogo.png" },
      { name: "Officer Name", role: "Vice President", img: "images/bsitLogo.png" }
    ]
  },
  bshm: {
    name: "SAHM",
    subtitle: "Student Association of Hospitality Management",
    logo: "images/bshmLogo.jpg",
    officers: [
      { name: "Officer Name", role: "President", img: "images/bshmLogo.jpg" },
      { name: "Officer Name", role: "Vice President", img: "images/bshmLogo.jpg" }
    ]
  },
  bsabe: {
    name: "ABESS",
    subtitle: "Agricultural and Biosystems Engineering Students Society",
    logo: "images/bsabeLogo.jpg",
    officers: [
      { name: "Officer Name", role: "President", img: "images/bsabeLogo.jpg" },
      { name: "Officer Name", role: "Vice President", img: "images/bsabeLogo.jpg" }
    ]
  },
  bfpt: {
    name: "EntrePle",
    subtitle: "Entrepreneurial People Student Association of Food Processing and Technology",
    logo: "images/bfptLogo.jpg",
    officers: [
      { name: "Officer Name", role: "President", img: "images/bfptLogo.jpg" },
      { name: "Officer Name", role: "Vice President", img: "images/bfptLogo.jpg" }
    ]
  },
  bsene: {
    name: "SEECI",
    subtitle: "Society if Environmental Engineers Students Chapter Incorporated",
    logo: "images/bseneLogo.jpg",
    officers: [
      { name: "Officer Name", role: "President", img: "images/bseneLogo.jpg" },
      { name: "Officer Name", role: "Vice President", img: "images/bseneLogo.jpg" }
    ]
  },
  ppg: {
    name: "PPG",
    subtitle: "Philippine Society of Agricultural and Biosystems Engineers - Pre-Professional Group",
    logo: "images/PPGlogo.jpg",
    officers: [
      { name: "Officer Name", role: "President", img: "images/PPGlogo.jpg" },
      { name: "Officer Name", role: "Vice President", img: "images/PPGlogo.jpg" }
    ]
  },
  ppg: {
    name: "PPG",
    subtitle: "Philippine Society of Agricultural and Biosystems Engineers - Pre-Professional Group",
    logo: "images/PPGlogo.jpg",
    officers: [
      { name: "Officer Name", role: "President", img: "images/PPGlogo.jpg" },
      { name: "Officer Name", role: "Vice President", img: "images/PPGlogo.jpg" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("orgModal");
  const modalLogo = document.getElementById("orgModalLogo");
  const modalTitle = document.getElementById("orgModalTitle");
  const modalSubtitle = document.getElementById("orgModalSubtitle");
  const modalOfficers = document.getElementById("orgModalOfficers");

  if (!modal) return;

  function openModal(orgKey) {
    const data = orgData[orgKey];
    if (!data) return;

    modalLogo.src = data.logo;
    modalLogo.alt = data.name + " logo";
    modalTitle.textContent = data.name;
    modalSubtitle.textContent = data.subtitle;

    modalOfficers.innerHTML = "";
    data.officers.forEach((officer) => {
      const card = document.createElement("div");
      card.className = "officer-card";
      card.innerHTML = `
        <img src="${officer.img}" alt="${officer.name}">
        <h4>${officer.name}</h4>
        <p>${officer.role}</p>
      `;
      modalOfficers.appendChild(card);
    });

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // lock background scroll
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Open on click or Enter/Space (keyboard accessibility) for any .org-card
  document.querySelectorAll(".org-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.org));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(card.dataset.org);
      }
    });
  });

  // Close on overlay click, close button, or Escape key
  document.querySelectorAll("[data-close]").forEach((el) => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
});
