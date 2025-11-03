---
title: Concepts
sidebar_position: 4
---

# Concepts

This section outlines some of the key concepts of the standalone action tracker. These concepts make up how the
standalone action tracker works to ensure proper tracking.

## Categories

Actions in the standalone action tracker can be categorized into one or more categories. This is to enable a
customizable grouping of actions based on a specific use case. This allows for a better overview and analysis of the
actions.

Categorization in the standalone action tracker is done initially when selecting the configuration type. The standalone
action tracker only supports up to level 3 of categorization. The levels are named **Basic**, **Secondary** and
**Tertiary**.

- **Basic activity tracking**: The basic activity tracking is the most basic level of categorization. In this setup, the
  actions are only categorized once without any nested categories.

- **Secondary activity tracking**: The secondary activity tracking is a more advanced level of categorization. In this
  setup, the actions are categorized twice (one nested category).

- **Tertiary activity tracking**: The tertiary activity tracking is the most advanced level of categorization. In this
  setup, the actions are categorized three (two nested categories).

It is important to understand which of these level of categorization is the best fit for your use case before starting
to setup your standalone action tracker. Selecting a level of categorization cannot be changed at a later time.

:::warning
Level of categorization is not editable in the standalone action tracker. To change the level of categorization,
you will need to re-setup the standalone action tracker.
:::

## Actions

An action is a single event/entity tracked in the standalone action tracker. An action has properties like start and end
date and status that allow the user to view and analyze the actions.

- **Start date**: The start date of an action is the date when the action is planned to start.
- **End date**: The end date of an action is the date when the action was ended.
- **Status**: The status of an action with values which are configurable by the user.

