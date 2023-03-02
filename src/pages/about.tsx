import { DarkLayout } from '@/layouts/DarkLayout'
import { MainLayout } from '@/layouts/MainLayout'

export default function About() {

  return(
    <>
      <h1>About page</h1>
    </>
  )
}

About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>  
    </MainLayout>
  )
}