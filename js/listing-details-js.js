// Property data for different listings

const propertyData = {
    1: {
        title: "Downtown Luxury Complex",
        address: "123 Main Street, Downtown, City 12345",
        bedrooms: "2-3",
        bathrooms: "2",
        sqft: "1,200-1,500",
        rentRange: "$1,800 - $2,400",
        description: "Experience luxury living in the heart of downtown with this stunning apartment complex. Featuring modern amenities, spacious floor plans, and premium finishes throughout. Located within walking distance of restaurants, shopping, and public transportation.",
        images: [
            "assets/images/property-1.png",
            "assets/images/property-2.png",
            "assets/images/property-3.png",
            "assets/images/property-4.png",
            "assets/images/property-5.png",
            "assets/images/property-6.png",
            "assets/images/property-7.png",
            "assets/images/property-8.png"
        ]
    },
    2: {
        title: "Suburban Family Homes",
        address: "456 Oak Avenue, Suburban Heights, City 12346",
        bedrooms: "3-4",
        bathrooms: "2-3",
        sqft: "1,800-2,200",
        rentRange: "$2,200 - $2,800",
        description: "Beautiful single-family homes in a quiet residential neighborhood. Perfect for families with children, featuring large yards, modern kitchens, and spacious living areas. Close to top-rated schools and parks.",
        images: [
            "assets/images/property-2.png",
            "assets/images/property-1.png",
            "assets/images/property-3.png",
            "assets/images/property-4.png",
            "assets/images/property-5.png",
            "assets/images/property-6.png",
            "assets/images/property-7.png",
            "assets/images/property-8.png"
        ]
    },
    3: {
        title: "Waterfront Condominiums",
        address: "789 Lake Shore Drive, Waterfront District, City 12347",
        bedrooms: "1-2",
        bathrooms: "1-2",
        sqft: "900-1,400",
        rentRange: "$2,000 - $3,200",
        description: "Stunning lakefront condos with panoramic water views. Enjoy morning sunrises and evening sunsets from your private balcony. Premium building amenities include concierge service, rooftop deck, and boat dock access.",
        images: [
            "assets/images/property-3.png",
            "assets/images/property-1.png",
            "assets/images/property-2.png",
            "assets/images/property-4.png",
            "assets/images/property-5.png",
            "assets/images/property-6.png",
            "assets/images/property-7.png",
            "assets/images/property-8.png"
        ]
    }
    // Add more properties as needed...
};

// Image gallery functionality
let currentImageIndex = 0;
let currentImages = [];

function initializeListing() {
    const urlParams = new URLSearchParams(window.location.search);
    const listingId = urlParams.get('id') || '1';
    const property = propertyData[listingId];
    
    if (property) {
        // Update property information
        document.getElementById('propertyTitle').textContent = property.title;
        document.getElementById('propertyAddress').textContent = property.address;
        document.getElementById('bedrooms').textContent = property.bedrooms;
        document.getElementById('bathrooms').textContent = property.bathrooms;
        document.getElementById('sqft').textContent = property.sqft;
        document.getElementById('rentRange').textContent = property.rentRange;
        document.getElementById('propertyDescription').textContent = property.description;
        
        // Initialize image gallery
        currentImages = property.images;
        setupImageGallery();
    }
}

function setupImageGallery() {
    const mainImage = document.getElementById('mainImage');
    const thumbnailStrip = document.querySelector('.thumbnail-strip');
    
    // Set main image
    mainImage.src = currentImages[0];
    
    // Create thumbnails
    thumbnailStrip.innerHTML = '';
    currentImages.forEach((imageSrc, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = imageSrc;
        thumbnail.alt = `Thumbnail ${index + 1}`;
        thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
        thumbnail.onclick = () => showImage(index);
        thumbnailStrip.appendChild(thumbnail);
    });
    
    updateImageCounter();
}

function showImage(index) {
    currentImageIndex = index;
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // Update main image
    mainImage.src = currentImages[index];
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    updateImageCounter();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    showImage(currentImageIndex);
}

function updateImageCounter() {
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeListing);

// Quick inquiry form handling
document.getElementById('quickInquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    this.reset();
});