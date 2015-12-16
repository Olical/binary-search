# binary-search

This is a binary search implementation in JavaScript that was born from a couple of [my blog posts][posts]. It focusses on heavy generative testing and benchmarks to make sure it works and runs fast.

## Usage

Install the package, `olical-binary-search`, and use it like this.

```javascript
import binarySearch from 'olical-binary-search'

const items = [10, 20, 30, 40, 50]

binarySearch(items, 30) // Yields: 2
binarySearch(items, 100) // Yields: -1
```

## License

This repository is released under [the unlicense][], feel free to do whatever you want. You can find the full license within the `UNLICENSE` file.

>This is free and unencumbered software released into the public domain.
>
>Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

[the unlicense]: http://unlicense.org/
[posts]: http://oli.me.uk/2014/12/17/revisiting-searching-javascript-arrays-with-a-binary-search/
