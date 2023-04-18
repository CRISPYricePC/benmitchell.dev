FROM mcr.microsoft.com/devcontainers/base:jammy

RUN apt-get update && apt-get install -y --no-install-recommends \
    ruby-rubygems ruby-dev && \
    rm -rf /var/lib/apt/lists/*

RUN gem install webrick jekyll bundler
