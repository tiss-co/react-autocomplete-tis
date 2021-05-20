# react-autocomplete-tis

> Autocomplete component for React

[![NPM](https://img.shields.io/npm/v/react-autocomplete-tis.svg)](https://www.npmjs.com/package/react-autocomplete-tis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![react-autocomplete-tis Banner](https://user-images.githubusercontent.com/76048512/119012045-e99ea800-b9aa-11eb-9c97-784cb6551327.gif)
![react-autocomplete-tis Banner](https://user-images.githubusercontent.com/76048512/119011035-e0f9a200-b9a9-11eb-89ab-4af2804bdad3.gif)

## Install

```bash
npm i react-autocomplete-tis
```

or

```bash
yarn add react-autocomplete-tis
```

## Usage

```jsx
import React, { useState } from 'react'

import { AutoComplete } from 'react-autocomplete-tis'
import 'react-autocomplete-tis/dist/index.css'

const App = () => {
  return (
    <AutoComplete
      className='AutoComplete'
      placeholder='Type OS name'
      options={['Windows', 'Mac OS', 'Linux']}
      onSelect={(item, index) => {}}
      roundedBorder={true}
      darkMode={false}
    />
  )
}
```

## License

MIT © [boof-tech](https://github.com/boof-tech)
