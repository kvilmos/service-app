import { PERMISSIONS } from "@/constants/roles";
import { createAccessControl } from "better-auth/plugins/access";
import { adminAc } from "better-auth/plugins/admin/access";

const permissions = {
  employee: [
    PERMISSIONS.EMPLOYEE.FIRE,
    PERMISSIONS.EMPLOYEE.HIRE,
    PERMISSIONS.EMPLOYEE.LIST,
  ],
};

export const AC = createAccessControl(permissions);

export const USER = AC.newRole({
  employee: [PERMISSIONS.EMPLOYEE.LIST],
});

export const EMPLOYEE = AC.newRole({
  employee: [PERMISSIONS.EMPLOYEE.LIST],
});

export const ADMIN = AC.newRole({
  ...adminAc,
  employee: [
    PERMISSIONS.EMPLOYEE.FIRE,
    PERMISSIONS.EMPLOYEE.HIRE,
    PERMISSIONS.EMPLOYEE.LIST,
  ],
});
