export interface userInterface {
     username : string,
     password : string,
     email? : string
}

export interface contextInterface {
    data :{ loggedin : boolean, user : userInterface | null, message : string}
    actions : {
       login? : ({username , password} : userInterface ) => void ,
       logup? : (user : userInterface) => void,
       logout? : () => void
    }
 }

 