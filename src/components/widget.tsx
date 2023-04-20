import {useState} from 'react'
import Head from 'next/head'
import {FC} from 'react'

interface WidgetProps {
  pageName?: string
}

const Widget: FC<WidgetProps> = ({pageName}) => {
  const [active, setActive] = useState(false)

  if (active) {
    return (
      <>
        <Head>
          <title>You're browsing the {pageName} page</title>
        </Head>
        <div>
          <button onClick={() => setActive(false)}>Restore original title</button>
          Take a look at the title!
        </div>
      </>
    )
  }

  return (
    <>
      <div>
        <button onClick={() => setActive(true)}>Change page title</button>
      </div>
    </>
  )
}

export default Widget
