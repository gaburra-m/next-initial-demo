import { MainLayout } from '@/components/layouts/MainLayout'


export default function Home() {
  return (
    <MainLayout>
      <section className={'card'}>
        <h1 className={'title'}>Home Page</h1>
        <p className={'description'}>Get started by editing{" "}
          <code className={'code'}>pages/index.jsx</code>
        </p>
      </section>
    </MainLayout>
  )
}
