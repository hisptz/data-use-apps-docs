---
title: Action Configuration
sidebar_position: 5
---

# Action Configuration

## Overview

The action section allows you to configure action and action status metadata. You can learn about this
concept [here](../concepts.md#actions)

## Action Planning

In this section you can configure what data you want to collect during action planning.

### Action Name

An action name is a label for the action in the standalone action tracker.
This will appear on headings and button labels

![Action Name](/img/standalone-action-tracker/action-name-configuration.png)

An action should have a start
date, end date, and a label by minimum. By default, the action will have the fields `Start Date`, `End Date`,
`Description`, and `Activity`. You can remove or add fields to the action.

To add a new field, click on the `Add Field` button. From here, you can decide to either add a new field from already
existing DHIS2 metadata or create a new field. Adding from existing DHIS2 metadata will allow you to select any of the
fields that are already configured in DHIS2. This should only be done if the defined field is not used in any other
programs within DHIS2.

:::warning
Selecting an existing field from DHIS2 will modify the field to work with your configuration. This change will affect
any other program using the field and so it is recommended to create a new field instead.
:::

To create a new field, click on the `Add new field` option. This will open a form where you can configure the field.

![category-fields-add-new](/img/standalone-action-tracker/categories-add-new-field.png)

### Field Configuration

You can configure the following fields for a action field:

| Field                     | Description                                                                                                                                                                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Display Name              | This is the name of the field in the form. It will also be the column name if the field is set to show in column                                                                                                       |
| Short Name                | This is a shorter version of the name. It should not exceed 50 characters. This will be used as a label in views that need limited length labels                                                                       |
| Type                      | Type of data the field will hold, supported fields are `Text`, `Long Text`, `Number`, `Integer`, and `Date`                                                                                                            |
| Option set                | For `Text`, `Number`, and `Integer` fields, you can select an option set to restrict the values that can be selected for the field. You can create a new option set or use an existing option set from DHIS2 metadata. |
| Field should be mandatory | Check this to ensure the field is filled when performing data entry                                                                                                                                                    |
| Show field as column      | This will show the field as a column in the category card.                                                                                                                                                             |

You can add as many fields as needed.

## Action Tracking

There are 2 areas of configuration for action tracking in the standalone action tracker:

### Action Status Fields

In this section you can configure what data you want to collect during action tracking. The `Status`, `Reporting Date`
fields are mandatory and cannot be removed. By default, the `Comment` as a long text field is added. You can remove or
modify this field. You can also add new fields. Supported fields in action tracking are `Text`, `Long Text`, `Number`,
`Integer`, `Date`, and `File Resource`. The file resource field allows you to upload files like reports and images as
supporting documents.

:::info
You can add a `File Resource` field to allow upload of documents or images in action tracking
:::

You can configure the following fields for an action status field:

| Field                     | Description                                                                                                                                                                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Display Name              | This is the name of the field in the form. It will also be the column name if the field is set to show in column                                                                                                       |
| Short Name                | This is a shorter version of the name. It should not exceed 50 characters. This will be used as a label in views that need limited length labels                                                                       |
| Type                      | Type of data the field will hold, supported fields are `Text`, `Long Text`, `Number`, `Integer`,`Date`, and `File Resource`                                                                                            |
| Option set                | For `Text`, `Number`, and `Integer` fields, you can select an option set to restrict the values that can be selected for the field. You can create a new option set or use an existing option set from DHIS2 metadata. |
| Field should be mandatory | Check this to ensure the field is filled when performing data entry                                                                                                                                                    |
| Show field as column      | This will show the field as a column in the category card.                                                                                                                                                             |

### Action Status Options

In this section you can configure the options that will be available for the `Status` field. This is a special field
that determines the status of the action at any reporting period.

By default, the are 4 status options, `Not Started`, `In Progress`, `Completed`, and `Cancelled`. You can add as many
options as needed, or modify the existing options to match your use case.

To add a new option, click on the `Add new option` button. This will open a form where you can configure the option. All
fields are mandatory.

![action-status-option](/img/standalone-action-tracker/action-status-option.png)
You can configure the following fields for an action status option:

| Field | Description                                                                 |
|-------|-----------------------------------------------------------------------------|
| Name  | The name of the option, this will be the label displayed                    |
| Code  | The code of the option, this is a unique value to be stored in the database |
| Color | The color of the option in the action status column                         |
| Icon  | The icon of the option displayed in the latest action status column         |

## Next Steps

Click on `Save changes` button to save the changes.

Congratulations! You have completed the configuration of the standalone action tracker. Head over to
the [planning](../planning) section
