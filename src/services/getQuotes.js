export default function getQuotes({id}){
   
    const apiLink = `https://www.breakingbadapi.com/api/quotes/${id}`
    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{                    
                    const data = response       
                    let lista = []
                    lista.push(response)
                    lista = lista[0][0]
                    console.log('params',lista)         
                    const{quote}= lista
                    
                    

                    console.log('inidividual',{quote})
                    return {quote}
                })
}


/**
 export default function getSingleCharacter({id}){
   
    const apiLink = `https://www.breakingbadapi.com/api/characters/${id}`
    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{                    
                    const data = response
                    const image = data.map((image)=>{
                        const {img,status,name,char_id} = image
                        return {img,status,name,char_id}
                    })

                    console.log('inidividual',image)
                    return {image}
                })
}


 */

