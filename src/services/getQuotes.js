export default function getQuotes({id}){
    const obj = {quote: "No Quote"}
    const apiLink = `https://www.breakingbadapi.com/api/quotes/${id}`
    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{                    
                    const data = response     
                    if(!data[0]){
                      
                        data.push(obj)
                    }
                   
                    let lista = []
                    lista.push(data)
                    lista = lista[0][0]
                   
                    console.log('esta es la quote', lista)
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

