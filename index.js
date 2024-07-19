// Get modal elements
const modal = document.getElementById('signupModal');
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.getElementsByClassName('close')[0];

// Show modal when signup button is clicked
signupBtn.onclick = function() {
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

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        username: username,
        email: email,
        password: password
    };

    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        modal.style.display = 'none';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});



/*const artList = document.getElementById('artList');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', filterArtPieces);

// Fetch and display art pieces
function fetchArtPieces() {
    fetch('http://localhost:3000/art')
    .then(response => response.json())
    .then(data => {
        displayArtPieces(data);
    });
}

// Display art pieces
function displayArtPieces(artPieces) {
    artList.innerHTML = '';
    artPieces.forEach(art => {
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
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return stars;
}

// Filter art pieces based on search input
function filterArtPieces() {
    const searchValue = searchInput.value.toLowerCase();
    fetch('http://localhost:3000/art')
    .then(response => response.json())
    .then(data => {
        const filteredArt = data.filter(art => art.description.toLowerCase().includes(searchValue));
        displayArtPieces(filteredArt);
    });
}*/

const artData = {
    "art": [
        {
            "id": 1,
            "image": "assets/pics/art1.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 2,
            "image": "assets/pics/art-2.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Abel M",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 3,
            "image": "assets/pics/art-3.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 4,
            "image": "assets/pics/art4.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 5,
            "image": "assets/pics/art5.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 6,
            "image": "assets/pics/art6.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 7,
            "image": "assets/pics/art7.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        },
        {
            "id": 8,
            "image": "assets/pics/art8.0.png",
            "title": "Day Break",
            "description": "Acrylic Painting: Siralie Y",
            "rating": 5,
            "price": 4000
        }
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
                <button class="close-button" onclick="removeArtItem(this)">Close</button>
            `;
            artList.appendChild(artItem);
        });
    } else {
        artList.innerHTML = '<p>No art found.</p>';
    }
}

function removeArtItem(button) {
    const artItem = button.parentElement;
    artItem.remove();
}




// Handle form submission to add art piece
document.getElementById('addArtForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const artist = document.getElementById('artist').value;
    const year = document.getElementById('year').value;
    const image = document.getElementById('image').value;
    const price = parseFloat(document.getElementById('price').value);

    const artData = {
        title: title,
        description: `Acrylic Painting: ${artist}`,
        rating: 5,
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
fetchArtPieces();

// Function to open the comment modal
function openCommentModal(artId) {
    const modal = document.getElementById('commentModal');
    modal.style.display = 'block';

    // Example: Set a hidden input field with the selected art piece ID
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.name = 'artId';
    hiddenInput.value = artId;
    document.getElementById('commentForm').appendChild(hiddenInput);
}

// Function to close the comment modal
function closeCommentModal() {
    const modal = document.getElementById('commentModal');
    modal.style.display = 'none';
}

// Handle form submission for sending a comment
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Example: Fetch the form data
    const formData = new FormData(this);
    const commentText = formData.get('commentText');
    const artId = formData.get('artId'); // Retrieve art ID

    // Example: Send the comment data (you would typically send it to a server)
    console.log(`Sending comment: "${commentText}" for art ID: ${artId}`);

    // Close the modal after submitting
    closeCommentModal();
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here, you would send the data to the server or email API
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Your message has been sent!');
    
    // Optionally, clear the form
    document.getElementById('contactForm').reset();
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    fetch('https://your-server-endpoint.com/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your message has been sent!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });

    // Optionally, clear the form
    document.getElementById('contactForm').reset();
});