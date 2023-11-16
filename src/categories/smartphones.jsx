import UserContext from "../context/userContext"
import { useContext } from "react"

export default function Smartphone() {
    const {data} = useContext(UserContext)
  return (
    <div>
        hello world
      {console.log(data)}
    </div>
  )
}
