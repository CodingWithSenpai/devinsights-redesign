# Local build runner to bypass host SWC/SIGBUS issues.
# Render deployment is native Node (see render.md).

FROM node:22-bookworm-slim

WORKDIR /app

# Install bun (installer requires unzip)
RUN apt-get update && apt-get install -y curl ca-certificates unzip && rm -rf /var/lib/apt/lists/* \
  && curl -fsSL https://bun.sh/install | bash
ENV BUN_INSTALL=/root/.bun
ENV PATH=$BUN_INSTALL/bin:$PATH

# Support both lockfile names (bun.lock is text; bun.lockb is binary)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

EXPOSE 3000
CMD ["bun","run","start"]
