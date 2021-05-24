


export default function getCharacter(page){
   

    const pagina = page ? page : 0
    
    const apiLink = `https://www.breakingbadapi.com/api/deaths?limit=8&offset=${pagina.page*8}`

    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{
                    const data = response
                    const deaths = data.map((image)=>{
                        const {death_id,death,responsible,season} = image
                        return {death_id,death,responsible,season}

                    })
                  
                    return deaths
                })
}

