# GraphQL Client

## 1. Penjelasan

Cara untuk menerapkan graphQL pada react adalah dengan menggunakan Apollo client.

## 2. Mengapa Menggunakan Apollo Client

### 2.1. Mempersingkat Pemanggilan Query GraphQL

Untuk melakukan query ke graphql server, maka kita harus mengirim request menggunakan method POST, serta memberikan body berupa query graphQL. Hal ini dapat dilakukan secara otomatis apabila kita menggunakan apollo client

### 2.2. Handle Loading dan Error dengan Mudah

Dengan menggunakan component `<Query />`, kita tidak perlu menghandle loading dan error state secara manual.

## 3. Cara Menggunakan Apollo Client

### 3.1. Menginstall Apollo Client

```bash
$ npm install graphql apollo-boost react-apollo graphql-tag
```

### 3.2. Membuat Object Apollo Client

```javascript
// App.js

import React, { Component } from 'react'
// import apollo client
import ApolloClient from 'apollo-boost'

// membuat apollo client
const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

class App extends Component {
  render() {
    return <div>Hello World!</div>
  }
}

export default App
```

### 3.3. Menerapkan Apollo Provider

```javascript
// App.js

import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
// import apollo provider
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

class App extends Component {
  render() {
    return (
      // menerapkan apollo provider
      <ApolloProvider client={client}>
        <div>Hello World!</div>
      </ApolloProvider>
    )
  }
}

export default App
```

### 3.4. Melakukan Query

```javascript
// App.js

import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
// import query component
import { ApolloProvider, Query } from 'react-apollo'
// import query helper
import gql from 'graphql-tag'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

// membuat query
const query = gql`
  {
    recipes {
      id
      title
    }
  }
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Query query={query}>
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>
            if (error) return <p>Something when wrong</p>
            return (
              <ul>
                {data.recipes.map(({ id, title }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
            )
          }}
        </Query>
      </ApolloProvider>
    )
  }
}

export default App
```
