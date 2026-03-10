document.title = "FlightReacts";

let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/png';
link.rel = 'icon';
link.href = '/favicon.png';
document.head.appendChild(link);
