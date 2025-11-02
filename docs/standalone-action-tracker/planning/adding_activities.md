---
title: Managing Actions
sidebar_position: 4
---

# Managing Actions

## Creating Actions

After setting up the categories, you can now set up actions per each category. For each category you can find a button
to add an action in the table. The button label will depend on the action label configured.

![add_action](/img/standalone-action-tracker/add_action.png)

A popup will then appear to fill in the details of the action. The fields will be as configured in
the [action field configuration](../configuration/action#field-configuration)

![add_action_form](/img/standalone-action-tracker/add_action_form.png)

The start date and end date are mandatory fields that will appear always (Their labels can be changed in the field
configuration). These fields are essential to allow tracking of the action. The selected dates have to fall within the
selected planning period.

:::info
The start and end dates have to fall within the selected planning period
:::

Once all fields are filled, click on `Save`. The added activity should appear as a row on the table. The last column
will
show the latest status of the action. By default, it will be N/A as there are no status updates.

## View Action Details

To view more details of an action, click on the three dots at the end of the table row, a popup menu will appear. Click
on view to view extra information about the action. This will include data that was not set to be viewed 

![deleting_action](/img/standalone-action-tracker/view_action_details.png)

## Edit Action

To edit the action, click on the three dots at the end of the table row, then click on edit. A form will appear with the
default values already filled in. Change any of the values and then click `Update`.

![deleting_action](/img/standalone-action-tracker/edit_action_details.png)

## Deleting Action

To delete the action, click on the three dots at the last column of the action (before the latest status column), then
click delete. You then need to confirm the deletion of the action. This will delete the action and all data related to
it (including the action status updates)

![deleting_action](/img/standalone-action-tracker/deleting_action.png)

:::warning
Deleting an action will delete all associated data with it, including the status updates. This action is not reversible
:::

## Next Steps

After adding the actions, the planning step will be complete! Head on to [tracking](../tracking) section to see how to
track the added activities
