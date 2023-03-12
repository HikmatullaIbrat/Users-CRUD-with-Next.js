import Head from 'next/head'
<<<<<<< HEAD
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
=======
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import  Table from '../components/table';
import { BiUserPlus } from "react-icons/bi";
import Form from '../components/form';
import { useState  } from 'react';
// const inter = Inter({ subsets: ['latin'] })

>>>>>>> 4a92e5b (add and delete forms added)


export default function Home() {
  const [visible, setVisible] = useState(false)
  // show addemployee form, if addEmployee button clicked or else don't show form
  const handler = () =>{
    setVisible(visible ? false:true)
  }
  return (
    <section>
      <Head>
        <title>Users CRUD</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
<<<<<<< HEAD
      <main className={styles.main}>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
=======
      <main >
          <h1 className="text-3xl font-bold py-10 md:text-3xl text-center">
            Users Management
          </h1>
          <div className="container mx-auto flex justify-between py-5 border-b">
            <div className="left flex gap-3">
              <button onClick={handler} className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800">
                Add Employee <BiUserPlus></BiUserPlus>
              </button>
            </div>
>>>>>>> 4a92e5b (add and delete forms added)
          </div>
          {/* form */}
          <div className="container mx-auto py-5">
            {visible ? <Form> </Form> : <></>}
          </div>
          {/* table */}
          <div className="container mx-auto">
            <Table>

            </Table>
          </div>
      </main>
    </section>
  )
}
