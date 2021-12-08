# FiltersModal

This is an abstraction of `react-native-modal` lib it shows the books filters and return then 
when user closes it.

## Usage

```js
import {FiltersModal} from 'src/components';

...
  const [isVisible, setIsVisible] = useState(true);

  const options = {
    year: ['1992', '1998', '2000'],
    category: ['biographies', 'poetry'],
    author: ['Luke', 'Lea']
  };

  const handleClose = (filters) {
    if (filters) {
      // do something with filters
    }
  }

  <FiltersModal
    isVisible={isVisible}
    onClose={handleClose}
    yearOptions={options.year}
    categoryOptions={options.category}
    authorOptions={options.author}
  />
...
```

## API

| Prop         | Description                            | Type                      | Default   |
| ------------ | -------------------------------------- | ------------------------- | --------- |
| **`isVisible`**       | Controls modal visibility     | boolean                   | undefined |
| **`yearOptions`**     | Array of options for years    | string[]                  | undefined |
| **`categoryOptions`** | Array of options for category | string[]                  | undefined |
| **`authorOptions`**   | Array of options for author   | string[]                  | undefined |
| **`onClose`**         | Function executed when closes | function (callback): void | undefined |

#### onClose

`onClose` event execute a callback function when the modal closes, if user closes the modal by
pressing the Close button (x), it will execute the callback with params null. Otherwise if user
closes it by pressing the "Filtrar" button, it will execute the callback with the filters as 
params.