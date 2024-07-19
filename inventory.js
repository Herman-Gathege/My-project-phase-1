


/*// Get modal elements
const modal = document.getElementById('addArtModal');
const addArtBtn = document.getElementById('addArtBtn');
const closeBtn = document.getElementsByClassName('close')[0];
const artList = document.getElementById('artList');

// Show modal when add art button is clicked
addArtBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Fetch and display art pieces
function fetchArtPieces() {
    fetch('http://localhost:3000/art')
    .then(response => response.json())
    .then(data => {
        artList.innerHTML = '';
        data.forEach(art => {
            const artItem = document.createElement('div');
            artItem.className = 'pro';

            artItem.innerHTML = `
                <img src="${art.image}" alt="">
                <div class="description">
                  <span>${art.title}</span>
                  <h5>${art.description}</h5>
                  <div class="star">${generateStars(art.rating)}</div>
                  <h4>$${art.price}</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                <button onclick="deleteArtPiece(${art.id})">Delete</button>
            `;
            artList.appendChild(artItem);
        });
    });
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Handle form submission to add art piece
document.getElementById('addArtForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const year = document.getElementById('year').value;
    const image = document.getElementById('image').value; // Add a new input for image URL
    const price = parseFloat(document.getElementById('price').value);

    const artData = {
        title: title,
        description: `Acrylic Painting: ${artist}`,
        rating: 5, // Assuming a default rating of 5
        image: image,
        price: price
    };

    fetch('http://localhost:3000/art', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(artData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Art added:', data);
        modal.style.display = 'none';
        fetchArtPieces();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Delete art piece
function deleteArtPiece(id) {
    fetch(`http://localhost:3000/art/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Art deleted:', data);
        fetchArtPieces();
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Initial fetch of art pieces
fetchArtPieces();*/



let artData = {
    "art": [
        {
            "id": 1,
            "image": "assets/pics/art1.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        // ... other art pieces
    ]
};

function searchArt() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const artList = document.getElementById('artList');
    artList.innerHTML = '';

    const filteredArt = artData.art.filter(art => art.description.toLowerCase().includes(searchInput));
    
    if (filteredArt.length > 0) {
        filteredArt.forEach(art => {
            const artItem = document.createElement('div');
            artItem.classList.add('art-item');
            
            artItem.innerHTML = `
                <img src="${art.image}" alt="${art.title}">
                <h3>${art.title}</h3>
                <p>${art.description}</p>
                <p>Rating: ${art.rating}</p>
                <p>Price: $${art.price}</p>
                <button class="delete-button" onclick="deleteArt(${art.id})">Delete</button>
            `;
            artList.appendChild(artItem);
        });
    } else {
        artList.innerHTML = '<p>No art found.</p>';
    }
}

function addArt() {
    const title = document.getElementById('artTitle').value;
    const description = document.getElementById('artDescription').value;
    const rating = document.getElementById('artRating').value;
    const price = document.getElementById('artPrice').value;
    const image = document.getElementById('artImage').value;

    const newArt = {
        id: artData.art.length + 1,
        image: image,
        title: title,
        description: description,
        rating: Number(rating),
        price: Number(price)
    };

    artData.art.push(newArt);
    alert('Art added successfully!');
    searchArt(); // Refresh the art list to include the new art
}

function deleteArt(id) {
    artData.art = artData.art.filter(art => art.id !== id);
    alert('Art deleted successfully!');
    searchArt(); // Refresh the art list to reflect the deletion
}