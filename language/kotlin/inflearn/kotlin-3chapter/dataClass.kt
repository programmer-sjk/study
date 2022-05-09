data class Ticket(val companyName: String, val name: String, var date: String, var seatNumber: Int)
class TicketNormal(val companyName: String, val name: String, var date: String, var seatNumber: Int)

fun main() {
    val ticketA = Ticket("koreaAir", "ggugi", "2022-05-28", 14)
    val ticketB = TicketNormal("koreaAir", "ggugi", "2022-05-28", 14)

    println(ticketA)
    println(ticketB)
}