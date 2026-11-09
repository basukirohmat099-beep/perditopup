import type { PaymentId } from "@/lib/store/catalog";

export const ORDER_STORAGE_KEY = "perdi-order";
export const CONFIRMED_STORAGE_KEY = "perdi-order-confirmed";
export const OWNER_TOKEN_KEY = "perdi-owner-token";

export type StoredOrder = {
  code: string;
  gameId: string;
  gameName: string;
  player: string;
  item: string;
  price: number;
  priceLabel: string;
  payment: PaymentId;
  paymentName: string;
  number: string;
  qrDataUrl: string;
  orderToken: string;
  createdLabel: string;
};

export type OrderResponse =
  | { ok: true; order: StoredOrder }
  | { ok: false; error: string };

export type ConfirmResponse = { ok: true } | { ok: false; error: string };

export type LoginResponse =
  | { ok: true; token: string }
  | { ok: false; error: string };

export function isStoredOrder(value: unknown): value is StoredOrder {
  if (!value || typeof value !== "object") return false;
  const order = value as Partial<StoredOrder>;
  return (
    typeof order.code === "string" &&
    typeof order.gameName === "string" &&
    typeof order.player === "string" &&
    typeof order.item === "string" &&
    typeof order.priceLabel === "string" &&
    typeof order.paymentName === "string" &&
    typeof order.number === "string" &&
    typeof order.orderToken === "string" &&
    (order.payment === "dana" || order.payment === "gopay")
  );
}
