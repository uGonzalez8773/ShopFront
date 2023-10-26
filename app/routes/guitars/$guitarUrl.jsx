import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "../../models/guitars.server"

export async function loader({params}){
    const { guitarUrl } = params
    const guitar = await getGuitar( guitarUrl )
    
    if(guitar.data.length === 0){
      throw new Response('', {
        status: 404,
        statusText: 'Theres no guitars like that'
      })
    }

    return guitar
}

export function meta({data}){

  if(!data){
    return{
      title: 'GuitarLA - No such guitar!',
      description: ' No guitar with that name'
    }
  }
  return [{
    title: `GuitarLA - ${data?.data[0]?.attributes?.name}`,
    description: `Guitars, description of the guitar ${data?.data[0]?.attributes?.name}`
  }]
}

function Guitar () {
  const guitar = useLoaderData()
  const {name, description, image, price} = guitar?.data[0]?.attributes?.name

  return (
    <div className="guitar">
      <img className="image" src={image?.data?.attributes?.url} alt={`guitar ${name}`} />

      <div className="content">
        <h3>{name}</h3>
        <p className="text">{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  )
}

export default Guitar