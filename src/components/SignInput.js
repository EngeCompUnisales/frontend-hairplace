import React from 'react';
import { InputArea, Input } from '../components/styles.js';

export default ({placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <Input
                placeholder={placeholder}
                placeholderTextColor="#000000"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}