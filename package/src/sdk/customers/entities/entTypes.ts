import {
  CustomerData,
  CustomerFeature,
  CustomerInvoice,
  CustomerProduct,
} from "../cusTypes";
import { EntityExpandOption } from "./entEnums";
import { z } from "zod";

export interface CreateEntityParams {
  id: string;
  name: string;
  feature_id: string;
  customer_data?: CustomerData;
}

export interface CreateEntityResult {
  success: boolean;
}

export interface DeleteEntityResult {
  success: boolean;
}

export interface GetEntityParams {
  expand?: EntityExpandOption[];
}

export interface Entity {
  id: string;
  name: string;
  customer_id: string;
  created_at: number;
  env: string;
  products: CustomerProduct[];
  features: Record<string, CustomerFeature>;
  invoices?: CustomerInvoice[];
}

export const EntityDataSchema = z.object({
  name: z.string().optional(),
  feature_id: z.string(),
});

export type EntityData = z.infer<typeof EntityDataSchema>;
