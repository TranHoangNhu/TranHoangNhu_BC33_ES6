const heading = document.querySelector(".heading");
(jump = (e) => {
  return [...e].map((e) => `<span>${e}</span>`).join("");
}),
  (heading.innerHTML = jump(heading.innerText));
