import { Person } from "./App";
import { Delete } from "./Delete";
import { Edit } from "./Edit";

interface Props {
  people: Person[];
}
export const AwesomePeople: React.FC<Props> = ({ people }) => {
  const deletePerson = (id: string) => {
    fetch(`http://localhost:3001/awesomePeople/${id}`, {
      method: "DELETE",
    });
  };

  const editPerson = (id: string, updatedData: string) => {
    fetch(`http://localhost:3001/awesomePeople/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name: updatedData }),
    });
  };

  return (
    <>
      <ul>
        {people.map(({ id, name }) => (
          <>
            <div key={id}>{name}</div>
            <Delete handleDelete={() => deletePerson(id)} />
            <Edit name={name} id={id} handleEdit={editPerson} />
          </>
        ))}
      </ul>
    </>
  );
};
