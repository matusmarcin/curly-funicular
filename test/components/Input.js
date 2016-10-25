import React from 'react';
import TestUtils from 'react-addons-test-utils' 
import assert from 'assert';
import 'babel-polyfill'

import Input from '../../src/components/Input';

describe('Input component', function(){
  before('render and locate element', function() {
    // nothing here
  });

  it('<input> might have a test written one day', function() {
    assert(true);
  });
  //   let renderedComponent = TestUtils.renderIntoDocument(
  //     <Input ref="test" />
  //   );

  //   // Searching for <input> tag within rendered React component
  //   // Throws an exception if not found
  //   let inputComponent = TestUtils.findRenderedDOMComponentWithTag(
  //     renderedComponent,
  //     'input'
  //   );

  //   this.inputElement = inputComponent.getDOMNode();
  // });

  // it('<input> should be of type "text"', function() {
  //   assert(this.inputElement.getAttribute('type') === 'text');
  // });

  // it('<input> should not be checked', function() {
  //   assert(this.inputElement.checked === false);
  // });
});