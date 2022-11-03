import React from 'react'
import { useForm, SubmitHandler, useFieldArray, Controller } from 'react-hook-form';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
  } from '@chakra-ui/react'

export default function InputForm(props: any) {

    return (
        <FormControl>
            <FormLabel>{props?.title}</FormLabel>
            {props?.fields.map((item:any, index:number) => {
                return (
                    <div key={item.id}>
                        <Input
                        {...props.register(`${props?.name}.${index}.instruments`, { required: true })}
                        />
                        <Flex>
                            <button type="button" onClick={() => props.append(index)}>
                            Append
                            </button>
                            <button type="button" onClick={() => props.remove(index)}>
                            Delete
                            </button>
                        </Flex>
                    </div>
                );
            })}
        </FormControl>
    );
}
