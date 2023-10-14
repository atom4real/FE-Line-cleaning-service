import apiClient from "./AxiosClient";
const BookingService = {
    getBooking(){
        return apiClient.get(`http://127.0.0.1:8000/bookings`)
    },
    addBooking(bookingData){
        return apiClient.post(`http://127.0.0.1:8000/bookings`,bookingData)
    },
}
export default BookingService;