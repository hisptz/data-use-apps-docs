---
label: Tracking
sidebar_position: 7
---

# Tracking

## Overview

Tracking in the Standalone Action Tracker involves providing period updates to already planned activities.
The frequency of updates will depend on the
configured [tracking frequency](../configuration/general.md#tracking-period-tracking-frequency). For each of the
tracking period there can only be one update.

Tracking involves filling in a form which has the configured tracking fields.

## Tracking Layout

To start tracking your activities, on the main planning window click on the  `Tracking` tab at the top left of the
screen. The layout of the configured categories will change to allow tracking for all frequencies within the set
planning period

![tracking_layout](/img/standalone-action-tracker/tracking_layout.png)

:::note
Depending on the number of available tracking periods and screen size, the tracking area might be scrollable
horizontally
:::

For each of the activities listed, the available tracking periods will depend on the start and end dates of the
activity. If the tracking period is outside the start and end date of the activity, you will not be able to update the
status for that activity in that period.

## Recording Tracking Information

For each available period there is a button with the `+` icon. Click on this button to open the form to enter activity
status update for that specific period.

![adding_tracking_information](/img/standalone-action-tracker/adding_tracking_information.png)

### Mandatory Fields

On the tracking form, there are 2 mandatory fields:

The review date (can also be renamed in the [configuration](../configuration/action.md#action-status-review-date)) is
the date the status is being recorded.
This date is limited to the start and end date of the specific reporting period and to the start and end date of the
activity. This field is mandatory.

The status field allows the user to specify in which status the activity is at in that reporting period. The field is a
dropdown field with the [configured action status](../configuration/action.md#action-status-options). This field is
mandatory.

In selection of status, 2 options are special.
The options are `Completed` and `Cancelled`. When these 2 options are
selected and the form saved, they will ensure that there are no further updates to the activity in the coming periods.

:::info
The `Completed` and `Cancelled` status options limit updating of the activity status for future periods relative to the
specific tracking period
:::

### Other Fields

The other fields in the form will depend on the [field configuration](../configuration/action.md#action-status-fields)
of the tracking form.

#### File Upload Field

The tracking form also allows you to have a field of type `File Resource`.
This is a special field that allows the user
to upload a specific file that may be related to the status update of the specific period. This can be a report, or some
sort of evidence like images, Receipts e.t.c. If this field is configured, it will appear as a button which will allow
the user to upload 1 file. Supported files include images, and documents.

![file_upload_button](/img/standalone-action-tracker/file_upload_button.png)

Once all the necessary fields are filled, click on `Save` on the form. This will update the tracking layout with the new
status update. The status update will have a background color corresponding to the configured color of the selected
status. It will also list all information that was configured to be displayed in the column. If the status update
included a `File Resource`field. A download button will appear, which will allow the user to download the file.

![saved_status_update](/img/standalone-action-tracker/saved_status_update.png)

## Viewing Tracking Information

On each status update, there is a button with three-dots on the top right.
Click on the button then click on view to
view information about the status update.

![view_status_update](/img/standalone-action-tracker/view_status_update.png)

## Updating Tracking Information

On each status update, there is a button with three-dots on the top right. Click on the button then click on edit to
change recorded information about the status update. When done, click on `Update` to save the changes

![edit_status_update](/img/standalone-action-tracker/edit_status_update.png)

## Deleting Tracking Information

On each status update, there is a button with three-dots on the top right. Click on the button then click on delete to
completely delete the status update. You will be prompted to confirm the deletion. This action is not reversible

![delete_status_update](/img/standalone-action-tracker/delete_status_update.png)

:::warning
Deleting a status update is not reversible and will delete all associated information, including the uploaded files.
:::

## Next Steps

This section completes the main features of the Standalone Action Tracker.
