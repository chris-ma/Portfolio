-- Run this in the Supabase SQL editor for your project

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  subtitle text default '',
  category text default '',
  date date not null default now(),
  read_time text default '5 min read',
  tags text[] default '{}',
  excerpt text default '',
  blocks jsonb default '[]',
  published boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Enable RLS
alter table articles enable row level security;

-- Authenticated users (you) can do everything
create policy "Auth users can manage articles"
  on articles for all
  to authenticated
  using (true)
  with check (true);

-- Public can read published articles
create policy "Public can read published articles"
  on articles for select
  to anon
  using (published = true);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger articles_updated_at
  before update on articles
  for each row execute procedure update_updated_at();
