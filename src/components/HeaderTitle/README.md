# Header Title

It's the application logo with two variations 'light' and 'dark'.

This component is built using `styled-components` 

## Usage

```js
import {HeaderTitle} from 'src/components';

...
  <HeaderTitle color="light" />
...
```

## API

| Prop         | Description                    | Type                           | Default       |
| ------------ | ------------------------------ | ------------------------------ | ------------- |
| **`color`**  | Color of the title content.    | Enum 'light' 'dark'          | 'light'       |
| **`testID`** | Id for unit testing            | string                         | 'headerTitle' |