import { belongsTo, model, property } from '@loopback/repository';
import { BaseEntity } from '.';
import { Role } from './role.model';
import { Tenant } from './tenant.model';
import { User } from './user.model';

@model({
  name: 'user_tenants',
})
export class UserTenant extends BaseEntity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @belongsTo(
    () => User,
    { keyFrom: 'user_id', name: 'user_id' },
    {
      name: 'user_id',
      required: true,
    },
  )
  userId: number;

  @belongsTo(
    () => Tenant,
    { keyFrom: 'tenant_id', name: 'tenant_id' },
    {
      name: 'tenant_id',
      required: true,
    },
  )
  tenantId: number;

  @belongsTo(
    () => Role,
    { keyFrom: 'role_id', name: 'role_id' },
    {
      name: 'role_id',
      required: true,
    },
  )
  roleId: number;

  @property({
    type: 'string',
    required: true,
    default: 'active',
  })
  status: string;


  constructor(data?: Partial<UserTenant>) {
    super(data);
  }
}

export interface UserTenantRelations {
  // describe navigational properties here
}

export type UserTenantWithRelations = UserTenant & UserTenantRelations;
