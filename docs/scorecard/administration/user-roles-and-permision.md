---
sidebar_position: 1
---

# User Roles & Permissions
Properly managing user roles and permissions ensures that only authorized users can access, view, and manage scorecards. In DHIS2, permissions are controlled at two levels: application access and scorecard sharing settings.

## Application Access Permissions
Access to the Scorecard App is granted through User Roles in the User Management app.
 - Navigate to the User Management app then click on User Roles tab, for have acces to add or edit user roles.
 - Under the **`Other authorities`** section, assign the Scorecard Application authority to a specific user role.
 - Users associated with that role will then be able to see and use the Scorecard Application.

## Scorecard Level Permissions
Beyond application access, each scorecard requires specific sharing settings to define what actions users can perform:
 - **View Only**: Users can open and review scorecards.
 - **Edit**: Users can modify the scorecard’s configuration.
 - **Delete**: Users can remove scorecards if granted permission.

These permissions can be assigned to Individual Users or User Groups (recommended for easier management).
> Note: By default, access to a scorecard is set to View and Edit, which means any user with access to the Scorecard Application can also view, edit, or delete scorecard configurations. It is strongly recommended to adjust the sharing settings immediately after/during creation of a scorecard to restrict access appropriately

## Best Practice for Permission Management
 - Assign permissions primarily through User Groups to simplify administration and ensure consistency.
 - Carefully evaluate the level of access (view, edit, delete) before assigning to avoid accidental modifications or deletions.
 - Regularly review user roles and sharing settings to ensure they still align with program needs and data governance policies.

> **Note**: Always make sure that users have the appropriate access and permissions both at the application and scorecard level to avoid unnecessary restrictions or unintended exposure.
