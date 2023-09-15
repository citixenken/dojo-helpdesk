import Link from "next/link";

// fetch data
async function getTickets() {
  // imitate delay to visualize loading page
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const res = await fetch("http://localhost:4000/tickets", {
    next: { revalidate: 0 }, // use 0 to opt out of using cached data
  });

  return res.json();
}

const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 197)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}

      {/* if no tickets? */}
      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, awesome!</p>
      )}
    </>
  );
};

export default TicketList;
