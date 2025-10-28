---
title: Categories Configuration
sidebar_position: 4
---

# Categories Configuration

## Overview

The categories section allows you to configure the metadata for your categories.
You can learn more about
categories [here](../concepts#categories)

:::info
The number of categories to configure will depend on the selected level of categorization selected.
:::

## Category Name/Label

Each level of categorization requires to have a unique label or name. By default, the categories are labelled by
numbers. To change the labels, you can edit the `Name` field of the specific category.

![category-label](/img/standalone-action-tracker/categories-name.png)

The label configured here will be used as the label in the application when referring to the category on titles and
buttons. For example, for the first category, the label will be used in the add button.

![category-label-example](/img/standalone-action-tracker/category-labels-and-example.png)

## Category Fields

The category fields section allows you to configure the data you will be collecting for the category. They are flexible
data input fields and can be configured to fit your needs. It is essential for a category to have at least one field,
which will be used as the title of the category. The placement of the title for a category will depend on the level of
category. For the first category, the title will be shown as the title of the category card. For the other levels of
categories, the title will be a column.

You can select any of the fields to be the title for the category.

The supported fields for a category are `Text`, `Long Text`, `Number`, `Integer`, and `Date`

By default, you will find one field configured for you. The field label will be the label of the category. You can
modify this by editing the field label. To edit a field, click on the three dots button and then edit.

![category-fields](/img/standalone-action-tracker/edit-category-title.png)

You can then change the Display name and Short name of the field on the form that pops up.

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

You can configure the following fields for a category field:

| Field                                               | Description                                                                                                                                                                                                            |
|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Display Name                                        | This is the name of the field in the form. It will also be the column name if the field is set to show in column                                                                                                       |
| Short Name                                          | This is a shorter version of the name. It should not exceed 50 characters. This will be used as a label in views that need limited length labels                                                                       |
| Type                                                | Type of data the field will hold, supported fields are `Text`, `Long Text`, `Number`, `Integer`, and `Date`                                                                                                            |
| Option set                                          | For `Text`, `Number`, and `Integer` fields, you can select an option set to restrict the values that can be selected for the field. You can create a new option set or use an existing option set from DHIS2 metadata. |
| Field should be mandatory                           | Check this to ensure the field is filled when performing data entry                                                                                                                                                    |
| Show field as header (First category only)          | For the first category, this will show the field as a header in the category card.                                                                                                                                     |
| Show field as column (Second & Third category only) | For the other category, this will show the field as a column in the category card.                                                                                                                                     |

You can add as many fields as needed.



