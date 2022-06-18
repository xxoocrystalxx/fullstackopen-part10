import React from 'react'
import { FlatList, StyleSheet, Pressable } from 'react-native'
import RepositoryItem from './RepositoryItem'
import theme from '../theme'
import useRepositories from '../../hooks/useRepositories'
import { Link } from 'react-router-native'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'
import ItemSeparator from '../ItemSeparator'
import Header from './Header'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundMain,
  },
})

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props

    return (
      <Header
        order={props.order}
        setOrder={props.setOrder}
        search={props.search}
        setSearch={props.setSearch}
      />
    )
  }

  render() {
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : []

    const renderItem = ({ item }) => (
      <Pressable>
        <Link to={`/${item.id}`}>
          <RepositoryItem item={item} />
        </Link>
      </Pressable>
    )

    return (
      <FlatList
        style={styles.container}
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.2}
      />
    )
  }
}

const RepositoryList = () => {
  const [order, setOrder] = useState()
  const [search, setSearch] = useState('')
  const [searchKeyword] = useDebounce(search, 500)
  const { repositories, fetchMore } = useRepositories({
    first: 3,
    order,
    searchKeyword,
  })

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      order={order}
      setOrder={setOrder}
      search={search}
      setSearch={setSearch}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
