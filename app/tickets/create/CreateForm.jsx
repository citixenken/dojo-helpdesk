"use client"; // requires hydration

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateForm = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page refresh

    setIsLoading(true);

    const ticket = { title, body, priority, user_email: "kmuyesu@gmail.com" };

    // send post detail to json server
    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/tickets");
    }
  };
  return (
    <form onSubmit={handleSubmit} action="" className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          required
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={(e) => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}
      </button>
    </form>
  );
};

export default CreateForm;
