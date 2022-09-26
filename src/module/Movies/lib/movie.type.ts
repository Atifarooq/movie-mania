
export interface Movie {
    id: string,
    title: string,
    description: string,
    platform: string,
    category: string,
    releasedate: string,
    duration: string,
}
 export interface Movies {
     data: Movie[];
 }
 