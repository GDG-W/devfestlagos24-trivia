begin;

create extension if not exists pgcrypto;

create table users (
  id uuid not null primary key default gen_random_uuid(),
  created_at timestamptz not null default current_timestamp,
  name text not null,
  email_address text not null unique,
  token bytea not null generated always as (sha256(id::text::bytea)) stored
);

create table attempts (
  id uuid not null primary key default gen_random_uuid(),
  created_at timestamptz not null default current_timestamp,
  user_id uuid not null references users(id),
  moves smallint not null,
  duration integer not null,
  score decimal(13,9) not null generated always as ((0.5/(1 + log(1 + duration))) + (0.5/(1 + log(1 + moves)))) stored
);

commit;