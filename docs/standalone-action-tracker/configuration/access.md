---
title: Access & Authorization
sidebar_position: 1
---

# Access & Authorization

After installation, you will need to configure who can access the Standalone Action Tracker. This configuration is done
in the DHIS2 users app. You also need to configure the app system authorities to roles depending on the activities they
will be performing in the Standalone Action Tracker. You can have one or more roles corresponding to the authorities.

The application access is configured as any other app access in DHIS2.

## Steps

1. Open the Users app
2. Navigate to the roles configuration by click on the User Roles
3. Select and edit the role that you want to be able to access the Standalone Action Tracker app
4. On authorities configuration area, select the `actiontrackerstandalone app` on the available authorities. ( Selection
   should move it to the selected authorities area )
![access](/img/standalone-action-tracker/app-access.png)
5. On the system authorities area, There will be 3 Standalone Action Tracker specific authorities:
   ![access](/img/standalone-action-tracker/in-app-authorities.png)

| Authority Name                        | Description                                                                           |
|---------------------------------------|---------------------------------------------------------------------------------------|
| Standalone Action Tracker - Configure | This allows the user to add/update the standalone action tracker configuration        |
| Standalone Action Tracker - Planning  | This allows the user to add/update the standalone action tracker planning information |
| Standalone Action Tracker - Tracking  | This allows the user to track already planned actions/activities                      |

Select any of the authorities that apply to the user role you are updating. A user role can have one or more of the 3
authorities.

5. Save the changes

## Next steps

Ensure all users that will be using the Standalone Action Tracker have been assigned the role that has been configured.
