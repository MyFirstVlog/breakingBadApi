


export default function getCharacter(){
    const apiLink = "https://www.breakingbadapi.com/api/characters?limit=12&offset=0"

    return fetch(apiLink)
            .then(res => res.json())
            .then(response =>{
                    const data = response
                    const images = data.map((image)=>{
                        const {img,status,name,char_id} = image
                        return {img,status,name,char_id}

                    })
                    console.log('images',images)
                    return images
                })
}

