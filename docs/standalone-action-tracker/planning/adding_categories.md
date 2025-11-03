---
title: Managing Categories
sidebar_position: 3
---

# Managing Categories

After selection of the period and organisation unit for planning, configuration for the categories follows. This
configuration is highly dependent on the level of categorization you had selected from
the [initial configuration](../configuration/initial-setup.md#new-setup).

## Level 1 (Basic activity tracking)

The basic level is the simplest of the categorization levels. It only allows activities to be defined in only one
category. In this setup, the category is represented as a collapsible card with the title as specified in the
configuration.
The card has a table inside which will contain columns of activity data as configured in the activity configuration.

To add the first category click on the add button on the top left of the screen (or in the middle of the screen if there
is on data for the selected period and organisation unit). the button label will depend on the
name you used to label your category. Once the button is clicked, a form with the configured fields will appear, Fill in
the fields and click on `Save`. Once saved, a card will appear with the title as you had filled in the form. (
See [here](../configuration/category.md#field-configuration) to configure which field should appear as the title).

You can then proceed to the next section to [add activities](./adding_activities.md).

## Level 2 (Secondary activity tracking)

The secondary activity tracking setup allows you to have 2 levels of categorization. The first level of categorization
will pe presented as a collapsible card (as in the basic tracking) and the second level will be presented as left
columns in the table. The number of columns presenting a category will depend on how many fields have been configured to
be displayed as columns in the category fields configuration

To add the first category click on the add button on the top left of the screen (or in the middle of the screen if there
is on data for the selected period and organisation unit). the button label will depend on the
name you used to label your category. Once the button is clicked, a form with the configured fields will appear, Fill in
the fields and click on `Save`. Once saved, a card will appear with the title as you had filled in the form. (
See [here](../configuration/category.md#field-configuration) to configure which field should appear as the title).

For each of added first category, there is a button to add the second category that will appear at the center if there
are no records, or on the bottom left of the table if there are already records. To add the second level category click
on the add button. The button label will depend on the name you used to label your category. Once the button is clicked,
a form with the configured fields will appear, fill in the fields and click on `Save`. A table will appear with columns
for both the second category and the activities.

![secondary_level_planning](/img/standalone-action-tracker/secondary_level_planning.png)

Once you've added data for the second categories, a button to add activities for each of the second category entered
will appear. The table will now be in a nested, where each added second category will have nested buttons to add
activities.

![added_second_categories](/img/standalone-action-tracker/added_second_categories.png)

You can then proceed to the next section to [add activities](./adding_activities.md).

## Level 3 (Tertiary activity tracking)

The tertiary activity tracking setup allows you to have 3 levels of categorization. The first level of categorization
will pe presented as a collapsible card (as in the basic tracking) and the second level will be presented as left
columns in the table. The third and last level will also be presented as columns to the right of the second category
columns. The number of columns presenting a category will depend on how many fields have been configured to
be displayed as columns in the category fields configuration

To add the first category click on the add button on the top left of the screen (or in the middle of the screen if there
is on data for the selected period and organisation unit). the button label will depend on the
name you used to label your category. Once the button is clicked, a form with the configured fields will appear, Fill in
the fields and click on `Save`. Once saved, a card will appear with the title as you had filled in the form. (
See [here](../configuration/category.md#field-configuration) to configure which field should appear as the title).

For each of added first category, there is a button to add the second category that will appear at the center if there
are no records, or on the bottom left of the table if there are already records. To add the second level category click
on the add button. The button label will depend on the name you used to label your category. Once the button is clicked,
a form with the configured fields will appear, fill in the fields and click on `Save`. A table will appear with columns
for the second category, third category and the activities.

![second_category_added](/img/standalone-action-tracker/third_category_empty.png)

For each of the added second category, a button to add a third category will appear at the center of the table if there
are no records or on the bottom left if there are already records, To add the third level category click on the add
button. The button label will depend on the name you used to label your category. Once the button is clicked,
a form with the configured fields will appear, fill in the fields and click on `Save`. For each of the added third
category, a button to add activities will appear.

![second_category_added](/img/standalone-action-tracker/third_category_added.png)

:::info
For the tertiary setup, it is recommended to not have many category fields set as visible as columns as it will distort
the table layout
:::

You can then proceed to the next section to [add activities](./adding_activities.md).
