📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Department Search

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)


This component is to search for a product by your department


<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677035179/DEPARTMENT_hkc1mm.png">

## Configuration 

1. Import the Department Search app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.custom-department-search": "0.x"
  }
 ```
 
 2. Add the department-search block to the store-theme. for example:
```json
 {
  {
  "flex-layout.row#deparment-search-bar": {
    "title": "Custom Department Search Bar",
    "children": [
      "rich-text#deparment-search-bar",
      "department-search"
    ],
    "props": {
      "blockClass": "department__search--bar"
    }
  },
  "rich-text#deparment-search-bar": {
    "title": "Text Custom Department Search Bar",
    "props": {
      "textAlignment": "CENTER",
      "textPosition": "CENTER",
      "text": "custom department search",
      "blockClass": "text__department--search--bar"
    }
  }
}

}
   ```
|   Block name   | Description                                     |
| -------------- | ----------------------------------------------- |
| `department-search` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red) Top level block that must be declared in the `store-theme` block to render department search   |


## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|` select `|
|` options `|
|` container__select `|
|` container__content `|
|` container__search `|
|` loading `|
|` container__loading `|


<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
