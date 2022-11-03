import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";
import Song from "../../model/song.model";

function Homepage() {
    const GET_SONGS = loader('../../graphql/song/get-songs.gql')
    const { loading, error, data } = useQuery(GET_SONGS);
    console.log(data);

    const songs = data?.songs.map((song: Song) => {
        return (<div key={song.title}>
            <h1>{song.title}</h1>
            <ul>
                <li key={song.bpm}>{song.bpm}</li>
                {song.instruments.map((instr) => (<li key={instr}>{instr}</li>))}
                {song.sections.map((section) => (<li key={section}>{section}</li>))}
            </ul>
        </div>)
    });
    
    return (
        <div>
            {songs ? songs: ''}
        </div>
    )
}

export default Homepage;