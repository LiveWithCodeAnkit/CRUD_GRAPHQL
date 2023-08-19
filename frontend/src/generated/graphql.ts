// import { GraphQLClient } from 'graphql-request';
// import { RequestInit } from 'graphql-request/dist/types.dom';
// import { useQuery, UseQueryOptions } from '@tanstack/react-query';
// export type Maybe<T> = T | null;
// export type InputMaybe<T> = Maybe<T>;
// export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
// export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
// export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
// export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
// export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

// function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
//   return async (): Promise<TData> => client.request({
//     document: query,
//     variables,
//     requestHeaders
//   });
// }
// /** All built-in and custom scalars, mapped to their actual values */
// export type Scalars = {
//   ID: { input: string; output: string; }
//   String: { input: string; output: string; }
//   Boolean: { input: boolean; output: boolean; }
//   Int: { input: number; output: number; }
//   Float: { input: number; output: number; }
// };

// export type Client = {
//   __typename?: 'Client';
//   email?: Maybe<Scalars['String']['output']>;
//   id?: Maybe<Scalars['ID']['output']>;
//   name?: Maybe<Scalars['String']['output']>;
//   phone?: Maybe<Scalars['String']['output']>;
// };

// export type Mutation = {
//   __typename?: 'Mutation';
//   addClient?: Maybe<Client>;
//   addProject?: Maybe<Project>;
//   deleteClient?: Maybe<Client>;
//   deleteProject?: Maybe<Project>;
//   updateProject?: Maybe<Project>;
// };


// export type MutationAddClientArgs = {
//   email: Scalars['String']['input'];
//   name: Scalars['String']['input'];
//   phone: Scalars['String']['input'];
// };


// export type MutationAddProjectArgs = {
//   clientId: Scalars['ID']['input'];
//   description: Scalars['String']['input'];
//   name: Scalars['String']['input'];
//   status?: InputMaybe<ProjectStatus>;
// };


// export type MutationDeleteClientArgs = {
//   id: Scalars['ID']['input'];
// };


// export type MutationDeleteProjectArgs = {
//   id: Scalars['ID']['input'];
// };


// export type MutationUpdateProjectArgs = {
//   description?: InputMaybe<Scalars['String']['input']>;
//   id: Scalars['ID']['input'];
//   name?: InputMaybe<Scalars['String']['input']>;
//   status?: InputMaybe<ProjectStatusUpdate>;
// };

// export type Project = {
//   __typename?: 'Project';
//   client?: Maybe<Client>;
//   description?: Maybe<Scalars['String']['output']>;
//   id?: Maybe<Scalars['ID']['output']>;
//   name?: Maybe<Scalars['String']['output']>;
//   status?: Maybe<Scalars['String']['output']>;
// };

// export enum ProjectStatus {
//   Completed = 'completed',
//   New = 'new',
//   Progress = 'progress'
// }

// export enum ProjectStatusUpdate {
//   Completed = 'completed',
//   New = 'new',
//   Progress = 'progress'
// }

// export type RootQueryType = {
//   __typename?: 'RootQueryType';
//   client?: Maybe<Client>;
//   clients?: Maybe<Array<Maybe<Client>>>;
//   project?: Maybe<Project>;
//   projects?: Maybe<Array<Maybe<Project>>>;
// };


// export type RootQueryTypeClientArgs = {
//   id?: InputMaybe<Scalars['ID']['input']>;
// };


// export type RootQueryTypeProjectArgs = {
//   id?: InputMaybe<Scalars['ID']['input']>;
// };

// export type AllClientListQueryVariables = Exact<{ [key: string]: never; }>;


// export type AllClientListQuery = { __typename?: 'RootQueryType', clients?: Array<{ __typename?: 'Client', id?: string | null, name?: string | null, email?: string | null, phone?: string | null } | null> | null };


// export const AllClientListDocument = `
//     query allClientList {
//   clients {
//     id
//     name
//     email
//     phone
//   }
// }
//     `;
// export const useAllClientListQuery = <
//       TData = AllClientListQuery,
//       TError = unknown
//     >(
//       client: GraphQLClient,
//       variables?: AllClientListQueryVariables,
//       options?: UseQueryOptions<AllClientListQuery, TError, TData>,
//       headers?: RequestInit['headers']
//     ) =>
//     useQuery<AllClientListQuery, TError, TData>(
//       variables === undefined ? ['allClientList'] : ['allClientList', variables],
//       fetcher<AllClientListQuery, AllClientListQueryVariables>(client, AllClientListDocument, variables, headers),
//       options
//     );