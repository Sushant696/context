import { useMyContext } from "../context/contextState"

export default function Home() {
  const data = useMyContext();
  return (
    <div>
      <h2>hello everyone my context data -- {data}</h2>
    </div>
  )
}
