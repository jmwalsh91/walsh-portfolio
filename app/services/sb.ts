import { createClient } from '@supabase/supabase-js'
import type {PostgrestResponse, PostgrestError} from '@supabase/supabase-js'
//Create Supabase client
const sbUrl = 'https://qkdyjypdpruelatqkwbh.supabase.co'
const sbKey = process.env.API_KEY
export const sbClient = createClient(sbUrl, sbKey as string)

/**Types and interfaces */
/**
 * shape of Blog Post in db
 */
export type Post = {
    id: number,
    created_at: string,
    posted_at?: string,
    post_title: string,
    post_text: string,
    tags: string[],
    card_image: string,
    views?: number
  }
  /**
   * Shape of project in db
   */
  export type Project = {
    id?: number,
    created_at?: string,
    project_name: string,
    card_image: string,
    card_text: string,
    mockup: string,
    description: string,
    stack_badges: string[],
    rich_text?: string,
    views?: number,
    live_url?: string,
    repo_url?: string,
  }
  /**
   * Types for Supabase responses
   */
    export type PostResolved = Post[]
    export type PostRejected = PostgrestError
    export type ProjectResolved = Project[]
    export type ProjectRejected = PostgrestError
/**************************
 * END INTERFACES AND TYPES
 ***************************/

    /** OBJECT W/ METHODS RE: SUPABASE/DB */
  export const sb = {
    /**
 * Get all posts
 * TODO: Paginate, accept currentUser as param
 * @returns {Promise<SupabaseClient>}
 */
 getAllPosts: async function getAllPosts(): Promise<PostResolved> {
    console.log('getallposts')
 const {data: posts, error} = await sbClient
 .from ('BlogPost')
 .select('*')

 console.log(posts)
//TODO: Error Handler
if (error) {
  console.log(error)
}
return posts !== null? posts : []
},
/**
 * Get a post by id
 * @param {string} id
 * @returns {Promise<SupabaseClient>}
 * @memberof sb
 */
getPostById: async function getPostById(id: string): Promise<PostResolved | PostRejected> {
    const {data: post, error} = await sbClient
    .from ('BlogPost')
    .select()
    .ilike('id', id)
   return post? post : error
},
getAllProjects: async function getAllProjects(): Promise<ProjectResolved | ProjectRejected> {
    const {data: projects, error} = await sbClient
    .from ('Projects')
    .select('*')
    console.log(projects, error)
    return projects? projects : error
},
getProjectByProjectName: async function getProjectByProjectName(project_name: string): Promise<ProjectResolved | ProjectRejected> {
    const {data: project, error} = await sbClient
    .from ('Projects')
    .select()
    .ilike('project_name', project_name)

    console.log(project, error)
    return project? project : error
}
  }
