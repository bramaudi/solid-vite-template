import { Component } from "solid-js"
import { useParams } from "solid-app-router"

const PostId: Component = () => {
  const params = useParams()
  return (
    <div>
      <p>
        This is post page with router context also dynamically import.
      </p>
      <pre>
        <code>{JSON.stringify(params.id)}</code>
      </pre>
    </div>
  )
}

export default PostId