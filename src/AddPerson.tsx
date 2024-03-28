import { FormEvent, useState } from "react";

export const AddPerson: React.FC = () => {
  const [newPerson, setNewPerson] = useState<string>("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch("http://localhost:3001/awesomePeople", {
      method: "post",
      body: JSON.stringify({ name: newPerson }),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
      ></input>
      <button disabled={!newPerson} type="submit">
        Add person
      </button>
    </form>
  );
};
