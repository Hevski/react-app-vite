interface DeleteProps {
  handleDelete: () => void;
}

export const Delete: React.FC<DeleteProps> = ({ handleDelete }) => {
  return (
    <>
      <button onClick={handleDelete}>🗑️</button>
    </>
  );
};
