/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChild = /* GraphQL */ `
  subscription OnCreateChild {
    onCreateChild {
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
export const onUpdateChild = /* GraphQL */ `
  subscription OnUpdateChild {
    onUpdateChild {
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
export const onDeleteChild = /* GraphQL */ `
  subscription OnDeleteChild {
    onDeleteChild {
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
export const onCreateParent = /* GraphQL */ `
  subscription OnCreateParent {
    onCreateParent {
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
export const onUpdateParent = /* GraphQL */ `
  subscription OnUpdateParent {
    onUpdateParent {
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
export const onDeleteParent = /* GraphQL */ `
  subscription OnDeleteParent {
    onDeleteParent {
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
