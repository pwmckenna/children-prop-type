# children-prop-type

http://stackoverflow.com/a/42122662

## usage
```es6
import children from 'children-prop-type';
class MyComponent from Component {
  static propTypes = {
    children: children(PropTypes.node) 
  };
  ...
}
```

Alternatively combine with `element-is-prop-type` to specify the actually components that are passed in as children.
