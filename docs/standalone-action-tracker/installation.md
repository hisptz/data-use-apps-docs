---
label: Installation
sidebar_position: 3
---

# Installation

There are two ways to install the Standalone Action Tracker in DHIS2:

- From the DHIS2 App Hub (recommended)
- Manually, by downloading the app package from GitHub Releases and installing it via the DHIS2 App Management app

## Prerequisites

- A running DHIS2 instance where you have permission to install apps (typically the System Settings/App Management role).
- Internet access from the DHIS2 server if installing directly from the App Hub.

## Option 1: Install from the DHIS2 App Hub (recommended)

This is the easiest and preferred method because you receive updates directly from the hub.

Steps:

1. Log in to your DHIS2 instance as a user with app installation permissions.
2. Open the App Management app (sometimes listed as "App Management" or found under the Apps menu).
3. Go to the App Hub tab within App Management.
4. In the search box, type: "Standalone Action Tracker" (publisher: HISP Tanzania).
5. Select the Standalone Action Tracker app from the results.
6. Click Install and follow the prompts. DHIS2 will download and install the latest compatible version from the App Hub.
7. Once installation completes, find the Standalone Action Tracker in your Apps menu.

Notes:

- You may need to refresh the browser or clear cache the first time after installation.
- Ensure your DHIS2 version is compatible with the app version shown on the App Hub listing.
- If your DHIS2 instance does not have internet access, use the manual method below.

Helpful link: https://apps.dhis2.org/

## Option 2: Manual installation (from GitHub Releases)

Use this method when your DHIS2 server cannot access the App Hub, or when you want to install a specific version.

Steps:

1. Go to the app's GitHub Releases page and download the production build (a .zip file). Example repository location:
   - https://github.com/hisptz/standalone-action-tracker/releases
2. Log in to your DHIS2 instance with app installation permissions.
3. Open the App Management app.
4. Choose the Upload app (or Install app) option.
5. Select the downloaded .zip file and upload it.
6. After the upload completes, the app will appear in the list of installed apps.
7. Open the app from the Apps menu to verify it loads correctly.

Notes:

- If you need to upgrade, upload the newer .zip package; DHIS2 will replace the existing version.
- If you encounter a signature or compatibility warning, ensure you selected a release that matches your DHIS2 version.
- To remove the app, use the uninstall/delete option in App Management.

## After installation

- Assign appropriate user roles and sharing settings so that the right users can access and use the app.
- Configure the app according to your workflows (labels, categories, statuses) as described in the documentation.
