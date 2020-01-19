import React, {useEffect} from 'react'
import {View, Text, ActivityIndicator, FlatList} from 'react-native'
import {observer} from 'mobx-react'
import {useStores} from "../stores";

export default observer(function PeopleList() {
    const {peopleStore} = useStores()
    useEffect(() => {
        peopleStore.subscribeForPeople()
    }, [])

    if (peopleStore.loading)  return <ActivityIndicator />
    return (
        <View>
            <Text>People List</Text>
            <FlatList
                data={peopleStore.list}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.email}</Text>
                    </View>
                )}
            />
        </View>
    )
})
