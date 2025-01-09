FROM rust:1.70

RUN rustup target add wasm32-unknown-unknown
RUN mkdir /opt/wabt
RUN mkdir /opt/wasi-sdk
RUN CARGO_NET_GIT_FETCH_WITH_CLI=true cargo install wasm-pack --version 0.8.1
RUN curl -L https://github.com/WebAssembly/wabt/releases/download/1.0.27/wabt-1.0.27-ubuntu.tar.gz  | tar -xzf - -C /opt/wabt --strip 1
RUN curl -L https://github.com/WebAssembly/wasi-sdk/releases/download/wasi-sdk-8/wasi-sdk-8.0-linux.tar.gz | tar -xzf - -C /opt/wasi-sdk --strip 1

ENV PATH="/opt/wabt/bin:/opt/wasi-sdk/bin:${PATH}"
