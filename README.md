# react-native-google-recaptcha-v3

A simple minimal implementation of google recaptcha v3 in react-native


## Installation

yarn:

```
yarn add react-native-google-recaptcha-v3
```

npm:

```
npm i react-native-google-recaptcha-v3
```

install react-native-webview:

[react-native-webview](https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md)

## Usage

```
import ReactNativeRecaptchaV3 from 'react-native-google-recaptcha-v3';
```

```
<View style={{flex: 1}}>
 <ReactNativeRecaptchaV3
   onCheck={(key) => console.log(key)} 
   url={url}
   siteKey={sitkey} 
 />
</View>
```

## Documentation

### Props
| Name | Description | Default | Type |
|------------------|--------------------------------------------------------------------------|----------|---------|
| onCheck | function returning validation key | null | Func |
| siteKey | sitekey get from google | null | String |
| url | url that you registered your account | null | String |

## Contributing
Pull request are welcome i made this component because others that are avalible in npm are not working.

## Author
Adrian Warkocz

## License
[MIT](./LICENSE)