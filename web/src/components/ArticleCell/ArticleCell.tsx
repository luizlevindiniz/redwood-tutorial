import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Article from '../Article/Article'

export const QUERY: TypedDocumentNode<
  FindArticleQuery,
  FindArticleQueryVariables
> = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

interface Props
  extends CellSuccessProps<FindArticleQuery, FindArticleQueryVariables> {
  rand: number
  id: number
}

export const Success = ({ article, id, rand }: Props) => {
  return (
    <div>
      <p>Article ID: {id}</p>
      <p>Random number: {rand}</p>
      <Article article={article} />
    </div>
  )
}
