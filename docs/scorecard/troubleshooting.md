---
label: Troubleshooting
sidebar_position: 10
---

# Troubleshooting

This section provides guidance on resolving common issues that may occur when using the **Scorecard Application**. Each issue includes its likely cause and recommended solution.

## Scorecard Fails to Load
**Possible Cause:** Browser cache may contain outdated or conflicting files after a system update.
**Recommended Solution:**
- Clear your browser cache and cookies.
- Refresh and attempt to reopen the Scorecard Application.

## Scorecard Not Found
**Possible Cause:** The scorecard ID entered in the browser’s URL is invalid or has been deleted.
**Recommended Solution:**
- Access the Scorecard directly from the **Scorecard Application** instead of using a bookmarked link.
- Confirm that the scorecard still exists and you have the required permissions to access it.

## Access Denied
**Possible Cause:** The user account does not have sufficient permissions to access or manage the selected scorecard.
**Recommended Solution:**
- Verify that the correct **user roles** are assigned in the **User Management App**.
- Review or update the **sharing settings** of the scorecard to grant the necessary access level (view, edit, or delete).

## Data Not Displaying
**Possible Cause:** Incorrect filters have been applied, or related metadata (such as indicators or data elements) is incomplete or misconfigured.
**Recommended Solution:**
- Reset all applied filters within the Scorecard App.
- Review the configuration of indicators and data elements in the **Maintenance App** to ensure completeness and accuracy.

## Slow or Delayed Performance
**Possible Cause:** The scorecard is configured with a large number of organisation units or indicators, which can slow down data retrieval and rendering.
**Recommended Solution:**
- Limit the number of selected organisation units and indicators/data items.
- Consider dividing large scorecards into smaller, focused scorecards for better performance.

## General Errors and System Glitches
**Possible Cause:** Temporary network issues or browser-related inconsistencies.
**Recommended Solution:**
- Refresh the app or browser window (**Ctrl + R**).
- If the issue persists, contact your **DHIS2 system administrator** for technical assistance.

## Error Management Summary
| Error Type | Description | Recommended Action |
|-------------|-------------|--------------------|
| **Access Denied** | Occurs when a user lacks the appropriate permissions. | Review and update sharing settings or user roles. |
| **Scorecard Not Found** | Triggered when an invalid or outdated scorecard ID is used. | Access the scorecard via the application’s main interface. |
| **General Errors** | Often linked to temporary network or browser issues. | Refresh the page or clear cache and try again. |
