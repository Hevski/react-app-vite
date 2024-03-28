import { FormEvent, useState } from "react";

interface EditProps {
  handleEdit: (id: string, person: string) => void;
  id: string;
  name: string;
}

export const Edit: React.FC<EditProps> = ({ handleEdit, id, name }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedData, setEdit] = useState(name);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleEdit(id, editedData);
    setIsEditMode(false);
  };
  return (
    <>
      <button onClick={() => setIsEditMode(!isEditMode)}>✍️</button>
      {isEditMode && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={editedData}
            onChange={(e) => setEdit(e.target.value)}
          ></input>
          <button type="submit">Edit</button>
        </form>
      )}
    </>
  );
};
