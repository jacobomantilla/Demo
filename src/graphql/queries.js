/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChild = /* GraphQL */ `
  query GetChild($id: ID!) {
    getChild(id: $id) {
      id
      name
      allergies
      parent {
        id
        name
        child {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      parentChildId
    }
  }
`;
export const listChildren = /* GraphQL */ `
  query ListChildren(
    $filter: ModelChildFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildren(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        allergies
        parent {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        parentChildId
      }
      nextToken
    }
  }
`;
export const getParent = /* GraphQL */ `
  query GetParent($id: ID!) {
    getParent(id: $id) {
      id
      name
      child {
        items {
          id
          name
          allergies
          createdAt
          updatedAt
          parentChildId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listParents = /* GraphQL */ `
  query ListParents(
    $filter: ModelParentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        child {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
