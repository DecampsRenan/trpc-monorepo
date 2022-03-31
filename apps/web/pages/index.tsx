import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Web() {

  const { data } = trpc.useQuery(['hello']);

  return (
    <div>
      <h1>{data}</h1> 
      <Button />
    </div>
  );
}
 