/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChild = /* GraphQL */ `
  mutation CreateChild(
    $input: CreateChildInput!
    $condition: ModelChildConditionInput
  ) {
    createChild(input: $input, condition: $condition) {
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
export const updateChild = /* GraphQL */ `
  mutation UpdateChild(
    $input: UpdateChildInput!
    $condition: ModelChildConditionInput
  ) {
    updateChild(input: $input, condition: $condition) {
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
export const deleteChild = /* GraphQL */ `
  mutation DeleteChild(
    $input: DeleteChildInput!
    $condition: ModelChildConditionInput
  ) {
    deleteChild(input: $input, condition: $condition) {
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
export const createParent = /* GraphQL */ `
  mutation CreateParent(
    $input: CreateParentInput!
    $condition: ModelParentConditionInput
  ) {
    createParent(input: $input, condition: $condition) {
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
export const updateParent = /* GraphQL */ `
  mutation UpdateParent(
    $input: UpdateParentInput!
    $condition: ModelParentConditionInput
  ) {
    updateParent(input: $input, condition: $condition) {
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
export const deleteParent = /* GraphQL */ `
  mutation DeleteParent(
    $input: DeleteParentInput!
    $condition: ModelParentConditionInput
  ) {
    deleteParent(input: $input, condition: $condition) {
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
