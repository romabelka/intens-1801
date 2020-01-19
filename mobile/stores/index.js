import React, {createContext, useContext} from 'react'
import {useLocalStore} from 'mobx-react'
import {configure} from 'mobx'
import createCounterStore from "./counter";
import createPeopleStore from "./people";

/*
configure({
    enforceActions: 'always'
})
*/

const context = createContext()

export const StoresProvider = ({ children }) => {
    const counterStore = useLocalStore(createCounterStore)
    const peopleStore = useLocalStore(createPeopleStore)

    return (
        <context.Provider value={{ counterStore, peopleStore }}>
            {children}
        </context.Provider>
    )
}

export const useStores = () => useContext(context)
