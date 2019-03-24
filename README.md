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
            <ViewportRestrict 
                type="desktop_landscape" 
                image={require('./test.jpg')}
                animation={true}
                animationSpeed={1000}
                backgroundColor="rgba(9, 18, 34, 1)"
            />
        );
    }
}
```

### Props
| Props             | Type      | Parameters                             | Definition                              |
|-------------------|-----------|----------------------------------------|-----------------------------------------|
| type `(Required)` | String    | `portrait/landscape/desktop_landscape` | Viewport or orientation to restrict      |
| image             | node/URL  | `require('./img/scape.png')`           | Image to show on overlay. This could be node directory or image url.     |
| animation         | Boolean   | `true`                                 | Toggle Animation     |
| animationSpeed    | Number    | `1500`                                 | Change Rotating Animation Speed     |
| backgroundColor   | String    | `rgba(9, 18, 34, 1)`                   | Change Background Color. Could be RGBA code or Hex Code  |
| text              | String    | `Silahkan buka di smartphone kamu atau putar smartphone kamu ke posisi vertical untuk visual yang lebih baik.`    | Text to display when overlay is showing |

## To Do
- Custom Animation
- Custom Breakpoint

## License
[MIT](https://github.com/braposo/react-text-loop/blob/master/LICENSE)