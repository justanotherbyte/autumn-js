import { AutumnPromise, DeleteEntityResult, Entity } from "../../../sdk";
import { toSnakeCase } from "../utils/toSnakeCase";
import { AutumnClient } from "./ReactAutumnClient";
import { CreateEntityParams, GetEntityParams } from "./types/clientEntTypes";
import { getEntityExpandStr } from "../../../utils/entityUtils";

export async function createEntityMethod(
  this: AutumnClient,
  params: CreateEntityParams | CreateEntityParams[]
): AutumnPromise<Entity | Entity[]> {
  let snakeParams = toSnakeCase(params);
  const res = await this.post(`${this.prefix}/entities`, snakeParams);
  return res;
}

export async function getEntityMethod(
  this: AutumnClient,
  entityId: string,
  params?: GetEntityParams
): AutumnPromise<Entity> {
  let snakeParams = toSnakeCase(params);
  let expand = getEntityExpandStr(params?.expand);

  const res = await this.get(`${this.prefix}/entities/${entityId}?${expand}`);

  return res;
}

export async function deleteEntityMethod(
  this: AutumnClient,
  entityId: string
): AutumnPromise<DeleteEntityResult> {
  const res = await this.delete(`${this.prefix}/entities/${entityId}`);
  return res;
}
