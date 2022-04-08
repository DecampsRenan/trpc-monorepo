# Test turbo - trpc

First, you will need to copy the `packages/db/.env.example` to `packages/db/.env`

You don't need to change anything if you are developing in your local env.

```bash
# Install dev dependencies
yarn 

# Start the db with docker
docker-compose up -d

# Launch all the task
yarn dev
```