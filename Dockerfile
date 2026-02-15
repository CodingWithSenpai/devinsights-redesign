# Local build runner to bypass host SWC/SIGBUS issues.
# Render deployment is native Node (see render.md).

FROM node:22-bookworm-slim

WORKDIR /app

# Install bun
RUN apt-get update && apt-get install -y curl ca-certificates && rm -rf /var/lib/apt/lists/* \
  && curl -fsSL https://bun.sh/install | bash
ENV BUN_INSTALL=/root/.bun
ENV PATH=$BUN_INSTALL/bin:$PATH

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

EXPOSE 3000
CMD ["bun","run","start"]
