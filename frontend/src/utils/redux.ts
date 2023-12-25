// TO DO: remove all ts-ignore

import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

export const addAsyncThunkHandlers = <A, B, C>(builder: ActionReducerMapBuilder<A>, getPosts: ReturnType<typeof createAsyncThunk<B, C>>) => {
    const actionName = getPosts.typePrefix.split('/')[1];

    return builder
        .addCase(getPosts.pending.type, <S>(state: S) => {
            // @ts-ignore
            state[actionName] = requestPending(state[actionName]?.wasCalled);
        })
        .addCase(getPosts.fulfilled.type, <S, A>(state: S, action: A) => {
            // @ts-ignore
            state[actionName] = requestSuccess(action.payload);
        })
        .addCase(getPosts.rejected.type, <S, A>(state: S, action: A) => {
            // @ts-ignore
            state[actionName] = requestFailed(action.payload.response.data, action.payload.response.status);
        });
};

export const composeBuilder = <A>(builder: ActionReducerMapBuilder<A>, funcs: Array<ReturnType<typeof createAsyncThunk<any, any>>>) => {
    let result = builder;

    funcs.forEach(func => {
        result = addAsyncThunkHandlers(result, func);
    });

    return result;
};
