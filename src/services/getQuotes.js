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
                   
                    const{quote}= lista
                    
                    

                    return {quote}
                })
}

