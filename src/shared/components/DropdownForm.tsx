import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    example: string,
    exampleRequired: string,
};

export default function DropdownForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <select defaultValue="test" {...register("example")}>
                <option value="">Some option</option>
                <option value="">Some option1</option>
                <option value="">Some option2</option>
                <option value="">Some option3</option>
                <option value="">Some option4</option>
                <option value="">Some option5</option>
                <option value="">Some option6</option>
            </select>

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("exampleRequired", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}
