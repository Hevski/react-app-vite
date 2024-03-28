import "./App.css";
import useSWR from "swr";
import { AwesomePeople } from "./AwesomePeople";
import { AddPerson } from "./AddPerson";

const url = "http://localhost:3001";

export interface Person {
  id: string;
  name: string;
}

function App() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR<Person[]>(
    `${url}/awesomePeople`,
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <AwesomePeople people={data} />
      <AddPerson />
    </>
  );
}

export default App;
