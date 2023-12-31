import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchMoviesByGenres} from '../store';

export default function Selectgenere({ genres, type }) {
    const dispatch =useDispatch();
    return (
        <Select className='flex' onChange={(e)=>{
            dispatch(fetchMoviesByGenres({genre:e.target.value,type}))
        }}>
            {genres.map((genre) => {
                return (
                    <option value={genre.id} key={genre.id}>
                        {genre.name}
                    </option>
                );
            })}
        </Select>
    )
}


const Select = styled.select`
    margin-left: 5rem;
    cursor: pointer;
    font-size: 1.4rem;
    background-color: rgba(0,0,0,0.4);
    color: white;
`;