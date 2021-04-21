// import Link from 'next/Link'
import Layout from '../components/Layout'

export default function aboutPage() {
  return (
    <Layout title="About inspireme">
      <h1>About Page</h1>
      <p>This is an app to find inspiration for every aspect of life</p>
      <p>Version: 1.0.0</p>
      {/* <Link href="/">Homes</Link> */}
    </Layout>
  )
}
