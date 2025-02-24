import {Model, model, property} from '@loopback/repository';
import {User, Tenant} from '../../../models';

@model()
export class AuthUser extends User {
  @property({
    type: 'array',
    itemType: 'string',
  })
  permissions: string[] = [];

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: Tenant,
    required: true,
  })
  tenant: Tenant;

  constructor(data?: Partial<AuthUser>) {
    super(data);
  }
}
