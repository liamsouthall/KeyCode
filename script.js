const evKey = document.getElementById("eventKey");
const evWhich = document.getElementById("eventWhich");
const evCode = document.getElementById("eventCode");
const BNumber = document.getElementById("bigNumber");

document.addEventListener("keypress", () => {
  BNumber.textContent = event.which;
  evKey.textContent = event.key;
  evWhich.textContent = event.which;
  evCode.textContent = event.code;
});
