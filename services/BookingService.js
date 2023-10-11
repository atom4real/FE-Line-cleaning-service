import apiClient from "./AxiosClient";
const BookingService = {
    getBooking(){
        return apiClient.get(`/bookings`)
    },
    addBooking(){
        return apiClient.post(`/bookings`)
    },
}
export default BookingService;