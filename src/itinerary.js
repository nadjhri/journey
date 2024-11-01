// Array to hold itinerary items
let itineraries = [];

// Function to add or update itinerary
function addToItinerary() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const country = document.getElementById('country').value;
    const city = document.getElementById('city').value;
    const landmarks = document.getElementById('landmarks').value;
    const notes = document.getElementById('notes').value;

    // Check if we're in edit mode
    const isEditing = document.getElementById('addButton').dataset.editing === 'true';
    const editIndex = document.getElementById('addButton').dataset.index;

    if (isEditing) {
        // Update the existing itinerary item if editing
        itineraries[editIndex] = { name, phone, date, country, city, landmarks, notes };
        document.getElementById('addButton').innerText = 'Add to Itinerary';
        document.getElementById('addButton').dataset.editing = 'false';
    } else {
        // Add new itinerary item
        itineraries.push({ name, phone, date, country, city, landmarks, notes });
    }

    // Clear form and display updated itinerary list
    clearForm();
    displayItineraries();
}

// Function to display itinerary items
function displayItineraries() {
    const itineraryList = document.getElementById('itineraryList');
    itineraryList.innerHTML = '';

    itineraries.forEach((itinerary, index) => {
        const itineraryItem = document.createElement('div');
        itineraryItem.classList.add('itinerary-item');
        itineraryItem.innerHTML = `
            <h3>Destination: ${itinerary.country}</h3>
            <p><strong>City:</strong> ${itinerary.city}</p>
            <p><strong>Activity:</strong> ${itinerary.landmarks}</p>
            <p><strong>Traveler:</strong> ${itinerary.name} (${itinerary.phone})</p>
            <p><strong>Date:</strong> ${itinerary.date}</p>
            <p><strong>Notes:</strong> ${itinerary.notes}</p>
            <button class="edit-button" onclick="editItinerary(${index})">Edit</button>
            <button class="delete-button" onclick="deleteItinerary(${index})">Delete</button>
        `;
        itineraryList.appendChild(itineraryItem);
    });
}

// Function to clear the form
function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('date').value = '';
    document.getElementById('country').value = '';
    document.getElementById('city').value = '';
    document.getElementById('landmarks').value = '';
    document.getElementById('notes').value = '';
    document.getElementById('addButton').innerText = 'Add to Itinerary';
    document.getElementById('addButton').dataset.editing = 'false';
    delete document.getElementById('addButton').dataset.index;
}

// Function to edit an itinerary item
function editItinerary(index) {
    const itinerary = itineraries[index];
    document.getElementById('name').value = itinerary.name;
    document.getElementById('phone').value = itinerary.phone;
    document.getElementById('date').value = itinerary.date;
    document.getElementById('country').value = itinerary.country;
    document.getElementById('city').value = itinerary.city;
    document.getElementById('landmarks').value = itinerary.landmarks;
    document.getElementById('notes').value = itinerary.notes;
    
    // Set button text and edit state
    document.getElementById('addButton').innerText = 'Update Itinerary';
    document.getElementById('addButton').dataset.editing = 'true';
    document.getElementById('addButton').dataset.index = index;
}

// Function to delete an itinerary item
function deleteItinerary(index) {
    itineraries.splice(index, 1);
    displayItineraries();
}

// Function to toggle the display of all itineraries
function toggleItineraries() {
    const itineraryList = document.getElementById('itineraryList');
    const viewAllButton = document.getElementById('viewAllButton');

    // Check if itineraries are currently visible
    if (itineraryList.style.display === 'none' || itineraryList.style.display === '') {
        displayItineraries();
        itineraryList.style.display = 'block';
        viewAllButton.innerText = 'Hide All Itineraries';
    } else {
        itineraryList.style.display = 'none';
        viewAllButton.innerText = 'View All Itineraries';
    }
}
