const a = new Date();
const b = new Date();
const c = new Date();
const d = new Date();
const e = new Date();
const f = new Date();

document.getElementById("demo").innerHTML = a.getFullYear() + "Year-" + (b.getMonth() + 1) + "Month-" + c.getDate() + "Day-" + d.getHours() + "Hours-" + e.getMinutes() + "Minutes-" + f.getSeconds() + "Secoond";