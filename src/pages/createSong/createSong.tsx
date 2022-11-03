import { useMutation, useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import { useFieldArray, useForm } from "react-hook-form";
import DropdownForm from "../../shared/components/DropdownForm";
import InputForm from "../../shared/components/InputForm";
import InputFormFieldArray from "../../shared/components/InputFormFieldArray";

function CreateSong() {
    const CREATE_SONG = loader('../../graphql/song/create-song.gql')
    
    const [ createSong ,{ data: songData, loading: songLoading, error: songError} ] = useMutation(CREATE_SONG);
    function createSongFn() {
      console.log(createSong({variables: { createSongInput: {
        title: 'What a Beautiful Name',
        bpm: 70,
        instruments: ['Bass', 'Acoustic', 'EG'],
        sections: ['V1', 'V2'],
      }}})
      );
    }
    
    const { register, control, handleSubmit, watch, formState: { errors } } = useForm(
        {
            defaultValues: {
                instruments: [{instruments: ''}],
                sections: [{sections: ''}]
            }
        }
    );
    const {
        fields: fieldsInstr,
        append: appendInstr,
        prepend: prependInstr,
        remove: removeInstr,
        swap: swapInstr,
        move: moveInstr,
        insert: insertInstr,
        replace: replaceInstr
      } = useFieldArray({
        control,
        name: 'instruments'
      });
      const {
        fields: fieldsSection,
        append: appendSection,
        prepend: prependSection,
        remove: removeSection,
        swap: swapSection,
        move: moveSection,
        insert: insertSection,
        replace: replaceSection
     } = useFieldArray({
        control,
        name: 'sections'
      });

    const onSubmit = (data:any) => console.log(data, ' hello?');

    return (
        <div>
            {/* <DropdownForm></DropdownForm> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputForm title="Song Title" name="title" register={register}></InputForm>
                <InputForm title="Song BPM" name="bpm" register={register}></InputForm>
                <InputFormFieldArray
                    fields={fieldsInstr}
                    append={appendInstr}
                    remove={removeInstr}
                    control={control}
                    title="Instrument"
                    name="instruments"
                    register={register}
                >
                </InputFormFieldArray>
                <InputFormFieldArray
                    fields={fieldsSection}
                    append={appendSection}
                    remove={removeSection}
                    control={control}
                    title="Sections"
                    name="sections"
                    register={register}
                >
                </InputFormFieldArray>
                <button type="submit" onClick={() => createSongFn()}>create song</button>
            </form>
        </div>
    );
}

export default CreateSong;