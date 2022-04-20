import fsp from 'fs/promises'
export const getJsonFile=(filePath:string)=>{
    return fsp.readFile(filePath)
}