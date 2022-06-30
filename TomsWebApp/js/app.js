const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/cat1.jpg" },
  { name: "Voluptatem", image: "images/cat1.jpg" },
  { name: "Explicabo", image: "images/cat1.jpg" },
  { name: "Rchitecto", image: "images/cat1.jpg" },
  { name: " Beatae", image: "images/cat1.jpg" },
  { name: " Vitae", image: "images/cat1.jpg" },
  { name: "Inventore", image: "images/cat1.jpg" },
  { name: "Veritatis", image: "images/cat1.jpg" },
  { name: "Accusantium", image: "images/cat1.jpg" },
]

const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
