import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { Searchbar } from 'react-native-paper'

const Header = ({ order, setOrder, search, setSearch }) => {
  const onChangeSearch = (query) => setSearch(query)
  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={search}
      />
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) => setOrder(itemValue)}
      >
        <Picker.Item label="Latest repositories" value="LATEST" />
        <Picker.Item label="Highest rated repositories" value="HIGHEST" />
        <Picker.Item label="Lowest rated repositories" value="LOWEST" />
      </Picker>
    </>
  )
}

export default Header
