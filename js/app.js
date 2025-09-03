// List your movies here with link + thumbnail
// file = thumbnail filename in assets/thumb
// link = actual page or external link
const movies = [
  { title: "TV Shows", file: "tv.jpg", link: "tv.html" },
  { title: "Movies",   file: "movies.jpg", link: "porn.html" },
  { title: "Action",   file: "action.jpg", link: "categories/action.html" },
  { title: "Comedy",   file: "comedy.jpg", link: "categories/comedy.html" },
  // 👉 add more items here as needed
];

// Grid container
const grid = document.getElementById("moviesGrid");

// Render movies into grid
function renderMovies() {
  grid.innerHTML = "";
  movies.forEach(movie => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = movie.link;
    a.title = movie.title;

    const img = document.createElement("img");
    img.src = `assets/thumb/${movie.file}`;
    img.alt = movie.title;

    a.appendChild(img);
    grid.appendChild(a);
  });
}

// Initial render
renderMovies();

// Optional: Add Movie button
document.getElementById("addMovieBtn").addEventListener("click", () => {
  const title = prompt("Movie title?");
  if (!title) return;

  const file = prompt("Thumbnail filename (in assets/thumb/)?");
  if (!file) return;

  const link = prompt("Movie link (page or external URL)?", "#");
  if (!link) return;

  movies.push({ title, file, link });
  renderMovies();
});
