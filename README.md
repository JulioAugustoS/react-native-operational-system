# OS in React Native

Node's [os](https://nodejs.org/api/os.html) API in React Native

## Install

- Create a new react-native project. [Check react-native getting started](http://facebook.github.io/react-native/docs/getting-started.html#content)

- In your project dir:

```
npm install react-native-operational-system --save

or

yarn add react-native-operational-system
```

## Link in the native dependency

**For iOS:**

```
cd ios && pod install
```

**_Step 3 Profit_**

## Usage

### package.json

_only if you want to write require('os') in your javascript_

```json
{
  "react-native": {
    "os": "react-native-operational_system"
  }
}
```

## Contributors

[Julio Sousa](https://github.com/JulioAugustoS)

PR's welcome!
