


export default function getCharacter(page,name,status){
   
    const estado = status ? status  : 'characters'
    const pagina = page ? page : 0
    
    const apiLink = `https://www.breakingbadapi.com/api/${estado}?limit=12&offset=${pagina.page*12}`

    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{
                    const data = response
                    const images = data.map((image)=>{
                        const {img,status,name,char_id} = image
                        return {img,status,name,char_id}

                    })
                  
                    return images
                })
}

