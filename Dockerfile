FROM node:14.17.1 as base

# Add package file
COPY package*.json ./

# Install server deps
RUN npm i

# Copy source
COPY server.js ./
COPY api ./api
COPY static ./static

# Start production image build
FROM gcr.io/distroless/nodejs:14

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /server.js ./
COPY --from=base /api /api
COPY --from=base /static /static

# Expose port 3002
EXPOSE 3002
CMD ["server.js"]
