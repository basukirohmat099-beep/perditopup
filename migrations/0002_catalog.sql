create table if not exists catalog_prices (
  sku text primary key,
  title text,
  price_idr integer not null check (price_idr >= 100 and price_idr <= 100000000)
);
