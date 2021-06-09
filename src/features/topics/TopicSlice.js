import { createSlice } from '@reduxjs/toolkit'

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {},
    reducers: {
        addTopic: (state) => {state.topics.push({
            id: state.topics.id, 
            name: state.topics.name, 
            icon: state.topsics.icon, 
            quizIds: []
        })}
    }
})