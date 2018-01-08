# scss-mixins-spinners

Performant CSS+HTML spinners implemented as SCSS mixins. See [here](http://www.perspectivespace.com/scss-mixins-spinners/) for examples.

All animations are implemented using transform or opacity animations in
order that the browser need only perform compositing to update the page.

## Installation

Yarn:

```bash
yarn add scss-mixins-spinners
```

Npm:

```bash
npm install scss-mixins-spinners
```

## Usage

The spinner mixins are in individual files in the 
`scss-mixins-spinners/scss` directory in this package.
In your `scss` file, import the mixin file for the spinner you want to
create an instance of:

```scss
@import 'scss-mixins-spinners/scss/segmented-spinner.scss';
```

Now you can make use of the imported mixin to create a spinner
that is styled appropriately:

```scss
#my-spinner {
  @include segmented-spinner($color: green, $segments: 16);
}
```

You also need to create the appropriate HTML markup for the spinner.
As the above spinner is specified to have 16 segments, the markup
should look like the following:

```html
<div id='my-spinner'>
  # 16 span elements in the containing div:
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
```

Note that the spinners are styled to be centered within the containing element
(`div#my-spinner` in this case).

## Available Spinners

### Boxes Spinner

#### Import

```scss
@import 'scss-mixins-spinners/scss/boxes-spinner.scss';
```

#### Parameters

```scss
.some-spinner {
  @include boxes-spinner(
    $color: red,
    $width: 50px,
    $time: 1.5s,
    $animation-name: 'boxes-spinner-animation'
  );
}
```

- `$color` Required. The color of the boxes.

- `$width` Optional. The overall width of the spinner in pixels. The same value is used for the height of the spinner. Defaults to `50px`.

- `$time` Optional. The overall time for a single animation sequence, in seconds or milliseconds. Defaults to `1.5s`.

- `$animation-name` Optional. The name of the keyframes animation for this spinner instance. If you create multiple types of spinner, you will need to give them different animation names. Defaults to `'boxes-spinner-animation'`.

#### Required HTML Markup

Nine span elements contained in a div:

```html
<div class='some-spinner'>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
```

### Segmented Spinner

#### Import 

```scss
@import 'scss-mixins-spinners/scss/segmented-spinner.scss';
```

#### Parameters

```scss
.some-spinner {
  @include segmented-spinner(
    $color: red,
    $diameter: 50px,
    $segments: 16,
    $segmentWidth: 4px,
    $segmentHeight: 12px,
    $rounded: true,
    $time: .8s,
    $animation-name: 'segmented-spinner-animation',
    $min-opacity: 0.1,
    $max-opacity: 1
  );
}
```

- `$color` Required. The color of the boxes.

- `$diameter` Optional. The overall diameter of the spinner in pixels. Defaults to `50px`.

- `$segments` Optional. The number of segments in the spinner. Defaults to `16`.

- `$segmentWidth` Optional. The width of each segment in pixels. Defaults to `4px`.

- `$segmentHeight` Optional. The height of each segment in pixels. Defaults to `12px`.

- `$rounded` Optional. Whether the segments have rounded corners or not. Defaults to `true`.

- `$time` Optional. The overall time for a single animation sequence, in seconds or milliseconds. Defaults to `.8s`.

- `$animation-name` Optional. The name of the keyframes animation for this spinner instance. If you create multiple types of spinner, you will need to give them different animation names. Defaults to `'segmented-spinner-animation'`.

- `$min-opacity` Optional. The minimum opacity level for each segment during animation. Defaults to `0.1`.

- `$max-opacity` Optional. The maximum opacity level for each segment during animation. Defaults to `1`.

#### Required HTML Markup

A div containing a span element for each segment. Thus a spinner with 16 segments requires 16 span elements:

```html
<div class='some-spinner'>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
```

## Examples

See [here](http://www.perspectivespace.com/scss-mixins-spinners/) for
examples of the available spinners.

## Credits

The boxes spinner is one of the spinners in [spinkit](http://tobiasahlin.com/spinkit/).

## License

This package is licensed under the [MIT License](./LICENSE).