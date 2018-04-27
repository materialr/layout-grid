# MaterialR Layout Grid

**@materialr/layout-grid**

[![Build Status](https://travis-ci.org/materialr/layout-grid.svg?branch=master)](https://travis-ci.org/materialr/layout-grid)
[![Coverage Status](https://coveralls.io/repos/github/materialr/layout-grid/badge.svg?branch=master)](https://coveralls.io/github/materialr/layout-grid?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/d3a8ad77-7157-4ed0-b920-17b8fcc781a5/badge)](https://nodesecurity.io/orgs/materialr/projects/d3a8ad77-7157-4ed0-b920-17b8fcc781a5)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Material layout grid implementation for React

## Installation

```sh
$ npm install --save @materialr/layout-grid
```

## Demo

A full demo is available on the
[MaterialR website](https://materialr.github.io/components/layout-grid) showcasing all variants.

## Components

### Named exports

```js
import { Cell } from '@materialr/layout-grid';
```

**Props**

| Prop        | Type                     | Required | Default   | Description                                        |
| ----------- | ------------------------ | -------- | --------- | -------------------------------------------------- |
| `align`     | enum (bottom/middle/top) | No       | undefined | The vertical alignment of contents within the cell |
| `children`  | node                     | No       | undefined | The children to render within the cell             |
| `className` | string                   | No       | undefined | Additional classNames to add to the cell           |
| `columns`   | enum (1-12)              | No       | undefined | The column width of the cell                       |
| `desktop`   | enum (1-12)              | No       | undefined | The column width of the cell on desktop            |
| `phone`     | enum (1-4)               | No       | undefined | The column width of the cell on phone              |
| `tablet`    | enum (1-8)               | No       | undefined | The column width of the cell on tablet             |

```js
import { Grid } from '@materialr/layout-grid';
```

**Props**

| Prop        | Type              | Required | Default   | Description                                          |
| ----------- | ----------------- | -------- | --------- | ---------------------------------------------------- |
| `align`     | enum (left/right) | No       | undefined | The horizontal alignment of contents within the grid |
| `children`  | node              | Yes      | undefined | The children to render within the grid               |
| `className` | string            | No       | undefined | Additional classNames to add to the grid             |

```js
import { Row } from '@material/layout-grid';
```

**Props**

| Prop        | Type   | Required | Default   | Description                             |
| ----------- | ------ | -------- | --------- | --------------------------------------- |
| `children`  | node   | Yes      | undefined | The children to render within the row   |
| `className` | string | No       | undefined | Additional classNames to add to the row |
