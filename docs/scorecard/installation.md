---
label: Installation
sidebar_position: 4
---

# Installation


The Scorecard App is an optional DHIS2 application that needs to be installed into your DHIS2 instance before it can be used. Installation is a one-time setup process that makes the app available to all authorized users within the system. There are two major way to install the scorecard into your DHIS2 instance including through the DHIS2 App Hub (recommended for most users) and manual upload of the application package.
>  **Important requirement**: To install or manage applications, your DHIS2 user role must include the App Management authority. If you do not see the App Management option in your instance, it means you do not have sufficient permissions. In this case, contact your system administrator or DHIS2 implementer for assistance

## Install from DHIS2 App Hub
The DHIS2 App Hub is the official marketplace for DHIS2 apps, providing the latest stable and secure versions. Installing directly from the App Hub ensures compatibility with your DHIS2 version and makes it easier to update in the future. To install the scorecard application from DHIS2 App Hub, you can follow below steps:-
- Log in to your DHIS2 instance with an account that has App Management authority.
- Open **`App Management`** from app menu.

![access app management app](/img/scorecard/access-app-management-app.png)

- Click **App Hub** on side menu of app management application to open the DHIS2 App Hub.
- Search for **`Scorecard`**, and select the SScorecard app from the results (publisher: *HISP Tanzania*).
- Select the latest compatible version for your DHIS2 instance or previous versions if needed.

![search-scorecard-app-on-app-hub](/img/scorecard/search-scorecard-app-on-app-hub.png)

- Click **`Install`** and wait for the process to complete.

![install scorecard app from app hub](/img/scorecard/install-scorecard-app-from-app-hub.png)
- Refresh your browser to load the new app.
- Confirm that the Scorecard App appears in the Apps menu.
- Open the app and test that it runs correctly.
- Adjust user roles and sharing settings if other users need access.

>**Important**
> - If the app does not appear after installation, clear your browser cache and refresh.
> - Always install the latest stable version to benefit from new features and bug fixes.
> - If using a production server, consider testing the installation first in a staging environment.
> - Administrators should periodically check the App Hub for updates and apply them as needed.

## Manual Upload
This option is useful if your DHIS2 instance does not have internet access or if you have been provided a specific version of the app for your implementation but needs prior download of scorecard app packages. To install the socrecard application manually, you can follow below steps
- Download the Scorecard App .zip package from [DHIS2 App Hub](https://apps.dhis2.org/?page=1&query=scorecard) ***or*** [GitHub Release Page](https://github.com/hisptz/scorecard-app/releases).
- Log in to your DHIS2 instance with an account that has App Management authority.
- Open **`App Management`** from app menu.

![access app management app](/img/scorecard/access-app-management-app.png)

- Click **Manual Install** on side menu of app management application, then **Upload an app to install** buttom to select then choose previously downloaded .zip package for the scorecard and wait for the process to complete.

![manual installation of scorecard from file](/img/scorecard/manual-installation-of-scorecard-from-file.png)

- Refresh your browser to load the new app.
- Confirm that the Scorecard App appears in the Apps menu.
- Open the app and test that it runs correctly.
- Adjust user roles and sharing settings if other users need access.


## Best Practices
## Upgrading to a newer version
- Always clear your browser cache to prevent conflicts between old cached files and the new version.
- Failure to clear cache may cause the app to fail to load or display outdated content.
## User permissions
- Ensure your DHIS2 account has App Management authority to install or update apps.
- Access to Scorecard application depends on user roles. Check under Users -> User Roles to grant or restrict access.
## Version compatibility:
- Verify that the Scorecard App version matches your DHIS2 instance version (e.g., v2.40+).
- Using an incompatible app version may lead to errors or missing features.
## Security considerations:
- Always download apps from trusted sources ([DHIS2 App Hub](https://apps.dhis2.org/?page=1&query=scorecard) ***or*** [GitHub Release Page](https://github.com/hisptz/scorecard-app/releases)).
- Avoid installing unverified packages to reduce risks of instability.
## Post-installation setup:
- Configure scorecard domains, indicators, and thresholds in collaboration with program teams.
- Save common configurations for reuse across review cycles.
- Test access with different user roles (e.g., facility staff, district managers) to ensure proper visibility.
