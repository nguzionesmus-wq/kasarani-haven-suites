// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 250; // Account for fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Gallery Modal
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.querySelector('.modal-close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imageSrc = item.getAttribute('data-src');
        const videoSrc = item.getAttribute('data-video');
        const caption = item.querySelector('.gallery-overlay p').textContent;
        
        if (videoSrc) {
            modalImage.style.display = 'none';
            
            // Remove any existing iframe
            const existingIframe = document.querySelector('#galleryModal iframe');
            if (existingIframe) {
                existingIframe.remove();
            }
            
            // Use HTML5 video for local files
            modalVideo.style.display = 'block';
            modalVideo.src = videoSrc;
            modalVideo.autoplay = true;
            modalVideo.controls = true;
        } else {
            const existingIframe = document.querySelector('#galleryModal iframe');
            if (existingIframe) {
                existingIframe.remove();
            }
            modalVideo.style.display = 'none';
            modalImage.style.display = 'block';
            modalImage.src = imageSrc;
        }
        
        modalCaption.textContent = caption;
        modal.classList.add('active');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    const existingIframe = document.querySelector('#galleryModal iframe');
    if (existingIframe) {
        existingIframe.remove();
    }
    modalVideo.pause();
    modalVideo.src = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        const existingIframe = document.querySelector('#galleryModal iframe');
        if (existingIframe) {
            existingIframe.remove();
        }
        modalVideo.pause();
        modalVideo.src = '';
    }
});

// Booking Calendar
const checkInInput = document.getElementById('checkInDate');
const checkOutInput = document.getElementById('checkOutDate');
const guestCountSpan = document.getElementById('guestCount');
const decreaseBtn = document.getElementById('decreaseGuests');
const increaseBtn = document.getElementById('increaseGuests');
const bookingInfoDiv = document.getElementById('bookingInfo');
const bookNowBtn = document.getElementById('bookNowBtn');

let guestCount = 2;

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
checkInInput.setAttribute('min', today);

// Update check-out minimum when check-in changes
checkInInput.addEventListener('change', () => {
    const checkIn = new Date(checkInInput.value);
    const nextDay = new Date(checkIn);
    nextDay.setDate(nextDay.getDate() + 1);
    const minCheckOut = nextDay.toISOString().split('T')[0];
    checkOutInput.setAttribute('min', minCheckOut);
    if (checkOutInput.value && checkOutInput.value <= checkInInput.value) {
        checkOutInput.value = '';
    }
    updateBookingInfo();
});

checkOutInput.addEventListener('change', updateBookingInfo);

decreaseBtn.addEventListener('click', () => {
    if (guestCount > 1) {
        guestCount--;
        guestCountSpan.textContent = guestCount;
        updateBookingInfo();
    }
});

increaseBtn.addEventListener('click', () => {
    if (guestCount < 4) {
        guestCount++;
        guestCountSpan.textContent = guestCount;
        updateBookingInfo();
    }
});

function updateBookingInfo() {
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    
    if (!checkIn || !checkOut) {
        bookingInfoDiv.innerHTML = '<p style="color: var(--gray-600); text-align: center;">Select your check-in and check-out dates</p>';
        return;
    }
    
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    if (nights <= 0) {
        bookingInfoDiv.innerHTML = '<p style="color: red; text-align: center;">Check-out must be after check-in</p>';
        return;
    }
    
    const pricePerNight = 3000;
    const total = nights * pricePerNight;
    const hasDiscount = nights >= 5;
    
    let html = `
        <div class="booking-detail">
            <span>Check-in:</span>
            <span>${checkInDate.toLocaleDateString()}</span>
        </div>
        <div class="booking-detail">
            <span>Check-out:</span>
            <span>${checkOutDate.toLocaleDateString()}</span>
        </div>
        <div class="booking-detail">
            <span>Number of nights:</span>
            <span>${nights}</span>
        </div>
        <div class="booking-detail">
            <span>KSh 3,000 × ${nights} nights:</span>
            <span>KSh ${total.toLocaleString()}</span>
        </div>
    `;
    
    if (hasDiscount) {
        html += `
            <div style="background: #dcfce7; color: #166534; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                🌿 5+ nights discount applicable! Contact us for special rates.
            </div>
        `;
    }
    
    html += `
        <div class="booking-detail booking-total">
            <span class="total-label">Estimated Total:</span>
            <span class="total-amount">KSh ${total.toLocaleString()}</span>
        </div>
    `;
    
    bookingInfoDiv.innerHTML = html;
}

// WhatsApp Booking
bookNowBtn.addEventListener('click', () => {
    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    
    let message = 'Hi, I would like to book Kasarani Haven Suites\n\n';
    
    if (checkIn) {
        const checkInDate = new Date(checkIn);
        message += `Check-in: ${checkInDate.toLocaleDateString()}\n`;
    }
    
    if (checkOut) {
        const checkOutDate = new Date(checkOut);
        message += `Check-out: ${checkOutDate.toLocaleDateString()}\n`;
    }
    
    if (checkIn && checkOut) {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        const total = nights * 3000;
        
        message += `Nights: ${nights}\n`;
        message += `Guests: ${guestCount}\n`;
        message += `Estimated Total: KSh ${total.toLocaleString()}`;
        
        if (nights >= 5) {
            message += ' (5+ nights discount applicable!)';
        }
    } else {
        message += `Guests: ${guestCount}`;
    }
    
    const whatsappUrl = `https://wa.me/254727832649?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// WhatsApp Widget
const whatsappBtn = document.getElementById('whatsappBtn');
const whatsappBubble = document.getElementById('whatsappBubble');
const closeBubble = document.getElementById('closeBubble');

whatsappBtn.addEventListener('click', () => {
    whatsappBubble.classList.toggle('hidden');
});

closeBubble.addEventListener('click', () => {
    whatsappBubble.classList.add('hidden');
});

// Cookie Consent
const cookieConsent = document.getElementById('cookieConsent');
const acceptCookies = document.getElementById('acceptCookies');
const rejectCookies = document.getElementById('rejectCookies');
const closeCookies = document.getElementById('closeCookies');

// Check if user has already made a choice
if (!localStorage.getItem('cookie-consent')) {
    // Show banner after 1 second
    setTimeout(() => {
        cookieConsent.classList.remove('hidden');
    }, 1000);
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'accepted');
    cookieConsent.classList.add('hidden');
});

rejectCookies.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'rejected');
    cookieConsent.classList.add('hidden');
});

closeCookies.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'rejected');
    cookieConsent.classList.add('hidden');
});

// Initialize
updateBookingInfo();