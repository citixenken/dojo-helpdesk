import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, debitis
        inventore perspiciatis autem eius nostrum eaque.
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nobis,
          corrupti ipsum accusamus explicabo dicta veniam blanditiis possimus
          rem soluta modi tempora dolorem dolorum libero sint harum dignissimos,
          qui architecto eos cum!
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
          quam quia ipsa animi voluptas nisi amet facilis pariatur optio
          deleniti quos inventore nulla accusantium reprehenderit cupiditate
          consequatur numquam!
        </p>
      </div>
    </main>
  );
}
