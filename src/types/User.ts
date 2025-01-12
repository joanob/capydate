import { Role } from "./Role";

export interface User {
  id: number;
  username: string;
  accountLocked: boolean;
  enabled: boolean;
  createdDate: Date;
  lastModifiedDate: Date;
  roles: Role[];
}
