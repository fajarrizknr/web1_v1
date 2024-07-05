// JavaScript functions for transaction processing
function processTransaction() {
    const hotel = document.getElementById('hotel').value;
    const checkInDate = document.getElementById('checkIn').value;
    const checkOutDate = document.getElementById('checkOut').value;

    if (hotel && checkInDate && checkOutDate) {
        console.log(`Booking hotel ${hotel} from ${checkInDate} to ${checkOutDate}`);
        alert(`Pesanan berhasil! Hotel: ${hotel}, Check-In: ${checkInDate}, Check-Out: ${checkOutDate}`);
    } else {
        alert('Silakan lengkapi semua bidang sebelum memesan.');
    }
}
