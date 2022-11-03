import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

export default function InputForm(props: any) {
    return (
        <FormControl>
            <FormLabel>{props?.title}</FormLabel>
            <Input required {...props?.register(props?.name)}/>
        </FormControl>
    );
}
