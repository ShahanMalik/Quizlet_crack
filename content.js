function removeBlur() {
  console.log("removeBlur function executed");
  const elements = document.querySelectorAll(".b1xkd811");
  elements.forEach((element) => {
    element.style.filter = "none";
    console.log("Removed blur from:", element);
  });
}

function hideSection() {
  console.log("hideSection function executed");
  const sections = document.querySelectorAll(".o3dpi86.pxrylku");
  sections.forEach((section) => {
    section.style.display = "none";
    console.log("Hid section:", section);
  });
}

function applyChanges() {
  removeBlur();
  hideSection();
}

document.addEventListener("DOMContentLoaded", applyChanges);
document.addEventListener("load", applyChanges);
document.addEventListener("scroll", applyChanges);
document.addEventListener("resize", applyChanges);
