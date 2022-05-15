FROM docker.io/alpine:3.15

RUN apk update && apk add --no-cache \
    git ruby-dev ruby-bundler make gcc g++ musl-dev

COPY ./Gemfile ./Gemfile

RUN bundle config set --local system 'true' && \
    bundle install

RUN apk update && apk del --no-cache \
    ruby-dev make gcc g++ musl-dev