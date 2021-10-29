

export function ENV_VARIABLE(ENVNAME, envReturn){
    const jwt = process.env[ENVNAME];
    if(!jwt) return envReturn;
    return jwt;     
}
      

