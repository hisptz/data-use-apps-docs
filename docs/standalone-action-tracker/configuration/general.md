---
title: General Configuration
sidebar_position: 3
---

# General Configuration

The general configuration allows you to configure basic details of the application. This is the basic metadata
information that is required to define how the application will work with organisation units, periods, and users of the
system

## Organisation Units

The Standalone Action Tracker application is designed to work with the existing organisation units in the DHIS2 system.

### Organisation Unit Access

The Standalone Action Tracker data model needs to be configured to allow access to organisation units. The configuration
can allow access to all organisation units or only those that apply to the use case. The application will only allow to
plan and track for the organisation units that are selected.

You can change the access at any time, but it is recommended to change it before you start planning as it may cause some
inconsistencies in data analysis.

The organisation selection is similar to the organisation selection in the Maintenance application. To select a one or
more
organisation unit, click on the organisation unit name and the selection should be checked.

![organisation unit selection](/img/standalone-action-tracker/single-org-unit-settings.png)

If you would like to select all organisation units in a specific organisation unit level, Select the level on the right
hand side of the selector and click on 'Select'. You can also deselect organisation units on a specific level by
clicking on 'Deselect'

![organisation unit selection](/img/standalone-action-tracker/select-by-level-general-settings.png)

If you would like to select all organisation units in a specific organisation unit level, Select the level on the right
hand side of the selector and click on 'Select'. You can also deselect organisation units on a specific level by
clicking on 'Deselect'

![organisation unit selection](/img/standalone-action-tracker/select-by-group-general-settings.png)

You can use the 'Select All' and 'Deselect All' buttons to select or deselect all organisation units.

![organisation unit selection](/img/standalone-action-tracker/select-all-general-settings.png)

### Planning Organisation Unit Level

You can configure planning and tracking to be limited to only some of the organisation unit levels. This means the
organisation unit selectors will be limited to only organisation units in this level

To enable, click on the checkbox and then select an organisation unit level in the select field

To disable this feature. uncheck the checkbox. With the checkbox unchecked, organisation unit selectors will allow
selection for all organisation units

![organisation unit selection](/img/standalone-action-tracker/planning-org-unit-general-settings.png)

### Default Organisation Unit

The default organisation unit allows you to set a pre-selected organisation unit which will be automatically selected
when the application is opened.

Click on the button and a popup with accessible organisation units will appear. Select the organisation unit you would
like to select and click on 'Select'

![organisation unit selection](/img/standalone-action-tracker/default-org-unit-select.png)

## Period

### Planning Period

Planning period refers to the period that the application will allow actions and their categories to be created. This
signifies the total period an action will be expected to take. Depending on the use case, planning can be done on a
yearly, quarterly, or monthly basis.

To set the planning period, click on the 'Planning frequency' dropdown field and select the period you would like to
use.

![planning-period](/img/standalone-action-tracker/planning-period-setup.png)

### Tracking Period (Tracking Frequency)

Tracking period refers to the period that the application will allow actions to be tracked. This signifies how often the
action status needs to be updated in the application. Depending on the use case, tracking can be done on a yearly,
quarterly, or monthly basis.

To set the tracking period, click on the 'Tracking frequency' dropdown field and select the period you would like to
use.

![planning-period](/img/standalone-action-tracker/tracking-period-setup.png)

:::info
The tracking period should always be less or equal to the planning period
:::

### Default Period

The default period allows you to set a pre-selected planning period which will be automatically selected when the
application
is opened.

![planning-period](/img/standalone-action-tracker/default-period-setup.png)

## Access and Sharing

The Standalone Action Tracker application is designed to work with DHIS2's access and sharing. This section allows you
to define who has access to the application based on DHIS2 users, and user groups.

To configure access and sharing, click on the 'Access and sharing' button. A popup will appear with the list of
users and user groups. You can update the existing users and user groups, or add new users and user groups.

![planning-period](/img/standalone-action-tracker/sharing-settings.png)

## Delete Configuration

You can use the 'Delete Configuration' button to delete the configuration. You will need to delete all existing data
before you can perform this action.

:::info
You will need to delete all data related to this configuration before deleting
:::

Click on the 'Delete Configuration' button, then confirm the action by clicking on the 'Delete' button.

![planning-period](/img/standalone-action-tracker/delete-configuration.png)


:::warning
Deleting the configuration will delete all metadata tied to this configuration. This action cannot be undone.
:::


## Next Steps

Click on `Save changes` button to save the changes. You can also continue to [categories](category.md) configuration.
