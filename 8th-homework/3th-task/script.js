const div = document.createElement("div");
div.className = "notification";
div.innerHTML = "This is a very important notification!";

setTimeout(() => document.body.append(div), 1500);

setTimeout(() => div.remove(), 5000);
