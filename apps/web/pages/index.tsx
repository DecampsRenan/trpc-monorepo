import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Web() {
  const { data } = trpc.useQuery(["post.list"]);

  return (
    <div>
      <h1>Hello</h1>
      {JSON.stringify(
        data?.map((x) => x.id),
        null,
        2
      )}
      <Button />
    </div>
  );
}
