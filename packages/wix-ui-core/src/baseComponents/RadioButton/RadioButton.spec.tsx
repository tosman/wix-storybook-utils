import * as React from 'react';
import {radioButtonDriverFactory} from './RadioButton.driver';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {RadioButton} from './';

function createRadio(props = {}) {
  return <RadioButton data-hook='radio-spec' label={<span>Horsie</span>} icon={<span>🦄</span>} {...props}/>
}

describe('RadioButton', () => {
  const createDriver = createDriverFactory(radioButtonDriverFactory);

  it('renders to the screen', () => {
    const radio = createDriver(createRadio());

    expect(radio.exists()).toBeTruthy();
  });

  it('invokes callback for onChange', () => {
    const onChange = jest.fn();
    const radio = createDriver(createRadio({onChange}));

    radio.select();

    expect(onChange).toHaveBeenCalled();
  });

  it('is checked correctly', () => {
    const radio = createDriver(createRadio({checked: true}));

    expect(radio.isChecked()).toBeTruthy();
  });

  it('is focused correctly', () => {
    const radio = createDriver(createRadio({focused: true}));

    expect(radio.isFocused()).toBeTruthy();
  });

  it('is disabled correctly', () => {
    const radio = createDriver(createRadio({disabled: true}));

    expect(radio.isDisabled()).toBeTruthy();
  });

  it('is required correctly', () => {
    const radio = createDriver(createRadio({required: true}));

    expect(radio.isRequired()).toBeTruthy();
  });

  it('accepts correct value', () => {
    const radio = createDriver(createRadio({value: 'unicorn'}));

    expect(radio.value()).toEqual('unicorn');
  });

  it('accepts correct name', () => {
    const radio = createDriver(createRadio({name: 'unicorns'}));

    expect(radio.name()).toEqual('unicorns');
  });

  it('renders label correctly', () => {
    const radio = createDriver(createRadio());

    expect(radio.labelExists()).toBeTruthy();
  });

  it('renders icon correctly', () => {
    const radio = createDriver(createRadio());

    expect(radio.iconExists()).toBeTruthy();
  });
});