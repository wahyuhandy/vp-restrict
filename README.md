# Viewport Restrict Library (vp-restrict-lib)

This library created to restrict some viewport or orientation with overlay.

## Getting started

Install the npm package with command:
```
npm i vp-restrict-lib --save
```

## How to use

### Code

Import the `ViewportRestrict` to your code
```jsx
import ViewportRestrict from 'vp-restrict-lib';

class App extends Component {
    render() {
        return (
            <ViewportRestrict type="landscape" />
        );
    }
}
```

### Props

| Props     | Type      | Default                                                                                                           | Definition                              |
|-----------|-----------|-------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| text      | String    | `Silahkan buka di smartphone kamu atau putar smartphone kamu ke posisi vertical untuk visual yang lebih baik.`    | Text to display when overlay is showing |
| type      | String    | `portrait/landscape/desktop_landscape`                                                                            | Viewport or orientation to restrict     |

## License

[MIT](https://github.com/braposo/react-text-loop/blob/master/LICENSE)