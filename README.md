# @bitchcraft/ocake

```
  ,.·——–——·.¸
,°   ≡OCAKE≡  °,
|   ,––––––––––.\
 \¸| (OMNOMNOM)'/
   ``----------´
```

Convert the case of keys in an object (e. g. to camelCase), or simply convert the case of a string to another case.

```js
{ camelCased: 'some value' } => { snake_cased: 'some value' }
```


## Installation

```sh
$ yarn add @bitchcraft/ocake
$ npm install -P @bitchcraft/ocake
```

## Usage

### convertKeys

```js
convertKeys(haystack: Object, replacer: (key: string) => string): Object
```

Creates an identical object where the keys have been converted to the desired case.

* **haystack** can be any plain object including arrays
* **replacer** function which takes a string and returns a string: `(key: string) => string`. You can use one of the supplied StringConverters.

#### ES6 example

```js
import { convertKeys, StringConverters } from '@bitchcraft/ocake';

const payload = convertKeys({
    userName: 'Sam Axe',
    userId: 5462,
    clientId: 17,
}, StringConverters.toKebabCase);

const requestBody = JSON.stringify(payload);
```

#### ES5 example

```js
var convertKeys = require('@bitchcraft/ocake').convertKeys;
var toKebabCase = require('@bitchcraft/ocake').StringConverters.toKebabCase;

var payload = convertKeys({
    userName: 'Sam Axe',
    userId: 5462,
    clientId: 17
}, StringConverters.toKebabCase);

var requestBody = JSON.stringify(payload);
```

### StringConverters

Convert the case in a string to another case, e. g.
```js
'sentence case' => 'sentenceCase'
```

All string converters provided by OCake currently use [no-case](https://yarn.pm/no-case), which converts using a common intermediary. There are no source-target-pair specific replacers. Meaning that every conversion in fact first converts to sentence case before converting to the target case, e. g. when converting to snake case: `'unknownCase' -> 'unknown case' -> 'unknown_case'`. This has to be kept in mind when designing your app for roundtrip conversion. In that case you either have to be aware of the limitations or provide your own source-target specific replacers.

Known limitations are:

* Tall-man-case does not work roundtrip, because of ambiguity with camel case. (`'someTALLMANCASEkey' -> 'some tallmancase ekey' -> 'someTallmancaseEkey' -> 'some tallmancase ekey' -> 'someTALLMANCASekey' -> …`)
* Odd camel case is not preserved on roundtrip (`'XMLHttpRequest' -> 'xml http request' -> 'XmlHttpRequest'`)
* When converting keys that contain numbers, some cases cannot properly store subtle differences, e. g. (`'snake_case_1' -> 'snakeCase1' -> 'snake_case1'`)

**List of provided StringReplacers**

| Replacer             | Description                |
|:-------------------- |:-------------------------- |
| `toCamelCase()`      | alias for toLowerCamelCase |
| `toLowerCamelCase()` | e. g. `'theCakeIsFake'`    |
| `toUpperCamelCase()` | e. g. `'TheCakeIsFake'`    |
| `toKebabCase()`      | e. g. `'the-cake-is-fake'` |
| `toAngryKebabCase()` | e. g. `'THE-CAKE-IS-FAKE'` |
| `toSnakeCase()`      | e. g. `'the_cake_is_fake'` |
| `toAngrySnakeCase()` | e. g. `'THE_CAKE_IS_FAKE'` |
| `toSentenceCase()`   | e. g. `the cake is fake`   |
| `toTitleCase()`      | e. g. `'The Cake Is Fake'` |
| `toShoutCase()`      | e. g. `'THE CAKE IS FAKE'` |
| `toTallManCase()`    | e. g. `'theCAKEisFAKE'`    |

### ES2015+ imports with flow types

```js
// babel: env, stage-0, flow
import { convertKeys, StringConverters } from '@bitchcraft/ocake/src/Ocake';
import convertKeys from '@bitchcraft/ocake/src/convertKeys';
import StringConverters, { toCamelCase, … } from '@bitchcraft/ocake/src/StringConverters';
```

# Bundle size

Gzipped size (non-minified) is around 19KB, with 47% of that taken up by core-js. You can check out the [bundle analytics](./lib/es5-bundle-analytics.html) for the non-minified bundle.

# Help and feedback

Please file issues in [Github](https://github.com/@bitchcraft/ocake/issues)

# Contribute

We are open for [PRs](https://github.com/@bitchcraft/ocake/pulls). Please respect to the linting rules.

# License

Keyconst is free software und the BSD-3-Clause (see [LICENSE.md](./LICENSE.md)).

# Contributors

- [Josh Li](https://github.com/maddrag0n) (Maintainer)
