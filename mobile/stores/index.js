import React, {createContext, useContext} from 'react'
import {useLocalStore} from 'mobx-react'
import createCounterStore from "./counter";

const context = createContext()

export const StoresProvider = ({ children }) => {
    const counterStore = useLocalStore(createCounterStore)

    return (
        <context.Provider value={{ counterStore }}>
            {children}
        </context.Provider>
    )
}

export const useStores = () => useContext(context)
