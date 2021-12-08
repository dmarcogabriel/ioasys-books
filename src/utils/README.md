# Utils

## Storage

This util is an abstraction of `@react-native-async-storage`, used to store, get and remove data from device local storage.

### Usage

```js
import {storeData, getData, removeData} from 'src/utils/storage';

...
await storeData<number>('@app:number', 1);
const data = await getData<number>('@app:number');
console.log(data) // > 1
await removeData('@app:number');
...
```

### API

The `T` type can be used to type the returning data on getData or the data param on storeData.

---

#### storeData

Used to store data on device local storage.

| Params | Type   | Description                |
|--------| ------ | -------------------------- | 
| key    | string | A unique key to store data |
| data   | T      | Data to be stored          |

---

#### getData

Used to get data on device local storage.

| Params | Type   | Description              |
|--------| ------ | ------------------------ | 
| key    | string | A unique key to get data |

| Return | Type        | Description              |
| ------ | ----------- | ------------------------ |
| data   | Promise<T>  | Data returned from store |

---

#### removeData

Used to delete data on device local storage.

| Params | Type   | Description                 |
|--------| ------ | --------------------------- | 
| key    | string | A unique key to remove data |
