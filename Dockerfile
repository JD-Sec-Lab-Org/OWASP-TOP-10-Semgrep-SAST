#  Unpinned base image (latest minor, supply-chain risk) f
#  Unpinned base image (latest minor, supply-chain risk)#  Unpinned base image (latest minor, supply-chain risk)

FROM node:18

#  Running everything as root (default)
WORKDIR /app

#  Copy everything, including node_modules, .env, secrets, build artifacts
COPY . .

#  Install extra OS tools, no cleanup of apt cache (bloated & attack surface)
RUN apt-get update && \
    apt-get install -y curl vim net-tools openssh-client && \
    npm install

#  Hard-coded secrets in image (IaC / secret scanning finding)
ENV NODE_ENV=development
ENV JDSEC_ADMIN_EMAIL=admin@jdsecacademy.com
ENV JDSEC_ADMIN_PASSWORD=Admin123!
ENV JDSEC_DB_PATH=/app/database/demo.db

#  Expose app port (fine functionally, but no documentation / firewall context)
EXPOSE 3000

#  Run dev server in container (not production-safe, but good for lab)
# Next.js dev listens on 0.0.0.0 inside container by default
CMD ["npm", "run", "dev"]
