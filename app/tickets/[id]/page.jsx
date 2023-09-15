import { notFound } from "next/navigation";

// render 404 if id of page hasn't been cached yet
export const dynamicParams = true;

// handling static rendering -Pre-rendering
export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");

  const tickets = await res.json();

  // return array of objs
  return tickets.map((ticket) => ({ id: ticket.id }));
}

// fetch data
async function getTicket(id) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: { revalidate: 60 }, // use 0 to opt out of using cached data
  });

  // if page not found
  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const TicketDetails = async ({ params }) => {
  const id = params.id;

  const ticket = await getTicket(id);

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
};

export default TicketDetails;
