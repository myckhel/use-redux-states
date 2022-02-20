---
id: install
title: Installation
sidebar_label: Installation
slug: /install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## `Install`

<Tabs defaultValue="yarn" groupId="syntax" values={[
  {label: 'Yarn', value: 'yarn'},
  {label: 'Npm', value: 'npm'},
]}>
  <TabItem value="yarn">

  ```bash
  yarn add use-redux-states
  ```

  </TabItem>

  <TabItem value="npm">

  ```bash
  npm install --save use-redux-states
  ```

  </TabItem>
</Tabs>

## `Install with peerDependencies`

<Tabs defaultValue="yarn"  groupId="syntax" values={[
  {label: 'Yarn', value: 'yarn'},
  {label: 'Npm', value: 'npm'},
]}>
  <TabItem value="yarn">

  ```bash
  yarn add use-redux-states redux react-redux
  ```

  </TabItem>

  <TabItem value="npm">

  ```bash
  npm install --save use-redux-states redux react-redux
  ```

  </TabItem>
</Tabs>
