---
id: intro
title: Introduction
sidebar_label: Introduction
slug: /
---

## Overview
`use-redux-state-hook` allows you to create runtime redux states for your components without explicitly creating actions and reducers.
It was also designed to solve react's unnecessary re-render issue by using `useMemoSelector` api.

It returns object which includes a setState function that uses same concept as react's class component `setState` function which accepts `callback(previous_state)` or new state value.
