import React from 'react';
import styles, {
  TextInputContainer,
  Label,
  InputWrapper,
  RightComponentWrapper,
} from './styles';
import {ReturnKeyTypeOptions, TextInput as RNTextInput} from 'react-native';

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  secureTextEntry?: boolean;
  RightComponent?: JSX.Element;
  onEndEditing?: () => void | null;
  returnKeyType?: ReturnKeyTypeOptions;
  testID?: string;
}

export const TextInput = ({
  label,
  value,
  onChange,
  secureTextEntry = false,
  RightComponent,
  onEndEditing,
  returnKeyType = 'default',
  testID = 'textInput',
}: TextInputProps) => (
  <TextInputContainer>
    <InputWrapper>
      <Label>{label}</Label>
      <RNTextInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
        onEndEditing={onEndEditing && onEndEditing}
        returnKeyType={returnKeyType}
        style={styles.input}
        testID={testID}
      />
    </InputWrapper>
    {!!RightComponent && (
      <RightComponentWrapper testID="textInputRightComponent">
        {RightComponent}
      </RightComponentWrapper>
    )}
  </TextInputContainer>
);
