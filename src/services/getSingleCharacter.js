export default function getSingleCharacter({id}){
   
    const apiLink = `https://www.breakingbadapi.com/api/characters/${id}`
    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{                    
                    const data = response       
                    let lista = []
                    lista.push(response)
                    lista = lista[0][0]
                    
                    const{char_id,name,status,img}= lista
                    
                    

                    return {char_id,name,status,img}
                })
}


