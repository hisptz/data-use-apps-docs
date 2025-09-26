---
label: Installation
sidebar_position: 3
---

# Installation

There are two ways to install the Standalone Action Tracker in DHIS2:

- [From the DHIS2 App Hub (recommended)](#option-1-install-from-the-dhis2-app-hub-recommended)
- [Manually, by downloading the app package from GitHub Releases and installing it via the DHIS2 App Management app](#option-2-manual-installation-from-github-releases)

## Prerequisites

- A running DHIS2 instance where you have permission to install apps (typically the System Settings/App Management
  role).
- Internet access from the DHIS2 server if installing directly from the App Hub.

## Option 1: Install from the DHIS2 App Hub (recommended)

This is the easiest and preferred method because you receive updates directly from the hub.

Steps:

1. Log in to your DHIS2 instance as a user with app installation permissions.

2. Open the App Management app (sometimes listed as "App Management" or found under the Apps menu).
   ![App Hub installation](/img/standalone-action-tracker/app-management-open.png)
3. Go to the App Hub tab within App Management.
   ![App Hub installation](/img/standalone-action-tracker/app-hub-tab.png)
4. In the search box, type: "Standalone Action Tracker" (publisher: HISP Tanzania).
   ![App Hub installation](/img/standalone-action-tracker/app-hub-search.png)
5. Select the Standalone Action Tracker app from the results.
6. Click Install. DHIS2 will download and install the latest compatible version from the App Hub.
   ![App Hub installation](/img/standalone-action-tracker/app-hub-page.png)
7. Once installation completes, find the Standalone Action Tracker in your Apps menu.
   ![App Hub installation](/img/standalone-action-tracker/app-menu.png)

Notes:

- You may need to refresh the browser or clear cache the first time after installation.
- Ensure your DHIS2 version is compatible with the app version shown on the App Hub listing.
- If your DHIS2 instance does not have internet access, use the manual method below.

Helpful link: https://apps.dhis2.org/

## Option 2: Manual installation (from GitHub Releases)

Use this method when your DHIS2 server cannot access the App Hub, or when you want to install a specific version.

Steps:

1. Go to the app's GitHub [Releases page](https://github.com/hisptz/action-tracker-standalone/latest) and download the
   production zip file
   ![Github download](/img/standalone-action-tracker/github-download.png)
2. Log in to your DHIS2 instance with app installation permissions.
3. Open the App Management app.
   ![App Hub installation](/img/standalone-action-tracker/app-management-open.png)
4. Choose the Manual install tab on the left side menu.
   ![App Hub installation](/img/standalone-action-tracker/manual-install-tab-select.png)
5. Click on `Upload an app to install` button and select the downloaded zip file.
   ![App Hub installation](/img/standalone-action-tracker/manual-install-tab.png)
6. Once installation completes, find the Standalone Action Tracker in your Apps menu.
   ![App Hub installation](/img/standalone-action-tracker/app-menu.png)

Notes:

- If you need to upgrade, upload the newer .zip package; DHIS2 will replace the existing version.
- To remove the app, use the uninstall/delete option in App Management.

## After installation

- Assign appropriate user roles and sharing settings so that the right users can access and use the app.
- Configure the app according to your workflows (labels, categories, statuses) as described in the documentation.
