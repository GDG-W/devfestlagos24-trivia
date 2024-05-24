begin;

create extension if not exists pgcrypto;

create table users (
  id uuid not null primary key default gen_random_uuid(),
  created_at timestamptz not null default current_timestamp,
  name text not null,
  email_address text not null unique,
  token bytea not null generated always as (sha256(id::text::bytea)) stored
);

commit;