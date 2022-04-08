import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Web() {
  const { data, refetch, isLoading, isFetching } = trpc.useQuery(["post.list"]);
  const { mutate, isLoading: isMutating } = trpc.useMutation(["post.create"], {
    onSuccess() {
      refetch()
    }
  });

  const handleAddPost = () => {
    mutate({ title: 'Lorem ipsum' });
  }

  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={handleAddPost} disabled={isMutating}>Add new post</Button>
      <br />
      {isLoading ? (
        'Loading post...'
      ): (
        <>
          {isFetching && 'Fetching new posts...'}
          <pre>
            <code>
              {JSON.stringify(data, null, 2)}
            </code>
          </pre>
        </>
      )}
    </div>
  );
}
