# @msfapigithub/counters

Package with two counters `Counter` and `DecreasingCounter` constructors.

## Installation

```
npm install @msfapigithub/counters
```

## Usage

To run demo app clone this repo and simply run:

```
npm install
```

```
npm start
```

## API

Every counter gets two arguments:
 1. selector of element to be rendered in
 2. start number (optional, default 0)

```javascript
import { Counter, DecreasingCounter } from '@msfapigithub/counters'

const counter1 = new Counter('.counter-1', 5)
counter1.init()

const counter2 = new DecreasingCounter('.counter-2', -11)
counter2.init()
```