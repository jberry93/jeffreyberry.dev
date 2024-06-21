---
layout: ../../layouts/Devlog.astro
title: "How to Upgrade Windows Applications Using Winget Commands"
description: "Learn how to view and upgrade all or specific Windows applications using Winget commands. Simple steps with examples for updating apps like Git."
author: "Jeffrey Berry"
date: "2024-06-20"
cover: "https://jeffreyberry.dev/images/devlog/upgrade-windows-apps-winget-commands/seo-image.webp"
coverDescription: "AI generated image of someone attempting to upgrade their software using winget"
---

## View All Upgradable Apps

If you want to view all of the apps that can be upgraded, use the following command:

```bash
winget upgrade
```

## Update a Single App

If you want to update a single app, use this command:

```bash
winget upgrade -h --id APP-ID
```

The `-h` option will "suppress all UI" according to [Microsoft's documentation on `winget` options](https://learn.microsoft.com/en-us/windows/package-manager/winget/upgrade#options).

## Example: Updating Git

To update `Git` (at least for me the `Id` column showed git as `Git.Git`), use the following command:

```bash
winget upgrade -h --id Git.Git
```